# Prompt 05: frontend Next.js

Padrao: contexto + tarefa

```text
Contexto:
O AgendaEdu tera frontend Next.js com App Router. Ele deve permitir cadastrar compromissos escolares, listar e filtrar compromissos e visualizar o plano de prioridades retornado pelo backend FastAPI.

Tarefa:
Gere uma interface Next.js funcional para consumir a API do AgendaEdu.

Restricoes:
- Nao criar landing page.
- A primeira tela deve ser a experiencia utilizavel.
- Usar App Router em `src/app`.
- Incluir formulario de cadastro.
- Incluir filtros.
- Incluir lista de compromissos.
- Incluir visualizacao do plano de prioridades.
- Tratar estados de carregamento e erro.
- Usar `NEXT_PUBLIC_API_URL` para configurar a URL da API.

Formato de resposta:
1. Componentes sugeridos.
2. Estrutura de pastas.
3. Codigo dos componentes principais.
4. Comandos para executar.
5. Melhorias futuras.
```

## Saida obtida

Foi mantida a experiencia principal em React, agora montada pela rota `src/app/page.jsx` do Next.js. O arquivo `src/app/layout.jsx` define metadados e idioma da pagina, e `src/app/globals.css` centraliza os estilos globais.

## Avaliacao critica

A migracao atende ao objetivo de trocar a stack sem alterar o contrato com o backend. Como a tela e altamente interativa, o componente principal foi mantido como Client Component com `"use client"`.

## Ajustes aplicados

- Substituicao de Vite por Next.js nos scripts do `package.json`.
- Remocao de `index.html`, `vite.config.js`, `src/main.jsx` e `src/styles.css`.
- Criacao de `next.config.mjs`, `jsconfig.json` e arquivos do App Router.
- Troca de `VITE_API_URL` por `NEXT_PUBLIC_API_URL`.
- Atualizacao dos documentos para refletir a nova stack.
