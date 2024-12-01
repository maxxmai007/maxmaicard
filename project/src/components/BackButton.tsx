import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from './Button';

export function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      variant="secondary"
      className="!px-3"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft className="w-5 h-5" />
    </Button>
  );
}