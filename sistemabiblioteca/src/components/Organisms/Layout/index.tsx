import React, { ReactNode } from 'react';
import Nav from '@/components/Organisms/Nav';
import NavMobile from '@/components/Organisms/NavMobile';

const Index = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className='block md:hidden'>
        <NavMobile />
      </div>
      <div className='hidden md:block'>
        <Nav />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Index;
