# AgendaEdu

AgendaEdu e uma aplicacao web de agenda escolar criada para o projeto avaliativo do modulo IA para Desenvolvedores. O objetivo e ajudar estudantes a registrar compromissos escolares, consultar pendencias e gerar um plano de prioridades com base em prazo, prioridade, tipo de compromisso e status.

## Status

Projeto em fase de planejamento e estruturacao inicial.

Artefatos ja planejados:

- plano de execucao em `docs/plano-execucao-agendaedu.md`;
- issues sugeridas para GitHub Project em `docs/github-issues-agendaedu.md`;
- prompts organizados em `docs/prompts/`;
- diagramas Mermaid em `docs/diagrams/`;
- decisoes iniciais em `docs/questionario-decisoes-iniciais.md`.

## Problema Resolvido

Estudantes lidam com provas, trabalhos, tarefas, leituras e apresentacoes em diferentes disciplinas. Sem uma organizacao clara, compromissos importantes podem ser esquecidos ou tratados tarde demais. O AgendaEdu centraliza esses compromissos e ordena as atividades por urgencia e importancia.

## Funcionalidades Previstas

- Cadastrar compromissos escolares.
- Listar e filtrar compromissos.
- Gerar plano de prioridades.
- Exibir resultados no frontend.
- Retornar respostas JSON estruturadas pela API.

## Stack Tecnica

| Camada | Tecnologia |
| --- | --- |
| Frontend | React + Vite |
| Backend | Python + FastAPI |
| Testes | Pytest |
| CI/CD | GitHub Actions |
| Armazenamento | Memoria ou arquivo JSON simples |
| Diagramas | Mermaid |
| IA | Codex da OpenAI |

## Modelo de Dados

Um compromisso escolar deve conter:

| Campo | Descricao |
| --- | --- |
| `titulo` | Nome do compromisso |
| `descricao` | Detalhes complementares |
| `disciplina` | Disciplina relacionada |
| `tipo` | `prova`, `trabalho`, `tarefa`, `leitura` ou `apresentacao` |
| `data` | Prazo ou data do compromisso |
| `prioridade` | `baixa`, `media` ou `alta` |
| `status` | `pendente`, `em andamento` ou `concluido` |

## Regra de Priorizacao

O plano de prioridades deve considerar:

- prioridade informada pelo usuario;
- proximidade do prazo;
- tipo do compromisso;
- status atual.

Compromissos com prioridade alta, prazo proximo e status pendente devem aparecer antes de itens menos urgentes ou ja concluidos.

## Arquitetura

Diagramas Mermaid:

- `docs/diagrams/arquitetura-agendaedu.mmd`
- `docs/diagrams/fluxo-priorizacao.mmd`

Visao resumida:

```text
Usuario -> Frontend React + Vite -> Backend FastAPI -> Servico de compromissos
                                               |-> Motor de priorizacao
                                               |-> Memoria ou JSON
```

## Uso de IA

A IA sera usada de forma documentada nas seguintes etapas:

- especificacao funcional;
- arquitetura;
- geracao de codigo;
- refinamento;
- refatoracao;
- testes;
- documentacao;
- prompts;
- CI/CD.

Ferramenta definida: Codex da OpenAI.

## Padroes de Prompting

Padroes definidos no projeto:

- zero-shot prompting;
- few-shot prompting;
- contexto + tarefa.

Os prompts ficam em `docs/prompts/` e devem registrar contexto, tarefa, restricoes, saida obtida, avaliacao critica e ajustes aplicados quando necessario.

## Execucao Local

Para subir backend e frontend juntos no Windows:

```powershell
.\scripts\dev.ps1
```

Depois acesse:

```text
http://127.0.0.1:5173
```

As instrucoes manuais abaixo podem ser usadas caso prefira rodar cada parte separadamente.

Backend previsto:

```bash
cd backend
python -m venv .venv
python -m pip install -r requirements.txt
uvicorn app.main:app --reload
```

Frontend previsto:

```bash
cd frontend
npm install
npm run dev
```

Testes previstos:

```bash
cd backend
python -m pytest
```

## Exemplos de Uso

### Cenario 1: cadastrar e listar compromisso

Entrada prevista:

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

Saida esperada:

```json
{
  "id": "1",
  "titulo": "Prova de matematica",
  "disciplina": "Matematica",
  "tipo": "prova",
  "data": "2026-05-28",
  "prioridade": "alta",
  "status": "pendente"
}
```

### Cenario 2: gerar plano de prioridades

Entrada prevista:

```json
[
  {
    "titulo": "Prova de matematica",
    "tipo": "prova",
    "data": "2026-05-28",
    "prioridade": "alta",
    "status": "pendente"
  },
  {
    "titulo": "Leitura de historia",
    "tipo": "leitura",
    "data": "2026-06-10",
    "prioridade": "baixa",
    "status": "pendente"
  }
]
```

Saida esperada:

```json
{
  "prioridades": [
    {
      "titulo": "Prova de matematica",
      "motivo": "prioridade alta, prazo proximo e status pendente"
    },
    {
      "titulo": "Leitura de historia",
      "motivo": "prioridade baixa e prazo menos urgente"
    }
  ]
}
```

## Analise Critica de IA

Caso previsto para documentacao: a IA pode gerar uma suite de testes insuficiente, cobrindo apenas cenarios felizes e deixando lacunas em filtros combinados, status `concluido` e ordenacao por prazo. A correcao esperada e revisar criticamente os testes gerados, adicionar cenarios relevantes e registrar o antes/depois em `docs/prompts/07-testes-pytest.md`.

## CI/CD

O pipeline previsto com GitHub Actions deve executar:

- lint do backend;
- testes Pytest;
- build do frontend.

O prompt de criacao do pipeline esta em `docs/prompts/08-pipeline-ci-cd.md`.

## GitHub Project

O board deve usar as colunas:

- Backlog;
- A Fazer;
- Em Andamento;
- Bloqueado;
- Em Revisao;
- Concluido.

As issues sugeridas estao em `docs/github-issues-agendaedu.md`.

## Melhorias Futuras

- Testes de frontend.
- Persistencia em banco de dados.
- Autenticacao de usuarios.
- Exportacao de compromissos.
- Notificacoes de prazo.

## Video de Demonstracao

Link do YouTube nao listado: pendente.

## Documentacao Relacionada

- `docs/descricao-projeto-avaliativo.md`
- `docs/questionario-decisoes-iniciais.md`
- `docs/plano-execucao-agendaedu.md`
- `docs/github-issues-agendaedu.md`
- `docs/prompts/00-indice-prompts.md`
- `CONTRIBUTING.md`
