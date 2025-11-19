import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Horarios from './pages/Horarios';
import AdminClases from './components/AdminClases';
import Clientes from './components/Clientes';
import Usuarios from './components/Usuarios';
import MisClases from './components/MisClases';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="pt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/horarios" element={<Horarios />} />
          <Route path="/admin" element={<AdminClases />} />
          <Route path="/clientes" element={<Usuarios />} />
          <Route path="/misclases" element={<MisClases />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
