import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FeatureCardReserva from '@/components/Molecules/FeatureCardReserva';
import FeatureCardLibro from '@/components/Molecules/FeatureCardLibro';
import { getLibros, crearReserva, actualizarEstadoLibro } from '@/utils/api';
import NavLibro from '@/components/Organisms/NavVistaSimple';

interface Libro {
  id: string;
  imagesrc: string;
  titulo: string;
  autor: string;
  categoria: string;
  paginas: number;
  estado: string;
  ubicacion: string;
}

interface Usuario {
  id: string;
  name: string;
  email: string;
  documento: string;
  numeroTelefono: string;
}

const ReservaPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [libro, setLibro] = useState<Libro | null>(null);
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const [inicioReserva] = useState(new Date());
  const [finReserva] = useState(new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)); 

  useEffect(() => {
    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
      setUsuario(JSON.parse(storedUser));
    }

    const fetchLibro = async () => {
  try {
    if (!id) return;
    const data = await getLibros();
    const libroEncontrado = data.find((l: Libro) => l.id === id);
    setLibro(libroEncontrado);
  } catch (err) {
    console.error('Error al cargar el libro:', err);
  }
};

    fetchLibro();
  }, [id]);

  const handleConfirmarReserva = async () => {
    if (!usuario || !libro) return;

    if (libro.estado !== 'DISPONIBLE') {
      alert('Este libro no está disponible para reservar.');
      return;
    }

    const reservaData = {
  usuarioId: usuario.id,
  libroId: libro.id,
  inicioreserva: inicioReserva,
  finreserva: finReserva,
};

    try {
      await crearReserva(reservaData);
      await actualizarEstadoLibro(libro.id, 'RESERVADO');
      alert('Reserva creada con éxito');
      router.push('/libros');
    } catch (error) {
      console.error('Error al crear la reserva', error);
    }
  };

  const handleCancelar = () => {
    router.push('/libros');
  };

  if (!libro || !usuario) return <div className="text-center mt-10">Cargando datos...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <NavLibro />
      <div className="flex justify-center items-center min-h-screen bg-[var(--color-bank4)] gap-15">

          
          {/* Card Visual del Libro */}
          <FeatureCardLibro
            key={libro.id}
            id={libro.id}
            imagesrc={libro.imagesrc}
            titulo={libro.titulo}
            autor={libro.autor}
            categoria={libro.categoria}
            paginas={libro.paginas}
            estado={libro.estado}
            ubicacion={libro.ubicacion}
          />

        <FeatureCardReserva
          email={usuario.email}
          tituloLibro={libro.titulo}
          usuario={usuario.name}
          documento={usuario.documento}
          numeroTelefono={usuario.numeroTelefono}
          inicioreserva={inicioReserva}
          finreserva={finReserva}
          onConfirmar={handleConfirmarReserva}
          onCancelar={handleCancelar}
        />
      </div>
    </div>
  );
};

export default ReservaPage;