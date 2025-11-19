import { useState } from 'react';

export default function HorariosClases() {
  const [sucursal, setSucursal] = useState('');
  const [clase, setClase] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [diaSeleccionado, setDiaSeleccionado] = useState('');

  const sucursales = ['Sucursal Centro', 'Sucursal Norte', 'Sucursal Sur'];
  const clases = ['Yoga', 'Pilates'];
  const diasSemana = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];

  // BASE DE HORARIOS (como lo tenías)
  const horariosBase = [
    {
      hora: '08:00 - 09:00',
      instructor: 'Sofia',
      cupos: 10,
      clase: 'Yoga',
      dia: 'Lunes',
      sucursal: 'Sucursal Centro',
    },
    {
      hora: '09:30 - 11:00',
      instructor: 'Diego',
      cupos: 12,
      clase: 'Pilates',
      dia: 'Lunes',
      sucursal: 'Sucursal Centro',
    },
    {
      hora: '12:00 - 13:00',
      instructor: 'Sofia',
      cupos: 8,
      clase: 'Yoga',
      dia: 'Lunes',
      sucursal: 'Sucursal Norte',
    },
    {
      hora: '17:00 - 18:30',
      instructor: 'Diego',
      cupos: 15,
      clase: 'Pilates',
      dia: 'Lunes',
      sucursal: 'Sucursal Sur',
    },
    {
      hora: '19:00 - 20:00',
      instructor: 'Sofia',
      cupos: 10,
      clase: 'Yoga',
      dia: 'Lunes',
      sucursal: 'Sucursal Centro',
    },

    // MARTES
    {
      hora: '08:00 - 09:00',
      instructor: 'Sofia',
      cupos: 12,
      clase: 'Pilates',
      dia: 'Martes',
      sucursal: 'Sucursal Sur',
    },
    {
      hora: '09:30 - 11:00',
      instructor: 'Diego',
      cupos: 10,
      clase: 'Yoga',
      dia: 'Martes',
      sucursal: 'Sucursal Norte',
    },
    {
      hora: '12:00 - 13:00',
      instructor: 'Diego',
      cupos: 14,
      clase: 'Pilates',
      dia: 'Martes',
      sucursal: 'Sucursal Centro',
    },
    {
      hora: '17:00 - 18:00',
      instructor: 'Sofia',
      cupos: 9,
      clase: 'Yoga',
      dia: 'Martes',
      sucursal: 'Sucursal Norte',
    },
    {
      hora: '19:00 - 20:00',
      instructor: 'Sofia',
      cupos: 13,
      clase: 'Pilates',
      dia: 'Martes',
      sucursal: 'Sucursal Centro',
    },

    // MIÉRCOLES
    {
      hora: '08:00 - 09:00',
      instructor: 'Sofia',
      cupos: 11,
      clase: 'Yoga',
      dia: 'Miércoles',
      sucursal: 'Sucursal Centro',
    },
    {
      hora: '09:30 - 11:00',
      instructor: 'Diego',
      cupos: 16,
      clase: 'Pilates',
      dia: 'Miércoles',
      sucursal: 'Sucursal Sur',
    },
    {
      hora: '12:00 - 13:00',
      instructor: 'Sofia',
      cupos: 7,
      clase: 'Yoga',
      dia: 'Miércoles',
      sucursal: 'Sucursal Norte',
    },
    {
      hora: '17:00 - 18:30',
      instructor: 'Diego',
      cupos: 15,
      clase: 'Pilates',
      dia: 'Miércoles',
      sucursal: 'Sucursal Centro',
    },
    {
      hora: '19:00 - 20:00',
      instructor: 'Diego',
      cupos: 8,
      clase: 'Yoga',
      dia: 'Miércoles',
      sucursal: 'Sucursal Sur',
    },

    // JUEVES
    {
      hora: '08:00 - 09:00',
      instructor: 'Sofia',
      cupos: 12,
      clase: 'Pilates',
      dia: 'Jueves',
      sucursal: 'Sucursal Centro',
    },
    {
      hora: '09:30 - 11:00',
      instructor: 'Diego',
      cupos: 9,
      clase: 'Yoga',
      dia: 'Jueves',
      sucursal: 'Sucursal Norte',
    },
    {
      hora: '12:00 - 13:00',
      instructor: 'Sofia',
      cupos: 10,
      clase: 'Pilates',
      dia: 'Jueves',
      sucursal: 'Sucursal Sur',
    },
    {
      hora: '17:00 - 18:00',
      instructor: 'Sofia',
      cupos: 12,
      clase: 'Yoga',
      dia: 'Jueves',
      sucursal: 'Sucursal Centro',
    },
    {
      hora: '19:00 - 20:00',
      instructor: 'Diego',
      cupos: 11,
      clase: 'Pilates',
      dia: 'Jueves',
      sucursal: 'Sucursal Norte',
    },

    // VIERNES
    {
      hora: '08:00 - 09:00',
      instructor: 'Diego',
      cupos: 15,
      clase: 'Yoga',
      dia: 'Viernes',
      sucursal: 'Sucursal Centro',
    },
    {
      hora: '09:30 - 11:00',
      instructor: 'Sofia',
      cupos: 14,
      clase: 'Pilates',
      dia: 'Viernes',
      sucursal: 'Sucursal Sur',
    },
    {
      hora: '12:00 - 13:00',
      instructor: 'Sofia',
      cupos: 9,
      clase: 'Yoga',
      dia: 'Viernes',
      sucursal: 'Sucursal Norte',
    },
    {
      hora: '17:00 - 18:00',
      instructor: 'Diego',
      cupos: 8,
      clase: 'Pilates',
      dia: 'Viernes',
      sucursal: 'Sucursal Centro',
    },
    {
      hora: '19:00 - 20:00',
      instructor: 'Sofia',
      cupos: 10,
      clase: 'Yoga',
      dia: 'Viernes',
      sucursal: 'Sucursal Sur',
    },

    // SÁBADO
    {
      hora: '09:00 - 10:00',
      instructor: 'Sofia',
      cupos: 20,
      clase: 'Yoga',
      dia: 'Sábado',
      sucursal: 'Sucursal Centro',
    },
    {
      hora: '10:30 - 11:30',
      instructor: 'Diego',
      cupos: 18,
      clase: 'Pilates',
      dia: 'Sábado',
      sucursal: 'Sucursal Norte',
    },
    {
      hora: '12:00 - 13:00',
      instructor: 'Diego',
      cupos: 14,
      clase: 'Yoga',
      dia: 'Sábado',
      sucursal: 'Sucursal Sur',
    },
  ];

  const horariosConId = horariosBase.map((item, index) => ({
    ...item,
    id: index + 1,
  }));
  const [horariosFake, setHorariosFake] = useState(horariosConId);

  const handleCalendarClick = (dayNumber) => {
    const nuevaFecha = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      dayNumber
    );

    setSelectedDate(nuevaFecha);

    const dayName = nuevaFecha.toLocaleString('es-ES', { weekday: 'long' });
    const capitalizado = dayName.charAt(0).toUpperCase() + dayName.slice(1);

    setDiaSeleccionado(capitalizado);
  };

  const handlePrevMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)
    );
  };

  const openModal = (item) => {
    setModalData(item);
    setShowModal(true);
  };

  const confirmarReserva = () => {
    if (!modalData) return;

    const nuevos = horariosFake.map((h) =>
      h.id === modalData.id ? { ...h, cupos: h.cupos - 1 } : h
    );

    setHorariosFake(nuevos);
    setShowModal(false);
  };

  const daysInMonth = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth() + 1,
    0
  ).getDate();
  const monthName = selectedDate.toLocaleString('es-ES', { month: 'long' });

  const horariosFiltrados = horariosFake.filter((h) => {
    const coincideSucursal = sucursal ? h.sucursal === sucursal : true;
    const coincideClase = clase ? h.clase === clase : true;
    const coincideDia = diaSeleccionado ? h.dia === diaSeleccionado : true;
    return coincideSucursal && coincideClase && coincideDia;
  });

  return (
    <div className="container py-4">
      <h3 className="fw-bold mb-1">Horarios de Clases</h3>
      <p className="text-muted mb-4">
        Selecciona filtros para ver horarios disponibles.
      </p>

      {/* FILTROS */}
      <div className="row mb-4 g-3">
        {/* Sucursal */}
        <div className="col-md-4">
          <label className="form-label fw-semibold">Sucursal</label>
          <select
            className="form-select shadow-sm"
            value={sucursal}
            onChange={(e) => setSucursal(e.target.value)}
          >
            <option value="">Seleccione</option>
            {sucursales.map((s, idx) => (
              <option key={idx} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Clase */}
        <div className="col-md-4">
          <label className="form-label fw-semibold">Clase</label>
          <select
            className="form-select shadow-sm"
            value={clase}
            onChange={(e) => setClase(e.target.value)}
          >
            <option value="">Seleccione</option>
            {clases.map((c, idx) => (
              <option key={idx} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* Día */}
        <div className="col-md-4">
          <label className="form-label fw-semibold">Día</label>
          <select
            className="form-select shadow-sm"
            value={diaSeleccionado}
            onChange={(e) => setDiaSeleccionado(e.target.value)}
          >
            <option value="">Seleccione</option>
            {diasSemana.map((d, idx) => (
              <option key={idx} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* CALENDARIO */}
      <div className="card shadow-sm p-3 mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <button className="btn btn-light" onClick={handlePrevMonth}>
            ◀
          </button>
          <h5 className="text-capitalize">
            {monthName} {selectedDate.getFullYear()}
          </h5>
          <button className="btn btn-light" onClick={handleNextMonth}>
            ▶
          </button>
        </div>

        <div className="d-flex flex-wrap calendar-container">
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => (
            <div
              key={d}
              onClick={() => handleCalendarClick(d)}
              className={`calendar-day ${
                d === selectedDate.getDate() ? 'active-day' : ''
              }`}
            >
              {d}
            </div>
          ))}
        </div>
      </div>

      {/* TABLA */}
      <h5 className="fw-bold mb-3">Clases Disponibles</h5>

      <div className="table-responsive">
        <table className="table table-bordered shadow-sm">
          <thead className="table-light">
            <tr>
              <th>Hora</th>
              <th>Sucursal</th>
              <th>Instructor</th>
              <th>Cupos</th>
              <th>Clase</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {horariosFiltrados.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center text-muted py-3">
                  No hay clases para este día
                </td>
              </tr>
            ) : (
              horariosFiltrados.map((h) => (
                <tr key={h.id}>
                  <td>{h.hora}</td>
                  <td>{h.sucursal}</td>
                  <td>{h.instructor}</td>
                  <td>{h.cupos}</td>
                  <td>{h.clase}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm"
                      disabled={h.cupos === 0}
                      onClick={() => openModal(h)}
                    >
                      Reservar
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showModal && modalData && (
        <div
          className="modal fade show"
          style={{ display: 'block', background: 'rgba(0,0,0,0.4)' }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmar Reserva</h5>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                <p>¿Confirmar reserva de:</p>
                <p className="fw-bold">{modalData.clase}</p>
                <p>
                  <strong>Hora:</strong> {modalData.hora}
                </p>
                <p>
                  <strong>Instructor:</strong> {modalData.instructor}
                </p>
                <p>
                  <strong>Día:</strong> {modalData.dia}
                </p>
                <p className="fw-bold mt-3">
                  Cupos disponibles: {modalData.cupos}
                </p>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button className="btn btn-success" onClick={confirmarReserva}>
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
