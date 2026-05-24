# Questionario de decisoes iniciais

Este questionario deve ser respondido pelo grupo antes da implementacao do AgendaEdu. Ele serve para fechar escopo, responsabilidades, tecnologias, estrategia de IA, testes, CI/CD e demonstracao final.

## Perguntas

1. Quem sao os 3 integrantes do grupo e quem sera o lider tecnico-organizacional?

    R: Farei o trabalho sozinho, Eneri da Costa Junior.

2. O grupo confirma o dominio da aplicacao como uma agenda escolar?

   R: Sim, a aplicacao sera uma agenda escolar.

3. Qual sera o nome final da aplicacao: AgendaEdu ou outro nome?

   R: O nome da aplicacao sera AgendaEdu.

4. O grupo confirma que a aplicacao sera uma web app com frontend React + Vite e backend FastAPI?

   R: Sim, a aplicacao sera uma web app com frontend React + Vite e backend FastAPI.

5. Quais funcionalidades serao obrigatorias na primeira entrega?

   R: As funcionalidades obrigatorias na primeira entrega serao cadastrar compromissos escolares, listar/filtrar compromissos e gerar plano de prioridades.

6. Quais tipos de compromissos escolares serao aceitos?

   R: Serão aceitos os seguintes tipos de compromissos escolares: prova, trabalho, tarefa, leitura e apresentacao.

7. Quais campos um compromisso escolar deve ter?

   R: Um compromisso escolar deve ter os seguintes campos: titulo, descricao, disciplina, tipo, data, prioridade e status.

8. Quais serao os valores permitidos para prioridade e status?

   R: Os valores permitidos para prioridade sao: baixa, media e alta. Os valores permitidos para status sao: pendente, em andamento e concluido.

9. Qual regra sera usada para calcular o plano de prioridades?

   R: A regra para calcular o plano de prioridades considerara prioridade, proximidade do prazo, tipo do compromisso e status.

10. A entrada principal sera via formulario no frontend e tambem via API FastAPI?

    R: A entrada principal sera via formulario no frontend e tambem via API FastAPI.

11. A saida principal sera exibida no frontend e tambem retornada como JSON pela API?

    R: A saida principal sera exibida no frontend e tambem retornada como JSON pela API.
    
12. A aplicacao usara banco de dados, arquivo JSON ou armazenamento em memoria?

    R: A aplicacao usara armazenamento em memoria ou arquivo JSON simples.

13. Quais ferramentas de IA serao usadas pelo grupo?

    R: A ferramenta de ia usada será o codex da OpenAI, para gerar codigo, documentacao e testes.

14. Em quais etapas a IA sera usada?

    R: A IA sera usada em todas as etapas mencionadas para demonstrar uso estruturado de IA ao longo de todo o ciclo de desenvolvimento.

15. Quais padroes de prompting serao usados?

    R: few-shot prompting, zero-shot prompting e contexto + tarefa. 
        few-shot prompting: fornecer exemplos de entrada/saida para a IA aprender o formato desejado.
        zero-shot prompting: descrever a tarefa e o formato de resposta esperado sem fornecer exemplos.
        contexto + tarefa: fornecer informacoes de contexto relevantes junto com a descricao da tarefa para melhorar a resposta da IA.

16. Como os 3 ciclos de geracao/refinamento com IA serao documentados?

    R: Os 3 ciclos de geracao/refinamento com IA serao documentados registrando prompt, saida da IA, avaliacao critica e alteracao aplicada.

17. Qual sera a estrategia de testes?

    R: Testes de backend com Pytest cobrindo cadastro, validacao, listagem e calculo de prioridade.

18. O grupo fara testes de frontend ou deixara como melhoria futura?

    R: inicialmente ficara como melhoria futura, focando nos testes de backend para garantir a logica de negocio e o uso de IA.

19. Qual sera a estrategia de CI/CD?

    R: GitHub Actions executando lint do backend, testes com Pytest e build do frontend.

20. Qual sera o possivel caso de analise critica de saida incorreta da IA?

    R: um possivel caso seja a geração insuficiente de cenarios de teste pelo Codex, levando a uma cobertura de testes baixa e falhas não detectadas.

21. Quais dois cenarios serao demonstrados no video?

    R: cadastrar/listar compromisso escolar e gerar plano de prioridades com multiplos compromissos.

22. Quem ficara responsavel por cada parte da entrega?

    R: Serei responsavel por todas as partes da entrega, incluindo backend, frontend, testes, documentacao e GitHub Project.

## Decisoes aprovadas

| Item | Decisao |
| --- | --- |
| Integrante 1 | Eneri da Costa Junior |
| Integrante 2 | Nao aplicavel - trabalho individual |
| Integrante 3 | Nao aplicavel - trabalho individual |
| Lider tecnico-organizacional | Eneri da Costa Junior |
| Nome da aplicacao | AgendaEdu |
| Dominio confirmado | Agenda escolar |
| Formato da aplicacao | Web app com frontend React + Vite e backend FastAPI |
| Stack frontend | React + Vite |
| Stack backend | Python + FastAPI |
| Estrategia de armazenamento | Armazenamento em memoria ou arquivo JSON simples |
| Funcionalidade 1 | Cadastrar compromissos escolares |
| Funcionalidade 2 | Listar e filtrar compromissos escolares |
| Funcionalidade 3 | Gerar plano de prioridades |
| Tipos de compromissos aceitos | Prova, trabalho, tarefa, leitura e apresentacao |
| Campos do compromisso escolar | Titulo, descricao, disciplina, tipo, data, prioridade e status |
| Regra de priorizacao | Considerar prioridade, proximidade do prazo, tipo do compromisso e status |
| Entrada principal | Formulario no frontend e API FastAPI |
| Saida principal | Interface web e respostas JSON estruturadas |
| Ferramentas de IA utilizadas | Codex da OpenAI |
| Etapas com uso de IA | Especificacao, arquitetura, geracao de codigo, refinamento, refatoracao, testes, documentacao, prompts e CI/CD |
| Padroes de prompting | Few-shot prompting, zero-shot prompting e contexto + tarefa |
| Estrategia dos 3 ciclos com IA | Registrar prompt, saida da IA, avaliacao critica e alteracao aplicada |
| Estrategia de testes | Testes de backend com Pytest cobrindo cadastro, validacao, listagem e calculo de prioridade |
| Estrategia de CI/CD | GitHub Actions executando lint do backend, testes com Pytest e build do frontend |
| Caso de analise critica da IA | Geracao insuficiente de cenarios de teste pelo Codex, levando a cobertura baixa e falhas nao detectadas |
| Cenario de video 1 | Cadastrar e listar compromisso escolar |
| Cenario de video 2 | Gerar plano de prioridades com multiplos compromissos |
| Responsavel por backend/testes | Eneri da Costa Junior |
| Responsavel por frontend | Eneri da Costa Junior |
| Responsavel por documentacao/board | Eneri da Costa Junior |
