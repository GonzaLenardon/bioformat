import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AdminClases() {
  const sucursales = ['Sucursal Centro', 'Sucursal Norte', 'Sucursal Sur'];
  const clases = ['Yoga', 'Pilates'];
  const profesores = ['Sofía', 'Diego', 'Martín', 'Laura'];

  // Datos de ejemplo
  const [listaClases, setListaClases] = useState([
    {
      id: 1,
      sucursal: 'Sucursal Centro',
      clase: 'Yoga',
      horario: '08:00 AM - 09:00 AM',
      profesor: 'Sofía',
      cupos: 12,
    },
    {
      id: 2,
      sucursal: 'Sucursal Norte',
      clase: 'Pilates',
      horario: '18:00 PM - 19:00 PM',
      profesor: 'Diego',
      cupos: 15,
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [claseEdit, setClaseEdit] = useState(null);

  const [form, setForm] = useState({
    sucursal: '',
    clase: '',
    horario: '',
    profesor: '',
    cupos: '',
  });

  const abrirNuevo = () => {
    setModoEdicion(false);
    setForm({
      sucursal: '',
      clase: '',
      horario: '',
      profesor: '',
      cupos: '',
    });
    setShowModal(true);
  };

  const abrirEdicion = (clase) => {
    setModoEdicion(true);
    setClaseEdit(clase);
    setForm(clase);
    setShowModal(true);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const guardarClase = () => {
    if (modoEdicion) {
      setListaClases(
        listaClases.map((c) => (c.id === claseEdit.id ? { ...c, ...form } : c))
      );
    } else {
      const nueva = {
        id: Date.now(),
        ...form,
      };
      setListaClases([...listaClases, nueva]);
    }
    setShowModal(false);
  };

  const eliminarClase = (id) => {
    if (confirm('¿Eliminar esta clase?')) {
      setListaClases(listaClases.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="container py-4">
      <h3 className="fw-bold mb-3">Administración de Clases</h3>
      <p className="text-muted">
        Crea, modifica o elimina clases en las distintas sucursales.
      </p>

      {/* Botón Crear */}
      <button className="btn btn-primary mb-3" onClick={abrirNuevo}>
        + Nueva Clase
      </button>

      {/* Tabla */}
      <div className="table-responsive">
        <table className="table table-bordered shadow-sm">
          <thead className="table-light">
            <tr>
              <th>Sucursal</th>
              <th>Clase</th>
              <th>Horario</th>
              <th>Profesor</th>
              <th>Cupos</th>
              <th style={{ width: '150px' }}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listaClases.map((c) => (
              <tr key={c.id}>
                <td>{c.sucursal}</td>
                <td>{c.clase}</td>
                <td>{c.horario}</td>
                <td>{c.profesor}</td>
                <td>{c.cupos}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => abrirEdicion(c)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => eliminarClase(c.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal show fade d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content shadow">
              <div className="modal-header">
                <h5 className="modal-title">
                  {modoEdicion ? 'Editar Clase' : 'Nueva Clase'}
                </h5>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                {/* Sucursal */}
                <label className="form-label fw-semibold">Sucursal</label>
                <select
                  className="form-select mb-3"
                  name="sucursal"
                  value={form.sucursal}
                  onChange={handleChange}
                >
                  <option value="">Seleccione</option>
                  {sucursales.map((s, i) => (
                    <option key={i} value={s}>
                      {s}
                    </option>
                  ))}
                </select>

                {/* Clase */}
                <label className="form-label fw-semibold">Clase</label>
                <select
                  className="form-select mb-3"
                  name="clase"
                  value={form.clase}
                  onChange={handleChange}
                >
                  <option value="">Seleccione</option>
                  {clases.map((c, i) => (
                    <option key={i} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

                {/* Horario */}
                <label className="form-label fw-semibold">Horario</label>
                <input
                  type="text"
                  name="horario"
                  className="form-control mb-3"
                  placeholder="Ej: 08:00 AM - 09:00 AM"
                  value={form.horario}
                  onChange={handleChange}
                />

                {/* Profesor */}
                <label className="form-label fw-semibold">Profesor</label>
                <select
                  name="profesor"
                  className="form-select mb-3"
                  value={form.profesor}
                  onChange={handleChange}
                >
                  <option value="">Seleccione</option>
                  {profesores.map((p, i) => (
                    <option key={i} value={p}>
                      {p}
                    </option>
                  ))}
                </select>

                {/* Cupos */}
                <label className="form-label fw-semibold">Cupos</label>
                <input
                  type="number"
                  name="cupos"
                  className="form-control mb-3"
                  value={form.cupos}
                  onChange={handleChange}
                />
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button className="btn btn-primary" onClick={guardarClase}>
                  {modoEdicion ? 'Guardar Cambios' : 'Crear Clase'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
