import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/router';

const Index = () => {
  return (
    <div className='flex h-screen items-center justify-center bg-gray-100 '>
      <Card className='flex w-full max-w-4xl overflow-hidden shadow-lg bg-[var(--color-bank4)] border border-black'>
        <div className='grid w-full grid-cols-1 md:grid-cols-2 '>
          <div className='flex flex-col justify-center p-8'>
          <div className='flex justify-center mb-4'>
            <img
              src='/imagenes/logosb.png'
              alt='Logo'
              className='h-24 w-auto'
            />
          </div>
            <h2 className='mb-4 text-center text-xl font-bold text-gray-700'>
              Recuperar Contraseña
            </h2>
            <form className='space-y-4 '>
              <div>
                <Label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-700'>Email</Label>
                <Input id='email' type='email' placeholder='correo@ejemplo.com' required />
              </div>
              <div>
                <Label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-700'>Nueva Contraseña</Label>
                <Input id='password' type='password' required  />
              </div>
              <div>
                <Label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-700'>Confirmar Contraseña</Label>
                <Input id='password' type='password' required  />
              </div>
              <br></br>
              <div className="flex gap-2 mt-4 mb-6">
                      <Button type='submit' variant="bank" className='flex-1'> Cancelar </Button>
                      <Button type='submit' variant="bank" className='flex-1'> Guardar </Button>
                    </div>
            </form>
          </div>
          <div className='relative hidden md:block'>
            <img
              src='/imagenes/fotoPrincipal.webp'
              alt='Login'
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Index;
