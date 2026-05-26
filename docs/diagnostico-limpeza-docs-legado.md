# Diagnostico: limpeza de documentos legados na area ativa

## Problema

Ainda havia arquivos vigentes em `docs/` e `docs/prompts/` com nomes e referencias da arquitetura anterior.

## Correcao aplicada

Foram removidos da area ativa os documentos antigos de backend separado e testes Python.

Foram criados os equivalentes atuais:

- `docs/backend-serverless-nextjs.md`
- `docs/prompts/04-backend-serverless-nextjs.md`
- `docs/prompts/07-testes-route-handlers-nextjs.md`

Tambem foram ajustadas referencias textuais nos documentos vigentes para descrever apenas a arquitetura serverless em Next.js.

## Observacao

Os documentos antigos seguem preservados em `docs/descontinuado/`, que e a pasta historica solicitada para conteudo descontinuado.

## Limpeza complementar

O backend Python legado foi removido da area ativa do repositorio apos a migracao para Next.js serverless. A aplicacao vigente roda em `frontend/` com Route Handlers em `frontend/src/app/api`.
