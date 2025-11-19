import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    localStorage.clear('Usuario');
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // Mostrar modal
    setShowModal(true);

    // Esperar 2 segundos y redirigir
    setTimeout(() => {
      setShowModal(false);
      localStorage.setItem('Usuario', usuario);
      window.dispatchEvent(new Event('storage'));
      navigate('/horarios');
    }, 2000);
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center bg-dark">
      <div className="container">
        <div className="row justify-content-center">
          {/* CARD PRINCIPAL */}
          <h1 className="text-center text-white fs-1 fw-bolder py-3 ">
            GIMNASIO BIO FORMAT
          </h1>

          <div className="col-md-10 col-lg-8 shadow-lg p-0 d-flex rounded overflow-hidden">
            {/* IMAGEN */}
            <div className="col-md-6 d-none d-md-block p-0">
              <img
                src="https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                className="img-fluid h-100"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* FORMULARIO */}
            <div className="col-md-6 bg-dark text-light p-5">
              <h2 className="fw-bold mb-4">Bienvenido</h2>
              <p className="text-secondary mb-4">
                Inicia sesión para acceder a tu panel de turnos.
              </p>

              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label">Usuario</label>
                  <input
                    type="text"
                    className="form-control"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button className="btn btn-primary w-100 mt-3">Ingresar</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL BOOTSTRAP FAKE */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: 'block', background: 'rgba(0,0,0,0.6)' }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content bg-dark text-light">
              <div className="modal-header border-secondary">
                <h5 className="modal-title">Ingresando...</h5>
              </div>

              <div className="modal-body text-center">
                <div className="spinner-border text-primary mb-3" />
                <p>Validando usuario, por favor espere.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
