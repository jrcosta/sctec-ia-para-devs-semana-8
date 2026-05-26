# AgendaEdu

AgendaEdu e uma aplicacao web serverless para cadastro, consulta, filtros e priorizacao de compromissos escolares.

A stack ativa e fullstack Next.js: a interface roda no App Router e o backend fica nos Route Handlers em `frontend/src/app/api`. Nao ha mais servidor Python separado no fluxo vigente.

## Arquitetura Serverless Next.js

```text
Usuario
  -> Next.js App Router
  -> React UI
  -> cliente HTTP relativo em /api
  -> Route Handlers do Next.js
  -> dominio em src/lib/agendaedu
  -> store em memoria do runtime
```

| Camada | Caminho | Responsabilidade |
| --- | --- | --- |
| Pagina principal | `frontend/src/app/page.jsx` | Entrada da aplicacao Next.js |
| UI | `frontend/src/ui` | Formulario, filtros, lista e plano de prioridades |
| Cliente HTTP | `frontend/src/lib/http/agendaedu-api.js` | Chamadas relativas para `/api` |
| Route Handlers | `frontend/src/app/api` | Endpoints serverless do backend |
| Dominio | `frontend/src/lib/agendaedu` | Validacao, filtros, priorizacao e store |
| Testes | `frontend/src/app/api/agendaedu-route-handlers.test.js` | Cobertura dos endpoints principais |

Documentos de arquitetura:

- `docs/arquitetura-serverless-nextjs.md`
- `docs/backend-serverless-nextjs.md`
- `docs/especificacao-serverless-nextjs.md`
- `docs/plano-execucao-serverless-nextjs.md`
- `docs/migracao-serverless-nextjs.md`
- `docs/diagrams/serverless-nextjs.mmd`
- `docs/diagrams/fluxo-priorizacao-serverless.mmd`

A documentacao da stack anterior foi preservada em `docs/descontinuado/`.

## Comandos Locais

Instalar dependencias:

```powershell
cd frontend
npm install
```

Executar em desenvolvimento:

```powershell
npm run dev
```

Acessar a aplicacao:

```text
http://127.0.0.1:3000
```

Executar testes automatizados:

```powershell
npm test
```

Gerar build de producao:

```powershell
npm run build
```

Alternativas por script:

```powershell
.\scripts\dev.ps1
```

```bash
./scripts/dev.sh
```

## Endpoints `/api`

Base local:

```text
http://127.0.0.1:3000/api
```

| Metodo | Rota | Descricao |
| --- | --- | --- |
| `GET` | `/api/health` | Retorna status da API serverless |
| `GET` | `/api/appointments` | Lista compromissos, com filtros opcionais |
| `POST` | `/api/appointments` | Cadastra um compromisso |
| `GET` | `/api/appointments/{id}` | Consulta um compromisso por ID |
| `GET` | `/api/appointments/priority-plan` | Retorna o plano de prioridades |

Filtros aceitos em listagem e plano de prioridades:

| Parametro | Exemplo |
| --- | --- |
| `disciplina` | `Matematica` |
| `tipo` | `prova` |
| `prioridade` | `alta` |
| `status` | `pendente` |
| `date_from` | `2026-05-01` |
| `date_to` | `2026-06-30` |

Exemplo:

```text
GET /api/appointments?disciplina=Matematica&prioridade=alta
```

Payload para cadastro:

```json
{
  "titulo": "Prova de matematica",
  "descricao": "Capitulos 1 a 4",
  "disciplina": "Matematica",
  "tipo": "prova",
  "data": "2026-05-28",
  "prioridade": "alta",
  "status": "pendente"
}
```

Valores aceitos:

- `tipo`: `prova`, `trabalho`, `tarefa`, `leitura`, `apresentacao`
- `prioridade`: `baixa`, `media`, `alta`
- `status`: `pendente`, `em andamento`, `concluido`

## Limitacao do Store em Memoria

O armazenamento atual usa memoria do runtime (`globalThis`) para manter o projeto simples e demonstravel em ambiente local/serverless.

Essa escolha tem limitacoes importantes:

- os dados podem ser perdidos ao reiniciar o servidor local;
- os dados podem ser perdidos em novo deploy, novo build ou reciclagem de runtime;
- em ambiente serverless com multiplas instancias, uma instancia pode nao enxergar dados gravados em outra;
- nao ha garantia de durabilidade, backup ou concorrencia.

Para producao, a evolucao recomendada e substituir o store em memoria por um banco serverless, como Neon Postgres, mantendo os Route Handlers como camada HTTP.
