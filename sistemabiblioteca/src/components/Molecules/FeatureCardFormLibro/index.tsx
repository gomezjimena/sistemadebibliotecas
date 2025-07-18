import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface LibroData {
  id: string;
  titulo: string;
  autor: string;
  categoria: string;
  paginas: number;
  ubicacion: string;
  signatura: string;
  imagesrc: string;
}

const categorias = [
  { value: 'ROMANCE', label: 'Romance' },
  { value: 'TERROR', label: 'Terror' },
  { value: 'ACADEMICO', label: 'Académico' },
  { value: 'AVENTURA', label: 'Aventura' },
  { value: 'DRAMA', label: 'Drama' },
  { value: 'CIENCIA_FICCION', label: 'Ciencia Ficción' },
  { value: 'ACCION', label: 'Acción' },
  { value: 'COMEDIA', label: 'Comedia' },
];

interface Props {
  modo: 'crear' | 'editar';
  initialData?: LibroData;
  onSubmit: (data: LibroData) => void;
}

const LibroFormCard = ({ modo, initialData, onSubmit }: Props) => {
  const [id] = useState(initialData?.id || '');
  const [titulo, setTitulo] = useState(initialData?.titulo || '');
  const [autor, setAutor] = useState(initialData?.autor || '');
  const [categoria, setCategoria] = useState(initialData?.categoria || '');
  const [paginas, setPaginas] = useState(initialData?.paginas || 0);
  const [ubicacion, setUbicacion] = useState(initialData?.ubicacion || '');
  const [signatura, setSignatura] = useState(initialData?.signatura || '');
  const [imagesrc, setImagen] = useState(initialData?.imagesrc || '');

  const handleSubmit = () => {
  const data: LibroData = {
    id,
    titulo,
    autor,
    categoria,
    paginas,
    ubicacion,
    signatura,
    imagesrc,
  };

  if (modo === 'editar') {
    data.id = id;
  }

  onSubmit(data);
};

  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-[200%] ml-auto">
      <h2 className="text-2xl font-bold mb-6">
        {modo === 'crear' ? 'AÑADIR LIBRO' : `EDITAR “${titulo}”`}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm mb-1">Título</label>
          <input
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Categoría</label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Selecciona una categoría</option>
            {categorias.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Páginas</label>
          <input
            type="number"
            value={paginas}
            onChange={(e) => setPaginas(Number(e.target.value))}
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Signatura</label>
          <input
            value={signatura}
            onChange={(e) => setSignatura(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Ubicación</label>
          <input
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">Autor</label>
          <input
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm mb-1">URL de la imagen</label>
          <input
            value={imagesrc}
            onChange={(e) => setImagen(e.target.value)}
            placeholder="https://..."
            className="border border-gray-300 rounded px-3 py-2"
          />
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <Link href={'/inventario'}> <Button variant="bank">Cancelar</Button></Link>
        <Button variant="bank" onClick={handleSubmit}>Guardar</Button>
      </div>
    </div>
  );
};

export default LibroFormCard;
