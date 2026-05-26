"use client";

import { APPOINTMENT_TYPES, PRIORITIES, STATUSES } from "@/constants";

export default function Filters({ filters, onFilterChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onFilterChange({ [name]: value });
  };

  return (
    <div className="filters-container">
      <div className="filter-group">
        <label htmlFor="filter-disciplina">Disciplina</label>
        <input
          type="text"
          id="filter-disciplina"
          name="disciplina"
          value={filters.disciplina || ""}
          onChange={handleChange}
          placeholder="Ex: Matemática"
        />
      </div>

      <div className="filter-group">
        <label htmlFor="filter-tipo">Tipo</label>
        <select
          id="filter-tipo"
          name="tipo"
          value={filters.tipo || ""}
          onChange={handleChange}
        >
          <option value="">Todos</option>
          {APPOINTMENT_TYPES.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="filter-prioridade">Prioridade</label>
        <select
          id="filter-prioridade"
          name="prioridade"
          value={filters.prioridade || ""}
          onChange={handleChange}
        >
          <option value="">Todas</option>
          {PRIORITIES.map((p) => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="filter-status">Status</label>
        <select
          id="filter-status"
          name="status"
          value={filters.status || ""}
          onChange={handleChange}
        >
          <option value="">Todos</option>
          {STATUSES.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
