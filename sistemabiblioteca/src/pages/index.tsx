import React, { useEffect } from 'react';
import LoginForm from '@/components/login/login-form';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
      router.push('/libros'); // Redirige si ya está logueado
    }
  }, []);

  return <LoginForm />;
};

export default Index;
