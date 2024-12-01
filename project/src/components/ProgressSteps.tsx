import React from 'react';
import { Check } from 'lucide-react';

interface ProgressStepsProps {
  steps: string[];
  currentStep: number;
}

export function ProgressSteps({ steps, currentStep }: ProgressStepsProps) {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={step} className="flex items-center">
          <div className="relative">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center border-2
                ${index <= currentStep
                  ? 'border-gold-300 text-gold-300'
                  : 'border-white/20 text-white/40'
                } transition-colors`}
            >
              {index < currentStep ? (
                <Check className="w-5 h-5" />
              ) : (
                <span>{index + 1}</span>
              )}
            </div>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm
              text-white/60">
              {step}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-full h-0.5 mx-4
                ${index < currentStep ? 'bg-gold-300' : 'bg-white/20'}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}