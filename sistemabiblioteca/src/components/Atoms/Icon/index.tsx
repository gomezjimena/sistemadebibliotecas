import React from 'react';
import { Icon } from '@iconify/react';

type Props = {
  icon: string;
  className?: string;
  size?: number;
};

const Index = ({ icon, className = '', size = 40 }: Props) => {
  return (
    <div className={`flex flex-col items-center justify-center gradient rounded-full ${className}`}>
      <Icon icon={icon} width={size} height={size} className='text-black' />
    </div>
  );
};

export default Index;
