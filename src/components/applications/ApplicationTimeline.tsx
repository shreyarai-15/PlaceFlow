import React from 'react';
import { ApplicationTimelineItem, ApplicationStage } from '../../types';
import { Check, Clock, AlertCircle } from 'lucide-react';

interface ApplicationTimelineProps {
  timeline: ApplicationTimelineItem[];
  currentStage: ApplicationStage;
}

export const ApplicationTimeline: React.FC<ApplicationTimelineProps> = ({
  timeline,
  currentStage,
}) => {
  return (
    <div className='relative pl-6 sm:pl-8 space-y-6 before:absolute before:left-2.5 sm:before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200'>
      {timeline.map((item, index) => {
        const isCompleted = item.completed;
        const isCurrent = item.current;

        return (
          <div key={index} className='relative flex items-start group'>
            {/* Step Icon Marker */}
            <div
              className={
                'absolute -left-6 sm:-left-8 top-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ' +
                (isCurrent
                  ? 'bg-blue-600 text-white ring-4 ring-blue-100 shadow-sm'
                  : isCompleted
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white border-2 border-slate-300 text-slate-400')
              }
            >
              {isCompleted ? (
                <Check className='w-3.5 h-3.5' />
              ) : isCurrent ? (
                <span className='w-2 h-2 rounded-full bg-white animate-ping'></span>
              ) : (
                <span className='text-[10px]'>{index + 1}</span>
              )}
            </div>

            {/* Step Content */}
            <div className='bg-slate-50/70 hover:bg-slate-50 rounded-xl p-3.5 border border-slate-200/70 w-full transition-colors'>
              <div className='flex flex-wrap items-center justify-between gap-2'>
                <h4
                  className={
                    'text-xs sm:text-sm font-bold ' +
                    (isCurrent
                      ? 'text-blue-600'
                      : isCompleted
                      ? 'text-slate-900'
                      : 'text-slate-400')
                  }
                >
                  {item.title}
                </h4>

                <div className='flex items-center gap-1.5 text-[11px] text-slate-500 font-medium'>
                  <Clock className='w-3 h-3 text-slate-400' />
                  <span>{item.date}</span>
                </div>
              </div>

              {item.notes && (
                <p className='text-xs text-slate-600 mt-1.5 leading-relaxed'>{item.notes}</p>
              )}

              {isCurrent && (
                <div className='mt-2 inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-0.5 rounded'>
                  Current Active Stage
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
