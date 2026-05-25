# Issues sugeridas para o GitHub Project

Use estas issues como base para o board Kanban. Cada issue deve ser criada no GitHub e movida pelas colunas Backlog, A Fazer, Em Andamento, Bloqueado, Em Revisao e Concluido conforme o trabalho real avancar.

## 1. Criar repositorio privado e configurar colaboradores

Branch sugerida: `docs/organizacao-inicial`

Objetivo:

Configurar o repositorio para atender aos requisitos de entrega.

Escopo:

- Confirmar repositorio privado.
- Adicionar colaboradores obrigatorios.
- Validar branches `main` e `develop`.
- Confirmar regras de PR.

Criterios de conclusao:

- Repositorio privado.
- Colaboradores adicionados.
- Branches principais criadas.
- Evidencia registrada no README ou checklist.

## 2. Definir dominio e escopo do AgendaEdu

Branch sugerida: `docs/especificacao-agendaedu`

Objetivo:

Documentar o problema resolvido, funcionalidades e regras de negocio.

Escopo:

- Descrever AgendaEdu.
- Listar campos do compromisso escolar.
- Definir tipos, prioridades e status.
- Criar exemplos de entrada e saida.

Criterios de conclusao:

- Escopo documentado.
- Regras de validacao descritas.
- Exemplos prontos para uso no README.

## 3. Planejar arquitetura com suporte de IA

Branch sugerida: `feature/especificacao-arquitetura`

Objetivo:

Definir a arquitetura da aplicacao e documentar decisoes tecnicas.

Escopo:

- Definir responsabilidades do frontend.
- Definir responsabilidades do backend.
- Definir estrategia de armazenamento.
- Criar diagramas Mermaid.

Criterios de conclusao:

- Diagrama de arquitetura criado.
- Fluxo de priorizacao documentado.
- Decisoes tecnicas justificadas.
- Prompt salvo em `docs/prompts/`.

## 4. Criar estrutura inicial do projeto

Branch sugerida: `feature/estrutura-inicial`

Objetivo:

Criar a base tecnica do frontend e backend.

Escopo:

- Criar pasta backend.
- Criar pasta frontend.
- Criar `.env.example`.
- Criar instrucoes iniciais de execucao.

Criterios de conclusao:

- Estrutura executavel criada.
- Comandos principais documentados.
- PR aberto para `develop`.

## 5. Implementar backend FastAPI

Branch sugerida: `feature/geracao-codigo-ia`

Objetivo:

Implementar API para cadastro, listagem, filtros e plano de prioridades.

Escopo:

- Criar modelo de compromisso.
- Criar endpoint de cadastro.
- Criar endpoint de listagem com filtros.
- Criar endpoint de plano de prioridades.
- Retornar JSON estruturado.

Criterios de conclusao:

- Endpoints funcionando.
- Validacoes aplicadas.
- Exemplos de request/response documentados.
- Ciclo 1 com IA registrado.

## 6. Implementar frontend Next.js

Branch sugerida: `feature/frontend-agendaedu`

Objetivo:

Criar interface web para operar o AgendaEdu.

Escopo:

- Formulario de cadastro.
- Listagem de compromissos.
- Filtros por disciplina, tipo, prioridade ou status.
- Visualizacao do plano de prioridades.

Criterios de conclusao:

- Frontend executa localmente.
- Integra com a API.
- Dois cenarios demonstraveis.
- Ciclo 2 com IA registrado.

## 7. Refatorar codigo com suporte de IA

Branch sugerida: `feature/refatoracao-ia`

Objetivo:

Melhorar qualidade do codigo com apoio de IA.

Escopo:

- Revisar separacao de responsabilidades.
- Aplicar Clean Code.
- Documentar antes/depois.
- Registrar prompt e avaliacao critica.

Criterios de conclusao:

- Refatoracao aplicada.
- Comparativo documentado.
- Motivacao tecnica registrada.
- Ciclo 3 com IA registrado.

## 8. Criar testes automatizados com Pytest

Branch sugerida: `feature/testes-automatizados`

Objetivo:

Garantir as regras principais do backend.

Escopo:

- Testar cadastro valido.
- Testar validacoes.
- Testar listagem e filtros.
- Testar calculo de prioridade.
- Registrar falha ou insuficiencia da saida da IA.

Criterios de conclusao:

- Testes executando.
- Cenarios relevantes cobertos.
- Caso de analise critica documentado.

## 9. Configurar pipeline CI/CD

Branch sugerida: `feature/pipeline-ci-cd`

Objetivo:

Automatizar lint, testes e build.

Escopo:

- Criar workflow do GitHub Actions.
- Executar lint do backend.
- Executar Pytest.
- Executar build do frontend.

Criterios de conclusao:

- Workflow criado.
- Pipeline executa em push ou PR.
- Resultado funcional registrado.
- Prompt salvo em `docs/prompts/`.

## 10. Finalizar README e documentacao

Branch sugerida: `docs/prompts-readme`

Objetivo:

Consolidar a documentacao final exigida.

Escopo:

- Nome e descricao do projeto.
- Ferramentas de IA usadas.
- Padroes de prompting.
- Arquitetura e diagramas.
- Como instalar e executar.
- Cenarios de uso.
- Caso de analise critica.
- Melhorias futuras.
- Link do video.

Criterios de conclusao:

- README atende ao checklist do documento avaliativo.
- Prompts organizados em `docs/prompts/`.
- Diagramas referenciados.

## 11. Gravar video de demonstracao

Branch sugerida: `docs/video-entrega`

Objetivo:

Produzir video final de ate 10 minutos.

Escopo:

- Demonstrar dois cenarios de uso.
- Mostrar repositorio, branches, commits e PRs.
- Mostrar board GitHub.
- Mostrar prompts.
- Mostrar refatoracao.
- Mostrar testes.
- Mostrar pipeline.
- Mostrar documentacao.

Criterios de conclusao:

- Video publicado como nao listado.
- Link adicionado ao README.
- Links prontos para submissao no AVA.

