import React from 'react';
import NavLibro from '@/components/Organisms/NavVistaSimple'

const Index = () => {
  return (
    
    <div className="flex flex-col min-h-screen">
      <NavLibro></NavLibro>
      <div className=' min-h-screen bg-[var(--color-bank4)] '>
        <div className="flex justify-center p-6">
          <h1>No hay libro seleccionado</h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
