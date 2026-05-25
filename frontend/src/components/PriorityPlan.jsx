export default function PriorityPlan({ plan, isLoading, error }) {
  if (isLoading) return <p className="loading">Calculando plano de prioridades...</p>;
  if (error) return <p className="error">Erro: {error}</p>;
  if (!plan || plan.length === 0) return <p className="empty">Nenhum dado para o plano de prioridades.</p>;

  return (
    <div className="priority-plan">
      <div className="plan-summary">
        <p>Este plano organiza seus compromissos por ordem de importância sugerida.</p>
      </div>
      <ol className="plan-list">
        {plan.map((item, index) => (
          <li key={item.id} className="plan-item">
            <div className="item-rank">#{index + 1}</div>
            <div className="item-content">
              <h4>{item.titulo} ({item.disciplina})</h4>
              <p className="item-score">Pontuação: <strong>{item.pontuacao}</strong></p>
              <p className="item-reason"><em>{item.motivo}</em></p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
