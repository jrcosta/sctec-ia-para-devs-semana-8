# Prompt 04: backend serverless Next.js

```text
Implemente o backend do AgendaEdu com Route Handlers do Next.js em `frontend/src/app/api`.

Crie:

- `GET /api/health`
- `GET /api/appointments`
- `POST /api/appointments`
- `GET /api/appointments/{id}`
- `GET /api/appointments/priority-plan`

Mantenha validacao, filtros, store e regra de prioridade em `frontend/src/lib/agendaedu`.
Use respostas JSON com status HTTP coerente e mensagens de erro previsiveis.
```

## Resultado esperado

- `frontend/src/app/api/health/route.js`
- `frontend/src/app/api/appointments/route.js`
- `frontend/src/app/api/appointments/[id]/route.js`
- `frontend/src/app/api/appointments/priority-plan/route.js`
- `frontend/src/lib/agendaedu/*`
