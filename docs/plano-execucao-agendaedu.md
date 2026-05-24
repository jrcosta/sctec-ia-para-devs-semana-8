# Plano de execucao do projeto AgendaEdu

## 1. Contexto

O AgendaEdu sera uma web app de agenda escolar para cadastrar compromissos, listar e filtrar registros e gerar um plano de prioridades. A solucao sera implementada com frontend React + Vite, backend FastAPI e armazenamento em memoria ou arquivo JSON simples.

Este plano foi produzido a partir de:

- `docs/descricao-projeto-avaliativo.md`
- `docs/questionario-decisoes-iniciais.md`
- regras de fluxo descritas em `AGENTS.md`

## 2. Objetivo da entrega

Entregar uma aplicacao funcional, demonstravel e documentada, evidenciando o uso estruturado de IA no planejamento, arquitetura, geracao de codigo, refinamento, refatoracao, testes, documentacao, prompts e CI/CD.

## 3. Requisitos principais

- Entrada via formulario no frontend e API FastAPI.
- Saida em interface web e JSON estruturado.
- Funcionalidades obrigatorias:
  - cadastrar compromissos escolares;
  - listar e filtrar compromissos;
  - gerar plano de prioridades.
- Campos do compromisso:
  - titulo;
  - descricao;
  - disciplina;
  - tipo;
  - data;
  - prioridade;
  - status.
- Tipos aceitos:
  - prova;
  - trabalho;
  - tarefa;
  - leitura;
  - apresentacao.
- Prioridades:
  - baixa;
  - media;
  - alta.
- Status:
  - pendente;
  - em andamento;
  - concluido.
- Regra de priorizacao baseada em prioridade, proximidade do prazo, tipo e status.

## 4. Fluxo de versionamento

O projeto deve seguir Gitflow:

- `main`: versao final entregue.
- `develop`: integracao das entregas aprovadas.
- `feature/*`: funcionalidades da aplicacao.
- `docs/*`: documentacao, prompts, diagramas e planejamento.
- `fix/*`: correcoes pontuais.

Toda alteracao deve iniciar com uma branch propria. Toda entrega que produza artefato deve ser integrada por Pull Request para `develop`. O merge final para `main` deve ocorrer somente quando a entrega estiver completa.

## 5. Etapas de execucao

### Etapa 1: Organizacao inicial do repositorio

Branch sugerida: `docs/organizacao-inicial`

Atividades:

- Validar repositorio privado.
- Confirmar colaboradores obrigatorios.
- Criar ou revisar `README.md`.
- Criar `.env.example`.
- Criar estrutura base de pastas.
- Criar board Kanban no GitHub.
- Criar issues iniciais.

Artefatos:

- `README.md`
- `.env.example`
- GitHub Project board
- issues do projeto

Prompt relacionado:

- `docs/prompts/01-organizacao-repositorio.md`

### Etapa 2: Especificacao funcional e escopo

Branch sugerida: `docs/especificacao-agendaedu`

Atividades:

- Documentar dominio, problema resolvido e publico-alvo.
- Detalhar entidades, campos, validacoes e regras.
- Definir exemplos de entrada e saida.
- Registrar restricoes e criterios de aceite.

Artefatos:

- secao de especificacao no `README.md`
- exemplos de payloads JSON
- criterios de aceite nas issues

Prompt relacionado:

- `docs/prompts/02-especificacao-funcional.md`

### Etapa 3: Arquitetura com suporte de IA

Branch sugerida: `feature/especificacao-arquitetura`

Atividades:

- Definir arquitetura frontend + backend.
- Definir responsabilidades dos modulos.
- Criar diagramas Mermaid.
- Registrar decisoes tecnicas e trade-offs.

Artefatos:

- `docs/diagrams/arquitetura-agendaedu.mmd`
- `docs/diagrams/fluxo-priorizacao.mmd`
- secao de arquitetura no `README.md`

Prompt relacionado:

- `docs/prompts/03-arquitetura-diagramas.md`

### Etapa 4: Backend FastAPI

Branch sugerida: `feature/geracao-codigo-ia`

Atividades:

- Criar API FastAPI.
- Implementar modelo de compromisso.
- Implementar validacoes.
- Implementar cadastro.
- Implementar listagem e filtros.
- Implementar calculo do plano de prioridades.
- Registrar ciclo 1 de geracao/refinamento com IA.

Artefatos:

- codigo backend
- exemplos de requisicao e resposta
- registro do ciclo 1 em documentacao

Prompt relacionado:

- `docs/prompts/04-backend-fastapi.md`

### Etapa 5: Frontend React + Vite

Branch sugerida: `feature/frontend-agendaedu`

Atividades:

- Criar interface para cadastro.
- Criar listagem com filtros.
- Criar visualizacao do plano de prioridades.
- Integrar frontend com API.
- Registrar ciclo 2 de geracao/refinamento com IA.

Artefatos:

- codigo frontend
- prints ou descricao dos fluxos para README
- registro do ciclo 2 em documentacao

Prompt relacionado:

- `docs/prompts/05-frontend-react-vite.md`

### Etapa 6: Refatoracao assistida por IA

Branch sugerida: `feature/refatoracao-ia`

Atividades:

- Revisar codigo gerado.
- Aplicar criterio tecnico: Clean Code e separacao de responsabilidades.
- Documentar antes, prompt, depois e justificativa.
- Registrar ciclo 3 de refinamento com IA.

Artefatos:

- codigo refatorado
- documentacao de refatoracao
- comparativo antes/depois

Prompt relacionado:

- `docs/prompts/06-refatoracao-ia.md`

### Etapa 7: Testes automatizados

Branch sugerida: `feature/testes-automatizados`

Atividades:

- Criar testes Pytest para backend.
- Cobrir cadastro, validacao, listagem, filtros e prioridade.
- Validar que os testes realmente exercitam as regras de negocio.
- Documentar caso de saida insuficiente da IA na criacao de testes.

Artefatos:

- suite Pytest
- relatorio ou registro de execucao
- caso de analise critica

Prompt relacionado:

- `docs/prompts/07-testes-pytest.md`

### Etapa 8: Pipeline CI/CD

Branch sugerida: `feature/pipeline-ci-cd`

Atividades:

- Criar GitHub Actions.
- Executar lint do backend.
- Executar testes Pytest.
- Executar build do frontend.
- Documentar o pipeline no README.

Artefatos:

- `.github/workflows/ci.yml`
- evidencias de execucao do Actions

Prompt relacionado:

- `docs/prompts/08-pipeline-ci-cd.md`

### Etapa 9: Documentacao final

Branch sugerida: `docs/prompts-readme`

Atividades:

- Completar README.
- Referenciar prompts usados.
- Incluir diagramas.
- Documentar dois cenarios de uso.
- Documentar melhoria futura: testes de frontend.
- Inserir link do video nao listado quando disponivel.

Artefatos:

- `README.md`
- `docs/prompts/`
- diagramas `.mmd`
- exemplos de entrada e saida

Prompt relacionado:

- `docs/prompts/09-readme-documentacao-final.md`

### Etapa 10: Video e entrega

Branch sugerida: `docs/video-entrega`

Atividades:

- Gravar video de ate 10 minutos.
- Demonstrar sistema funcionando.
- Demonstrar board, branches, commits, PRs, prompts, testes e pipeline.
- Publicar video como nao listado.
- Atualizar README com link.
- Submeter links no AVA ate 01/06/2026 as 15h.

Artefatos:

- link do video no README
- checklist final revisado

Prompt relacionado:

- `docs/prompts/10-video-entrega.md`

## 6. Issues sugeridas para o GitHub Project

As issues completas estao documentadas em `docs/github-issues-agendaedu.md`.

Colunas obrigatorias do board:

- Backlog
- A Fazer
- Em Andamento
- Bloqueado
- Em Revisao
- Concluido

## 7. Diagramas Mermaid

Diagramas planejados:

- `docs/diagrams/arquitetura-agendaedu.mmd`
- `docs/diagrams/fluxo-priorizacao.mmd`

## 8. Checklist de conformidade

- [ ] Repositorio privado.
- [ ] Colaboradores obrigatorios adicionados.
- [ ] Board Kanban com seis colunas.
- [ ] Issues com descricao, objetivo e criterios de conclusao.
- [ ] Branches seguindo Gitflow.
- [ ] Pelo menos 8 commits incrementais.
- [ ] Pull Requests para `develop`.
- [ ] Merge final para `main`.
- [ ] README completo.
- [ ] Prompts em `docs/prompts/`.
- [ ] Diagramas Mermaid.
- [ ] Backend FastAPI funcional.
- [ ] Frontend React + Vite funcional.
- [ ] Dois cenarios demonstraveis.
- [ ] Testes Pytest.
- [ ] CI/CD com lint, testes e build.
- [ ] Caso de analise critica da IA.
- [ ] Video no YouTube como nao listado.
- [ ] Links submetidos no AVA.
