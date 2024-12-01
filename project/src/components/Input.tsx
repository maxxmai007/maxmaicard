import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
}

export function Input({ label, icon, className = '', ...props }: InputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-white/80">
        {label}
      </label>
      <div className="relative">
        <input
          className={`w-full px-4 py-3 bg-luxury-800 border border-gold-300/20 rounded-lg
            focus:outline-none focus:border-gold-300/40 text-white placeholder:text-white/40
            transition-colors ${className}`}
          {...props}
        />
        {icon && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}