import React from 'react';
import { BadgeVariant } from '@/factories/types/factory.types';

interface PropertyBadgeProps {
  label: string;
  variant: BadgeVariant;
  className?: string;
}

const VARIANT_CLASSES: Record<BadgeVariant, string> = {
  emerald: 'badge-emerald',
  cyan: 'badge-steel',
  amber: 'badge-amber',
  purple: 'badge-deep-space',
  rose: 'badge-strawberry',
  indigo: 'badge-frosted'
};

export function PropertyBadge({ label, variant, className = '' }: PropertyBadgeProps) {
  const colorClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.indigo;

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-black tracking-wide shadow-sm ${colorClass} ${className}`}>
      {label}
    </span>
  );
}
