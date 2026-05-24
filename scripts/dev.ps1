$ErrorActionPreference = "Stop"

$RootDir = Split-Path -Parent $PSScriptRoot
$BackendDir = Join-Path $RootDir "backend"
$FrontendDir = Join-Path $RootDir "frontend"
$VenvDir = Join-Path $BackendDir ".venv"
$PythonExe = Join-Path $VenvDir "Scripts\python.exe"
$NpmExe = "npm.cmd"
$LogDir = Join-Path $RootDir ".logs"
$BackendUrl = "http://127.0.0.1:8000"
$FrontendUrl = "http://127.0.0.1:5173"

function Stop-AgendaEduProcesses {
    Get-CimInstance Win32_Process |
        Where-Object {
            $_.CommandLine -and (
                $_.CommandLine.Contains("uvicorn app.main:app") -or
                $_.CommandLine.Contains("vite --host 127.0.0.1")
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

if (-not (Test-Path $PythonExe)) {
    Write-Host "Criando ambiente virtual do backend..."
    python -m venv $VenvDir
}

Write-Host "Instalando dependencias do backend..."
& $PythonExe -m pip install -r (Join-Path $BackendDir "requirements.txt")

if (-not (Test-Path (Join-Path $FrontendDir "node_modules"))) {
    Write-Host "Instalando dependencias do frontend..."
    Push-Location $FrontendDir
    npm install
    Pop-Location
}

Write-Host "Iniciando backend em $BackendUrl..."
$backendProcess = Start-Process `
    -FilePath $PythonExe `
    -ArgumentList @("-m", "uvicorn", "app.main:app", "--host", "127.0.0.1", "--port", "8000", "--reload") `
    -WorkingDirectory $BackendDir `
    -RedirectStandardOutput (Join-Path $LogDir "backend.out.log") `
    -RedirectStandardError (Join-Path $LogDir "backend.err.log") `
    -PassThru `
    -WindowStyle Hidden

Write-Host "Iniciando frontend em $FrontendUrl..."
$env:VITE_API_URL = "http://127.0.0.1:8000"
$frontendProcess = Start-Process `
    -FilePath $NpmExe `
    -ArgumentList @("run", "dev", "--", "--host", "127.0.0.1") `
    -WorkingDirectory $FrontendDir `
    -RedirectStandardOutput (Join-Path $LogDir "frontend.out.log") `
    -RedirectStandardError (Join-Path $LogDir "frontend.err.log") `
    -PassThru `
    -WindowStyle Hidden

Write-Host ""
Write-Host "AgendaEdu em execucao."
Write-Host "Frontend: $FrontendUrl"
Write-Host "Backend:  $BackendUrl/docs"
Write-Host "Logs:     $LogDir"
Write-Host ""
Write-Host "Pressione Ctrl+C para encerrar."

try {
    while ($true) {
        if ($backendProcess.HasExited) {
            Write-Host "Backend encerrou. Veja $LogDir\backend.err.log"
            break
        }

        if ($frontendProcess.HasExited) {
            Write-Host "Frontend encerrou. Veja $LogDir\frontend.err.log"
            break
        }

        Start-Sleep -Seconds 2
    }
}
finally {
    Stop-AgendaEduProcesses
}
