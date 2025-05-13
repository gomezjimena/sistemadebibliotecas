import React from 'react';
import { Icon } from '@iconify/react';

const Index = ({ icon }: { icon: string }) => {
  return <Icon icon={`${icon}`} width='40' height='40' />;
};

export default Index;
