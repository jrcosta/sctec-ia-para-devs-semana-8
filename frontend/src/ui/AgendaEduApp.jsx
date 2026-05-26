"use client";

import { useState, useEffect, useCallback } from "react";
import { getAppointments, createAppointment, getPriorityPlan } from "@/lib/http/agendaedu-api";
import AppointmentForm from "./components/AppointmentForm.jsx";
import AppointmentList from "./components/AppointmentList.jsx";
import Filters from "./components/Filters.jsx";
import PriorityPlan from "./components/PriorityPlan.jsx";

export default function AgendaEduApp() {
  const [appointments, setAppointments] = useState([]);
  const [priorityPlan, setPriorityPlan] = useState([]);
  const [filters, setFilters] = useState({});
  const [isLoadingList, setIsLoadingList] = useState(false);
  const [isLoadingPlan, setIsLoadingPlan] = useState(false);
  const [errorList, setErrorList] = useState(null);
  const [errorPlan, setErrorPlan] = useState(null);

  const fetchData = useCallback(async (currentFilters) => {
    setIsLoadingList(true);
    setIsLoadingPlan(true);
    setErrorList(null);
    setErrorPlan(null);

    try {
      const appointmentsData = await getAppointments(currentFilters);
      setAppointments(appointmentsData.items || []);
    } catch (err) {
      setErrorList(err.message);
    } finally {
      setIsLoadingList(false);
    }

    try {
      const planData = await getPriorityPlan(currentFilters);
      setPriorityPlan(planData.prioridades || []);
    } catch (err) {
      setErrorPlan(err.message);
    } finally {
      setIsLoadingPlan(false);
    }
  }, []);

  useEffect(() => {
    fetchData(filters);
  }, [filters, fetchData]);

  const handleCreateAppointment = async (formData) => {
    try {
      await createAppointment(formData);
      fetchData(filters); // Refresh list and plan
    } catch (err) {
      alert(`Erro ao criar compromisso: ${err.message}`);
    }
  };

  const handleFilterChange = (newFilter) => {
    setFilters((prev) => ({ ...prev, ...newFilter }));
  };

  return (
    <main className="app-shell">
      <section className="workspace">
        <header>
          <p className="eyebrow">Agenda escolar</p>
          <h1>AgendaEdu</h1>
          <p>
            Plataforma inteligente para gestão e priorização de compromissos escolares.
          </p>
        </header>

        <div className="panel-grid">
          <section className="panel scrollable">
            <h2>Novo Compromisso</h2>
            <AppointmentForm onSubmit={handleCreateAppointment} />
          </section>

          <section className="panel scrollable">
            <div className="panel-header">
              <h2>Compromissos</h2>
            </div>
            <Filters filters={filters} onFilterChange={handleFilterChange} />
            <AppointmentList 
              appointments={appointments} 
              isLoading={isLoadingList} 
              error={errorList} 
            />
          </section>

          <section className="panel scrollable">
            <h2>Plano de Prioridades</h2>
            <PriorityPlan 
              plan={priorityPlan} 
              isLoading={isLoadingPlan} 
              error={errorPlan} 
            />
          </section>
        </div>
      </section>
    </main>
  );
}
