import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Application, ApplicationStage } from '../types';
import { ApplicationStatusBadge } from '../components/applications/ApplicationStatusBadge';
import { ApplicationDetailDrawer } from '../components/applications/ApplicationDetailDrawer';
import { EmptyState } from '../components/common/EmptyState';
import {
  FileCheck2,
  Calendar,
  Search,
  Filter,
  ArrowRight,
  Clock,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

export const ApplicationsPage: React.FC = () => {
  const { applications } = useApp();
  const [stageFilter, setStageFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedApplication, setSelectedApplication] = useState<Application | null>(null);

  const filteredApplications = applications.filter((app) => {
    if (stageFilter !== 'all' && app.currentStage !== stageFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      const matchComp = app.company.toLowerCase().includes(q);
      const matchRole = app.role.toLowerCase().includes(q);
      if (!matchComp && !matchRole) return false;
    }
    return true;
  });

  const stages: Array<{ id: string; label: string }> = [
    { id: 'all', label: 'All Applications (' + applications.length + ')' },
    { id: 'Applied', label: 'Applied' },
    { id: 'Shortlisted', label: 'Shortlisted' },
    { id: 'Assessment', label: 'Assessment' },
    { id: 'Interview', label: 'Interview' },
    { id: 'Offer', label: 'Offer' },
    { id: 'Rejected', label: 'Concluded' },
  ];

  return (
    <div className='space-y-6 animate-fade-in'>
      {/* Page Header */}
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
        <div>
          <h2 className='text-2xl font-bold tracking-tight text-slate-900'>My Applications</h2>
          <p className='text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed'>
            Track the status of your submissions, interview dates, and recruiter decisions in real time.
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className='bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-4'>
        <div className='flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between'>
          {/* Search Input */}
          <div className='relative flex-1'>
            <Search className='w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2' />
            <input
              type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Search by company or role...'
              className='w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all'
            />
          </div>

          {/* Stage Count Pills */}
          <div className='flex flex-wrap gap-1.5 overflow-x-auto pb-1 sm:pb-0'>
            {stages.map((st) => (
              <button
                key={st.id}
                onClick={() => setStageFilter(st.id)}
                className={
                  'px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ' +
                  (stageFilter === st.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/70')
                }
              >
                {st.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Applications List / Table */}
      {filteredApplications.length > 0 ? (
        <div className='bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden'>
          <div className='overflow-x-auto'>
            <table className='w-full text-left text-xs border-collapse'>
              <thead>
                <tr className='border-b border-slate-100 bg-slate-50/60 text-slate-500 font-semibold uppercase tracking-wider text-[10px]'>
                  <th className='py-3.5 px-5'>Company & Role</th>
                  <th className='py-3.5 px-4'>Applied Date</th>
                  <th className='py-3.5 px-4'>Current Stage</th>
                  <th className='py-3.5 px-4'>Upcoming Next Step</th>
                  <th className='py-3.5 px-4 text-right'>Action</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-100'>
                {filteredApplications.map((app) => (
                  <tr
                    key={app.id}
                    onClick={() => setSelectedApplication(app)}
                    className='hover:bg-slate-50/80 transition-colors cursor-pointer group'
                  >
                    <td className='py-4 px-5'>
                      <div className='font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors'>
                        {app.role}
                      </div>
                      <div className='text-xs text-slate-500 font-medium'>{app.company}</div>
                    </td>

                    <td className='py-4 px-4 text-slate-600 font-medium whitespace-nowrap'>
                      {app.appliedDate}
                    </td>

                    <td className='py-4 px-4 whitespace-nowrap'>
                      <ApplicationStatusBadge stage={app.currentStage} size='sm' />
                    </td>

                    <td className='py-4 px-4 max-w-xs'>
                      {app.nextStep ? (
                        <div>
                          <p className='font-semibold text-slate-800 truncate'>
                            {app.nextStep.action}
                          </p>
                          <span className='text-[11px] text-slate-400 font-medium'>
                            {app.nextStep.date}
                          </span>
                        </div>
                      ) : (
                        <span className='text-slate-400 italic'>None scheduled</span>
                      )}
                    </td>

                    <td className='py-4 px-4 text-right whitespace-nowrap'>
                      <span className='inline-flex items-center gap-1 font-semibold text-blue-600 group-hover:text-blue-700'>
                        <span>Timeline</span>
                        <ChevronRight className='w-4 h-4 group-hover:translate-x-0.5 transition-transform' />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <EmptyState
          icon={FileCheck2}
          title='No applications found'
          description='You have not applied to any opportunities in this category yet. Explore campus drives and submit an application.'
          actionText='Browse Opportunities'
          actionLink='/opportunities'
        />
      )}

      {/* Application Detail Drawer / Modal */}
      <ApplicationDetailDrawer
        application={selectedApplication}
        isOpen={selectedApplication !== null}
        onClose={() => setSelectedApplication(null)}
      />
    </div>
  );
};
