import React from 'react';
import FeatureCardEstado from '@/components/Molecules/FeatureCardEstadoLibro';

const today = new Date();
const finReserva = new Date();
finReserva.setDate(today.getDate() + 20);

const features = [
  {
    tituloLibro: 'ULTIMOS DÍAS EN BERLIN',
    estadoPrestamo: 'Disponible',
  },
];

const Index = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
      {features.map((feature, index) => (
        <FeatureCardEstado
          key={index}
          tituloLibro={feature.tituloLibro}
          estadoPrestamo={feature.estadoPrestamo}
        />
      ))}
    </div>
  );
};

export default Index;
