# Prompt: migracao serverless Next.js

```text
Crie o AgendaEdu como uma aplicacao fullstack Next.js, sem backend Python separado.

Use `frontend/` como raiz da aplicacao ativa e implemente:

- App Router em Next.js.
- UI em componentes React sob `frontend/src/ui`.
- Cliente HTTP relativo em `frontend/src/lib/http`.
- Dominio em `frontend/src/lib/agendaedu`.
- Backend serverless em `frontend/src/app/api`.

A aplicacao precisa oferecer:

- health check em `/api/health`;
- cadastro de compromisso em `/api/appointments` com validacao;
- listagem e filtros em `/api/appointments`;
- consulta por ID em `/api/appointments/{id}`;
- plano de prioridades em `/api/appointments/priority-plan`.

Use store em memoria no runtime apenas para o ciclo atual. Documente a limitacao no README e nos docs.
Atualize a documentacao de arquitetura e mova qualquer material antigo para `docs/descontinuado/`.
```

## Resultado esperado

- Aplicacao executavel em `frontend/`.
- Route Handlers serverless criados em `frontend/src/app/api`.
- Dominio isolado em `frontend/src/lib/agendaedu`.
- Cliente HTTP com URLs relativas para `/api`.
- Documentacao nova refletindo a stack atual.
