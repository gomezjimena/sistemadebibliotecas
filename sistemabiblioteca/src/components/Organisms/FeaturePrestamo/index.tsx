import React from 'react';
import FeatureCardPrestamo from '@/components/Molecules/FeatureCardPrestamo';

const today = new Date();
const finReserva = new Date();
finReserva.setDate(today.getDate() + 20);

const features = [
  {
    email: 'correodeprueba12@prueba.com',
    tituloLibro: 'ULTIMOS DÍAS EN BERLIN',
    usuario: 'Usuario',
    creadoPor: 'Bibliotecario',
    estadoPrestamo: 'Vigente',
    fechaPrestamo: today,
    fechaVencimientoPrestamo: finReserva,
  },
];

const Index = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
      {features.map((feature, index) => (
        <FeatureCardPrestamo
          key={index}
          email={feature.email}
          tituloLibro={feature.tituloLibro}
          usuario={feature.usuario}
          creadoPor={feature.creadoPor}
          estadoPrestamo={feature.estadoPrestamo}
          fechaPrestamo={feature.fechaPrestamo}
          fechaVencimientoPrestamo={feature.fechaVencimientoPrestamo}
        />
      ))}
    </div>
  );
};

export default Index;
