import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { StatCard } from '../components/common/StatCard';
import { OpportunityCard } from '../components/opportunities/OpportunityCard';
import { EventCard } from '../components/calendar/EventCard';
import { NotificationItem } from '../components/notifications/NotificationItem';
import {
  FileCheck2,
  Users2,
  CalendarCheck2,
  Award,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';

export const DashboardPage: React.FC = () => {
  const { student, stats, opportunities, isApplied, events, notifications, markNotificationAsRead } = useApp();

  const recommendedOpportunities = opportunities
    .filter((opp) => opp.id !== 'healthpulse-growth-intern')
    .slice(0, 3);

  const upcomingEvents = events.slice(0, 3);
  const recentNotifications = notifications.slice(0, 3);

  const stages = [
    { name: 'Applied', count: stats.totalApplications, color: 'bg-blue-600' },
    { name: 'Shortlisted', count: stats.shortlisted, color: 'bg-purple-600' },
    { name: 'Assessment', count: 1, color: 'bg-amber-600' },
    { name: 'Interview', count: stats.interviews, color: 'bg-indigo-600' },
    { name: 'Offer', count: stats.offers, color: 'bg-emerald-600' },
  ];

  return (
    <div className='space-y-8 animate-fade-in'>
      {/* Welcome Header */}
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-blue-900/10'>
        <div className='space-y-1.5'>
          <div className='inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold backdrop-blur-xs'>
            <Sparkles className='w-3.5 h-3.5 text-amber-300' />
            <span>Placement Session 2026-27</span>
          </div>
          <h2 className='text-2xl sm:text-3xl font-extrabold tracking-tight'>
            Good morning, {student.name.trim().split(/\s+/)[0] || 'Student'} 👋
          </h2>
          <p className='text-xs sm:text-sm text-blue-100/90 leading-relaxed max-w-xl'>
            Here is what is happening with your placement journey. Track active applications, review upcoming interview schedules, and explore fresh matching drives.
          </p>
        </div>

        <div className='flex items-center gap-2.5 sm:self-center'>
          <Link
            to='/opportunities'
            className='inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white text-blue-700 hover:bg-blue-50 font-bold text-xs shadow-md transition-all'
          >
            <span>Browse Opportunities</span>
            <ArrowRight className='w-4 h-4' />
          </Link>
        </div>
      </div>

      {/* 4 Overview Metric Cards */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
        <StatCard
          label='Applications'
          value={stats.totalApplications}
          icon={FileCheck2}
          color='blue'
          subtext='Active campus submissions'
        />
        <StatCard
          label='Shortlisted'
          value={stats.shortlisted}
          icon={Users2}
          color='purple'
          subtext='Profiles selected for screening'
        />
        <StatCard
          label='Interviews'
          value={stats.interviews}
          icon={CalendarCheck2}
          color='amber'
          subtext='Rounds scheduled'
        />
        <StatCard
          label='Offers'
          value={stats.offers}
          icon={Award}
          color='emerald'
          subtext='Placement offers received'
        />
      </div>

      {/* Application Progress Funnel Tracker */}
      <div className='bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs space-y-4'>
        <div className='flex items-center justify-between'>
          <div>
            <h3 className='font-bold text-slate-900 text-base'>Placement Journey Pipeline</h3>
            <p className='text-xs text-slate-500 mt-0.5'>
              Your progression from initial application submission to final placement offer
            </p>
          </div>
          <Link
            to='/applications'
            className='text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1'
          >
            <span>View All Applications</span>
            <ArrowRight className='w-3.5 h-3.5' />
          </Link>
        </div>

        {/* Step Progression Bar */}
        <div className='grid grid-cols-5 gap-2 pt-2'>
          {stages.map((stage, idx) => (
            <div key={idx} className='space-y-2 text-center'>
              <div
                className={
                  'h-2.5 rounded-full transition-all ' +
                  (stage.count > 0 ? stage.color : 'bg-slate-100')
                }
              ></div>
              <div className='flex flex-col items-center'>
                <span className='text-xs font-bold text-slate-800'>{stage.name}</span>
                <span className='text-[11px] text-slate-500 font-medium'>
                  {stage.count} {stage.count === 1 ? 'role' : 'roles'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Layout: Upcoming Events & Notifications */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Upcoming Placement Events (2 columns on lg) */}
        <div className='lg:col-span-2 space-y-4'>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='font-bold text-slate-900 text-base'>Upcoming Placement Events</h3>
              <p className='text-xs text-slate-500 mt-0.5'>
                Assessments, interviews, pre-placement talks & deadlines
              </p>
            </div>
            <Link
              to='/calendar'
              className='text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1'
            >
              <span>Full Calendar</span>
              <ArrowRight className='w-3.5 h-3.5' />
            </Link>
          </div>

          <div className='space-y-3'>
            {upcomingEvents.map((evt) => (
              <EventCard key={evt.id} event={evt} />
            ))}
          </div>
        </div>

        {/* Notifications Preview (1 column on lg) */}
        <div className='space-y-4'>
          <div className='flex items-center justify-between'>
            <div>
              <h3 className='font-bold text-slate-900 text-base'>Recent Notifications</h3>
              <p className='text-xs text-slate-500 mt-0.5'>Placement cell announcements</p>
            </div>
            <Link
              to='/notifications'
              className='text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1'
            >
              <span>View all</span>
              <ArrowRight className='w-3.5 h-3.5' />
            </Link>
          </div>

          <div className='space-y-3'>
            {recentNotifications.map((notif) => (
              <NotificationItem
                key={notif.id}
                notification={notif}
                onMarkAsRead={markNotificationAsRead}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Opportunities */}
      <div className='space-y-4 pt-2'>
        <div className='flex items-center justify-between'>
          <div>
            <h3 className='font-bold text-slate-900 text-base'>Recommended Opportunities</h3>
            <p className='text-xs text-slate-500 mt-0.5'>
              Curated drives aligned with your Electronics & Communication profile
            </p>
          </div>
          <Link
            to='/opportunities'
            className='text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1'
          >
            <span>Explore All ({opportunities.length})</span>
            <ArrowRight className='w-3.5 h-3.5' />
          </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {recommendedOpportunities.map((opp) => (
            <OpportunityCard
              key={opp.id}
              opportunity={opp}
              student={student}
              isApplied={isApplied(opp.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
