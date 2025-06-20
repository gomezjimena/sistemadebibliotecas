import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Icon from '@/components/Atoms/Icon';

const Index = () => {
  return (
    <div className='relative w-full ' >
      <img
        src='/imagenes/salon.png'
        alt='salon'
        className='h-full w-full object-contain '
      />
          
          <div className='flex absolute top-[40%] left-[49%] transform -translate-x-1/2 -translate-y-1/2  text-2xl font-bold'>
          
          <div className='flex gap-4 '>
          <Input disabled id='search' type='search' placeholder='Buscar en el catalogo por titulo' required className='h-10 w-170 pl-10 bg-[var(--color-bank3)]' />
          <Icon icon="lucide:search" size={20} className="w-[40px] h-[20px] absolute bottom-2"  />
          
              <Button disabled type='submit' variant="bank" className='w-30 h-10  '>
                Buscar
              </Button>
              
              </div>
              
          </div>
        </div>


  );
};

export default Index;
