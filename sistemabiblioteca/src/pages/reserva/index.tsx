import React from 'react';
import Features from '@/components/Organisms/FeatureReserva'
import FeatureLibro from '@/components/Organisms/FeatureLibro'
import NavLibro from '@/components/Organisms/NavVistaSimple'

const Index = () => {
  return (
    
    <div className="flex flex-col min-h-screen">
      <NavLibro></NavLibro>
      <div className=' min-h-screen bg-[var(--color-bank4)] '>
        <div className="flex justify-end p-6">
          
          <Features></Features>
        </div>
      </div>
    </div>
  );
};

export default Index;
