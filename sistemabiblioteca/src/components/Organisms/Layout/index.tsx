import React, { ReactNode } from 'react';
import NavTitle from '@/components/Atoms/NavTitle';

const Index = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className='hidden md:block'>
        <NavTitle />
      </div>
    </div>
  );
};

export default Index;
