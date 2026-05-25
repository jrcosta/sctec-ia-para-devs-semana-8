# Backend Serverless Next.js

## Implementacao vigente

O backend ativo do AgendaEdu esta implementado com Route Handlers do Next.js.

Arquivos:

- `frontend/src/app/api/health/route.js`
- `frontend/src/app/api/appointments/route.js`
- `frontend/src/app/api/appointments/priority-plan/route.js`
- `frontend/src/app/api/appointments/[id]/route.js`
- `frontend/src/lib/agendaedu/appointments.js`

## Endpoints

| Metodo | Rota |
| --- | --- |
| `GET` | `/api/health` |
| `GET` | `/api/appointments` |
| `POST` | `/api/appointments` |
| `GET` | `/api/appointments/priority-plan` |
| `GET` | `/api/appointments/{id}` |

## Observacao

O historico da implementacao anterior esta preservado apenas em `docs/descontinuado/`.
