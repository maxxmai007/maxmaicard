import React from 'react';
import { CreditCard } from 'lucide-react';

const alternativeCards = [
  {
    name: 'Cashback Pro Card',
    bank: 'SBI Card',
    feature: '2% unlimited cashback'
  },
  {
    name: 'Shopping Plus Card',
    bank: 'Kotak Bank',
    feature: '4x rewards on online shopping'
  }
];

export function AlternativeCards() {
  return (
    <div className="bg-luxury-800 rounded-xl p-6 border border-gold-300/10">
      <h3 className="text-xl font-serif mb-6">Alternative Options</h3>
      
      <div className="space-y-4">
        {alternativeCards.map((card) => (
          <div
            key={card.name}
            className="p-4 bg-luxury-700 rounded-lg border border-gold-300/10
              hover:border-gold-300/30 transition-colors cursor-pointer"
          >
            <div className="flex gap-4">
              <div className="mt-1">
                <CreditCard className="w-5 h-5 text-gold-300" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-medium mb-1">{card.name}</h4>
                <p className="text-sm text-white/60">{card.bank}</p>
                <p className="text-sm text-gold-300 mt-2">{card.feature}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}