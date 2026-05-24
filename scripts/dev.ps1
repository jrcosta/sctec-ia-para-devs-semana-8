$ErrorActionPreference = "Stop"

$RootDir = Split-Path -Parent $PSScriptRoot
$BackendDir = Join-Path $RootDir "backend"
$FrontendDir = Join-Path $RootDir "frontend"
$VenvDir = Join-Path $BackendDir ".venv"
$PythonExe = Join-Path $VenvDir "Scripts\python.exe"
$BackendUrl = "http://127.0.0.1:8000"
$FrontendUrl = "http://127.0.0.1:5173"

function Stop-AgendaEduJobs {
    Get-Job -Name "agendaedu-backend", "agendaedu-frontend" -ErrorAction SilentlyContinue | Stop-Job
    Get-Job -Name "agendaedu-backend", "agendaedu-frontend" -ErrorAction SilentlyContinue | Remove-Job
}

Stop-AgendaEduJobs

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
$backendJob = Start-Job -Name "agendaedu-backend" -ScriptBlock {
    param($BackendDir, $PythonExe)
    Set-Location $BackendDir
    & $PythonExe -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
} -ArgumentList $BackendDir, $PythonExe

Write-Host "Iniciando frontend em $FrontendUrl..."
$frontendJob = Start-Job -Name "agendaedu-frontend" -ScriptBlock {
    param($FrontendDir)
    Set-Location $FrontendDir
    $env:VITE_API_URL = "http://127.0.0.1:8000"
    npm run dev -- --host 127.0.0.1
} -ArgumentList $FrontendDir

Write-Host ""
Write-Host "AgendaEdu em execucao."
Write-Host "Frontend: $FrontendUrl"
Write-Host "Backend:  $BackendUrl/docs"
Write-Host ""
Write-Host "Pressione Ctrl+C para encerrar."

try {
    while ($true) {
        Receive-Job $backendJob, $frontendJob -Keep
        Start-Sleep -Seconds 2
    }
}
finally {
    Stop-AgendaEduJobs
}
