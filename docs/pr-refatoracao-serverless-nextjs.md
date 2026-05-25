# PR: refatoracao serverless Next.js

## Issue relacionada

Issue: `#17 Refatorar AgendaEdu para Next.js serverless`

## Branch

Branch planejada: `feature/refatoracao-serverless-nextjs`

## Mudanca

A aplicacao AgendaEdu foi refatorada para uma arquitetura fullstack em Next.js:

- frontend em Next.js App Router;
- backend serverless com Route Handlers em `frontend/src/app/api`;
- regra de negocio e priorizacao em `frontend/src/lib/agendaedu`;
- chamadas da interface feitas por rotas relativas `/api`;
- scripts locais simplificados para subir uma unica aplicacao;
- documentacao vigente refeita para refletir a nova arquitetura;
- documentacao antiga preservada em `docs/descontinuado`.

## Motivo

A mudanca reduz o escopo tecnico por restricao de tempo e reduz complexidade operacional.

Antes, a solucao exigia manter dois runtimes locais e duas stacks principais: frontend separado e backend Python. Para a entrega avaliativa, isso aumentava o custo de configuracao, demonstracao, CI/CD e depuracao.

Com Next.js fullstack, o projeto passa a ter uma unica stack de execucao para a experiencia principal. Isso reduz pontos de falha, elimina CORS no fluxo local, simplifica os scripts e concentra a logica demonstravel em um unico build.

## Impacto

- Menor complexidade de setup.
- Menor tempo de demonstracao.
- Contrato JSON preservado para cadastro, listagem, filtros e plano de prioridades.
- Persistencia mantida em memoria por decisao de escopo.

## Validacao

Comando executado:

```powershell
cd frontend
npm run build
```

Resultado esperado: build Next.js concluido com rotas `/` e `/api/*`.
