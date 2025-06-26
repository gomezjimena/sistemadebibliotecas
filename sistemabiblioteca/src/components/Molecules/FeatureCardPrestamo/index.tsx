import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface FeatureCardProps {
  email: string;
  tituloLibro: string;
  usuario: string;
  creadoPor: string;
  estadoPrestamo: string;
  fechaPrestamo: Date;
  fechaVencimientoPrestamo: Date;
  onSubmit?: (estado: string) => void; 
}

const FeatureCardPrestamo = ({
  email,
  tituloLibro,
  usuario,
  creadoPor,
  estadoPrestamo,
  fechaPrestamo,
  fechaVencimientoPrestamo,
  onSubmit,
}: FeatureCardProps) => {
  const [estado, setEstado] = useState(estadoPrestamo);

  const handleConfirmar = () => {
    if (onSubmit) {
      onSubmit(estado);
    }
    console.log('Estado de préstamo actualizado:', estado);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-[300%] ml-auto">
      <h2 className="text-2xl font-bold mb-6">
        ACTUALIZAR PRÉSTAMO DE <span className="text-black">“{tituloLibro}”</span>
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
          <label className="text-sm mb-1">Estado</label>
          <select
            className="border border-gray-300 rounded px-3 py-2"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          >
            <option value="Vigente">Vigente</option>
            <option value="Cerrado">Cerrado</option>
          </select>
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
          <label className="text-sm mb-1">Fecha Préstamo</label>
          <input
            value={fechaPrestamo.toLocaleDateString()}
            readOnly
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Creado Por</label>
          <input
            value={creadoPor}
            readOnly
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Fecha Vencimiento Préstamo</label>
          <input
            value={fechaVencimientoPrestamo.toLocaleDateString()}
            readOnly
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <Button variant="bank">Cancelar</Button>
        <Button variant="bank" onClick={handleConfirmar}>
          Confirmar
        </Button>
      </div>
    </div>
  );
};

export default FeatureCardPrestamo;
