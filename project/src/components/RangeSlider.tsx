import React, { useState } from 'react';

interface RangeSliderProps {
  label: string;
  min: number;
  max: number;
  step: number;
  defaultValue: number;
}

export function RangeSlider({ label, min, max, step, defaultValue }: RangeSliderProps) {
  const [value, setValue] = useState(defaultValue);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="block text-lg">{label}</label>
        <span className="text-gold-300">₹{value.toLocaleString()}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-2 bg-luxury-800 rounded-lg appearance-none cursor-pointer
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 
          [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full 
          [&::-webkit-slider-thumb]:bg-gold-300"
      />
      <div className="flex justify-between text-sm text-white/60">
        <span>₹{min.toLocaleString()}</span>
        <span>₹{max.toLocaleString()}</span>
      </div>
    </div>
  );
}