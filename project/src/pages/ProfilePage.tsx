import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { BackButton } from '../components/BackButton';
import { ProgressSteps } from '../components/ProgressSteps';
import { SpendingCategories } from '../components/SpendingCategories';
import { RangeSlider } from '../components/RangeSlider';

const steps = ['Personal Details', 'Spending Habits', 'Preferences'];

export function ProfilePage() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate('/recommendations');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-luxury-gradient text-white">
      <div className="container mx-auto px-6 py-6 flex items-center gap-4">
        <BackButton />
        <Logo />
      </div>

      <div className="container mx-auto px-6 py-12 max-w-3xl">
        <div className="mb-12">
          <ProgressSteps steps={steps} currentStep={currentStep} />
        </div>

        {currentStep === 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif">Personal Details</h2>
            <div className="grid grid-cols-2 gap-6">
              <Input label="City" type="text" placeholder="Enter your city" />
              <Input label="Pincode" type="text" placeholder="Enter pincode" />
            </div>
            <Input
              label="Monthly Income"
              type="number"
              placeholder="Enter your monthly income"
            />
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif">Spending Habits</h2>
            <SpendingCategories />
            <RangeSlider
              label="Monthly Credit Card Spend"
              min={0}
              max={500000}
              step={5000}
              defaultValue={50000}
            />
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-serif">Card Preferences</h2>
            <div className="space-y-4">
              <label className="block text-lg mb-4">
                What benefits matter most to you?
              </label>
              <div className="grid grid-cols-2 gap-4">
                {['Cashback', 'Travel Miles', 'Shopping Rewards', 'Dining Benefits',
                  'Airport Lounge Access', 'Fuel Surcharge Waiver'].map((benefit) => (
                  <label
                    key={benefit}
                    className="flex items-center p-4 bg-luxury-800 border border-gold-300/20 
                      rounded-lg cursor-pointer hover:border-gold-300/40 transition-colors"
                  >
                    <input
                      type="checkbox"
                      className="mr-3 accent-gold-300"
                    />
                    <span>{benefit}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 flex justify-between">
          {currentStep > 0 && (
            <Button variant="secondary" onClick={handleBack}>
              Back
            </Button>
          )}
          <div className={currentStep === 0 ? 'ml-auto' : ''}>
            <Button onClick={handleNext}>
              {currentStep === steps.length - 1 ? 'View Recommendations' : 'Next Step'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}