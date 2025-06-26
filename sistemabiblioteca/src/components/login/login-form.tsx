
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/router';
import Buttom from '@/components/Atoms/Buttom'

export default function LoginForm() {

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    router.push('/usuarios');
  };

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
              Inicia sesión para acceder al sistema de la biblioteca
            </h2>
            <form className='space-y-4 ' onSubmit={handleSubmit}>
              <div>
                <Label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-700'>Email</Label>
                <Input id='email' type='email' placeholder='correo@ejemplo.com' required />
              </div>
              <div>
                <Label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-700'>Contraseña</Label>
                <Input id='password' type='password' required  />
              </div>
              <div className="mb-4">
                <label htmlFor="rol" className="block text-sm font-medium text-gray-700 mb-1">
                  Rol
                </label>
                <select
                  id="rol"
                  name="rol"
                  className="w-full rounded-md border border-black bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  required 
                >
                  <option value="predeterminado">   </option>
                  <option value="admin">Director</option>
                  <option value="bibliotecario">Bibliotecario</option>
                  <option value="estudiante">Usuario de la biblioteca</option>
                </select>
              </div>
              <Button type='submit' variant="bank" className='w-full mt-4'>
                Iniciar Sesión
              </Button>
              <div className='text-center text-sm'>
                <a href='#' className='underline underline-offset-4'>
                  ¿Olvidaste tu contraseña?
                </a>
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
}
