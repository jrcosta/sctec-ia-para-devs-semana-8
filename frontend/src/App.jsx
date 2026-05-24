export default function App() {
  return (
    <main className="app-shell">
      <section className="workspace">
        <header>
          <p className="eyebrow">Agenda escolar</p>
          <h1>AgendaEdu</h1>
          <p>
            Estrutura inicial da aplicacao para cadastro, filtros e plano de
            prioridades de compromissos escolares.
          </p>
        </header>

        <div className="panel-grid">
          <section className="panel">
            <h2>Cadastro</h2>
            <p>Formulario sera implementado na etapa de frontend.</p>
          </section>
          <section className="panel">
            <h2>Compromissos</h2>
            <p>Listagem e filtros serao conectados a API FastAPI.</p>
          </section>
          <section className="panel">
            <h2>Prioridades</h2>
            <p>Plano de prioridades sera calculado pelo backend.</p>
          </section>
        </div>
      </section>
    </main>
  );
}
