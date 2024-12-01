import React from 'react';

interface SavingsChartProps {
  recommendations: Array<{
    name: string;
    rewardRate: number;
  }>;
}

export function SavingsChart({ recommendations }: SavingsChartProps) {
  const monthlySpend = 50000; // Example monthly spend

  return (
    <div className="bg-luxury-800 rounded-xl p-6 border border-gold-300/10">
      <h3 className="text-xl font-serif mb-6">Annual Savings Comparison</h3>
      
      <div className="space-y-6">
        {recommendations.map((card) => {
          const annualSavings = (monthlySpend * card.rewardRate / 100) * 12;
          const barWidth = (annualSavings / 30000) * 100; // Max savings assumed 30000

          return (
            <div key={card.name}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/80">{card.name}</span>
                <span className="text-gold-300">₹{Math.round(annualSavings).toLocaleString()}</span>
              </div>
              <div className="h-2 bg-luxury-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gold-300 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min(barWidth, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-white/40 text-sm mt-6">
        *Based on monthly spend of ₹{monthlySpend.toLocaleString()}
      </p>
    </div>
  );
}