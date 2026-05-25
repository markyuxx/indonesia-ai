$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$PidFile = Join-Path $Root ".localhost.pid"
$NodePidFile = Join-Path $Root ".localhost.node.pid"
$ReadyFile = Join-Path $Root ".localhost.ready"
$Port = if ($env:PORT) { [int]$env:PORT } else { 5173 }

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

function Get-PortOwners {
  try {
    return @(Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue | Select-Object -ExpandProperty OwningProcess -Unique)
  } catch {
    return @()
  }
}

function Test-Localhost {
  try {
    $Response = Invoke-WebRequest -Uri "http://127.0.0.1:$Port/health" -UseBasicParsing -TimeoutSec 1
    $Health = $Response.Content | ConvertFrom-Json
    return ($Response.StatusCode -eq 200) -and ($Health.app -eq "indonesio-total")
  } catch {
    return $false
  }
}

$Targets = @()
$PidA = Get-LivePid $PidFile
$PidB = Get-LivePid $NodePidFile
if ($PidA) { $Targets += $PidA }
if ($PidB) { $Targets += $PidB }
if (Test-Localhost) {
  $Targets += Get-PortOwners
}
$Targets = @($Targets | Where-Object { $_ } | Select-Object -Unique)

foreach ($ProcessId in $Targets) {
  Stop-Process -Id $ProcessId -Force -ErrorAction SilentlyContinue
}

Remove-Item -LiteralPath $PidFile -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath $NodePidFile -Force -ErrorAction SilentlyContinue
Remove-Item -LiteralPath $ReadyFile -Force -ErrorAction SilentlyContinue

if ($Targets.Count -gt 0) {
  Write-Host "Localhost desactivado en el puerto $Port."
} else {
  Write-Host "Localhost ya estaba apagado."
}
