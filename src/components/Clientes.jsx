import { useState } from 'react';

export default function Clientes() {
  const [search, setSearch] = useState('');

  const clientes = [
    {
      id: 1,
      nombre: 'Ana Martínez',
      domicilio: 'San Martín 1450',
      telefono: '341-5551111',
      email: 'ana@gmail.com',
      dias: ['Lunes', 'Miércoles'],
      horarios: ['08:00', '19:00'],
      clases: ['Yoga'],
      sucursal: 'Sucursal Centro',
    },
    {
      id: 2,
      nombre: 'Juan Pérez',
      domicilio: 'Urquiza 223',
      telefono: '341-5552222',
      email: 'juanp@gmail.com',
      dias: ['Martes', 'Jueves'],
      horarios: ['18:00'],
      clases: ['Pilates'],
      sucursal: 'Sucursal Norte',
    },
    {
      id: 3,
      nombre: 'Carla Gómez',
      domicilio: 'Mitre 1020',
      telefono: '341-5553333',
      email: 'carla@gmail.com',
      dias: ['Lunes'],
      horarios: ['09:00'],
      clases: ['Yoga'],
      sucursal: 'Sucursal Centro',
    },
    {
      id: 4,
      nombre: 'Diego Romero',
      domicilio: 'Córdoba 2200',
      telefono: '341-5554444',
      email: 'diego@gmail.com',
      dias: ['Viernes'],
      horarios: ['17:00'],
      clases: ['Pilates'],
      sucursal: 'Sucursal Sur',
    },
    {
      id: 5,
      nombre: 'Lucía Fernández',
      domicilio: 'Santa Fe 980',
      telefono: '341-5555555',
      email: 'lucia@gmail.com',
      dias: ['Martes', 'Jueves'],
      horarios: ['10:00'],
      clases: ['Yoga', 'Pilates'],
      sucursal: 'Sucursal Centro',
    },
    {
      id: 6,
      nombre: 'Marcos Sosa',
      domicilio: 'España 234',
      telefono: '341-5556666',
      email: 'marcos@gmail.com',
      dias: ['Miércoles'],
      horarios: ['19:00'],
      clases: ['Pilates'],
      sucursal: 'Sucursal Norte',
    },
    {
      id: 7,
      nombre: 'Julia Medina',
      domicilio: 'Pellegrini 1800',
      telefono: '341-5557777',
      email: 'julia@gmail.com',
      dias: ['Lunes', 'Viernes'],
      horarios: ['18:00'],
      clases: ['Yoga'],
      sucursal: 'Sucursal Sur',
    },
    {
      id: 8,
      nombre: 'Pedro López',
      domicilio: 'Brown 700',
      telefono: '341-5558888',
      email: 'pedro@gmail.com',
      dias: ['Miércoles', 'Jueves'],
      horarios: ['20:00'],
      clases: ['Pilates'],
      sucursal: 'Sucursal Centro',
    },
    {
      id: 9,
      nombre: 'Rocío Díaz',
      domicilio: 'Francia 900',
      telefono: '341-5559999',
      email: 'rocio@gmail.com',
      dias: ['Martes'],
      horarios: ['17:00'],
      clases: ['Yoga'],
      sucursal: 'Sucursal Norte',
    },
    {
      id: 10,
      nombre: 'Mario Torres',
      domicilio: 'Mendoza 1200',
      telefono: '341-5550000',
      email: 'mario@gmail.com',
      dias: ['Lunes', 'Miércoles'],
      horarios: ['08:00'],
      clases: ['Pilates'],
      sucursal: 'Sucursal Centro',
    },
    {
      id: 11,
      nombre: 'Florencia Álvarez',
      domicilio: 'Italia 900',
      telefono: '341-5661111',
      email: 'flor@gmail.com',
      dias: ['Martes'],
      horarios: ['16:00'],
      clases: ['Yoga'],
      sucursal: 'Sucursal Sur',
    },
    {
      id: 12,
      nombre: 'Santiago Ruiz',
      domicilio: 'Corrientes 1300',
      telefono: '341-5662222',
      email: 'santiago@gmail.com',
      dias: ['Jueves'],
      horarios: ['18:00'],
      clases: ['Pilates'],
      sucursal: 'Sucursal Centro',
    },
    {
      id: 13,
      nombre: 'Nadia Herrera',
      domicilio: 'Dean Funes 450',
      telefono: '341-5663333',
      email: 'nadia@gmail.com',
      dias: ['Viernes'],
      horarios: ['19:00'],
      clases: ['Yoga'],
      sucursal: 'Sucursal Norte',
    },
    {
      id: 14,
      nombre: 'Ezequiel Castro',
      domicilio: 'Ov. Lagos 1450',
      telefono: '341-5664444',
      email: 'eze@gmail.com',
      dias: ['Lunes', 'Jueves'],
      horarios: ['09:00'],
      clases: ['Pilates'],
      sucursal: 'Sucursal Sur',
    },
    {
      id: 15,
      nombre: 'Paula Benítez',
      domicilio: 'Ayacucho 300',
      telefono: '341-5665555',
      email: 'paula@gmail.com',
      dias: ['Martes', 'Miércoles'],
      horarios: ['14:00'],
      clases: ['Yoga'],
      sucursal: 'Sucursal Centro',
    },
    {
      id: 16,
      nombre: 'Federico Acosta',
      domicilio: 'Sarmiento 1800',
      telefono: '341-5666666',
      email: 'fedee@gmail.com',
      dias: ['Jueves'],
      horarios: ['13:00'],
      clases: ['Pilates'],
      sucursal: 'Sucursal Norte',
    },
    {
      id: 17,
      nombre: 'Valeria López',
      domicilio: 'Belgrano 1100',
      telefono: '341-5667777',
      email: 'vale@gmail.com',
      dias: ['Miércoles', 'Viernes'],
      horarios: ['16:00'],
      clases: ['Yoga'],
      sucursal: 'Sucursal Centro',
    },
    {
      id: 18,
      nombre: 'Gustavo Rossi',
      domicilio: 'Pueyrredón 900',
      telefono: '341-5668888',
      email: 'gustavo@gmail.com',
      dias: ['Lunes'],
      horarios: ['19:30'],
      clases: ['Pilates'],
      sucursal: 'Sucursal Sur',
    },
    {
      id: 19,
      nombre: 'Milagros Serra',
      domicilio: 'España 2100',
      telefono: '341-5669999',
      email: 'mila@gmail.com',
      dias: ['Martes', 'Viernes'],
      horarios: ['10:00'],
      clases: ['Yoga'],
      sucursal: 'Sucursal Centro',
    },
    {
      id: 20,
      nombre: 'Tomás Cabrera',
      domicilio: 'Cafferata 500',
      telefono: '341-5670000',
      email: 'tomas@gmail.com',
      dias: ['Jueves'],
      horarios: ['20:00'],
      clases: ['Pilates'],
      sucursal: 'Sucursal Norte',
    },
  ];

  const filtrados = clientes.filter((c) =>
    `${c.nombre} ${c.email}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h2 className="fw-bold mb-3">Clientes</h2>

      {/* BUSCADOR */}
      <input
        type="text"
        placeholder="Buscar por nombre o email..."
        className="form-control mb-4 shadow-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* TABLA */}
      <div className="table-responsive shadow-sm">
        <table className="table table-striped table-hover">
          <thead className="table-dark">
            <tr>
              <th>Nombre</th>
              <th>Domicilio</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Días</th>
              <th>Horarios</th>
              <th>Clases</th>
              <th>Sucursal</th>
            </tr>
          </thead>

          <tbody>
            {filtrados.map((c) => (
              <tr key={c.id}>
                <td>{c.nombre}</td>
                <td>{c.domicilio}</td>
                <td>{c.telefono}</td>
                <td>{c.email}</td>
                <td>{c.dias.join(', ')}</td>
                <td>{c.horarios.join(', ')}</td>
                <td>{c.clases.join(', ')}</td>
                <td>{c.sucursal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
