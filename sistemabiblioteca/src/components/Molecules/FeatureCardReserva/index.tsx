import React from 'react';
import { Button } from '@/components/ui/button';

interface FeatureCardProps {
  email: string;
  usuario: string;
  documento: string;
  numerotelefono: string;
  inicioreserva: number;
  finreserva: string;
}

const FeatureCardLibro = ({
  email,
  usuario,
  documento,
  numerotelefono,
  inicioreserva,
  finreserva,
}: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-[310px] ">

      <div className="text-sm text-black">
        <p><strong>Email Registrado</strong> {email}</p>
        <p><strong>Usuario</strong> {usuario}</p>
        <p><strong>Documento</strong> {documento}</p>
        <p><strong>Número de telefono</strong> {numerotelefono}</p>
        <p><strong>Fecha Reserva</strong> {inicioreserva}</p>
        <p><strong>Fecha vencimiento Reserva</strong> {finreserva}</p>
      </div>

      <div className="flex gap-2 mt-4">
        <Button type='submit' variant="bank" className='flex-1'> Cancelar </Button>
        <Button type='submit' variant="bank" className='flex-1'> Guardar </Button> 
      </div>

    </div>
  );
};

export default FeatureCardLibro;

