"use client";

import { useState } from "react";
import { APPOINTMENT_TYPES, PRIORITIES, STATUSES } from "@/constants";

export default function AppointmentForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    disciplina: "",
    tipo: "tarefa",
    data: new Date().toISOString().split("T")[0],
    prioridade: "media",
    status: "pendente",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form
    setFormData({
      titulo: "",
      descricao: "",
      disciplina: "",
      tipo: "tarefa",
      data: new Date().toISOString().split("T")[0],
      prioridade: "media",
      status: "pendente",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="appointment-form">
      <div className="form-group">
        <label htmlFor="titulo">Título</label>
        <input
          type="text"
          id="titulo"
          name="titulo"
          value={formData.titulo}
          onChange={handleChange}
          required
          minLength={3}
        />
      </div>

      <div className="form-group">
        <label htmlFor="disciplina">Disciplina</label>
        <input
          type="text"
          id="disciplina"
          name="disciplina"
          value={formData.disciplina}
          onChange={handleChange}
          required
          minLength={2}
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="tipo">Tipo</label>
          <select id="tipo" name="tipo" value={formData.tipo} onChange={handleChange}>
            {APPOINTMENT_TYPES.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="data">Data</label>
          <input
            type="date"
            id="data"
            name="data"
            value={formData.data}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="prioridade">Prioridade</label>
          <select
            id="prioridade"
            name="prioridade"
            value={formData.prioridade}
            onChange={handleChange}
          >
            {PRIORITIES.map((p) => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select id="status" name="status" value={formData.status} onChange={handleChange}>
            {STATUSES.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="descricao">Descrição (Opcional)</label>
        <textarea
          id="descricao"
          name="descricao"
          value={formData.descricao}
          onChange={handleChange}
          rows={3}
        />
      </div>

      <button type="submit" className="btn-primary">Cadastrar Compromisso</button>
    </form>
  );
}
