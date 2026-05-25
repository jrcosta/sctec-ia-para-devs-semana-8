# Prompt 04: backend serverless Next.js

```text
Implemente o backend do AgendaEdu com Route Handlers do Next.js em `src/app/api`.
Crie endpoints para health check, cadastro, listagem, consulta por ID e plano de prioridades.
Mantenha a regra de validacao e priorizacao isolada em `src/lib/agendaedu`.
```

## Resultado

Backend serverless implementado em:

- `frontend/src/app/api/health/route.js`
- `frontend/src/app/api/appointments/route.js`
- `frontend/src/app/api/appointments/priority-plan/route.js`
- `frontend/src/app/api/appointments/[id]/route.js`
