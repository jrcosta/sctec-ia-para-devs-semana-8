$ErrorActionPreference = "Stop"

$RootDir = Split-Path -Parent $PSScriptRoot
$FrontendDir = Join-Path $RootDir "frontend"
$NpmExe = "npm.cmd"
$LogDir = Join-Path $RootDir ".logs"
$FrontendUrl = "http://127.0.0.1:3000"

function Stop-AgendaEduProcesses {
    Get-CimInstance Win32_Process |
        Where-Object {
            $_.CommandLine -and (
                $_.CommandLine.Contains("next dev")
            )
        } |
        ForEach-Object {
            Stop-Process -Id $_.ProcessId -Force -ErrorAction SilentlyContinue
        }
}

Stop-AgendaEduProcesses

if (-not (Test-Path $LogDir)) {
    New-Item -ItemType Directory -Path $LogDir | Out-Null
}

if (-not (Test-Path (Join-Path $FrontendDir "node_modules"))) {
    Write-Host "Instalando dependencias da aplicacao Next.js..."
    Push-Location $FrontendDir
    npm install
    Pop-Location
}

Write-Host "Iniciando aplicacao serverless Next.js em $FrontendUrl..."
$frontendProcess = Start-Process `
    -FilePath $NpmExe `
    -ArgumentList @("run", "dev", "--", "-H", "127.0.0.1", "-p", "3000") `
    -WorkingDirectory $FrontendDir `
    -RedirectStandardOutput (Join-Path $LogDir "frontend.out.log") `
    -RedirectStandardError (Join-Path $LogDir "frontend.err.log") `
    -PassThru `
    -WindowStyle Hidden

Write-Host ""
Write-Host "AgendaEdu em execucao."
Write-Host "App:      $FrontendUrl"
Write-Host "API:      $FrontendUrl/api/health"
Write-Host "Logs:     $LogDir"
Write-Host ""
Write-Host "Pressione Ctrl+C para encerrar."

try {
    while ($true) {
        if ($frontendProcess.HasExited) {
            Write-Host "Aplicacao encerrou. Veja $LogDir\frontend.err.log"
            break
        }

        Start-Sleep -Seconds 2
    }
}
finally {
    Stop-AgendaEduProcesses
}
