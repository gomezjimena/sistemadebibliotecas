import React from 'react';
import FeatureCardListaEspera from '@/components/Molecules/FeatureCardListaEspera';

const features = [
  {
    email: 'correodeprueba12@prueba.com',
    tituloLibro: 'ULTIMOS DÍAS EN BERLIN',
    usuario: 'Usuario',
    documento: '123456789',
    numerotelefono: '13245678',
    personasespera: 2,
  },
];

const Index = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
      {features.map((feature, index) => (
        <FeatureCardListaEspera
          key={index}
          email={feature.email}
          tituloLibro={feature.tituloLibro}
          usuario={feature.usuario}
          documento={feature.documento}
          numerotelefono={feature.numerotelefono}
          personasespera={feature.personasespera}
        />
      ))}
    </div>
  );
};

export default Index;
