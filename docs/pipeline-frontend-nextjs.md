# Pipeline Frontend Next.js

## Issue

Issue vinculada: `#27 Configurar pipeline CI do frontend Next.js`

## Objetivo

Criar um pipeline de CI para validar a aplicacao Next.js do AgendaEdu.

## Workflow

Arquivo:

```text
.github/workflows/frontend-ci.yml
```

## Gatilhos

- `push` em `main`, `feature/**` e `fix/**`;
- `pull_request` para `main`.

## Etapas

1. Fazer checkout do repositorio.
2. Configurar Node.js `20.19.0`.
3. Instalar dependencias do `frontend/` com `npm ci`.
4. Executar testes automatizados com `npm test`.
5. Executar build da aplicacao Next.js com `npm run build`.

## Motivo

O pipeline garante que alteracoes no frontend serverless sejam validadas antes do merge, cobrindo tanto os Route Handlers testados com Vitest quanto o build de producao do Next.js.
