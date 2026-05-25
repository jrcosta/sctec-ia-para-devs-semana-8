# Diagnostico: Failed to fetch no frontend serverless

## Problema

O frontend exibiu `TypeError: Failed to fetch` ao carregar compromissos.

Stack apontada:

```text
getAppointments -> src/services/api.js
fetchData -> src/App.jsx
```

## Causa

A migracao para Next.js serverless criou os endpoints sob `/api`, mas o cliente HTTP ainda chamava as rotas antigas:

- `/appointments`
- `/appointments/priority-plan`
- `/health`

No App Router, os Route Handlers criados estao em:

- `/api/appointments`
- `/api/appointments/priority-plan`
- `/api/health`

## Correcao aplicada

Arquivo alterado:

```text
frontend/src/services/api.js
```

As chamadas passaram a usar os caminhos corretos da API serverless:

- `GET /api/health`
- `GET /api/appointments`
- `POST /api/appointments`
- `GET /api/appointments/priority-plan`

## Validacao esperada

Executar:

```powershell
cd frontend
npm run build
```

Depois abrir:

```text
http://127.0.0.1:3000
```

O carregamento inicial pode retornar lista vazia, mas nao deve mais falhar por rota inexistente.
