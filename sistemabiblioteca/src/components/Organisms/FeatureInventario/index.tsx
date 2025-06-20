import React from 'react';
import { Button } from '@/components/ui/button';
import { Pencil, Trash2 } from 'lucide-react';

const libros = [
  {
    titulo: 'Los nombres propios',
    cantidadisponible: 23,
    cantidadprestada: 3,
    cantidadreservada: 4,
    cantidadtotal: 30,
  },
];

const Index = () => {
  return (
    <div className="p-6 w-full">
      <div className="bg-white rounded-xl shadow-md p-6 w-full">
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">INVENTARIO DE LIBROS</h2>
          <Button variant="bank">Añadir libro</Button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="text-left border-b">
                <th className="p-3">Título del libro</th>
                <th className="p-3">Cantidad Disponible</th>
                <th className="p-3">Cantidad Prestada</th>
                <th className="p-3">Cantidad Reservada</th>
                <th className="p-3">Cantidad Total</th>
                <th className="p-3 text-center">Editar</th>
                <th className="p-3 text-center">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {libros.map((libro, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3">{libro.titulo}</td>
                  <td className="p-3">{libro.cantidadisponible}</td>
                  <td className="p-3">{libro.cantidadprestada}</td>
                  <td className="p-3">{libro.cantidadreservada}</td>
                  <td className="p-3">{libro.cantidadtotal}</td>
                  <td className="p-3 text-center">
                    <Button size="icon" variant="ghost" title="Editar">
                      <Pencil className="w-4 h-4" />
                    </Button>
                  </td>
                  <td className="p-3 text-center">
                    <Button size="icon" variant="ghost" title="Eliminar">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;
