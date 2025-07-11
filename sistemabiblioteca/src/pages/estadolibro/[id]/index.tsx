import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getLibros, actualizarEstadoLibro } from '@/utils/api';
import FeatureCardEstadoLibro from '@/components/Molecules/FeatureCardEstadoLibro';
import FeatureCardLibro from '@/components/Molecules/FeatureCardLibro';
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

const EstadoLibroPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [libro, setLibro] = useState<Libro | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchLibro = async () => {
      try {
        const data = await getLibros();
        const libroEncontrado = data.find((libro: Libro) => libro.id === id);
        setLibro(libroEncontrado);
      } catch (error) {
        console.error('Error al cargar el libro:', error);
      }
    };

    fetchLibro();
  }, [id]);
  
    const handleActualizarEstado = async (id: string, nuevoEstado: string) => {
    try {
        await actualizarEstadoLibro(id, nuevoEstado);
        setLibro(prev => prev ? { ...prev, estado: nuevoEstado } : prev);
        alert('Estado actualizado correctamente');
    } catch (error) {
        alert('Error al actualizar el estado');
    }
    };

  if (!libro) {
    return <div className="text-center mt-10">Cargando libro...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavLibro />
      <div className="flex flex-col items-center justify-center p-10 bg-[var(--color-bank4)] min-h-screen">

        <div className="flex flex-col md:flex-row gap-10 items-start justify-center">

        <div>
          
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

        </div>

        <div className="w-[1000px]"> 

          {/* Card para cambiar el estado */}
          <FeatureCardEstadoLibro
            id={libro.id}
            tituloLibro={libro.titulo}
            estadoPrestamo={libro.estado}
            onSubmit={handleActualizarEstado}
          />
          
        </div>

        </div>

      </div>
    </div>
  );
};

export default EstadoLibroPage;
