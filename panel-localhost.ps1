$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$NodePidFile = Join-Path $Root ".localhost.node.pid"
$ReadyFile = Join-Path $Root ".localhost.ready"
$StartScript = Join-Path $Root "start-localhost.ps1"
$StopScript = Join-Path $Root "stop-localhost.ps1"
$script:PendingProcess = $null
$script:PendingAction = ""

function Quote-Arg {
  param([string]$Value)
  return '"' + ($Value -replace '"', '\"') + '"'
}

function Test-LocalhostFast {
  if (!(Test-Path -LiteralPath $ReadyFile) -or !(Test-Path -LiteralPath $NodePidFile)) {
    return $false
  }

  $Value = [string](Get-Content -LiteralPath $NodePidFile -Raw -ErrorAction SilentlyContinue)
  $Value = $Value.Trim()
  $ParsedPid = 0
  if (!$Value -or ![int]::TryParse($Value, [ref]$ParsedPid)) {
    return $false
  }

  return [bool](Get-Process -Id $ParsedPid -ErrorAction SilentlyContinue)
}

function Begin-Action {
  param([string]$Script)

  $Info = New-Object System.Diagnostics.ProcessStartInfo
  $Info.FileName = Join-Path $PSHOME "powershell.exe"
  $Info.Arguments = "-NoProfile -ExecutionPolicy Bypass -File $(Quote-Arg $Script)"
  $Info.WorkingDirectory = $Root
  $Info.UseShellExecute = $false
  $Info.CreateNoWindow = $true
  $Info.RedirectStandardOutput = $true
  $Info.RedirectStandardError = $true

  $script:PendingProcess = [System.Diagnostics.Process]::Start($Info)
  if (!$script:PendingProcess) {
    throw "No se pudo iniciar la accion."
  }
}

function Complete-Action {
  if (!$script:PendingProcess -or !$script:PendingProcess.HasExited) {
    return
  }

  $Output = $script:PendingProcess.StandardOutput.ReadToEnd()
  $ErrorOutput = $script:PendingProcess.StandardError.ReadToEnd()
  $ExitCode = $script:PendingProcess.ExitCode
  $script:PendingProcess.Dispose()
  $script:PendingProcess = $null
  $script:PendingAction = ""
  $Form.UseWaitCursor = $false
  $ToggleButton.Enabled = $true

  if ($ExitCode -ne 0) {
    $Reason = $ErrorOutput.Trim()
    if (!$Reason) { $Reason = $Output.Trim() }
    if (!$Reason) { $Reason = "La accion no se pudo completar." }
    [System.Windows.Forms.MessageBox]::Show("No se pudo cambiar el estado de localhost.`r`n`r`n$Reason", "Error de localhost") | Out-Null
  }
}

Add-Type -AssemblyName System.Windows.Forms
Add-Type -AssemblyName System.Drawing

$Form = New-Object System.Windows.Forms.Form
$Form.Text = "Indonesio Total - Localhost"
$Form.StartPosition = "CenterScreen"
$Form.ClientSize = New-Object System.Drawing.Size(372, 150)
$Form.FormBorderStyle = "FixedDialog"
$Form.MaximizeBox = $false
$Form.MinimizeBox = $true
$Form.BackColor = [System.Drawing.Color]::FromArgb(250, 250, 250)

$ToggleButton = New-Object System.Windows.Forms.Button
$ToggleButton.Font = New-Object System.Drawing.Font("Segoe UI", 16, [System.Drawing.FontStyle]::Bold)
$ToggleButton.Location = New-Object System.Drawing.Point(18, 18)
$ToggleButton.Size = New-Object System.Drawing.Size(336, 114)
$ToggleButton.FlatStyle = "Flat"
$ToggleButton.FlatAppearance.BorderSize = 0
$ToggleButton.ForeColor = [System.Drawing.Color]::White
$Form.Controls.Add($ToggleButton)

function Update-Ui {
  if ($script:PendingProcess -and !$script:PendingProcess.HasExited) {
    if ($script:PendingAction -eq "start") {
      $ToggleButton.Text = "INICIANDO..."
      $ToggleButton.BackColor = [System.Drawing.Color]::FromArgb(29, 126, 77)
    } else {
      $ToggleButton.Text = "APAGANDO..."
      $ToggleButton.BackColor = [System.Drawing.Color]::FromArgb(195, 53, 57)
    }
    return
  }

  if (Test-LocalhostFast) {
    $ToggleButton.Text = "APAGAR LOCALHOST`r`nActivo"
    $ToggleButton.BackColor = [System.Drawing.Color]::FromArgb(195, 53, 57)
  } else {
    $ToggleButton.Text = "INICIAR LOCALHOST`r`nApagado"
    $ToggleButton.BackColor = [System.Drawing.Color]::FromArgb(29, 126, 77)
  }
}

$ToggleButton.Add_Click({
  $ToggleButton.Enabled = $false
  $Form.UseWaitCursor = $true
  try {
    if (Test-LocalhostFast) {
      $script:PendingAction = "stop"
      Begin-Action $StopScript
    } else {
      $script:PendingAction = "start"
      Begin-Action $StartScript
    }
  } catch {
    $script:PendingAction = ""
    [System.Windows.Forms.MessageBox]::Show("No se pudo cambiar el estado de localhost.`r`n`r`n$($_.Exception.Message)", "Error de localhost") | Out-Null
    $Form.UseWaitCursor = $false
    $ToggleButton.Enabled = $true
  }
  Update-Ui
})

$Timer = New-Object System.Windows.Forms.Timer
$Timer.Interval = 250
$Timer.Add_Tick({
  Complete-Action
  Update-Ui
})
$Timer.Start()

Update-Ui
[void]$Form.ShowDialog()
