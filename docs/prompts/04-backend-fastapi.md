# Prompt 04: backend FastAPI

Padrao: few-shot prompting

```text
Contexto:
Estou implementando o backend do AgendaEdu com FastAPI. A API deve cadastrar compromissos escolares, listar/filtrar compromissos e gerar plano de prioridades.

Exemplo de entrada:
{
  "titulo": "Prova de matematica",
  "descricao": "Capitulos 1 a 4",
  "disciplina": "Matematica",
  "tipo": "prova",
  "data": "2026-05-28",
  "prioridade": "alta",
  "status": "pendente"
}

Exemplo de saida esperada:
{
  "id": "uuid-ou-inteiro",
  "titulo": "Prova de matematica",
  "disciplina": "Matematica",
  "tipo": "prova",
  "data": "2026-05-28",
  "prioridade": "alta",
  "status": "pendente"
}

Tarefa:
Gere a implementacao inicial do backend FastAPI com modelos, validacoes, endpoints e regra de priorizacao.

Restricoes:
- Use Python.
- Use FastAPI e Pydantic.
- Mantenha a regra de negocio separada da rota quando possivel.
- Use armazenamento em memoria ou JSON simples.
- Retorne erros claros de validacao.

Formato de resposta:
1. Arquivos a criar.
2. Codigo por arquivo.
3. Comandos para executar.
4. Exemplos de chamadas.
5. Pontos que exigem revisao humana.
```

## Saida obtida

Preencher durante a execucao.

## Avaliacao critica

Preencher durante a execucao.

## Ajustes aplicados

Preencher durante a execucao.
