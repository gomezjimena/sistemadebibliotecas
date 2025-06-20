import React from 'react';
import { Button } from '@/components/ui/button';

interface FeatureCardProps {
  email: string;
  tituloLibro: string;
  usuario: string;
  documento: string;
  numerotelefono: string;
  personasespera: number;
}

const FeatureCardReserva = ({
  email,
  tituloLibro,
  usuario,
  documento,
  numerotelefono,
  personasespera,
}: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-[300%] ml-auto">
      <h2 className="text-2xl font-bold mb-6">
        LISTA DE ESPERA PARA <span className="text-black">“{tituloLibro}”</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm mb-1">Email registrado</label>
          <input
            value={email}
            readOnly
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Número de teléfono</label>
          <input
            value={numerotelefono}
            readOnly
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Usuario</label>
          <input
            value={usuario}
            readOnly
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Personas en lista de espera</label>
          <input
            value={personasespera}
            readOnly
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Documento</label>
          <input
            value={documento}
            readOnly
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <Button variant="bank">Cancelar</Button>
        <Button variant="bank">Confirmar</Button>
      </div>
    </div>
  );
};

export default FeatureCardReserva;
