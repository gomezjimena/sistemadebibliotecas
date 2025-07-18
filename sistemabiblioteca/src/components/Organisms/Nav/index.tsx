import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/Atoms/Icon';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Usuario {
  id: string;
  name: string;
  email: string;
  rol: 'DIRECTOR' | 'BIBLIOTECARIO' | 'USUARIO';
}

const Index = () => {

  const [user, setUser] = useState<Usuario | null>(null); // Usuario autenticado
  const [titulo, setTitulo] = useState('');
  const router = useRouter();

  const handleFiltrar = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = {};

    if (titulo) query.titulo = titulo;

    router.push({
      pathname: '/libros',
      query,
    });

    setTitulo('');
  };


  useEffect(() => {
  const usuarioGuardado = localStorage.getItem('usuario');
  if (usuarioGuardado) {
    setUser(JSON.parse(usuarioGuardado));
  }
}, []);

  const isDirector = user?.rol === 'DIRECTOR';
  
  
  return (
    <div className='relative w-full ' >
      <img
        src='/imagenes/salon.png'
        alt='salon'
        className='h-full w-full object-contain '
      />
      <div className='absolute bottom-0 right-7 mb-4 mr-4'>
        <Link href={`/busquedaavanzada`}>
              <Button type='button' variant="bank" className='w-40 h-10  ' >
                Busqueda avanzada
              </Button>
          </Link>
            </div>     
      {isDirector && (
        <div className='absolute bottom-0 left-10 mb-4 mr-4 ' >
          <Link href={`/inventario`}>
            <Button type='button' variant='bank' className='w-40 h-10'>
              Modificar inventario
           </Button>
        </Link>
        </div>
      )}
          
          <div className='flex absolute top-[40%] left-[49%] transform -translate-x-1/2 -translate-y-1/2  text-2xl font-bold'>
          
          <div className='flex gap-4 '>
          <Input id='search-titulo' type='search' placeholder='Buscar en el catalogo por titulo' className='h-10 w-170 pl-10' 
                  value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
          <Icon icon="lucide:search" size={20} className="w-[40px] h-[20px] absolute bottom-2"  />
          
            <Button onClick={handleFiltrar} variant="bank" className='w-30 h-10  ' >
                Buscar
            </Button>
              </div>
              </div>
        </div>
  );
};

export default Index;
