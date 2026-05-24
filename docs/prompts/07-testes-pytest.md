# Prompt 07: testes Pytest

Padrao: few-shot prompting

```text
Contexto:
O backend do AgendaEdu usa FastAPI. Preciso gerar testes Pytest para validar cadastro, validacao, listagem, filtros e calculo de prioridade.

Exemplo de cenario:
Dado um compromisso do tipo prova, prioridade alta, prazo proximo e status pendente, quando o plano de prioridades for gerado, entao esse compromisso deve aparecer antes de uma leitura com prioridade baixa e prazo distante.

Tarefa:
Gere uma suite de testes Pytest para os endpoints e regras de negocio do AgendaEdu.

Restricoes:
- Cobrir casos felizes e casos invalidos.
- Testar a regra de priorizacao com multiplos compromissos.
- Nao depender de estado compartilhado entre testes.
- Explicar quais cenarios ficaram fora do escopo.

Formato de resposta:
1. Arquivos de teste.
2. Codigo dos testes.
3. Como executar.
4. Cobertura de cenarios.
5. Possiveis lacunas dos testes gerados.
```

## Saida obtida

Preencher durante a execucao.

## Avaliacao critica

Caso esperado para documentacao critica: a IA pode gerar poucos cenarios, deixando baixa cobertura para filtros combinados, status concluido e ordenacao por prazo.

## Ajustes aplicados

Preencher durante a execucao.
