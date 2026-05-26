# Prompt Vigente: Especificacao Serverless

Especifique o AgendaEdu como uma aplicacao Next.js serverless para cadastro, consulta, filtros e priorizacao de compromissos escolares.

A especificacao deve incluir:

- UI para criar compromissos com `titulo`, `descricao`, `disciplina`, `tipo`, `data`, `prioridade` e `status`.
- API em `/api/health`, `/api/appointments`, `/api/appointments/{id}` e `/api/appointments/priority-plan`.
- filtros por `disciplina`, `tipo`, `prioridade`, `status`, `date_from` e `date_to`.
- resposta JSON consistente para UI e testes automatizados.
- armazenamento em memoria somente para demonstracao local.
