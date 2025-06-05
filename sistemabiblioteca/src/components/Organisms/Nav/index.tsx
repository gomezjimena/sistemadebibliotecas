import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';



const Index = () => {
  return (
    <div className='flex flex-col h-screen'>
   <div className='relative w-full' >
         <img
            src='/imagenes/salon.png'
            alt='salon'
            className='h-full w-full object-contain '
            
          />
     <div className='absolute bottom-0 right-0 mb-4 mr-4'>
              <Button type='submit' variant="bank" className='w-50 h-12  '>
                prueba
              </Button>
              </div>     
          
          <div className='flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-2xl font-bold'>
          
          <div className='flex gap-4 '>
          <Input id='search' type='search' placeholder='Busca tu libro' required className='h-12 w-200'/>
              <Button type='submit' variant="bank" className='w-50 h-12  '>
                Buscar
              </Button>
              
              </div>
              
          </div>
        </div>

      <div className="bg-[var(--color-bank4)] flex-grow">
      
      </div>
      </div>

  );
};

export default Index;
