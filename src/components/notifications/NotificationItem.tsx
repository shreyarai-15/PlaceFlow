import React from 'react';
import { Notification } from '../../types';
import { Bell, Calendar, Briefcase, FileCheck, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NotificationItemProps {
  notification: Notification;
  onMarkAsRead: (id: string) => void;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onMarkAsRead,
}) => {
  const iconConfig = {
    interview: { icon: Calendar, color: 'text-indigo-600 bg-indigo-50 border-indigo-100' },
    deadline: { icon: Clock, color: 'text-rose-600 bg-rose-50 border-rose-100' },
    assessment: { icon: FileCheck, color: 'text-amber-600 bg-amber-50 border-amber-100' },
    update: { icon: CheckCircle2, color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
    general: { icon: Bell, color: 'text-blue-600 bg-blue-50 border-blue-100' },
  }[notification.type];

  const Icon = iconConfig.icon;

  return (
    <div
      className={
        'p-4 rounded-2xl border transition-all flex items-start justify-between gap-3 ' +
        (notification.read
          ? 'bg-white border-slate-200/80 hover:border-slate-300'
          : 'bg-blue-50/40 border-blue-200 hover:border-blue-300')
      }
    >
      <div className='flex items-start gap-3 min-w-0'>
        <div
          className={'w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ' + iconConfig.color}
        >
          <Icon className='w-4 h-4' />
        </div>

        <div className='min-w-0'>
          <div className='flex items-center gap-2'>
            <h4 className='font-semibold text-slate-900 text-sm leading-snug'>{notification.title}</h4>
            {!notification.read && (
              <span className='w-2 h-2 rounded-full bg-blue-600 shrink-0' title='Unread'></span>
            )}
          </div>

          <p className='text-xs text-slate-600 mt-1 leading-relaxed'>{notification.message}</p>

          <div className='mt-2.5 flex items-center gap-3 text-[11px] text-slate-400'>
            <span>{notification.timestamp}</span>
            {notification.actionLink && (
              <Link
                to={notification.actionLink}
                className='text-blue-600 hover:text-blue-700 font-semibold'
              >
                View
              </Link>
            )}
          </div>
        </div>
      </div>

      {!notification.read && (
        <button
          onClick={() => onMarkAsRead(notification.id)}
          className='text-[11px] font-medium text-slate-500 hover:text-slate-900 shrink-0 px-2 py-1 rounded-lg hover:bg-slate-100 transition-colors'
        >
          Mark as read
        </button>
      )}
    </div>
  );
};
