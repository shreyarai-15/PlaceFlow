import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: number | string;
  icon: LucideIcon;
  color: 'blue' | 'purple' | 'amber' | 'emerald';
  subtext?: string;
  trend?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  icon: Icon,
  color,
  subtext,
  trend,
}) => {
  const colorStyles = {
    blue: {
      bg: 'bg-blue-50 text-blue-700',
      badge: 'text-blue-700 bg-blue-100/70',
      border: 'hover:border-blue-200',
    },
    purple: {
      bg: 'bg-purple-50 text-purple-700',
      badge: 'text-purple-700 bg-purple-100/70',
      border: 'hover:border-purple-200',
    },
    amber: {
      bg: 'bg-amber-50 text-amber-700',
      badge: 'text-amber-700 bg-amber-100/70',
      border: 'hover:border-amber-200',
    },
    emerald: {
      bg: 'bg-emerald-50 text-emerald-700',
      badge: 'text-emerald-700 bg-emerald-100/70',
      border: 'hover:border-emerald-200',
    },
  }[color];

  return (
    <div
      className={'bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm transition-all duration-200 ' + colorStyles.border}
    >
      <div className='flex items-center justify-between'>
        <span className='text-xs font-semibold tracking-wider text-slate-500 uppercase'>
          {label}
        </span>
        <div className={'p-2.5 rounded-xl ' + colorStyles.bg}>
          <Icon className='w-5 h-5' />
        </div>
      </div>
      <div className='mt-4 flex items-baseline gap-2'>
        <span className='text-3xl font-bold tracking-tight text-slate-900'>{value}</span>
        {trend && (
          <span className={'text-xs font-medium px-2 py-0.5 rounded-full ' + colorStyles.badge}>
            {trend}
          </span>
        )}
      </div>
      {subtext && <p className='mt-1 text-xs text-slate-500'>{subtext}</p>}
    </div>
  );
};
