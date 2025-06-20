import React from 'react';
import Features from '@/components/Organisms/FeatureInventario'
import NavInventario from '@/components/Organisms/NavInventario'

const Index = () => {
  return (
    
    <div className="flex flex-col min-h-screen">
      <NavInventario></NavInventario>
      <div className=' min-h-screen bg-[var(--color-bank4)] '>
        <div className="">
          <Features></Features>
        </div>
      </div>
    </div>
  );
};

export default Index;
