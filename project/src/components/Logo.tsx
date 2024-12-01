import React from 'react';
import { CreditCard } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <CreditCard className="w-6 h-6 text-gold-300" strokeWidth={1.5} />
      <span className="text-xl font-serif tracking-wide text-white">
        MAXX<span className="text-gold-300">MAI</span>
      </span>
    </div>
  );
}