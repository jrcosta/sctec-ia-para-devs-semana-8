export default function AppointmentList({ appointments, isLoading, error }) {
  if (isLoading) return <p className="loading">Carregando compromissos...</p>;
  if (error) return <p className="error">Erro: {error}</p>;
  if (appointments.length === 0) return <p className="empty">Nenhum compromisso encontrado.</p>;

  return (
    <div className="appointment-list">
      {appointments.map((appointment) => (
        <div key={appointment.id} className="appointment-card">
          <div className="card-header">
            <h3>{appointment.titulo}</h3>
            <span className={`badge priority-${appointment.prioridade}`}>
              {appointment.prioridade}
            </span>
          </div>
          <div className="card-details">
            <p><strong>Disciplina:</strong> {appointment.disciplina}</p>
            <p><strong>Tipo:</strong> {appointment.tipo}</p>
            <p><strong>Data:</strong> {new Date(appointment.data).toLocaleDateString()}</p>
            <p><strong>Status:</strong> {appointment.status}</p>
          </div>
          {appointment.descricao && (
            <div className="card-description">
              <p>{appointment.descricao}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
