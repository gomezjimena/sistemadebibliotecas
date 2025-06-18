import React, { ReactNode } from 'react';
import NavTitle from '@/components/Atoms/NavTitle';
import Nav from '@/components/Organisms/Nav'

const Index = ({ children }: { children: ReactNode }) => {
  return (
      <div className="flex flex-col min-h-screen">
      <header className="hidden md:block">
        <NavTitle />
        <Nav />
      </header>
      <main className="flex-1">
        {children}
      </main>
  </div>

    
      
  );
};

export default Index;
