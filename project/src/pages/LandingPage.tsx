import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { StepIndicator } from '../components/StepIndicator';
import { TrustBadge } from '../components/TrustBadge';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-luxury-gradient text-white">
      <header className="container mx-auto px-6 py-6 flex justify-between items-center">
        <Logo />
        <div className="flex gap-4">
          <Button variant="secondary" onClick={() => navigate('/auth')}>Sign In</Button>
          <Button onClick={() => navigate('/auth?mode=signup')}>Sign Up</Button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-24 text-center relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-300/[0.02] rounded-full blur-3xl" />
        </div>

        <div className="relative">
          <h1 className="text-5xl font-serif mb-6 tracking-tight">
            Maximize Your Savings with the
            <span className="block mt-2 text-gradient">Perfect Credit Card</span>
          </h1>
          <p className="text-lg text-white/60 mb-16 max-w-2xl mx-auto leading-relaxed">
            MaxxMAI uses AI-driven insights to help you unlock rewards tailored to your lifestyle
          </p>

          <div className="mb-16">
            <StepIndicator />
          </div>

          <Button className="text-lg px-8" onClick={() => navigate('/auth?mode=signup')}>
            Start Your Journey
          </Button>
        </div>
      </main>

      <footer className="container mx-auto px-6 py-8 mt-20">
        <div className="flex flex-col items-center gap-8">
          <div className="flex gap-4">
            <TrustBadge type="rbi" />
            <TrustBadge type="security" />
          </div>
          
          <div className="flex gap-8 text-white/60">
            <a href="#" className="hover:text-gold-300 transition-colors">About</a>
            <a href="#" className="hover:text-gold-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}