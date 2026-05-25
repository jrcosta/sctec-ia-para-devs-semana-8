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

A implementacao inicial do backend foi registrada com:

- modelos Pydantic;
- endpoints de cadastro, listagem, consulta por ID e plano de prioridades;
- armazenamento em memória;
- serviço separado para filtros e priorização;
- testes de backend cobrindo criação, filtros, prioridade e validação.

## Avaliacao critica

A estrutura atende bem ao escopo mínimo e mantém a regra de negócio separada das rotas. Os pontos que ainda pedem refinamento são a persistência real dos dados, a calibragem fina dos pesos de priorização e uma suíte de testes mais ampla para combinações de filtros e bordas de data.

## Ajustes aplicados

Os seguintes ajustes foram feitos em relação ao prompt inicial:

- adição de `GET /appointments/{appointment_id}`;
- resposta de listagem estruturada com `items` e `total`;
- `GET /appointments/priority-plan` retornando itens com `pontuacao` e `motivo`;
- validação de texto com remoção de espaços em branco;
- repositório em memória com `clear()` para testes;
- testes automatizados para fluxo principal.
