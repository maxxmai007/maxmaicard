import React from 'react';
import { Button } from './Button';
import { Check, Star } from 'lucide-react';

interface CardProps {
  card: {
    name: string;
    bank: string;
    image: string;
    benefits: string[];
    annualFee: number;
    rewardRate: number;
    creditLimit: string;
    eligibility: string;
  };
  featured?: boolean;
}

export function CardRecommendation({ card, featured = false }: CardProps) {
  return (
    <div
      className={`bg-luxury-800 rounded-xl overflow-hidden border transition-all duration-300
        hover:scale-[1.02] ${
          featured
            ? 'border-gold-300/40 shadow-lg shadow-gold-300/5'
            : 'border-gold-300/10'
        }`}
    >
      <div className="relative h-48">
        <img
          src={card.image}
          alt={card.name}
          className="w-full h-full object-cover"
        />
        {featured && (
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-gold-300 text-luxury-900 px-3 py-1 rounded-full text-sm">
            <Star size={14} />
            <span>Best Match</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-serif mb-1">{card.name}</h3>
          <p className="text-white/60 text-sm">{card.bank}</p>
        </div>

        <div className="space-y-3 mb-6">
          {card.benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <Check className="w-4 h-4 text-gold-300 mt-1" />
              <span className="text-sm text-white/80">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div>
            <p className="text-white/60 mb-1">Annual Fee</p>
            <p className="font-medium">₹{card.annualFee.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-white/60 mb-1">Reward Rate</p>
            <p className="font-medium">{card.rewardRate}%</p>
          </div>
          <div>
            <p className="text-white/60 mb-1">Credit Limit</p>
            <p className="font-medium">₹{card.creditLimit}</p>
          </div>
          <div>
            <p className="text-white/60 mb-1">Status</p>
            <p className="text-gold-300">{card.eligibility}</p>
          </div>
        </div>

        <Button className="w-full">Apply Now</Button>
      </div>
    </div>
  );
}