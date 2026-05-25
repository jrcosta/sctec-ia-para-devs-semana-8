# Implementacao do Frontend AgendaEdu (Next.js)

Este documento detalha a implementacao da interface web do AgendaEdu no Ciclo 2, agora com Next.js no frontend.

## 1. Decisao de stack

A stack do frontend foi alterada de React com Vite para Next.js com App Router. A mudanca mantem React como biblioteca de UI, mas adiciona estrutura de rotas, build de producao padronizado e melhor alinhamento com deploys modernos.

## 2. Componentes

- **App**: orquestra estados de compromissos, filtros, carregamento, erros e plano de prioridades.
- **AppointmentForm**: formulario para cadastro de compromissos escolares.
- **AppointmentList**: lista compromissos em cartoes e mostra estados de carregamento, erro e vazio.
- **Filters**: filtros por disciplina, tipo, prioridade e status.
- **PriorityPlan**: exibe a ordem sugerida de prioridades calculada pelo backend.

## 3. Estrutura de pastas

```text
frontend/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.jsx
│   │   └── page.jsx
│   ├── components/
│   │   ├── AppointmentForm.jsx
│   │   ├── AppointmentList.jsx
│   │   ├── Filters.jsx
│   │   └── PriorityPlan.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   └── constants.js
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
└── package.json
```

## 4. Execucao

Pre-requisito: backend FastAPI em `http://127.0.0.1:8000`.

```powershell
cd frontend
npm install
npm run dev
```

Frontend: `http://127.0.0.1:3000`

Variavel publica da API:

```text
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000
```

## 5. Validacao realizada

O build de producao foi executado com sucesso:

```powershell
npm run build
```

Resultado: rota `/` gerada pelo App Router e compilacao concluida com Next.js.

## 6. Melhorias futuras

- Adicionar testes de interface com Playwright.
- Criar edicao e exclusao de compromissos.
- Evoluir validacao do formulario com Zod e React Hook Form.
- Adicionar feedback visual de sucesso para cadastro.
