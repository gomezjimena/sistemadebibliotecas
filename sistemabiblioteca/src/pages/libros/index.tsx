import React, { useState, useEffect } from 'react';
import Features from '@/components/Molecules/FeatureCardLibro';
import Nav from '@/components/Organisms/Nav';
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

const LibrosPage = () => {
  const [libros, setLibros] = useState<Libro[]>([]);
  const [librosFiltrados, setLibrosFiltrados] = useState<Libro[]>([]);
  const router = useRouter();

  const titulo = (router.query.titulo as string) || '';

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
    if (!router.isReady) return; 

    const filtrados = libros.filter((libro) =>
      libro.titulo.toLowerCase().includes(titulo.toLowerCase().trim())
    );

    setLibrosFiltrados(filtrados);
  }, [titulo, libros, router.isReady]);

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className='min-h-screen bg-[var(--color-bank4)]'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {librosFiltrados.length > 0 ? (
            librosFiltrados.map((libro) => (
              <Features
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
            ))
          ) : (
            <p className="text-center text-lg text-black col-span-full mt-10">
              No se encontraron libros.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LibrosPage;
