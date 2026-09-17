import React from 'react';
import { ApplicationStage } from '../../types';

interface ApplicationStatusBadgeProps {
  stage: ApplicationStage;
  size?: 'sm' | 'md';
}

export const ApplicationStatusBadge: React.FC<ApplicationStatusBadgeProps> = ({
  stage,
  size = 'md',
}) => {
  const sizeClasses = size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-xs';

  const styles: Record<ApplicationStage, string> = {
    Applied: 'bg-blue-50 text-blue-700 border-blue-200',
    Shortlisted: 'bg-purple-50 text-purple-700 border-purple-200',
    Assessment: 'bg-amber-50 text-amber-700 border-amber-200',
    Interview: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    Offer: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Rejected: 'bg-slate-100 text-slate-600 border-slate-200',
  };

  const dots: Record<ApplicationStage, string> = {
    Applied: 'bg-blue-500',
    Shortlisted: 'bg-purple-500',
    Assessment: 'bg-amber-500',
    Interview: 'bg-indigo-500',
    Offer: 'bg-emerald-500',
    Rejected: 'bg-slate-400',
  };

  return (
    <span
      className={
        'inline-flex items-center gap-1.5 font-semibold rounded-full border ' +
        styles[stage] +
        ' ' +
        sizeClasses
      }
    >
      <span className={'w-1.5 h-1.5 rounded-full ' + dots[stage]}></span>
      <span>{stage}</span>
    </span>
  );
};
