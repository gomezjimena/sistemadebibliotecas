import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface FeatureCardProps {
  email: string;
  tituloLibro: string;
  usuario: string;
  documento: string;
  numerotelefono: string;
  inicioreserva: Date;
  finreserva: Date;
  onConfirmar: () => void;
  onCancelar: () => void;
}

const FeatureCardReserva = ({
  email,
  tituloLibro,
  usuario,
  documento,
  numerotelefono,
  inicioreserva,
  finreserva,
  onConfirmar,
  onCancelar,
}: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-2xl">
      <h2 className="text-2xl font-bold mb-6">
        RESERVAR <span className="text-black">“{tituloLibro}”</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm mb-1">Email registrado</label>
          <input value={email} readOnly className="border border-gray-300 rounded px-3 py-2" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Número de teléfono</label>
          <input value={numerotelefono} readOnly className="border border-gray-300 rounded px-3 py-2" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Usuario</label>
          <input value={usuario} readOnly className="border border-gray-300 rounded px-3 py-2" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Fecha Reserva</label>
          <input value={inicioreserva.toLocaleDateString()} readOnly className="border border-gray-300 rounded px-3 py-2" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Documento</label>
          <input value={documento} readOnly className="border border-gray-300 rounded px-3 py-2" />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Fecha Vencimiento Reserva</label>
          <input value={finreserva.toLocaleDateString()} readOnly className="border border-gray-300 rounded px-3 py-2" />
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <Button variant="bank" onClick={onCancelar}>Cancelar</Button>
        <Button variant="bank" onClick={onConfirmar}>Confirmar</Button>
      </div>
    </div>
  );
};

export default FeatureCardReserva;
