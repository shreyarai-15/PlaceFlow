import React from 'react';
import { PlacementEvent } from '../../types';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventCardProps {
  event: PlacementEvent;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const typeStyles = {
    Assessment: 'bg-amber-50 text-amber-700 border-amber-200',
    Interview: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    'Pre-placement talk': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'Application deadline': 'bg-rose-50 text-rose-700 border-rose-200',
  }[event.type];

  return (
    <div className='bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs hover:border-slate-300 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
      <div className='flex items-start gap-3.5'>
        {/* Date Box */}
        <div className='w-12 h-12 rounded-xl bg-slate-100 flex flex-col items-center justify-center text-slate-700 shrink-0 border border-slate-200/60'>
          <Calendar className='w-4 h-4 text-blue-600 mb-0.5' />
          <span className='text-[10px] font-bold uppercase tracking-tight text-slate-600'>EVENT</span>
        </div>

        <div>
          <div className='flex flex-wrap items-center gap-2 mb-1'>
            <span className={'text-[11px] font-bold px-2 py-0.5 rounded-full border ' + typeStyles}>
              {event.type}
            </span>
            <span className='text-xs font-semibold text-slate-500'>• {event.company}</span>
          </div>

          <h4 className='font-bold text-slate-900 text-sm sm:text-base leading-snug'>{event.title}</h4>

          <div className='mt-2 flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-slate-500'>
            <div className='flex items-center gap-1 font-medium text-slate-700'>
              <Clock className='w-3.5 h-3.5 text-slate-400' />
              <span>{event.date} • {event.time}</span>
            </div>
            <div className='flex items-center gap-1'>
              <MapPin className='w-3.5 h-3.5 text-slate-400' />
              <span>{event.locationOrMode}</span>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-end sm:justify-center shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100'>
        {event.opportunityId ? (
          <Link
            to={'/opportunities/' + event.opportunityId}
            className='inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3.5 py-1.5 rounded-xl transition-colors'
          >
            <span>{event.actionText || 'View Details'}</span>
            <ExternalLink className='w-3.5 h-3.5' />
          </Link>
        ) : (
          <button className='inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-1.5 rounded-xl transition-colors'>
            <span>{event.actionText || 'Details'}</span>
          </button>
        )}
      </div>
    </div>
  );
};
