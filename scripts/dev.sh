#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
FRONTEND_DIR="$ROOT_DIR/frontend"
LOG_DIR="$ROOT_DIR/.logs"
FRONTEND_URL="http://127.0.0.1:3000"

FRONTEND_PID=""

stop_processes() {
  if [[ -n "${FRONTEND_PID:-}" ]] && kill -0 "$FRONTEND_PID" 2>/dev/null; then
    kill "$FRONTEND_PID" 2>/dev/null || true
  fi
}

trap stop_processes EXIT INT TERM

mkdir -p "$LOG_DIR"

if [[ ! -d "$FRONTEND_DIR/node_modules" ]]; then
  echo "Instalando dependencias da aplicacao Next.js..."
  (cd "$FRONTEND_DIR" && npm install)
fi

echo "Iniciando aplicacao serverless Next.js em $FRONTEND_URL..."
(
  cd "$FRONTEND_DIR"
  npm run dev -- -H 127.0.0.1 -p 3000
) >"$LOG_DIR/frontend.out.log" 2>"$LOG_DIR/frontend.err.log" &
FRONTEND_PID=$!

echo ""
echo "AgendaEdu em execucao."
echo "App:      $FRONTEND_URL"
echo "API:      $FRONTEND_URL/api/health"
echo "Logs:     $LOG_DIR"
echo ""
echo "Pressione Ctrl+C para encerrar."

while true; do
  if ! kill -0 "$FRONTEND_PID" 2>/dev/null; then
    echo "Aplicacao encerrou. Veja $LOG_DIR/frontend.err.log"
    exit 1
  fi

  sleep 2
done
