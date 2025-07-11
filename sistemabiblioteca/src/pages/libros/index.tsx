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

const Index = () => {
  const [libros, setLibros] = useState<Libro[]>([]);

  useEffect(() => {
      const fetchLibros = async () => {
        try {
          const data = await getLibros();
          console.log('Libros:', data); 
          setLibros(data);
        } catch (error) {
          console.error('Error al cargar los libros:', error);
        }
      };
  
      fetchLibros();
    }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <div className='min-h-screen bg-[var(--color-bank4)]'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {libros.map((libro) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
