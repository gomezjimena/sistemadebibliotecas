import React from 'react';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';
import Link from 'next/link';

interface FeatureCardInventarioProps {
  id: string;
  titulo: string;
  autor: string;
  estado: string;
  onDelete: (id: string) => void;
}

const FeatureCardInventario = ({
  id,
  titulo,
  autor,
  estado,
  onDelete,
}: FeatureCardInventarioProps) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3">{titulo}</td>
      <td className="p-3">{autor}</td>
      <td className="p-3">{estado}</td>
      <td className="p-3 text-center">
        <Link href={`/editarlibro/${id}`}>
          <Button size="icon" variant="ghost" title="Editar">
            <Pencil className="w-4 h-4" />
          </Button>
      </Link>
      </td>
      <td className="p-3 text-center">
        <Button
          size="icon"
          variant="ghost"
          title="Eliminar"
          onClick={() => onDelete(id)}
        >
          <Trash2 className="w-4 h-4 text-red-500" />
        </Button>
      </td>
    </tr>
  );
};

export default FeatureCardInventario;
