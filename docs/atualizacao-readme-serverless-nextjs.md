# Atualizacao do README para arquitetura serverless Next.js

## Objetivo

Atualizar o `README.md` para refletir a arquitetura vigente do AgendaEdu apos a migracao para Next.js fullstack/serverless.

## Conteudo documentado

- arquitetura serverless com App Router, Route Handlers e dominio em `src/lib`;
- comandos locais para instalacao, desenvolvimento, testes e build;
- endpoints `/api` disponiveis na aplicacao;
- filtros e payload principal de cadastro;
- limitacao do store em memoria usado pelo ciclo atual.

## Motivo

O README e o ponto de entrada do projeto. Ele precisa deixar claro que a aplicacao ativa nao depende mais de backend Python separado e que o armazenamento atual e apenas demonstrativo.

## Validacao esperada

```powershell
cd frontend
npm test
npm run build
```
