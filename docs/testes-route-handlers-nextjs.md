# Testes dos Route Handlers Next.js

## Objetivo

Cobrir os endpoints serverless do AgendaEdu implementados em `frontend/src/app/api`.

## Casos cobertos

- `GET /api/health` retorna metadados de saude.
- `POST /api/appointments` cria compromisso valido.
- `POST /api/appointments` rejeita payload invalido.
- `GET /api/appointments` aplica filtros por query string.
- `GET /api/appointments/priority-plan` retorna plano ordenado por pontuacao.

## Implementacao

Arquivo de teste:

```text
frontend/src/app/api/agendaedu-route-handlers.test.js
```

Runner:

```text
Vitest
```

## Execucao

```powershell
cd frontend
npm test
```

## Observacao

O store em memoria e limpo antes de cada teste com `clearAppointmentStore()` para evitar vazamento de estado entre cenarios.
