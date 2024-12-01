import React from 'react';
import { Logo } from '../components/Logo';
import { BackButton } from '../components/BackButton';
import { CardRecommendation } from '../components/CardRecommendation';
import { SavingsChart } from '../components/SavingsChart';
import { AlternativeCards } from '../components/AlternativeCards';

const recommendations = [
  {
    name: 'Premium Rewards Card',
    bank: 'HDFC Bank',
    image: 'https://images.unsplash.com/photo-1613243555988-441166d4d6fd?auto=format&fit=crop&w=400&q=80',
    benefits: [
      '5% cashback on dining',
      '3x reward points on travel',
      'Airport lounge access',
      'Annual fee waiver on spend'
    ],
    annualFee: 5000,
    rewardRate: 3.5,
    creditLimit: '5,00,000',
    eligibility: 'Eligible'
  },
  {
    name: 'Travel Elite Card',
    bank: 'ICICI Bank',
    image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?auto=format&fit=crop&w=400&q=80',
    benefits: [
      '4x miles on flights',
      'Complimentary lounge visits',
      'Travel insurance',
      'Zero forex markup'
    ],
    annualFee: 3000,
    rewardRate: 3.2,
    creditLimit: '4,00,000',
    eligibility: 'Eligible'
  },
  {
    name: 'Lifestyle Plus Card',
    bank: 'Axis Bank',
    image: 'https://images.unsplash.com/photo-1613243555778-7c6d379c7f36?auto=format&fit=crop&w=400&q=80',
    benefits: [
      '5% cashback on shopping',
      '2x points on entertainment',
      'Movie ticket discounts',
      'Welcome bonus points'
    ],
    annualFee: 2000,
    rewardRate: 2.8,
    creditLimit: '3,00,000',
    eligibility: 'Eligible'
  }
];

export function RecommendationsPage() {
  return (
    <div className="min-h-screen bg-luxury-gradient text-white">
      <div className="container mx-auto px-6 py-6 flex items-center gap-4">
        <BackButton />
        <Logo />
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-serif mb-4">Your Personalized Recommendations</h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Based on your spending patterns and preferences, we've curated these cards 
            to maximize your rewards and benefits.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-16">
          {recommendations.map((card, index) => (
            <CardRecommendation key={index} card={card} featured={index === 0} />
          ))}
        </div>

        <div className="grid grid-cols-3 gap-8 mb-16">
          <div className="col-span-2">
            <SavingsChart recommendations={recommendations} />
          </div>
          <div>
            <AlternativeCards />
          </div>
        </div>
      </div>
    </div>
  );
}