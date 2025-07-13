// pages/crearlibro.tsx
import React from 'react';
import NavLibro from '@/components/Organisms/NavVistaSimple';
import LibroFormCard from '@/components/Molecules/FeatureCardFormLibro';
import { useRouter } from 'next/router';
import { crearLibro } from '@/utils/api';

const CrearLibroPage = () => {
  const router = useRouter();

  const handleCrearLibro = async (data: any) => {
    try {
      await crearLibro(data);
      alert('Libro creado exitosamente');
      router.push('/inventario'); 
    } catch (error) {
      alert('Error al crear libro');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavLibro />
      <div className="min-h-screen bg-[var(--color-bank4)] flex justify-center items-center p-6">
        <LibroFormCard modo="crear" onSubmit={handleCrearLibro} />
      </div>
    </div>
  );
};

export default CrearLibroPage;
