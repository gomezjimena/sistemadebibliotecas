import React from 'react';
import FeatureCardReserva from '@/components/Molecules/FeatureCardReserva';

const today = new Date();
const finReserva = new Date();
finReserva.setDate(today.getDate() + 20);

const features = [
  {
    email: 'correodeprueba12@prueba.com',
    tituloLibro: 'ULTIMOS DÍAS EN BERLIN',
    usuario: 'Usuario',
    documento: '123456789',
    numerotelefono: '13245678',
    inicioreserva: today,
    finreserva: finReserva,
  },
];

const Index = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
      {features.map((feature, index) => (
        <FeatureCardReserva
          key={index}
          email={feature.email}
          tituloLibro={feature.tituloLibro}
          usuario={feature.usuario}
          documento={feature.documento}
          numerotelefono={feature.numerotelefono}
          inicioreserva={feature.inicioreserva}
          finreserva={feature.finreserva}
        />
      ))}
    </div>
  );
};

export default Index;
