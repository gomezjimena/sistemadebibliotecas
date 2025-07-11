import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface FeatureCardProps {
  id: string;
  imagesrc: string;
  titulo: string;
  autor: string;
  categoria: string;
  paginas: number;
  estado: string;
  ubicacion: string;
}

interface Usuario {
  id: string;
  name: string;
  email: string;
  rol: 'DIRECTOR' | 'BIBLIOTECARIO' | 'USUARIO';
}

const FeatureCardLibro = ({
  id,
  imagesrc,
  titulo,
  autor,
  categoria,
  paginas,
  estado,
  ubicacion,
  
}: FeatureCardProps) => {

  const [user, setUser] = useState<Usuario | null>(null);

  useEffect(() => {
  const usuarioGuardado = localStorage.getItem('usuario');
  if (usuarioGuardado) {
    setUser(JSON.parse(usuarioGuardado));
  } else {
    setUser(null);
  }
}, []);

    const isDirector = user && (user.rol === 'DIRECTOR' || user.rol === 'BIBLIOTECARIO');

  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-[310px] ">
      <div className="w-full aspect-square mb-4 overflow-hidden rounded-md">
      <img
        src={imagesrc}
        alt={`Portada de ${titulo}`}
        className="w-full h-full object-cover"
      />
      </div>

      <div className="text-sm text-black">
        <p><strong>Título:</strong> {titulo}</p>
        <p><strong>Autor:</strong> {autor}</p>
        <p><strong>Categoría:</strong> {categoria}</p>
        <p><strong>Páginas:</strong> {paginas}</p>
        <p><strong>Estado:</strong> {estado}</p>  
        <p><strong>Ubicación:</strong> {ubicacion}</p>
      </div>

      <div className="flex gap-2 mt-4">
        <Link href={`/reservas/${id}`}><Button type='submit' variant="bank" className='flex-1' disabled={estado.toUpperCase() !== 'DISPONIBLE'}> Reservar </Button></Link>
        <Link href={`/prestamos/${id}`}>{isDirector && (<Button type='submit' variant="bank" className='flex-1'> Préstamo </Button>)}</Link>
        <Link href={`/estadolibro/${id}`}>{isDirector && (<Button type='submit' variant="bank" className='flex-1'> Estado </Button>)}</Link>
      </div>

    </div>
  );
};

export default FeatureCardLibro;

