export default function UsuarioModal({ usuario, onClose }) {
  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ background: 'rgba(0,0,0,0.6)', zIndex: 9999 }}
    >
      <div
        className="bg-white p-4 rounded shadow"
        style={{ width: '600px', maxHeight: '90vh', overflowY: 'auto' }}
      >
        <h3 className="fw-bold mb-3">
          {usuario.nombre} {usuario.apellido}
        </h3>

        <h5 className="fw-semibold mt-4">Asistencias registradas</h5>
        <ul className="list-group">
          {usuario.asistencias.map((a, idx) => (
            <li key={idx} className="list-group-item">
              <strong>{a.fecha}</strong> — {a.clase} ({a.sucursal})
            </li>
          ))}
        </ul>

        <button className="btn btn-danger w-100 mt-4" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
}
