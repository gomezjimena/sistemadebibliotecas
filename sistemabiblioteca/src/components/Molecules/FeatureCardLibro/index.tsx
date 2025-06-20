import React from 'react';
import { Button } from '@/components/ui/button';

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
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-[310px] ">
      <div className="w-full aspect-square mb-4 overflow-hidden rounded-md">
      <img
        src={imageSrc}
        alt={`Portada de ${titulo}`}
        className="w-full h-full object-cover"
      />
      </div>

      <div className="text-sm text-black">
        <p><strong>Título:</strong> {titulo}</p>
        <p><strong>Autor:</strong> {autor}</p>
        <p><strong>Categoría:</strong> {categoria}</p>
        <p><strong>Páginas:</strong> {paginas}</p>
        <p><strong>Estado:</strong> {estado}</p>
        <p><strong>Ubicación:</strong> {ubicacion}</p>
      </div>

      <div className="flex gap-2 mt-4">
        <Button type='submit' variant="bank" className='flex-1'> Reservar </Button>
        <Button type='submit' variant="bank" className='flex-1'> Préstamo </Button>
        <Button type='submit' variant="bank" className='flex-1'> Estado </Button>  
      </div>

    </div>
  );
};

export default FeatureCardLibro;

