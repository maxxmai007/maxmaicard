import React from 'react';
import { ShoppingBag, Utensils, Plane, Home, Car, Lightbulb } from 'lucide-react';

const categories = [
  { icon: ShoppingBag, label: 'Shopping' },
  { icon: Utensils, label: 'Dining' },
  { icon: Plane, label: 'Travel' },
  { icon: Home, label: 'Rent/EMI' },
  { icon: Car, label: 'Transportation' },
  { icon: Lightbulb, label: 'Utilities' },
];

export function SpendingCategories() {
  return (
    <div className="space-y-4">
      <label className="block text-lg">Select your top spending categories</label>
      <div className="grid grid-cols-3 gap-4">
        {categories.map(({ icon: Icon, label }) => (
          <label
            key={label}
            className="flex flex-col items-center p-4 bg-luxury-800 border border-gold-300/20 
              rounded-lg cursor-pointer hover:border-gold-300/40 transition-colors"
          >
            <Icon className="w-6 h-6 mb-2 text-gold-300" strokeWidth={1.5} />
            <span className="text-sm">{label}</span>
            <input
              type="checkbox"
              className="mt-2 accent-gold-300"
            />
          </label>
        ))}
      </div>
    </div>
  );
}