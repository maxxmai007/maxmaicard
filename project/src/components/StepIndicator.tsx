import React from 'react';
import { User, Wallet, Brain, CreditCard } from 'lucide-react';

const steps = [
  { icon: User, label: 'Create Your Profile' },
  { icon: Wallet, label: 'Share Your Spending Habits' },
  { icon: Brain, label: 'AI Analyzes Your Data' },
  { icon: CreditCard, label: 'Get Tailored Recommendations' }
];

export function StepIndicator() {
  return (
    <div className="grid grid-cols-4 gap-8 max-w-4xl mx-auto">
      {steps.map((Step, index) => (
        <div
          key={index}
          className="flex flex-col items-center group cursor-pointer"
        >
          <div className="w-16 h-16 rounded-lg bg-luxury-800 border border-gold-300/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:border-gold-300/30">
            <Step.icon className="w-6 h-6 text-gold-300" strokeWidth={1.5} />
          </div>
          <p className="text-center text-sm text-white/60 group-hover:text-gold-300 transition-colors duration-300">
            {Step.label}
          </p>
        </div>
      ))}
    </div>
  );
}