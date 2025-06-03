import React, { ReactNode } from 'react';
import Nav from '@/components/Organisms/Nav';

const Index = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className='hidden md:block'>
        <Nav />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Index;
