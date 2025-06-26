import React from 'react';
import LibroFormCard from '@/components/Molecules/FeatureCardFormLibro';

const Index = () => {
  const libro = {
    titulo: 'ULTIMOS DÍAS EN BERLIN',
    autor: 'Autor X',
    categoria: 'Aventura',
    paginas: 432,
    ubicacion: 'Estantería 23G',
    signatura: 'sddasd',
  };

  const handleUpdate = (data: typeof libro) => {
    console.log('Datos actualizados del libro:', data);
    // Aquí puedes hacer la petición a Supabase o a tu API para guardar los cambios
  };

  return (
    <div className='p-6'>
      <LibroFormCard
        modo="editar"
        initialData={libro}
        onSubmit={handleUpdate}
      />
    </div>
  );
};

export default Index;
