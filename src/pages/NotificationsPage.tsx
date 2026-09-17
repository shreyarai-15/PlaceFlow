import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { NotificationItem } from '../components/notifications/NotificationItem';
import { EmptyState } from '../components/common/EmptyState';
import { Bell, CheckCheck, Sparkles } from 'lucide-react';

export const NotificationsPage: React.FC = () => {
  const { notifications, markNotificationAsRead, markAllNotificationsAsRead, unreadNotificationsCount } = useApp();
  const [filter, setFilter] = useState<'all' | 'unread'>('all');

  const filteredNotifs = notifications.filter((n) => {
    if (filter === 'unread' && n.read) return false;
    return true;
  });

  const todayNotifications = filteredNotifs.filter((n) => n.dateCategory === 'Today');
  const earlierNotifications = filteredNotifs.filter((n) => n.dateCategory === 'Earlier');

  return (
    <div className='space-y-6 max-w-4xl mx-auto animate-fade-in'>
      {/* Header with Mark All Read CTA */}
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
        <div>
          <h2 className='text-2xl font-bold tracking-tight text-slate-900'>Notifications</h2>
          <p className='text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed'>
            Placement drive updates, assessment invites, shortlist status and deadline alerts.
          </p>
        </div>

        {unreadNotificationsCount > 0 && (
          <button
            onClick={markAllNotificationsAsRead}
            className='inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors cursor-pointer self-start sm:self-auto'
          >
            <CheckCheck className='w-4 h-4' />
            <span>Mark all as read</span>
          </button>
        )}
      </div>

      {/* Filter Tabs */}
      <div className='flex items-center gap-2 border-b border-slate-200 pb-3'>
        <button
          onClick={() => setFilter('all')}
          className={
            'px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ' +
            (filter === 'all'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900')
          }
        >
          All ({notifications.length})
        </button>
        <button
          onClick={() => setFilter('unread')}
          className={
            'px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ' +
            (filter === 'unread'
              ? 'bg-slate-900 text-white shadow-xs'
              : 'text-slate-600 hover:text-slate-900')
          }
        >
          Unread ({unreadNotificationsCount})
        </button>
      </div>

      {/* Notification Sections */}
      {filteredNotifs.length > 0 ? (
        <div className='space-y-6'>
          {todayNotifications.length > 0 && (
            <div className='space-y-3'>
              <h3 className='text-xs font-bold text-slate-400 uppercase tracking-wider px-1'>
                Today
              </h3>
              <div className='space-y-2.5'>
                {todayNotifications.map((notif) => (
                  <NotificationItem
                    key={notif.id}
                    notification={notif}
                    onMarkAsRead={markNotificationAsRead}
                  />
                ))}
              </div>
            </div>
          )}

          {earlierNotifications.length > 0 && (
            <div className='space-y-3'>
              <h3 className='text-xs font-bold text-slate-400 uppercase tracking-wider px-1'>
                Earlier
              </h3>
              <div className='space-y-2.5'>
                {earlierNotifications.map((notif) => (
                  <NotificationItem
                    key={notif.id}
                    notification={notif}
                    onMarkAsRead={markNotificationAsRead}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <EmptyState
          icon={Bell}
          title='You are all caught up'
          description='No notifications pending in this view. New updates regarding your applications will appear here.'
        />
      )}
    </div>
  );
};
