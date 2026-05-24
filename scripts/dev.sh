#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BACKEND_DIR="$ROOT_DIR/backend"
FRONTEND_DIR="$ROOT_DIR/frontend"
VENV_DIR="$BACKEND_DIR/.venv"
PYTHON_EXE="$VENV_DIR/bin/python"
LOG_DIR="$ROOT_DIR/.logs"
BACKEND_URL="http://127.0.0.1:8000"
FRONTEND_URL="http://127.0.0.1:5173"

BACKEND_PID=""
FRONTEND_PID=""

stop_processes() {
  if [[ -n "${BACKEND_PID:-}" ]] && kill -0 "$BACKEND_PID" 2>/dev/null; then
    kill "$BACKEND_PID" 2>/dev/null || true
  fi

  if [[ -n "${FRONTEND_PID:-}" ]] && kill -0 "$FRONTEND_PID" 2>/dev/null; then
    kill "$FRONTEND_PID" 2>/dev/null || true
  fi
}

trap stop_processes EXIT INT TERM

mkdir -p "$LOG_DIR"

if [[ ! -x "$PYTHON_EXE" ]]; then
  echo "Criando ambiente virtual do backend..."
  python3 -m venv "$VENV_DIR"
fi

echo "Instalando dependencias do backend..."
"$PYTHON_EXE" -m pip install -r "$BACKEND_DIR/requirements.txt"

if [[ ! -d "$FRONTEND_DIR/node_modules" ]]; then
  echo "Instalando dependencias do frontend..."
  (cd "$FRONTEND_DIR" && npm install)
fi

echo "Iniciando backend em $BACKEND_URL..."
(
  cd "$BACKEND_DIR"
  "$PYTHON_EXE" -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
) >"$LOG_DIR/backend.out.log" 2>"$LOG_DIR/backend.err.log" &
BACKEND_PID=$!

echo "Iniciando frontend em $FRONTEND_URL..."
(
  cd "$FRONTEND_DIR"
  VITE_API_URL="$BACKEND_URL" npm run dev -- --host 127.0.0.1
) >"$LOG_DIR/frontend.out.log" 2>"$LOG_DIR/frontend.err.log" &
FRONTEND_PID=$!

echo ""
echo "AgendaEdu em execucao."
echo "Frontend: $FRONTEND_URL"
echo "Backend:  $BACKEND_URL/docs"
echo "Logs:     $LOG_DIR"
echo ""
echo "Pressione Ctrl+C para encerrar."

while true; do
  if ! kill -0 "$BACKEND_PID" 2>/dev/null; then
    echo "Backend encerrou. Veja $LOG_DIR/backend.err.log"
    exit 1
  fi

  if ! kill -0 "$FRONTEND_PID" 2>/dev/null; then
    echo "Frontend encerrou. Veja $LOG_DIR/frontend.err.log"
    exit 1
  fi

  sleep 2
done
