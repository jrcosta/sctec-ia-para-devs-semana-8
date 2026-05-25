# Issues sugeridas para o GitHub Project

## 1. Migrar AgendaEdu para Next.js serverless

Branch sugerida: `feature/frontend-agendaedu`

Objetivo:

Transformar a aplicacao em uma solucao fullstack Next.js, com frontend e backend na mesma stack.

Escopo:

- Usar App Router.
- Criar Route Handlers em `src/app/api`.
- Portar cadastro, listagem, filtros e priorizacao.
- Remover dependencia de servidor separado no fluxo principal.
- Atualizar scripts de execucao.

Criterios de conclusao:

- `npm run build` executa com sucesso.
- `/api/health` responde.
- UI consome `/api/appointments`.
- Documentacao antiga arquivada em `docs/descontinuado`.
- Nova documentacao e diagramas criados.

## 2. Evoluir persistencia serverless

Branch sugerida: `feature/persistencia-serverless`

Objetivo:

Substituir armazenamento em memoria por banco serverless.

Escopo:

- Escolher banco serverless.
- Criar schema de compromissos.
- Adaptar repositorio de dados.
- Manter contrato JSON atual.

## 3. Criar testes da API Next.js

Branch sugerida: `feature/testes-nextjs-api`

Objetivo:

Cobrir os Route Handlers principais.

Escopo:

- Testar health check.
- Testar criacao valida e invalida.
- Testar filtros.
- Testar plano de prioridades.

## 4. Finalizar documentacao e video

Branch sugerida: `docs/entrega-final`

Objetivo:

Consolidar README, docs, diagramas, prompts e evidencias da migracao.
