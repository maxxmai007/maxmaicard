import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { BackButton } from '../components/BackButton';
import { Eye, EyeOff } from 'lucide-react';

export function AuthPage() {
  const [searchParams] = useSearchParams();
  const [isSignUp, setIsSignUp] = useState(searchParams.get('mode') === 'signup');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(isSignUp ? '/profile' : '/recommendations');
  };

  return (
    <div className="min-h-screen bg-luxury-gradient text-white flex flex-col">
      <div className="container mx-auto px-6 py-6 flex items-center gap-4">
        <BackButton />
        <Logo />
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-serif mb-2">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="text-white/60">
              {isSignUp 
                ? 'Start your journey to better credit card rewards' 
                : 'Sign in to access your personalized recommendations'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {isSignUp && (
              <Input
                label="Full Name"
                type="text"
                placeholder="John Doe"
                required
              />
            )}
            
            <Input
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              required
            />

            <Input
              label="Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              required
              icon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-white/40 hover:text-gold-300"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              }
            />

            <Button className="w-full" type="submit">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </Button>

            <p className="text-center text-white/60">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-gold-300 hover:underline"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}