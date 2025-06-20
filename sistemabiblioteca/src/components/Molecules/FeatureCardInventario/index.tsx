import React from 'react';
import { Button } from '@/components/ui/button';
import  Icon  from '@/components/Atoms/Icon'

interface FeatureCardProps {
  titulo: string;
  cantidadisponible: number;
  cantidadprestada: number;
  cantidadreservada: number;
  cantidadtotal: number;
}

const FeatureCardLibro = ({
  titulo,
  cantidadisponible,
  cantidadprestada,
  cantidadreservada,
  cantidadtotal,
  
}: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-[310px] ">

    
      <div className="flex gap-2 mt-4">
        <Button type='submit' variant="bank" className='flex-1'> Añadir Libro </Button>
      </div>

      <div className="text-sm text-black">
        <p><strong>Título del libro</strong> {titulo}</p>
        <p><strong>Cantidad Disponible</strong> {cantidadisponible}</p>
        <p><strong>Cantidad Prestada</strong> {cantidadprestada}</p>
        <p><strong>Cantidad Reservada</strong> {cantidadreservada}</p>
        <p><strong>Cantidad Total</strong> {cantidadtotal}</p>
      </div>


    </div>
  );
};

export default FeatureCardLibro;

