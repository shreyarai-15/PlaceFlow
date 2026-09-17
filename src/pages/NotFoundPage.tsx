import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className='min-h-[70vh] flex flex-col items-center justify-center text-center p-6 space-y-4'>
      <div className='w-16 h-16 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center'>
        <AlertCircle className='w-8 h-8' />
      </div>
      <h2 className='text-2xl font-bold text-slate-900'>Page Not Found</h2>
      <p className='text-xs sm:text-sm text-slate-500 max-w-sm'>
        The page you are trying to access does not exist in the PlaceFlow student placement portal.
      </p>
      <Link
        to='/dashboard'
        className='inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-xs'
      >
        <ArrowLeft className='w-4 h-4' />
        <span>Return to Dashboard</span>
      </Link>
    </div>
  );
};
