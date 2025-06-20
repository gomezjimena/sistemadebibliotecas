import React from 'react';
import Features from '@/components/Organisms/Features'
import Nav from '@/components/Organisms/Nav'

const Index = () => {
  return (
    
    <div className="flex flex-col min-h-screen">
      <Nav></Nav>
      <div className=' min-h-screen bg-[var(--color-bank4)] '>
        <div className="">
          <Features></Features>
        </div>
      </div>
    </div>
  );
};

export default Index;
