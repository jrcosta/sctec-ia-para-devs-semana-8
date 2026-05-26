# Limpeza do backend Python legado

## Objetivo

Remover pastas e arquivos que nao fazem mais parte da aplicacao ativa.

Issue de referencia: #29

## Removidos

- `backend/`
- `pyproject.toml`
- configuracao e testes Python associados ao backend antigo

## Motivo

A aplicacao ativa usa Next.js fullstack:

- UI em `frontend/src/ui`;
- Route Handlers em `frontend/src/app/api`;
- dominio em `frontend/src/lib/agendaedu`;
- testes automatizados em Vitest.

Manter o backend Python legado na raiz criava ambiguidade sobre qual stack executar e aumentava a complexidade de manutencao.

## Preservacao historica

A documentacao da arquitetura anterior continua em `docs/descontinuado/`.

## Validacao esperada

```powershell
cd frontend
npm test
npm run build
```
