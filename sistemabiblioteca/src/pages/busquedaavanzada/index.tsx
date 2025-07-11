import React, { useState, useEffect } from 'react';
import Features from '@/components/Molecules/FeatureCardLibro';
import NavBusquedaAvanzada from '@/components/Organisms/NavBusquedaAvanzada';
import { getLibros } from '@/utils/api';
import { useRouter } from 'next/router';

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

const Index = () => {
  const [libros, setLibros] = useState<Libro[]>([]);
  const [librosFiltrados, setLibrosFiltrados] = useState<Libro[]>([]);
  const router = useRouter();

  const categoria = (router.query.categoria as string) || '';
  const autor = (router.query.autor as string) || '';

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const data = await getLibros();
        setLibros(data);
      } catch (error) {
        console.error('Error al cargar los libros:', error);
      }
    };

    fetchLibros();
  }, []);

  useEffect(() => {
    const filtrarLibros = () => {
      let resultado = [...libros];

      if (categoria) {
        resultado = resultado.filter((libro) => libro.categoria.toLowerCase() === categoria.toLowerCase());
      }

      if (autor) {
        resultado = resultado.filter((libro) => libro.autor.toLowerCase().includes(autor.toLowerCase()));
      }

      setLibrosFiltrados(resultado);
    };

    filtrarLibros();
  }, [categoria, autor, libros]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBusquedaAvanzada />
      <div className="min-h-screen bg-[var(--color-bank4)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {librosFiltrados.length > 0 ? (
            librosFiltrados.map((libro) => (
              <Features
                key={libro.id}
                imagesrc={libro.imagesrc}
                titulo={libro.titulo}
                autor={libro.autor}
                categoria={libro.categoria}
                paginas={libro.paginas}
                estado={libro.estado}
                ubicacion={libro.ubicacion}
              />
            ))
          ) : (
            <p className="text-center text-lg text-black col-span-full mt-10">No se encontraron libros.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
