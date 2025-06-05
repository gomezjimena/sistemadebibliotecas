import React, { ReactNode } from 'react';
import NavTitle from '@/components/Atoms/NavTitle';
import Nav from '@/components/Organisms/Nav'

const Index = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col h-screen'>
      <div className=' hidden md:block'>
        <NavTitle />
        <Nav/>
     
      </div>
       
    </div>
    
      
  );
};

export default Index;
