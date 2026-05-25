$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$Source = Join-Path $Root "PanelLocalhost.cs"
$Output = Join-Path $Root "PANEL-LOCALHOST.exe"

if (!(Test-Path -LiteralPath $Source)) {
  throw "No encuentro PanelLocalhost.cs."
}

if (Test-Path -LiteralPath $Output) {
  Remove-Item -LiteralPath $Output -Force
}

Add-Type `
  -Path $Source `
  -ReferencedAssemblies @("System.dll", "System.Drawing.dll", "System.Windows.Forms.dll") `
  -OutputAssembly $Output `
  -OutputType WindowsApplication

Write-Host "Panel generado: $Output"
