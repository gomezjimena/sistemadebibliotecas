import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

interface FeatureCardProps {
  tituloLibro: string;
  estadoPrestamo: string;
  onSubmit?: (nuevoEstado: string) => void; 
}

const FeatureCardEstadoLibro = ({
  tituloLibro,
  estadoPrestamo,
  onSubmit,
}: FeatureCardProps) => {
  const [estado, setEstado] = useState(estadoPrestamo);

  const handleConfirmar = () => {
    if (onSubmit) {
      onSubmit(estado);
    }
    console.log('Estado actualizado a:', estado);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-[300%] ml-auto">
      <h2 className="text-2xl font-bold mb-6">
        ACTUALIZAR ESTADO DEL LIBRO <span className="text-black">“{tituloLibro}”</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm mb-1">Estado</label>
          <select
            className="border border-gray-300 rounded px-3 py-2"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
          >
            <option value="Disponible">Disponible</option>
            <option value="Prestado">Prestado</option>
            <option value="Perdido">Perdido</option>
          </select>
        </div>
      </div>

      <div className="flex justify-start gap-4 mt-6">
        <Button variant="bank">Cancelar</Button>
        <Button variant="bank" onClick={handleConfirmar}>
          Confirmar
        </Button>
      </div>
    </div>
  );
};

export default FeatureCardEstadoLibro;
