import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Bell, Search, ShieldCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { getInitials } from '../../utils/initials';

interface TopbarProps {
  onOpenMobileSidebar: () => void;
}

export const Topbar: React.FC<TopbarProps> = ({ onOpenMobileSidebar }) => {
  const location = useLocation();
  const { unreadNotificationsCount, student } = useApp();

  const getPageTitle = (pathname: string) => {
    if (pathname === '/dashboard') return 'Dashboard Overview';
    if (pathname === '/opportunities') return 'Placement Opportunities';
    if (pathname.startsWith('/opportunities/')) return 'Opportunity Details';
    if (pathname === '/applications') return 'My Applications';
    if (pathname === '/calendar') return 'Placement Calendar';
    if (pathname === '/notifications') return 'Notifications';
    if (pathname === '/profile') return 'Student Profile';
    return 'Campus Placement';
  };

  return (
    <header className='h-16 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30'>
      <div className='flex items-center gap-3'>
        <button
          onClick={onOpenMobileSidebar}
          className='p-2 -ml-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl md:hidden focus:outline-none'
          aria-label='Open sidebar navigation'
        >
          <Menu className='w-5 h-5' />
        </button>

        <div>
          <h1 className='text-base sm:text-lg font-bold text-slate-900'>
            {getPageTitle(location.pathname)}
          </h1>
        </div>
      </div>

      <div className='flex items-center gap-3 sm:gap-4'>
        {/* Prototype Indicator Badge */}
        <div className='hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 border border-amber-200/80 rounded-full text-amber-800 text-xs font-medium'>
          <ShieldCheck className='w-3.5 h-3.5 text-amber-600' />
          <span>Fictional Portfolio Prototype</span>
        </div>

        {/* Search shortcut link to opportunities */}
        <Link
          to='/opportunities'
          className='hidden md:flex items-center gap-2 px-3 py-1.5 text-xs text-slate-400 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors'
        >
          <Search className='w-3.5 h-3.5 text-slate-400' />
          <span>Search opportunities...</span>
          <kbd className='ml-2 px-1.5 py-0.5 text-[10px] font-semibold text-slate-500 bg-white border border-slate-200 rounded shadow-2xs'>
            /
          </kbd>
        </Link>

        {/* Notifications Icon */}
        <Link
          to='/notifications'
          className='relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors'
          aria-label='Notifications'
        >
          <Bell className='w-5 h-5' />
          {unreadNotificationsCount > 0 && (
            <span className='absolute top-1.5 right-1.5 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white'>
              {unreadNotificationsCount}
            </span>
          )}
        </Link>

        {/* Quick User Avatar */}
        <Link
          to='/profile'
          className='flex items-center gap-2 pl-2 border-l border-slate-200 group'
        >
          <div className='w-8 h-8 rounded-xl bg-blue-600 text-white font-semibold text-xs flex items-center justify-center shadow-xs group-hover:ring-2 ring-blue-400 transition-all'>
            {getInitials(student.name)}
          </div>
          <div className='hidden lg:block text-left'>
            <p className='text-xs font-semibold text-slate-900 leading-tight'>{student.name}</p>
            <p className='text-[11px] text-slate-500 leading-tight'>CGPA: {student.cgpa.toFixed(1)}</p>
          </div>
        </Link>
      </div>
    </header>
  );
};
