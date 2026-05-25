$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$PidFile = Join-Path $Root ".localhost.pid"
$NodePidFile = Join-Path $Root ".localhost.node.pid"
$ReadyFile = Join-Path $Root ".localhost.ready"
$Server = Join-Path $Root "server.js"
$Port = if ($env:PORT) { [int]$env:PORT } else { 5173 }
$Url = "http://localhost:$Port/"

function Test-Localhost {
  try {
    $Response = Invoke-WebRequest -Uri "http://127.0.0.1:$Port/health" -UseBasicParsing -TimeoutSec 1
    $Health = $Response.Content | ConvertFrom-Json
    return ($Response.StatusCode -eq 200) -and ($Health.app -eq "indonesio-total")
  } catch {
    return $false
  }
}

function Get-LivePid {
  param([string]$Path)
  if (!(Test-Path -LiteralPath $Path)) { return $null }
  $Value = [string](Get-Content -LiteralPath $Path -Raw -ErrorAction SilentlyContinue)
  $Value = $Value.Trim()
  $ParsedPid = 0
  if ($Value -and [int]::TryParse($Value, [ref]$ParsedPid) -and (Get-Process -Id $ParsedPid -ErrorAction SilentlyContinue)) {
    return $ParsedPid
  }
  return $null
}

function Get-NodePath {
  $BundledNode = Join-Path $env:USERPROFILE ".cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
  if (Test-Path -LiteralPath $BundledNode) { return $BundledNode }
  $SystemNode = Get-Command node -ErrorAction SilentlyContinue
  if ($SystemNode) { return $SystemNode.Source }
  return $null
}

function Clear-StaleMarkers {
  if (!(Get-LivePid $PidFile)) { Remove-Item -LiteralPath $PidFile -Force -ErrorAction SilentlyContinue }
  if (!(Get-LivePid $NodePidFile)) { Remove-Item -LiteralPath $NodePidFile -Force -ErrorAction SilentlyContinue }
  if (!(Test-Localhost)) { Remove-Item -LiteralPath $ReadyFile -Force -ErrorAction SilentlyContinue }
}

if (Test-Localhost) {
  Write-Host "Localhost ya esta activo: $Url"
  exit 0
}

Clear-StaleMarkers
try {
  $PortBusy = @(Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue).Count -gt 0
} catch {
  $PortBusy = $false
}
if ($PortBusy) {
  Write-Error "El puerto $Port esta ocupado por otra aplicacion."
  exit 1
}

$Node = Get-NodePath
if (!$Node) {
  Write-Error "No encuentro Node.js para iniciar localhost."
  exit 1
}

$Info = New-Object System.Diagnostics.ProcessStartInfo
$Info.FileName = $Node
$Info.Arguments = '"' + $Server + '" ' + $Port
$Info.WorkingDirectory = $Root
$Info.UseShellExecute = $true
$Info.WindowStyle = [System.Diagnostics.ProcessWindowStyle]::Hidden
$Process = [System.Diagnostics.Process]::Start($Info)
if (!$Process) {
  Write-Error "No se pudo iniciar el servidor local."
  exit 1
}
Set-Content -LiteralPath $PidFile -Value $Process.Id -Encoding ASCII

for ($i = 0; $i -lt 24; $i++) {
  Start-Sleep -Milliseconds 250
  if (Test-Localhost) {
    Write-Host "Localhost activado: $Url"
    exit 0
  }
}

Write-Error "El proceso arranco, pero localhost no responde en $Url"
exit 1
