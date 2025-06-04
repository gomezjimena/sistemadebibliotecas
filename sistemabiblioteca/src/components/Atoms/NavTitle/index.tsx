import React from 'react';
import Icon from '@/components/Atoms/Icon';

const NavTitle = () => {
  return (
    <div className='h-auto flex flex-col md:flex-row justify-between text-bank3 items-center bg-[var(--color-bank4)] px-4 py-6'>
      
    
      <div className='w-full justify-center md:w-1/2 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4'>
        <img
          src='/imagenes/logosb.png'
          alt='Logo'
          className='h-40 w-40 object-contain'
        />
        <h2 className=' pl-30 text-center md:text-left text-3xl font-bold text-black'>
          SISTEMA DE BIBLIOTECAS <br />
          COLEGIO CALASANZ
        </h2>
      </div>

      <div className='hidden md:block w-px h-32 bg-gray-600 mx-8' />

  
      <div className='w-full md:w-1/2 flex flex-col items-center md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-4 mt-6 md:mt-0'>
        <Icon icon="lucide:sailboat"  />
        <h1 className='text-center md:text-left text-2xl  text-black pr-70 pl-30'>
          Catálogo Bibliográfico <br />
          Navegando por el conocimiento
        </h1>
        <Icon icon="mdi-light:arrow-right-circle"  />
      </div>
    </div>
  );
};

export default NavTitle;

