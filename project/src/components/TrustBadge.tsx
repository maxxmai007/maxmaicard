import React from 'react';
import { Shield, Lock } from 'lucide-react';

interface TrustBadgeProps {
  type: 'rbi' | 'security';
}

export function TrustBadge({ type }: TrustBadgeProps) {
  const badges = {
    rbi: {
      icon: Shield,
      label: 'RBI Compliant'
    },
    security: {
      icon: Lock,
      label: 'Data Secured'
    }
  };

  const { icon: Icon, label } = badges[type];

  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-luxury-800/50 border border-gold-300/10">
      <Icon className="w-4 h-4 text-gold-300" strokeWidth={1.5} />
      <span className="text-sm text-white/60">{label}</span>
    </div>
  );
}