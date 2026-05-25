using System;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Windows.Forms;

internal static class Program
{
    [STAThread]
    private static void Main()
    {
        Application.EnableVisualStyles();
        Application.SetCompatibleTextRenderingDefault(false);
        Application.Run(new LocalhostPanel());
    }
}

internal sealed class LocalhostPanel : Form
{
    private readonly string root;
    private readonly string nodePidFile;
    private readonly string readyFile;
    private readonly string startScript;
    private readonly string stopScript;
    private readonly Button toggleButton;
    private readonly Timer timer;
    private Process pendingProcess;
    private string pendingAction = "";

    public LocalhostPanel()
    {
        root = AppDomain.CurrentDomain.BaseDirectory;
        nodePidFile = Path.Combine(root, ".localhost.node.pid");
        readyFile = Path.Combine(root, ".localhost.ready");
        startScript = Path.Combine(root, "start-localhost.ps1");
        stopScript = Path.Combine(root, "stop-localhost.ps1");

        Text = "Indonesio Total - Localhost";
        StartPosition = FormStartPosition.CenterScreen;
        ClientSize = new Size(372, 150);
        FormBorderStyle = FormBorderStyle.FixedDialog;
        MaximizeBox = false;
        MinimizeBox = true;
        BackColor = Color.FromArgb(250, 250, 250);

        toggleButton = new Button
        {
            Font = new Font("Segoe UI", 16, FontStyle.Bold),
            Location = new Point(18, 18),
            Size = new Size(336, 114),
            FlatStyle = FlatStyle.Flat,
            ForeColor = Color.White
        };
        toggleButton.FlatAppearance.BorderSize = 0;
        toggleButton.Click += HandleToggleClick;
        Controls.Add(toggleButton);

        timer = new Timer { Interval = 250 };
        timer.Tick += HandleTimerTick;
        timer.Start();

        UpdateUi();
    }

    private bool IsLocalhostActive()
    {
        if (!File.Exists(readyFile) || !File.Exists(nodePidFile))
        {
            return false;
        }

        int processId;
        try
        {
            if (!int.TryParse(File.ReadAllText(nodePidFile).Trim(), out processId))
            {
                return false;
            }

            using (Process process = Process.GetProcessById(processId))
            {
                return !process.HasExited;
            }
        }
        catch
        {
            return false;
        }
    }

    private void HandleToggleClick(object sender, EventArgs e)
    {
        toggleButton.Enabled = false;
        UseWaitCursor = true;

        try
        {
            if (IsLocalhostActive())
            {
                pendingAction = "stop";
                BeginAction(stopScript);
            }
            else
            {
                pendingAction = "start";
                BeginAction(startScript);
            }
        }
        catch (Exception exception)
        {
            pendingAction = "";
            UseWaitCursor = false;
            toggleButton.Enabled = true;
            MessageBox.Show(
                "No se pudo cambiar el estado de localhost.\r\n\r\n" + exception.Message,
                "Error de localhost",
                MessageBoxButtons.OK,
                MessageBoxIcon.Error);
        }

        UpdateUi();
    }

    private void BeginAction(string scriptPath)
    {
        if (!File.Exists(scriptPath))
        {
            throw new FileNotFoundException("No encuentro el script necesario.", scriptPath);
        }

        ProcessStartInfo info = new ProcessStartInfo
        {
            FileName = "powershell.exe",
            Arguments = "-NoProfile -ExecutionPolicy Bypass -File \"" + scriptPath.Replace("\"", "\\\"") + "\"",
            WorkingDirectory = root,
            UseShellExecute = false,
            CreateNoWindow = true,
            RedirectStandardOutput = true,
            RedirectStandardError = true
        };

        pendingProcess = Process.Start(info);
        if (pendingProcess == null)
        {
            throw new InvalidOperationException("No se pudo iniciar la accion.");
        }
    }

    private void HandleTimerTick(object sender, EventArgs e)
    {
        CompleteAction();
        UpdateUi();
    }

    private void CompleteAction()
    {
        if (pendingProcess == null || !pendingProcess.HasExited)
        {
            return;
        }

        string output = pendingProcess.StandardOutput.ReadToEnd();
        string errorOutput = pendingProcess.StandardError.ReadToEnd();
        int exitCode = pendingProcess.ExitCode;
        pendingProcess.Dispose();
        pendingProcess = null;
        pendingAction = "";
        UseWaitCursor = false;
        toggleButton.Enabled = true;

        if (exitCode != 0)
        {
            string reason = string.IsNullOrWhiteSpace(errorOutput) ? output : errorOutput;
            if (string.IsNullOrWhiteSpace(reason))
            {
                reason = "La accion no se pudo completar.";
            }

            MessageBox.Show(
                "No se pudo cambiar el estado de localhost.\r\n\r\n" + reason.Trim(),
                "Error de localhost",
                MessageBoxButtons.OK,
                MessageBoxIcon.Error);
        }
    }

    private void UpdateUi()
    {
        if (pendingProcess != null && !pendingProcess.HasExited)
        {
            if (pendingAction == "start")
            {
                toggleButton.Text = "INICIANDO...";
                toggleButton.BackColor = Color.FromArgb(29, 126, 77);
            }
            else
            {
                toggleButton.Text = "APAGANDO...";
                toggleButton.BackColor = Color.FromArgb(195, 53, 57);
            }
            return;
        }

        if (IsLocalhostActive())
        {
            toggleButton.Text = "APAGAR LOCALHOST\r\nActivo";
            toggleButton.BackColor = Color.FromArgb(195, 53, 57);
        }
        else
        {
            toggleButton.Text = "INICIAR LOCALHOST\r\nApagado";
            toggleButton.BackColor = Color.FromArgb(29, 126, 77);
        }
    }

    protected override void OnFormClosed(FormClosedEventArgs e)
    {
        timer.Stop();
        timer.Dispose();
        if (pendingProcess != null)
        {
            pendingProcess.Dispose();
        }
        base.OnFormClosed(e);
    }
}
