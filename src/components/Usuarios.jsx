import { useState } from 'react';
import UsuarioModal from './UsuarioModal';

// ----------------------
// 30 usuarios con asistencias
// ----------------------
const usuariosFake = [
  {
    id: 1,
    nombre: 'Juan',
    apellido: 'Pérez',
    domicilio: 'San Juan 1200',
    telefono: '3415551111',
    email: 'juanperez@gmail.com',
    dias: ['Lunes', 'Miércoles'],
    horarios: ['10:00', '15:00'],
    clases: ['Yoga'],
    sucursales: ['Centro'],
    asistencias: [
      { fecha: '2025-01-10', clase: 'Yoga', sucursal: 'Centro' },
      { fecha: '2025-01-15', clase: 'Yoga', sucursal: 'Centro' },
      { fecha: '2025-01-22', clase: 'Yoga', sucursal: 'Centro' },
    ],
  },
  {
    id: 2,
    nombre: 'María',
    apellido: 'Gómez',
    domicilio: 'Belgrano 1450',
    telefono: '3415552222',
    email: 'maria.gomez@gmail.com',
    dias: ['Martes', 'Jueves', 'Viernes'],
    horarios: ['09:00'],
    clases: ['Pilates'],
    sucursales: ['Norte'],
    asistencias: [
      { fecha: '2025-02-01', clase: 'Pilates', sucursal: 'Norte' },
      { fecha: '2025-02-08', clase: 'Pilates', sucursal: 'Norte' },
    ],
  },

  ...Array.from({ length: 28 }).map((_, i) => {
    const id = i + 3;

    const nombres = [
      'Carla',
      'Diego',
      'Lucía',
      'Ezequiel',
      'Paula',
      'Sofía',
      'Tomás',
      'Valeria',
      'Gustavo',
      'Nadia',
      'Mauro',
      'Rocío',
      'Gabriel',
      'Daniela',
      'Hernán',
      'Brenda',
      'Kevin',
      'Julieta',
      'Felipe',
      'Clara',
      'Joaquín',
      'Serena',
      'Matías',
      'Antonella',
      'Esteban',
      'Romina',
      'Pablo',
      'Carolina',
    ];

    const apellidos = [
      'Fernández',
      'Ruiz',
      'Sosa',
      'Torres',
      'Medina',
      'Herrera',
      'Cabrera',
      'Díaz',
      'Rossi',
      'Acosta',
      'Benítez',
      'Romero',
      'Vega',
      'Campos',
      'López',
      'Giménez',
      'Luna',
      'Cáceres',
      'Pardo',
      'Arce',
      'Molina',
      'Figueroa',
      'Costa',
      'Silvera',
      'Navarro',
      'Peralta',
      'Bustos',
      'Tevez',
    ];

    const clasesPosibles = ['Yoga', 'Pilates', 'Crossfit', 'Funcional'];
    const sucursalPosible = ['Centro', 'Norte', 'Sur'];
    const diasPosibles = [
      ['Lunes', 'Miércoles'],
      ['Martes', 'Jueves'],
      ['Miércoles', 'Viernes'],
      ['Lunes', 'Viernes'],
      ['Martes', 'Miércoles', 'Viernes'],
    ];

    const asistenciasCount = Math.floor(Math.random() * 5) + 1;
    const asistencias = Array.from({ length: asistenciasCount }).map(() => ({
      fecha: `2025-02-${String(Math.floor(Math.random() * 28) + 1).padStart(
        2,
        '0'
      )}`,
      clase: clasesPosibles[Math.floor(Math.random() * clasesPosibles.length)],
      sucursal:
        sucursalPosible[Math.floor(Math.random() * sucursalPosible.length)],
    }));

    return {
      id,
      nombre: nombres[i],
      apellido: apellidos[i],
      domicilio: `Calle ${100 + id}`,
      telefono: `341566${String(1000 + id)}`,
      email: `${nombres[i].toLowerCase()}.${apellidos[
        i
      ].toLowerCase()}@gmail.com`,
      dias: diasPosibles[Math.floor(Math.random() * diasPosibles.length)],
      horarios: ['08:00', '18:00'],
      clases: [
        clasesPosibles[Math.floor(Math.random() * clasesPosibles.length)],
      ],
      sucursales: [
        sucursalPosible[Math.floor(Math.random() * sucursalPosible.length)],
      ],
      asistencias,
    };
  }),
];

export default function Usuarios() {
  const [busqueda, setBusqueda] = useState('');
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  const filtrados = usuariosFake.filter((u) =>
    `${u.nombre} ${u.apellido}`.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">Listado de Usuarios</h2>

      {/* Buscador */}
      <input
        type="text"
        placeholder="Buscar por nombre o apellido..."
        className="form-control mb-4 shadow-sm"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      {/* Tabla */}
      <table className="table table-hover shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>Nombre</th>
            <th>Domicilio</th>
            <th>Teléfono</th>
            <th>Email</th>
            <th>Días</th>
            <th>Clases</th>
            <th>Sucursal</th>
          </tr>
        </thead>
        <tbody>
          {filtrados.map((u) => (
            <tr
              key={u.id}
              style={{ cursor: 'pointer' }}
              onClick={() => setUsuarioSeleccionado(u)}
            >
              <td>
                {u.nombre} {u.apellido}
              </td>
              <td>{u.domicilio}</td>
              <td>{u.telefono}</td>
              <td>{u.email}</td>
              <td>{u.dias.join(', ')}</td>
              <td>{u.clases.join(', ')}</td>
              <td>{u.sucursales.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {usuarioSeleccionado && (
        <UsuarioModal
          usuario={usuarioSeleccionado}
          onClose={() => setUsuarioSeleccionado(null)}
        />
      )}
    </div>
  );
}
