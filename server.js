const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || process.argv[2] || 5173);
const readyFile = path.join(root, ".localhost.ready");
const nodePidFile = path.join(root, ".localhost.node.pid");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function send(res, status, body, type = "text/plain; charset=utf-8") {
  res.writeHead(status, {
    "Content-Type": type,
    "Cache-Control": "no-store"
  });
  res.end(body);
}

try {
  fs.writeFileSync(nodePidFile, String(process.pid));
} catch {
  // The stop script can still find the process by port if this marker fails.
}

function cleanup() {
  for (const file of [readyFile, nodePidFile]) {
    try {
      fs.unlinkSync(file);
    } catch {
      // Marker cleanup is best effort.
    }
  }
}

process.on("exit", cleanup);
process.on("SIGINT", () => {
  cleanup();
  process.exit(0);
});
process.on("SIGTERM", () => {
  cleanup();
  process.exit(0);
});

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${port}`);

  if (url.pathname === "/health") {
    return send(res, 200, JSON.stringify({ ok: true, app: "indonesio-total", port }), "application/json; charset=utf-8");
  }

  const decodedPath = decodeURIComponent(url.pathname);
  const requested = decodedPath === "/" ? "/index.html" : decodedPath;
  const filePath = path.normalize(path.join(root, requested));

  if (!filePath.startsWith(root)) {
    return send(res, 403, "Forbidden");
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      return send(res, 404, "Not found");
    }
    const ext = path.extname(filePath).toLowerCase();
    send(res, 200, data, mimeTypes[ext] || "application/octet-stream");
  });
});

server.listen(port, "127.0.0.1", () => {
  try {
    fs.writeFileSync(readyFile, `http://localhost:${port}`);
  } catch {
    // The health endpoint is the source of truth if this marker cannot be written.
  }
});

server.on("error", () => {
  cleanup();
});

module.exports = server;
