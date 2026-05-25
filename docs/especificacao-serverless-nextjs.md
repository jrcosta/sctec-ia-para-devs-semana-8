# Especificacao Funcional Serverless

## Objetivo

Permitir que estudantes cadastrem compromissos escolares, filtrem registros e consultem um plano de prioridades em uma unica aplicacao Next.js.

## Funcionalidades

- Cadastrar compromisso.
- Listar compromissos.
- Filtrar por disciplina, tipo, prioridade, status e intervalo de datas.
- Consultar compromisso por ID.
- Gerar plano de prioridades ordenado por pontuacao.

## Modelo

| Campo | Regra |
| --- | --- |
| `titulo` | texto com no minimo 3 caracteres |
| `descricao` | texto opcional |
| `disciplina` | texto com no minimo 2 caracteres |
| `tipo` | `prova`, `trabalho`, `tarefa`, `leitura`, `apresentacao` |
| `data` | formato `YYYY-MM-DD` |
| `prioridade` | `baixa`, `media`, `alta` |
| `status` | `pendente`, `em andamento`, `concluido` |

## Priorizacao

A pontuacao soma pesos de prioridade, tipo, status e prazo. Itens com maior pontuacao aparecem primeiro. Empates usam data mais proxima e depois titulo em ordem alfabetica.

## Contrato JSON

Criacao:

```http
POST /api/appointments
```

Listagem:

```http
GET /api/appointments?disciplina=Matematica&prioridade=alta
```

Plano:

```http
GET /api/appointments/priority-plan
```
