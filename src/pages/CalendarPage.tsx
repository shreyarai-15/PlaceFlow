import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { EventCard } from '../components/calendar/EventCard';
import { EmptyState } from '../components/common/EmptyState';
import { EventType } from '../types';
import { Calendar, Filter } from 'lucide-react';

export const CalendarPage: React.FC = () => {
  const { events } = useApp();
  const [filterType, setFilterType] = useState<string>('all');

  const filteredEvents = events.filter((evt) => {
    if (filterType !== 'all' && evt.type !== filterType) return false;
    return true;
  });

  const eventTypes = [
    { id: 'all', label: 'All Events (' + events.length + ')' },
    { id: 'Interview', label: 'Interviews' },
    { id: 'Assessment', label: 'Assessments' },
    { id: 'Pre-placement talk', label: 'Pre-Placement Talks' },
    { id: 'Application deadline', label: 'Deadlines' },
  ];

  return (
    <div className='space-y-6 animate-fade-in'>
      {/* Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-slate-900'>
          Placement Calendar & Schedule
        </h2>
        <p className='text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed'>
          Stay synchronized with all campus recruitment rounds, test slots, and live interviewer links.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className='flex flex-wrap gap-2'>
        {eventTypes.map((t) => (
          <button
            key={t.id}
            onClick={() => setFilterType(t.id)}
            className={
              'px-3.5 py-1.5 text-xs font-semibold rounded-xl transition-all ' +
              (filterType === t.id
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50')
            }
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Events List */}
      {filteredEvents.length > 0 ? (
        <div className='space-y-3.5'>
          {filteredEvents.map((evt) => (
            <EventCard key={evt.id} event={evt} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Calendar}
          title='No placement events scheduled'
          description='No upcoming assessments or interviews found under this category filter.'
          actionText='View All Events'
          onActionClick={() => setFilterType('all')}
        />
      )}
    </div>
  );
};
