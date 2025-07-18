
import { Button } from '@/components/ui/button';
import { Card} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState} from 'react';
import { getUsers } from '@/utils/api';
import { useRouter } from 'next/router';

const roles = [
  { value: 'DIRECTOR', label: 'Director' },
  { value: 'BIBLIOTECARIO', label: 'Bibliotecario' },
  { value: 'USUARIO', label: 'Usuario de la biblioteca' },
];

interface User {
  email: string;
  documento: string;
  rol: string;
}

export default function LoginFormWrapper() {

  const [email, setEmail] = useState('');
  const [documento, setDocumento] = useState('');
  const [rol, setRol] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const users = await getUsers();

      const user = users.find(
        (u: User) =>
          u.email === email &&
          u.documento === documento &&
          u.rol.toLowerCase() === rol.toLowerCase()
      );

      if (!user) {
        alert('Credenciales o rol incorrectos');
        return;
      }

      localStorage.setItem('usuario', JSON.stringify(user));
      alert(`Bienvenido, ${user.name}`);
      router.push('/libros');

    } catch (error) {
      console.error('Error en el login:', error);
    }
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
            <form className='space-y-4 ' onSubmit={handleLogin}>
              <div>
                <Label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-700'>Email</Label>
                <Input id='email' type='email' placeholder='correo@ejemplo.com' value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div>
                <Label htmlFor='documento' className='block mb-2 text-sm font-medium text-gray-700'>Documento</Label>
                <Input id='documento' type='password' value={documento} onChange={(e) => setDocumento(e.target.value)} required  />
              </div>
              <div className="mb-4">
                <label htmlFor="rol" className="block text-sm font-medium text-gray-700 mb-1">
                  Rol
                </label>
                <select
                  id="rol"
                  value={rol}
                  onChange={(e) => setRol(e.target.value)}
                  className="w-full rounded-md border border-black bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  required 
                >
                  <option value="">Selecciona un rol</option>
                  {roles.map((r) => (
                    <option key={r.value} value={r.value}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>
              <Button type='submit' variant="bank" className='w-full mt-4'>
                Iniciar Sesión
              </Button>
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
