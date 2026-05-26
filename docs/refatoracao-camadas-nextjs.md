# Refatoracao de camadas Next.js

## Issue

Issue vinculada: `#23 Refatorar camadas da aplicacao Next.js`

## Objetivo

Separar responsabilidades da aplicacao AgendaEdu em camadas claras dentro do projeto Next.js.

## Estrutura vigente

```text
frontend/src/
├── app/
│   ├── api/                  # Route Handlers
│   └── page.jsx              # entrada da rota web
├── lib/
│   ├── agendaedu/            # dominio, validacao, store e prioridades
│   └── http/                 # cliente HTTP e leitura de query params
└── ui/
    ├── AgendaEduApp.jsx      # orquestracao da tela
    └── components/           # componentes visuais
```

## Mudancas

- UI movida para `frontend/src/ui`.
- Cliente HTTP movido para `frontend/src/lib/http/agendaedu-api.js`.
- Route Handlers mantidos em `frontend/src/app/api`, agora apenas como adaptadores HTTP.
- Dominio separado em arquivos menores dentro de `frontend/src/lib/agendaedu`.

## Motivo

A separacao reduz acoplamento entre tela, transporte HTTP, handlers serverless e regra de negocio. Isso facilita manutencao, testes futuros e troca de persistencia sem reescrever a UI.
