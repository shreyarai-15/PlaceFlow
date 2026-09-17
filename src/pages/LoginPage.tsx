import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import {
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Building,
  Briefcase,
  Users,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { student } = useApp();

  const handleContinueAsStudent = () => {
    navigate('/dashboard');
  };

  return (
    <div className='min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between relative overflow-hidden'>
      {/* Background Glows */}
      <div className='absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none'></div>
      <div className='absolute top-1/2 -right-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none'></div>

      {/* Header */}
      <header className='p-6 sm:px-12 flex items-center justify-between relative z-10'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/25'>
            <GraduationCap className='w-6 h-6' />
          </div>
          <div>
            <div className='flex items-center gap-2'>
              <span className='font-bold text-xl text-white tracking-tight'>PlaceFlow</span>
              <span className='text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30'>
                Portfolio Prototype
              </span>
            </div>
            <p className='text-xs text-slate-400 font-medium'>Campus Placement Management System</p>
          </div>
        </div>

        <div className='hidden sm:flex items-center gap-2 text-xs text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-full border border-slate-700/60'>
          <ShieldCheck className='w-4 h-4 text-emerald-400' />
          <span>Fictional Demo Environment</span>
        </div>
      </header>

      {/* Main Card */}
      <main className='flex-1 flex items-center justify-center p-4 sm:p-6 relative z-10'>
        <div className='w-full max-w-md bg-slate-800/90 backdrop-blur-xl border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6'>
          <div className='text-center space-y-2'>
            <div className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold'>
              <Sparkles className='w-3.5 h-3.5' />
              <span>Placement Season 2026-27</span>
            </div>
            <h2 className='text-2xl font-bold text-white tracking-tight'>
              Welcome to PlaceFlow
            </h2>
            <p className='text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mx-auto'>
              A unified campus placement management platform streamlining discovery, eligibility checks, and tracking.
            </p>
          </div>

          {/* Active Student Demo Profile Card */}
          <div className='p-4 rounded-2xl bg-slate-900/80 border border-slate-700/80 space-y-3'>
            <div className='flex items-center justify-between text-xs text-slate-400'>
              <span className='font-semibold uppercase tracking-wider text-[10px] text-slate-400'>
                Demo Student Account
              </span>
              <span className='inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full'>
                <CheckCircle className='w-3 h-3' /> Verified
              </span>
            </div>

            <div className='flex items-center gap-3.5'>
              <div className='w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center font-bold text-white text-base shadow-md shadow-blue-500/20'>
                AS
              </div>
              <div className='min-w-0'>
                <h3 className='font-bold text-white text-sm truncate'>{student.name}</h3>
                <p className='text-xs text-slate-400 truncate'>
                  {student.branch}
                </p>
                <div className='flex items-center gap-2 mt-0.5 text-[11px] text-slate-400 font-medium'>
                  <span>Batch {student.graduationYear}</span>
                  <span>•</span>
                  <span className='text-blue-400 font-bold'>CGPA {student.cgpa.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Primary Demo Login CTA */}
          <button
            onClick={handleContinueAsStudent}
            className='w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-sm rounded-2xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 group cursor-pointer'
          >
            <span>Continue as Student</span>
            <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
          </button>

          {/* Other Roles Preview */}
          <div className='space-y-2 pt-2 border-t border-slate-700/60'>
            <div className='text-[11px] font-semibold text-slate-400 uppercase tracking-wider text-center'>
              Other Roles (Phase 2 Roadmap)
            </div>
            <div className='grid grid-cols-2 gap-2'>
              <div className='p-2.5 rounded-xl bg-slate-900/40 border border-slate-700/40 text-center opacity-60 cursor-not-allowed'>
                <div className='flex items-center justify-center gap-1.5 text-xs text-slate-400 font-medium'>
                  <Building className='w-3.5 h-3.5' />
                  <span>T&P Officer</span>
                </div>
                <span className='text-[10px] text-slate-400 block mt-0.5'>Phase 2</span>
              </div>
              <div className='p-2.5 rounded-xl bg-slate-900/40 border border-slate-700/40 text-center opacity-60 cursor-not-allowed'>
                <div className='flex items-center justify-center gap-1.5 text-xs text-slate-400 font-medium'>
                  <Briefcase className='w-3.5 h-3.5' />
                  <span>Recruiter</span>
                </div>
                <span className='text-[10px] text-slate-400 block mt-0.5'>Phase 2</span>
              </div>
            </div>
          </div>

          <p className='text-[11px] text-center text-slate-400 leading-relaxed'>
            No password required in demo mode. All interactions persist locally in browser storage.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className='p-6 text-center text-xs text-slate-400 border-t border-slate-800/80 relative z-10'>
        PlaceFlow Campus Placement Prototype • Portfolio Showcase for Product Management & Project Management
      </footer>
    </div>
  );
};
