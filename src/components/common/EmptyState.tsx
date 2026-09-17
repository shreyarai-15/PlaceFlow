import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionText?: string;
  actionLink?: string;
  onActionClick?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon: Icon,
  title,
  description,
  actionText,
  actionLink,
  onActionClick,
}) => {
  return (
    <div className='flex flex-col items-center justify-center p-8 sm:p-12 text-center bg-white rounded-2xl border border-dashed border-slate-200 max-w-xl mx-auto my-6'>
      <div className='w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-500 mb-4'>
        <Icon className='w-7 h-7' />
      </div>
      <h3 className='text-base font-semibold text-slate-900'>{title}</h3>
      <p className='text-sm text-slate-500 mt-1.5 max-w-sm'>{description}</p>
      {actionText && (
        <div className='mt-6'>
          {actionLink ? (
            <Link
              to={actionLink}
              className='inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-sm transition-colors'
            >
              {actionText}
            </Link>
          ) : (
            <button
              onClick={onActionClick}
              className='inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-sm transition-colors'
            >
              {actionText}
            </button>
          )}
        </div>
      )}
    </div>
  );
};
