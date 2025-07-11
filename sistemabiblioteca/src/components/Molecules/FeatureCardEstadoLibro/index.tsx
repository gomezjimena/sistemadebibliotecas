import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const estados = [
  { value: 'PRESTADO', label: 'Prestado' },
  { value: 'DISPONIBLE', label: 'Disponible' },
  { value: 'PERDIDO', label: 'Perdido' },
  { value: 'RESERVADO', label: 'Reservado' },
];

interface FeatureCardEstadoLibroProps {
  id: string;
  tituloLibro: string;
  estadoPrestamo: string;
  onSubmit: (id: string, nuevoEstado: string) => void;
}

const FeatureCardEstadoLibro = ({
  id,
  tituloLibro,
  estadoPrestamo,
  onSubmit,
}: FeatureCardEstadoLibroProps) => {
  const [estado, setEstado] = useState(estadoPrestamo);

  const handleConfirmar = () => {
    onSubmit(id, estado);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-[400px]">
      <h2 className="text-2xl font-bold mb-6">
        ACTUALIZAR ESTADO: <span className="text-black">“{tituloLibro}”</span>
      </h2>

      <div className="flex flex-col gap-4 mb-6">
        <label className="text-sm">Estado</label>
        <select
          className="border border-gray-300 rounded px-3 py-2"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        >
          {estados.map((opcion) => (
            <option key={opcion.value} value={opcion.value}>
              {opcion.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-start gap-4">
        <Link href={'/libros'}> <Button variant="bank">Cancelar</Button> </Link>
        <Button variant="bank" onClick={handleConfirmar}>
          Confirmar
        </Button>
      </div>
    </div>
  );
};

export default FeatureCardEstadoLibro;
