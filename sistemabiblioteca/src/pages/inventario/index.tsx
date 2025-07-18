import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import NavInventario from '@/components/Organisms/NavInventario';
import { getLibros, deleteLibro } from '@/utils/api';
import Link from 'next/link';
import FeatureCardInventario from '@/components/Molecules/FeatureCardInventario';

interface Libro {
  id: string;
  titulo: string;
  autor: string;
  estado: string;
}

const InventarioPage = () => {
  const [libros, setLibros] = useState<Libro[]>([]);

  useEffect(() => {
    const fetchLibros = async () => {
      try {
        const data = await getLibros();
        setLibros(data);
      } catch (error) {
        console.error('Error al cargar los libros:', error);
      }
    };

    fetchLibros();
  }, []);

  const handleDelete = async (id: string) => {
    const confirmacion = confirm('¿Estás seguro de que quieres eliminar este libro?');
    if (!confirmacion) return;

    try {
      await deleteLibro(id);
      setLibros(prevLibros => prevLibros.filter(libro => libro.id !== id));
    } catch (error) {
      console.error('Error al eliminar el libro', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavInventario />

      <div className="p-6 w-full flex-1 bg-[var(--color-bank4)]">
        <div className="bg-white rounded-xl shadow-md p-6 w-full">

          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">INVENTARIO DE LIBROS</h2>
            <Link href="/crearlibro">
              <Button variant="bank">Añadir libro</Button>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="p-3">Título</th>
                  <th className="p-3">Autor</th>
                  <th className="p-3">Estado</th>
                  <th className="p-3 text-center">Editar</th>
                  <th className="p-3 text-center">Eliminar</th>
                </tr>
              </thead>
              <tbody>
                {libros.length > 0 ? (
                  libros.map((libro) => (
                    <FeatureCardInventario
                      key={libro.id}
                      id={libro.id}
                      titulo={libro.titulo}
                      autor={libro.autor}
                      estado={libro.estado}
                      onDelete={handleDelete}
                    />
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-6 text-center text-gray-500">
                      No hay libros disponibles.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InventarioPage;
