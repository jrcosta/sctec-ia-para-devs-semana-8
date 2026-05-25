# Plano de Execucao Serverless

## Branch

Branch em uso: `feature/frontend-agendaedu`.

A branch sugerida da issue original continua compativel porque o escopo ainda entrega a interface do AgendaEdu, mas a arquitetura foi ampliada para fullstack Next.js conforme nova solicitacao.

## Etapas

1. Migrar frontend para Next.js App Router.
2. Criar backend serverless em `src/app/api`.
3. Portar validacoes e regra de priorizacao para JavaScript.
4. Trocar chamadas HTTP para rotas relativas `/api`.
5. Atualizar scripts locais para iniciar apenas Next.js.
6. Arquivar documentacao antiga em `docs/descontinuado`.
7. Recriar documentacao e diagramas da arquitetura serverless.
8. Validar com `npm run build`.

## Criterios

- Aplicacao roda em `http://127.0.0.1:3000`.
- API responde em `/api/health`.
- Cadastro, filtros e plano de prioridades usam Route Handlers.
- Documentacao antiga fica preservada em `docs/descontinuado`.
- Diagramas refletem Next.js fullstack.
