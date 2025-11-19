import { useEffect, useState } from 'react';

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('Usuario');
    setUser(storedUser);

    const handleStorage = () => {
      setUser(localStorage.getItem('Usuario'));
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const logout = () => {
    localStorage.removeItem('Usuario');
    setUser(null);
    window.location.href = '/';
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark px-3">
      <a className="navbar-brand fw-bold" href="/">
        Bio Forma
      </a>

      <div className="collapse navbar-collapse">
        {user && (
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
            {/* <li className="nav-item">
              <a className="nav-link fw-semibold" href="/">
                Inicio
              </a>
            </li>
 */}
            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/horarios">
                Turnos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link fw-semibold" href="/misclases">
                Mis Clases
              </a>
            </li>

            {/* ADMIN */}
            {user?.toLowerCase() === 'admin' && (
              <>
                <li className="nav-item">
                  <a className="nav-link fw-semibold" href="/clientes">
                    Clientes
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link fw-semibold" href="/admin">
                    Clases
                  </a>
                </li>
              </>
            )}

            <li className="nav-item d-flex align-items-center gap-2">
              <img
                src="https://i.pravatar.cc/40"
                alt="perfil"
                className="rounded-circle"
                style={{ width: '40px', height: '40px' }}
              />
              <strong className="text-white">{user}</strong>
              <button
                className="btn btn-sm btn-outline-light ms-2"
                onClick={logout}
              >
                Logout
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
