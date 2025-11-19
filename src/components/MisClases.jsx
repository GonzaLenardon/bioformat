import { useState } from 'react';

export default function MisClases() {
  const usuario = {
    nombre: 'Juan',
    apellido: 'Pérez',
  };

  // ---- 10 registros del historial resumido ----
  const historialClases = [
    // ---- ENERO a JULIO (Yoga con 4 a 6 asistencias) ----
    { id: 1, anio: 2025, mes: 'Enero', clase: 'Yoga', asistencia: 5 },
    { id: 2, anio: 2025, mes: 'Febrero', clase: 'Yoga', asistencia: 4 },
    { id: 3, anio: 2025, mes: 'Marzo', clase: 'Yoga', asistencia: 6 },
    { id: 4, anio: 2025, mes: 'Abril', clase: 'Yoga', asistencia: 5 },
    { id: 5, anio: 2025, mes: 'Mayo', clase: 'Yoga', asistencia: 4 },
    { id: 6, anio: 2025, mes: 'Junio', clase: 'Yoga', asistencia: 6 },
    { id: 7, anio: 2025, mes: 'Julio', clase: 'Yoga', asistencia: 5 },

    // ---- AGOSTO a DICIEMBRE (Yoga & Pilates con 2 o 3 asistencias) ----
    { id: 8, anio: 2025, mes: 'Agosto', clase: 'Yoga', asistencia: 3 },
    { id: 9, anio: 2025, mes: 'Agosto', clase: 'Pilates', asistencia: 2 },

    { id: 10, anio: 2025, mes: 'Septiembre', clase: 'Yoga', asistencia: 2 },
    { id: 11, anio: 2025, mes: 'Septiembre', clase: 'Pilates', asistencia: 3 },

    { id: 12, anio: 2025, mes: 'Octubre', clase: 'Yoga', asistencia: 3 },
    { id: 13, anio: 2025, mes: 'Octubre', clase: 'Pilates', asistencia: 2 },

    { id: 14, anio: 2025, mes: 'Noviembre', clase: 'Yoga', asistencia: 2 },
    { id: 15, anio: 2025, mes: 'Noviembre', clase: 'Pilates', asistencia: 3 },

    { id: 16, anio: 2025, mes: 'Diciembre', clase: 'Yoga', asistencia: 3 },
    { id: 17, anio: 2025, mes: 'Diciembre', clase: 'Pilates', asistencia: 2 },
  ];

  // ---- 20 registros de detalle (se pueden repetir por mes/clase) ----
  const detallesFake = [
    // ---- ENERO (Yoga - 5 asistencias) ----
    { fecha: '2025-01-03', hora: '10:00', clase: 'Yoga', mes: 'Enero' },
    { fecha: '2025-01-08', hora: '10:00', clase: 'Yoga', mes: 'Enero' },
    { fecha: '2025-01-12', hora: '10:00', clase: 'Yoga', mes: 'Enero' },
    { fecha: '2025-01-18', hora: '10:00', clase: 'Yoga', mes: 'Enero' },
    { fecha: '2025-01-25', hora: '10:00', clase: 'Yoga', mes: 'Enero' },

    // ---- FEBRERO (Yoga - 4 asistencias) ----
    { fecha: '2025-02-02', hora: '10:00', clase: 'Yoga', mes: 'Febrero' },
    { fecha: '2025-02-07', hora: '10:00', clase: 'Yoga', mes: 'Febrero' },
    { fecha: '2025-02-14', hora: '10:00', clase: 'Yoga', mes: 'Febrero' },
    { fecha: '2025-02-21', hora: '10:00', clase: 'Yoga', mes: 'Febrero' },

    // ---- MARZO (Yoga - 6 asistencias) ----
    { fecha: '2025-03-01', hora: '10:00', clase: 'Yoga', mes: 'Marzo' },
    { fecha: '2025-03-05', hora: '10:00', clase: 'Yoga', mes: 'Marzo' },
    { fecha: '2025-03-10', hora: '10:00', clase: 'Yoga', mes: 'Marzo' },
    { fecha: '2025-03-15', hora: '10:00', clase: 'Yoga', mes: 'Marzo' },
    { fecha: '2025-03-20', hora: '10:00', clase: 'Yoga', mes: 'Marzo' },
    { fecha: '2025-03-27', hora: '10:00', clase: 'Yoga', mes: 'Marzo' },

    // ---- ABRIL (Yoga - 5 asistencias) ----
    { fecha: '2025-04-03', hora: '10:00', clase: 'Yoga', mes: 'Abril' },
    { fecha: '2025-04-07', hora: '10:00', clase: 'Yoga', mes: 'Abril' },
    { fecha: '2025-04-11', hora: '10:00', clase: 'Yoga', mes: 'Abril' },
    { fecha: '2025-04-17', hora: '10:00', clase: 'Yoga', mes: 'Abril' },
    { fecha: '2025-04-24', hora: '10:00', clase: 'Yoga', mes: 'Abril' },

    // ---- MAYO (Yoga - 4 asistencias) ----
    { fecha: '2025-05-02', hora: '10:00', clase: 'Yoga', mes: 'Mayo' },
    { fecha: '2025-05-06', hora: '10:00', clase: 'Yoga', mes: 'Mayo' },
    { fecha: '2025-05-15', hora: '10:00', clase: 'Yoga', mes: 'Mayo' },
    { fecha: '2025-05-22', hora: '10:00', clase: 'Yoga', mes: 'Mayo' },

    // ---- JUNIO (Yoga - 6 asistencias) ----
    { fecha: '2025-06-01', hora: '10:00', clase: 'Yoga', mes: 'Junio' },
    { fecha: '2025-06-05', hora: '10:00', clase: 'Yoga', mes: 'Junio' },
    { fecha: '2025-06-10', hora: '10:00', clase: 'Yoga', mes: 'Junio' },
    { fecha: '2025-06-15', hora: '10:00', clase: 'Yoga', mes: 'Junio' },
    { fecha: '2025-06-22', hora: '10:00', clase: 'Yoga', mes: 'Junio' },
    { fecha: '2025-06-28', hora: '10:00', clase: 'Yoga', mes: 'Junio' },

    // ---- JULIO (Yoga - 5 asistencias) ----
    { fecha: '2025-07-03', hora: '10:00', clase: 'Yoga', mes: 'Julio' },
    { fecha: '2025-07-08', hora: '10:00', clase: 'Yoga', mes: 'Julio' },
    { fecha: '2025-07-14', hora: '10:00', clase: 'Yoga', mes: 'Julio' },
    { fecha: '2025-07-20', hora: '10:00', clase: 'Yoga', mes: 'Julio' },
    { fecha: '2025-07-27', hora: '10:00', clase: 'Yoga', mes: 'Julio' },

    // ---- AGOSTO ----
    // Yoga (3)
    { fecha: '2025-08-03', hora: '09:00', clase: 'Yoga', mes: 'Agosto' },
    { fecha: '2025-08-10', hora: '09:00', clase: 'Yoga', mes: 'Agosto' },
    { fecha: '2025-08-18', hora: '09:00', clase: 'Yoga', mes: 'Agosto' },

    // Pilates (2)
    { fecha: '2025-08-05', hora: '11:00', clase: 'Pilates', mes: 'Agosto' },
    { fecha: '2025-08-22', hora: '11:00', clase: 'Pilates', mes: 'Agosto' },

    // ---- SEPTIEMBRE ----
    // Yoga (2)
    { fecha: '2025-09-04', hora: '09:00', clase: 'Yoga', mes: 'Septiembre' },
    { fecha: '2025-09-18', hora: '09:00', clase: 'Yoga', mes: 'Septiembre' },

    // Pilates (3)
    { fecha: '2025-09-02', hora: '11:00', clase: 'Pilates', mes: 'Septiembre' },
    { fecha: '2025-09-10', hora: '11:00', clase: 'Pilates', mes: 'Septiembre' },
    { fecha: '2025-09-24', hora: '11:00', clase: 'Pilates', mes: 'Septiembre' },

    // ---- OCTUBRE ----
    // Yoga (3)
    { fecha: '2025-10-03', hora: '09:00', clase: 'Yoga', mes: 'Octubre' },
    { fecha: '2025-10-12', hora: '09:00', clase: 'Yoga', mes: 'Octubre' },
    { fecha: '2025-10-25', hora: '09:00', clase: 'Yoga', mes: 'Octubre' },

    // Pilates (2)
    { fecha: '2025-10-05', hora: '11:00', clase: 'Pilates', mes: 'Octubre' },
    { fecha: '2025-10-19', hora: '11:00', clase: 'Pilates', mes: 'Octubre' },

    // ---- NOVIEMBRE ----
    // Yoga (2)
    { fecha: '2025-11-04', hora: '09:00', clase: 'Yoga', mes: 'Noviembre' },
    { fecha: '2025-11-20', hora: '09:00', clase: 'Yoga', mes: 'Noviembre' },

    // Pilates (3)
    { fecha: '2025-11-02', hora: '11:00', clase: 'Pilates', mes: 'Noviembre' },
    { fecha: '2025-11-11', hora: '11:00', clase: 'Pilates', mes: 'Noviembre' },
    { fecha: '2025-11-27', hora: '11:00', clase: 'Pilates', mes: 'Noviembre' },

    // ---- DICIEMBRE ----
    // Yoga (3)
    { fecha: '2025-12-03', hora: '09:00', clase: 'Yoga', mes: 'Diciembre' },
    { fecha: '2025-12-09', hora: '09:00', clase: 'Yoga', mes: 'Diciembre' },
    { fecha: '2025-12-21', hora: '09:00', clase: 'Yoga', mes: 'Diciembre' },

    // Pilates (2)
    { fecha: '2025-12-05', hora: '11:00', clase: 'Pilates', mes: 'Diciembre' },
    { fecha: '2025-12-18', hora: '11:00', clase: 'Pilates', mes: 'Diciembre' },
  ];

  const [modal, setModal] = useState(false);
  const [detalleSeleccionado, setDetalleSeleccionado] = useState([]);

  const abrirDetalle = (mes, clase) => {
    const filtrado = detallesFake.filter(
      (d) => d.mes === mes && d.clase === clase
    );
    setDetalleSeleccionado(filtrado);
    setModal(true);
  };

  return (
    <div className="container mt-4">
      <h2 className="fw-bold">
        Mis Clases – {usuario.nombre} {usuario.apellido}
      </h2>

      {/* TABLA PRINCIPAL */}
      <div className="table-responsive mt-4">
        <table className="table table-bordered table-hover shadow-sm">
          <thead className="table-dark text-center">
            <tr>
              <th>Año</th>
              <th>Mes</th>
              <th>Clase</th>
              <th>Asistencias</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {historialClases.map((h) => (
              <tr key={h.id}>
                <td>{h.anio}</td>
                <td>{h.mes}</td>
                <td>{h.clase}</td>
                <td>{h.asistencia}</td>
                <td>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => abrirDetalle(h.mes, h.clase)}
                  >
                    Ver Detalle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL DETALLE */}
      {modal && (
        <div
          className="modal fade show"
          style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header bg-dark text-white">
                <h5 className="modal-title">
                  Detalle de Asistencias ({detalleSeleccionado[0]?.mes})
                </h5>
                <button
                  className="btn-close btn-close-white"
                  onClick={() => setModal(false)}
                />
              </div>

              <div className="modal-body">
                <table className="table table-striped text-center">
                  <thead>
                    <tr>
                      <th>Fecha</th>
                      <th>Hora</th>
                      <th>Clase</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detalleSeleccionado.map((d, i) => (
                      <tr key={i}>
                        <td>{d.fecha}</td>
                        <td>{d.hora}</td>
                        <td>{d.clase}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setModal(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
