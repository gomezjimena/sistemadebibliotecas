import React from 'react';
import Icon from '@/components/Atoms/Icon';

const NavTitle = () => {
  return (
    <div className="bg-[var(--color-bank4)] py-0.5">
      
      <div className="max-w-6xl mx-auto h-auto flex flex-col md:flex-row justify-between text-bank3 items-center">
        
        <div className='w-full justify-start md:w-1/2 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4'>
          <img
            src='/imagenes/logosb.png'
            alt='Logo'
            className='h-28 w-28 object-contain'
          />
          <h2 className='pl-6 text-center md:text-left text-2xl font-bold text-black'>
            SISTEMA DE BIBLIOTECAS <br />
            COLEGIO CALASANZ
          </h2>
        </div>

        <div className='hidden md:block w-px h-32 bg-gray-600 mx-8' />

        <div className='w-full md:w-1/2 flex flex-col items-center md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-4 mt-6 md:mt-0'>
          <Icon icon="lucide:sailboat" size={70} className="w-[70px] h-[60px]" />
          <h1 className='text-center md:text-left text-xl text-black pr-10 pl-6'>
            Catálogo Bibliográfico <br />
            Navegando en un mar de libros
          </h1>
          
        </div>

      <div className="absolute bottom-145 right-4">
        <Icon icon="mdi-light:arrow-right-circle" size={40} />
      </div>

      </div>
    </div>
  );
};

export default NavTitle;