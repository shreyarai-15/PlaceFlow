import { Notification } from '../types';

export const initialNotifications: Notification[] = [
  {
    id: 'notif-1',
    title: 'Interview Reminder',
    message: 'Your FinEdge Product Analyst interview is scheduled for tomorrow at 10:30 AM.',
    timestamp: '25 minutes ago',
    dateCategory: 'Today',
    type: 'interview',
    read: false,
    actionLink: '/calendar'
  },
  {
    id: 'notif-2',
    title: 'Application Deadline Approaching',
    message: 'Application deadline for NovaTech (Software & Product Intern) closes in 2 days.',
    timestamp: '2 hours ago',
    dateCategory: 'Today',
    type: 'deadline',
    read: false,
    actionLink: '/opportunities/novatech-se-intern'
  },
  {
    id: 'notif-3',
    title: 'Application Status Update',
    message: 'Your application for CloudNova has moved to the Assessment stage.',
    timestamp: '5 hours ago',
    dateCategory: 'Today',
    type: 'update',
    read: false,
    actionLink: '/applications'
  },
  {
    id: 'notif-4',
    title: 'Shortlist Announcement',
    message: 'Congratulations! You have been shortlisted for Vertex Analytics Business Intelligence round.',
    timestamp: 'Yesterday at 3:15 PM',
    dateCategory: 'Earlier',
    type: 'update',
    read: true,
    actionLink: '/applications'
  },
  {
    id: 'notif-5',
    title: 'New Placement Drive Open',
    message: 'PaySprint has opened applications for Operations & Strategy Intern (₹18,000/mo). Check your eligibility now.',
    timestamp: '2 days ago',
    dateCategory: 'Earlier',
    type: 'general',
    read: true,
    actionLink: '/opportunities/paysprint-ops-intern'
  },
  {
    id: 'notif-6',
    title: 'Profile Verification Complete',
    message: 'T&P Department verified your Semester 6 grade sheet and CGPA (8.4).',
    timestamp: '3 days ago',
    dateCategory: 'Earlier',
    type: 'general',
    read: true,
    actionLink: '/profile'
  },
  {
    id: 'notif-7',
    title: 'Pre-Placement Talk Alert',
    message: 'DataBridge leadership will conduct a live technical presentation on Sep 23 at 4:00 PM.',
    timestamp: '4 days ago',
    dateCategory: 'Earlier',
    type: 'general',
    read: true,
    actionLink: '/calendar'
  },
  {
    id: 'notif-8',
    title: 'Application Received',
    message: 'Your application for NovaTech Software & Product Intern was successfully received by the recruiter.',
    timestamp: 'Sep 02, 2026',
    dateCategory: 'Earlier',
    type: 'update',
    read: true,
    actionLink: '/applications'
  }
];
