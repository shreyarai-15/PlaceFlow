import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  FileCheck2,
  Calendar,
  Bell,
  User,
  LogOut,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface SidebarProps {
  onCloseMobile?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onCloseMobile }) => {
  const { student, stats, unreadNotificationsCount, resetDemoData } = useApp();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Opportunities', path: '/opportunities', icon: Briefcase },
    {
      label: 'My Applications',
      path: '/applications',
      icon: FileCheck2,
      badge: stats.totalApplications > 0 ? stats.totalApplications : undefined,
    },
    { label: 'Calendar', path: '/calendar', icon: Calendar },
    {
      label: 'Notifications',
      path: '/notifications',
      icon: Bell,
      badge: unreadNotificationsCount > 0 ? unreadNotificationsCount : undefined,
      badgeColor: 'bg-rose-500',
    },
  ];

  const handleLogout = () => {
    navigate('/login');
    if (onCloseMobile) onCloseMobile();
  };

  return (
    <aside className='w-64 bg-slate-900 text-slate-300 flex flex-col h-full border-r border-slate-800 select-none'>
      {/* Brand Header */}
      <div className='h-16 px-6 flex items-center justify-between border-b border-slate-800/80'>
        <Link
          to='/dashboard'
          className='flex items-center gap-2.5 group'
          onClick={onCloseMobile}
        >
          <div className='w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform'>
            <GraduationCap className='w-5 h-5' />
          </div>
          <div>
            <div className='flex items-center gap-1.5'>
              <span className='font-bold text-white tracking-tight text-lg'>PlaceFlow</span>
              <span className='text-[10px] font-semibold uppercase px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30'>
                v1.0
              </span>
            </div>
            <p className='text-[10px] text-slate-400 -mt-0.5 font-medium'>Campus Placement</p>
          </div>
        </Link>
      </div>

      {/* Main Navigation */}
      <div className='flex-1 overflow-y-auto px-3 py-4 space-y-6'>
        <div>
          <div className='px-3 mb-2 text-[11px] font-semibold tracking-wider text-slate-400 uppercase'>
            Main
          </div>
          <nav className='space-y-1'>
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={onCloseMobile}
                  className={({ isActive }) =>
                    'flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all ' +
                    (isActive
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                      : 'text-slate-300 hover:bg-slate-800/70 hover:text-white')
                  }
                >
                  <div className='flex items-center gap-3'>
                    <Icon className='w-4 h-4 shrink-0' />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && (
                    <span
                      className={
                        'text-xs font-semibold px-2 py-0.5 rounded-full ' +
                        (item.badgeColor
                          ? item.badgeColor + ' text-white'
                          : 'bg-slate-800 text-slate-300')
                      }
                    >
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        <div>
          <div className='px-3 mb-2 text-[11px] font-semibold tracking-wider text-slate-400 uppercase'>
            Account
          </div>
          <nav className='space-y-1'>
            <NavLink
              to='/profile'
              onClick={onCloseMobile}
              className={({ isActive }) =>
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ' +
                (isActive
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-600/30'
                  : 'text-slate-300 hover:bg-slate-800/70 hover:text-white')
              }
            >
              <User className='w-4 h-4 shrink-0' />
              <span>Student Profile</span>
            </NavLink>
          </nav>
        </div>

        {/* Demo Quick Reset Box */}
        <div className='p-3 rounded-xl bg-slate-800/50 border border-slate-700/60'>
          <div className='flex items-center gap-2 text-xs font-semibold text-amber-400'>
            <Sparkles className='w-3.5 h-3.5' />
            <span>Interactive Demo Mode</span>
          </div>
          <p className='text-[11px] text-slate-400 mt-1 leading-relaxed'>
            Actions persist locally. You can reset anytime.
          </p>
          <button
            onClick={resetDemoData}
            className='mt-2.5 text-xs text-slate-300 hover:text-white underline font-medium cursor-pointer'
          >
            Reset Demo Data
          </button>
        </div>
      </div>

      {/* Student Profile Footer */}
      <div className='p-3 border-t border-slate-800/80 bg-slate-950/40'>
        <div className='flex items-center justify-between p-2 rounded-xl bg-slate-800/60 border border-slate-700/50'>
          <div className='flex items-center gap-2.5 min-w-0'>
            <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center font-bold text-white text-xs shrink-0'>
              AS
            </div>
            <div className='min-w-0'>
              <div className='flex items-center gap-1.5'>
                <p className='text-xs font-semibold text-white truncate'>{student.name}</p>
                <span className='text-[9px] px-1 py-0.2 bg-blue-500/20 text-blue-300 rounded font-medium'>
                  Student
                </span>
              </div>
              <p className='text-[11px] text-slate-400 truncate'>
                ECE • {student.graduationYear} (CGPA {student.cgpa.toFixed(1)})
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            title='Exit Demo / Logout'
            className='p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-700/50 rounded-lg transition-colors shrink-0'
            aria-label='Logout'
          >
            <LogOut className='w-4 h-4' />
          </button>
        </div>
      </div>
    </aside>
  );
};
