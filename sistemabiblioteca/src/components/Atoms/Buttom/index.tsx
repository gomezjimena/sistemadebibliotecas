import React from 'react';
import { cn } from '@/lib/utils'; // o usa clsx si prefieres

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ className, children, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'bg-[var(--color-bank1)] text-white font-bold rounded text-sm hover:scale-105 transition-all duration-300 cursor-pointer px-4 py-2',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
