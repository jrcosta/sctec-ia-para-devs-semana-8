# Implementacao Fullstack Next.js

O frontend e o backend do AgendaEdu agora estao na mesma aplicacao Next.js.

## UI

- `frontend/src/app/page.jsx`
- `frontend/src/App.jsx`
- `frontend/src/components/AppointmentForm.jsx`
- `frontend/src/components/AppointmentList.jsx`
- `frontend/src/components/Filters.jsx`
- `frontend/src/components/PriorityPlan.jsx`

## API

- `GET /api/health`
- `POST /api/appointments`
- `GET /api/appointments`
- `GET /api/appointments/priority-plan`
- `GET /api/appointments/{id}`

## Execucao

```powershell
cd frontend
npm install
npm run dev
```

Aplicacao: `http://127.0.0.1:3000`
