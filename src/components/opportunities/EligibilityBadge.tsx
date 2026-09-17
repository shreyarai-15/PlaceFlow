import React from 'react';
import { CheckCircle2, AlertCircle, Clock, Check } from 'lucide-react';

interface EligibilityBadgeProps {
  isEligible: boolean;
  isApplied?: boolean;
  isDeadlinePassed?: boolean;
  size?: 'sm' | 'md';
}

export const EligibilityBadge: React.FC<EligibilityBadgeProps> = ({
  isEligible,
  isApplied,
  isDeadlinePassed,
  size = 'md',
}) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs';

  if (isApplied) {
    return (
      <span
        className={'inline-flex items-center gap-1.5 font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-200 ' + sizeClasses}
      >
        <Check className='w-3 h-3' />
        <span>Applied</span>
      </span>
    );
  }

  if (isDeadlinePassed) {
    return (
      <span
        className={'inline-flex items-center gap-1.5 font-medium rounded-full bg-slate-100 text-slate-600 border border-slate-200 ' + sizeClasses}
      >
        <Clock className='w-3 h-3' />
        <span>Closed</span>
      </span>
    );
  }

  if (isEligible) {
    return (
      <span
        className={'inline-flex items-center gap-1.5 font-medium rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 ' + sizeClasses}
      >
        <CheckCircle2 className='w-3 h-3' />
        <span>Eligible</span>
      </span>
    );
  }

  return (
    <span
      className={'inline-flex items-center gap-1.5 font-medium rounded-full bg-amber-50 text-amber-700 border border-amber-200 ' + sizeClasses}
    >
      <AlertCircle className='w-3 h-3' />
      <span>Not Eligible</span>
    </span>
  );
};
