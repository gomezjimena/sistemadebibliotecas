import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/Atoms/Icon';
import Link from 'next/link';
import { useRouter } from 'next/router';

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

const Index = () => {
  const [categoria, setCategoria] = useState('');
  const [autor, setAutor] = useState('');
  const router = useRouter();

  const handleFiltrar = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = {};

    if (categoria) query.categoria = categoria;
    if (autor.trim() !== '') query.autor = autor.trim();

    router.push({
      pathname: '/busquedaavanzada',
      query,
    });

    setCategoria('');
    setAutor('');
  };

  return (
    <div className='relative w-full'>
      <img
        src='/imagenes/salon.png'
        alt='salon'
        className='h-full w-full object-contain'
      />

      <div className='absolute bottom-0 right-7 mb-4 mr-4'>
        <Button onClick={handleFiltrar} variant="bank" className='w-40 h-10'>
          Filtrar
        </Button>
      </div>

      <div className='absolute bottom-0 left-10 mb-4 mr-4'>
        <Link href={'/libros'}>
          <Button variant="bank" className='w-50 h-10'>
            Cerrar búsqueda avanzada
          </Button>
        </Link>
      </div>

      <div className='absolute bottom-0 left-100 mb-4 mr-4'>
        <Input
          id='search-autor'
          type='search'
          placeholder='Buscar por autor'
          className='h-10 w-60 pl-10'
          value={autor}
          onChange={(e) => setAutor(e.target.value)}
        />
        <Icon icon="lucide:search" size={20} className="w-[40px] h-[20px] absolute bottom-2" />
      </div>

      <div className="absolute bottom-0 left-180 mb-4 mr-4">
        <select
          id="categorias"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="w-full rounded-md border border-black bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
        >
          <option value="">Selecciona una categoría</option>
          {categorias.map((r) => (
            <option key={r.value} value={r.value}>
              {r.label}
            </option>
          ))}
        </select>
      </div>

      <div className='flex absolute top-[40%] left-[49%] transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold'>
        <div className='flex gap-4'>
          <Input
            disabled
            id='search-titulo'
            type='search'
            placeholder='Buscar en el catálogo por título'
            className='h-10 w-170 pl-10 bg-[var(--color-bank3)]'
          />
          <Icon icon="lucide:search" size={20} className="w-[40px] h-[20px] absolute bottom-2" />
          <Button disabled variant="bank" className='w-30 h-10'>
            Buscar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
