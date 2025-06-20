import React from 'react';
import Features from '@/components/Organisms/Features'
import NavBusquedaAvanzada from '@/components/Organisms/NavBusquedaAvanzada'

const Index = () => {
  return (
    
    <div className="flex flex-col min-h-screen">
      <NavBusquedaAvanzada></NavBusquedaAvanzada>
      <div className=' min-h-screen bg-[var(--color-bank4)] '>
        <div className="">
          <Features></Features>
        </div>
      </div>
    </div>
  );
};

export default Index;
