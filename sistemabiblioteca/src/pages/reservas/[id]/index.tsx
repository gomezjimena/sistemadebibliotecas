import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import FeatureCardReserva from '@/components/Molecules/FeatureCardReserva';
import { getLibros, crearReserva, actualizarEstadoLibro } from '@/utils/api';
import NavLibro from '@/components/Organisms/NavVistaSimple';

interface Libro {
  id: string;
  titulo: string;
  estado: string;
}

interface Usuario {
  id: string;
  name: string;
  email: string;
  documento: string;
  numerotelefono: string;
}

const ReservaPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [libro, setLibro] = useState<Libro | null>(null);
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const [inicioReserva] = useState(new Date());
  const [finReserva] = useState(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)); // +3 días

  useEffect(() => {
    const storedUser = localStorage.getItem('usuario');
    if (storedUser) {
      setUsuario(JSON.parse(storedUser));
    }

    const fetchLibro = async () => {
      if (!id) return;
      const data = await getLibros();
      const libroEncontrado = data.find((l: Libro) => l.id === id);
      setLibro(libroEncontrado);
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
      email: usuario.email,
      tituloLibro: libro.titulo,
      usuario: usuario.name,
      documento: usuario.documento,
      numerotelefono: usuario.numerotelefono,
      inicioreserva: inicioReserva,
      finreserva: finReserva,
      libroId: libro.id,
      usuarioId: usuario.id,
    };

    try {
      await crearReserva(reservaData);
      await actualizarEstadoLibro(libro.id, 'RESERVADO');
      alert('Reserva creada con éxito');
      router.push('/misreservas');
    } catch (error) {
      alert('Error al crear la reserva');
    }
  };

  const handleCancelar = () => {
    router.push('/libros');
  };

  if (!libro || !usuario) return <div className="text-center mt-10">Cargando datos...</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <NavLibro />
      <div className="flex justify-center items-center min-h-screen bg-[var(--color-bank4)] p-10">
        <FeatureCardReserva
          email={usuario.email}
          tituloLibro={libro.titulo}
          usuario={usuario.name}
          documento={usuario.documento}
          numerotelefono={usuario.numerotelefono}
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
