import React from 'react';

interface FeatureCardProps {
  imageSrc: string;
  titulo: string;
  autor: string;
  categoria: string;
  paginas: number;
  estado: string;
  ubicacion: string;
}

const FeatureCardLibro = ({
  imageSrc,
  titulo,
  autor,
  categoria,
  paginas,
  estado,
  ubicacion,
}: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-[200px] ">
      <img
        src={'imagenes/losnombrespropios.webp'}
        alt={`Portada de ${titulo}`}
        className="w-full h-auto rounded-md mb-4"
      />

      <div className="text-sm text-black">
        <p><strong>Título:</strong> {titulo}</p>
        <p><strong>Autor:</strong> {autor}</p>
        <p><strong>Categoría:</strong> {categoria}</p>
        <p><strong>Páginas:</strong> {paginas}</p>
        <p><strong>Estado:</strong> {estado}</p>
        <p><strong>Ubicación:</strong> {ubicacion}</p>
      </div>
    </div>
  );
};

export default FeatureCardLibro;

