# Prompt 02: especificacao funcional

Padrao: zero-shot prompting

```text
Tarefa:
Crie uma especificacao funcional objetiva para o AgendaEdu, uma agenda escolar que permite cadastrar compromissos, listar e filtrar compromissos e gerar um plano de prioridades.

Regras conhecidas:
- Campos: titulo, descricao, disciplina, tipo, data, prioridade e status.
- Tipos: prova, trabalho, tarefa, leitura e apresentacao.
- Prioridade: baixa, media e alta.
- Status: pendente, em andamento e concluido.
- A priorizacao deve considerar prioridade, proximidade do prazo, tipo e status.

Formato de resposta:
1. Problema resolvido.
2. Usuarios-alvo.
3. Funcionalidades principais.
4. Regras de negocio.
5. Validacoes.
6. Exemplos de entrada.
7. Exemplos de saida.
8. Criterios de aceite.
```

## Saida obtida

A especificacao funcional foi registrada em `docs/especificacao-funcional-agendaedu.md`, cobrindo:

- problema resolvido;
- usuarios-alvo;
- funcionalidades principais;
- regras de negocio;
- validacoes;
- exemplos de entrada;
- exemplos de saida;
- criterios de aceite.

## Avaliacao critica

A resposta inicial do prompt descreve bem o escopo funcional, mas ainda nao define uma formula numerica fechada para o calculo de prioridade. Essa decisao foi deixada para a etapa de implementacao do backend, onde os pesos de prioridade, prazo, tipo e status poderao ser codificados e testados.

## Ajustes aplicados

Foram adicionados exemplos mais estruturados de:

- filtro por status;
- filtro por disciplina e tipo;
- resposta paginavel/listavel com `items` e `total`;
- plano de prioridades com `pontuacao` e `motivo`.

A especificacao tambem foi vinculada a issue de referencia `2. Definir dominio e escopo do AgendaEdu` e a branch indicada `docs/especificacao-agendaedu`.
