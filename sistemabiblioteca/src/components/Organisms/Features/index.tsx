import React from 'react';
import FeatureCardLibro from '@/components/Molecules/FeatureCardLibro';

const features = [
  {
    imageSrc: '/imagenes/losnombrespropios',
    titulo: 'Los nombres propios',
    autor: 'Marta Jiménez Serrano',
    categoria: 'Romance',
    paginas: 345,
    estado: 'Disponible',
    ubicacion: 'Estantería 5 - A2',
  },
];

const Index = () => {
  return (
    <div className='flex flex-row flex-wrap justify-around items-start gap-6 p-6'>
      {features.map((feature, index) => (
        <FeatureCardLibro
          key={index}
          imageSrc={feature.imageSrc}
          titulo={feature.titulo}
          autor={feature.autor}
          categoria={feature.categoria}
          paginas={feature.paginas}
          estado={feature.estado}
          ubicacion={feature.ubicacion}
        />
      ))}
    </div>
  );
};

export default Index;
