# Prompt: migracao serverless Next.js

```text
Transforme a aplicacao AgendaEdu em serverless usando Next.js tambem no backend.
Substitua o backend separado por Route Handlers, mantenha a experiencia de cadastro,
listagem, filtros e plano de prioridades, reformule a documentacao e recrie os diagramas.
Mova a documentacao antiga para docs/descontinuado.
```

## Saida aplicada

- Backend serverless criado em `frontend/src/app/api`.
- Regra de dominio portada para `frontend/src/lib/agendaedu/appointments.js`.
- Cliente HTTP ajustado para rotas relativas.
- Documentacao nova criada em `docs/`.
- Documentacao anterior arquivada em `docs/descontinuado/`.
