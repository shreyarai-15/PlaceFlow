import { PlacementEvent } from '../types';

export const initialEvents: PlacementEvent[] = [
  {
    id: 'evt-1',
    title: 'Product Analyst Technical Interview',
    company: 'FinEdge',
    type: 'Interview',
    date: 'Tomorrow, Sep 18',
    time: '10:30 AM - 11:30 AM',
    locationOrMode: 'Virtual • Zoom Meeting Room 4',
    status: 'Upcoming',
    opportunityId: 'finedge-prod-analyst',
    actionText: 'Join Meeting'
  },
  {
    id: 'evt-2',
    title: 'Online Analytics Assessment',
    company: 'NovaTech',
    type: 'Assessment',
    date: 'Sep 22, 2026',
    time: '11:00 AM - 12:30 PM',
    locationOrMode: 'HackerEarth Platform',
    status: 'Upcoming',
    opportunityId: 'novatech-se-intern',
    actionText: 'View Instructions'
  },
  {
    id: 'evt-3',
    title: 'Pre-Placement Talk & Culture Overview',
    company: 'DataBridge',
    type: 'Pre-placement talk',
    date: 'Sep 23, 2026',
    time: '04:00 PM - 05:00 PM',
    locationOrMode: 'Main Auditorium / YouTube Live',
    status: 'Upcoming',
    opportunityId: 'databridge-data-analyst',
    actionText: 'Register'
  },
  {
    id: 'evt-4',
    title: 'Application Deadline Closes',
    company: 'NovaTech',
    type: 'Application deadline',
    date: 'Sep 28, 2026',
    time: '11:59 PM IST',
    locationOrMode: 'PlaceFlow Portal',
    status: 'Upcoming',
    opportunityId: 'novatech-se-intern',
    actionText: 'View Opportunity'
  },
  {
    id: 'evt-5',
    title: 'Cloud Cost Optimization Case Submission',
    company: 'CloudNova',
    type: 'Assessment',
    date: 'Sep 24, 2026',
    time: '11:59 PM IST',
    locationOrMode: 'CloudNova Submission Portal',
    status: 'Upcoming',
    opportunityId: 'cloudnova-ba-intern',
    actionText: 'Upload Assignment'
  },
  {
    id: 'evt-6',
    title: 'Final Leadership Interview',
    company: 'ZetaCommerce',
    type: 'Interview',
    date: 'Sep 26, 2026',
    time: '04:00 PM - 05:00 PM',
    locationOrMode: 'Google Meet',
    status: 'Upcoming',
    opportunityId: 'zetacomm-prod-intern',
    actionText: 'Meeting Link'
  }
];
