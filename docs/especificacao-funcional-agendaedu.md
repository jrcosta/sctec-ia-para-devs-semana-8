# Especificacao funcional do AgendaEdu

Issue de referencia: `2. Definir dominio e escopo do AgendaEdu`

Branch indicada: `docs/especificacao-agendaedu`

Prompt relacionado: `docs/prompts/02-especificacao-funcional.md`

## 1. Problema resolvido

O AgendaEdu resolve a dificuldade de organizar compromissos escolares em diferentes disciplinas. A aplicacao permite registrar provas, trabalhos, tarefas, leituras e apresentacoes, acompanhar o status de cada compromisso e gerar uma ordem de prioridade para apoiar a rotina de estudos.

## 2. Usuarios-alvo

O publico-alvo principal sao estudantes que precisam controlar prazos escolares, acompanhar atividades pendentes e decidir quais compromissos devem receber atencao primeiro.

## 3. Funcionalidades principais

- Cadastrar compromissos escolares.
- Listar compromissos cadastrados.
- Filtrar compromissos por disciplina, tipo, prioridade ou status.
- Gerar plano de prioridades.
- Exibir os dados no frontend React + Vite.
- Retornar dados estruturados em JSON pela API FastAPI.

## 4. Regras de negocio

- Todo compromisso deve possuir `titulo`, `disciplina`, `tipo`, `data`, `prioridade` e `status`.
- O campo `descricao` e opcional.
- O campo `tipo` aceita apenas:
  - `prova`;
  - `trabalho`;
  - `tarefa`;
  - `leitura`;
  - `apresentacao`.
- O campo `prioridade` aceita apenas:
  - `baixa`;
  - `media`;
  - `alta`.
- O campo `status` aceita apenas:
  - `pendente`;
  - `em andamento`;
  - `concluido`.
- O plano de prioridades deve considerar:
  - prioridade informada pelo usuario;
  - proximidade do prazo;
  - tipo do compromisso;
  - status atual.
- Compromissos com status `concluido` devem ter menor peso ou aparecer ao final da lista.
- Compromissos de maior impacto escolar, como `prova` e `trabalho`, devem ter peso maior que compromissos simples, como `leitura`.
- Compromissos com prazo mais proximo devem ter maior urgencia que compromissos com prazo distante.

## 5. Validacoes

- `titulo`: obrigatorio, texto, minimo de 3 caracteres.
- `descricao`: opcional, texto.
- `disciplina`: obrigatoria, texto, minimo de 2 caracteres.
- `tipo`: obrigatorio, valor permitido na lista de tipos.
- `data`: obrigatoria, data valida no formato `YYYY-MM-DD`.
- `prioridade`: obrigatoria, valor permitido na lista de prioridades.
- `status`: obrigatorio, valor permitido na lista de status.
- A API deve rejeitar compromissos sem campos obrigatorios.
- A API deve rejeitar valores fora das listas permitidas.
- A API deve retornar mensagens de erro claras para entradas invalidas.

## 6. Exemplos de entrada

### Cadastro de compromisso

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

### Filtro por status

```json
{
  "status": "pendente"
}
```

### Filtro por disciplina e tipo

```json
{
  "disciplina": "Matematica",
  "tipo": "prova"
}
```

## 7. Exemplos de saida

### Compromisso cadastrado

```json
{
  "id": "1",
  "titulo": "Prova de matematica",
  "descricao": "Capitulos 1 a 4",
  "disciplina": "Matematica",
  "tipo": "prova",
  "data": "2026-05-28",
  "prioridade": "alta",
  "status": "pendente"
}
```

### Lista filtrada

```json
{
  "items": [
    {
      "id": "1",
      "titulo": "Prova de matematica",
      "disciplina": "Matematica",
      "tipo": "prova",
      "data": "2026-05-28",
      "prioridade": "alta",
      "status": "pendente"
    }
  ],
  "total": 1
}
```

### Plano de prioridades

```json
{
  "prioridades": [
    {
      "id": "1",
      "titulo": "Prova de matematica",
      "pontuacao": 95,
      "motivo": "Prioridade alta, prazo proximo, tipo prova e status pendente."
    },
    {
      "id": "2",
      "titulo": "Leitura de historia",
      "pontuacao": 25,
      "motivo": "Prioridade baixa e prazo menos urgente."
    }
  ]
}
```

## 8. Criterios de aceite

- Deve ser possivel cadastrar um compromisso valido.
- Deve ser possivel listar os compromissos cadastrados.
- Deve ser possivel filtrar compromissos por disciplina, tipo, prioridade ou status.
- Deve rejeitar cadastro com campos obrigatorios ausentes.
- Deve rejeitar valores invalidos de `tipo`, `prioridade` e `status`.
- Deve gerar um plano de prioridades ordenado por urgencia.
- Deve considerar prioridade, proximidade do prazo, tipo e status no calculo.
- Deve retornar respostas JSON estruturadas pela API.
- Deve permitir demonstrar ao menos dois cenarios:
  - cadastrar e listar compromisso escolar;
  - gerar plano de prioridades com multiplos compromissos.
- Deve manter o prompt e a avaliacao critica registrados em `docs/prompts/02-especificacao-funcional.md`.
