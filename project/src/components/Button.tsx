import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium transition-all duration-300';
  const variants = {
    primary: 'bg-luxury-700 text-gold-300 hover:bg-luxury-800 border border-gold-300/20 hover:border-gold-300/40',
    secondary: 'text-white/80 hover:text-gold-300 hover:bg-luxury-800/50'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}