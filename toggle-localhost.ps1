$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$PidFile = Join-Path $Root ".localhost.pid"
$NodePidFile = Join-Path $Root ".localhost.node.pid"
$Port = if ($env:PORT) { $env:PORT } else { "5173" }

function Test-Health {
  try {
    $response = Invoke-WebRequest -Uri "http://127.0.0.1:$Port/health" -UseBasicParsing -TimeoutSec 1
    $health = $response.Content | ConvertFrom-Json
    return ($response.StatusCode -eq 200) -and ($health.app -eq "indonesio-total")
  } catch {
    return $false
  }
}

function Test-PidFile {
  param([string]$Path)
  if (!(Test-Path $Path)) { return $false }
  $ExistingPid = [string](Get-Content -LiteralPath $Path -Raw -ErrorAction SilentlyContinue)
  $ExistingPid = $ExistingPid.Trim()
  $ParsedPid = 0
  return $ExistingPid -and [int]::TryParse($ExistingPid, [ref]$ParsedPid) -and (Get-Process -Id $ParsedPid -ErrorAction SilentlyContinue)
}

if ((Test-Health) -or (Test-PidFile $PidFile) -or (Test-PidFile $NodePidFile)) {
  & (Join-Path $Root "stop-localhost.ps1")
  exit 0
}

& (Join-Path $Root "start-localhost.ps1")
