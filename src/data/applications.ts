import { Application } from '../types';

export const initialApplications: Application[] = [
  {
    id: 'app-novatech',
    opportunityId: 'novatech-se-intern',
    company: 'NovaTech',
    role: 'Software & Product Intern',
    location: 'Remote',
    compensation: '₹25,000/month',
    appliedDate: '2026-09-02',
    currentStage: 'Shortlisted',
    nextStep: {
      action: 'Technical Assessment Round',
      date: '2026-09-22',
      time: '11:00 AM IST',
      venueOrLink: 'NovaTech HackerEarth Portal (Link sent to college email)'
    },
    lastUpdated: '2026-09-14',
    notes: 'Resume was shortlisted by T&P coordinators. Prepare for DSA and product analytics scenarios.',
    timeline: [
      { stage: 'Applied', title: 'Application Submitted', date: '2026-09-02', completed: true, current: false, notes: 'Direct submission via PlaceFlow portal.' },
      { stage: 'Shortlisted', title: 'Profile Shortlisted', date: '2026-09-14', completed: true, current: true, notes: 'Top 15% profiles chosen for technical screening.' },
      { stage: 'Assessment', title: 'Technical Coding & Product Test', date: '2026-09-22', completed: false, current: false },
      { stage: 'Interview', title: 'Technical & Managerial Rounds', date: 'TBD', completed: false, current: false },
      { stage: 'Offer', title: 'Final Placement Offer', date: 'TBD', completed: false, current: false }
    ]
  },
  {
    id: 'app-cloudnova',
    opportunityId: 'cloudnova-ba-intern',
    company: 'CloudNova',
    role: 'Business Analyst Intern',
    location: 'Remote',
    compensation: '₹20,000/month',
    appliedDate: '2026-09-05',
    currentStage: 'Assessment',
    nextStep: {
      action: 'Cloud Cost Case Study Submission',
      date: '2026-09-24',
      time: '11:59 PM IST',
      venueOrLink: 'CloudNova Portal (Upload PDF/XLSX)'
    },
    lastUpdated: '2026-09-15',
    notes: 'Aptitude test cleared with 92nd percentile. Submit financial cost model by deadline.',
    timeline: [
      { stage: 'Applied', title: 'Application Submitted', date: '2026-09-05', completed: true, current: false },
      { stage: 'Shortlisted', title: 'Screened by Placement Cell', date: '2026-09-09', completed: true, current: false },
      { stage: 'Assessment', title: 'Financial Case Study Round', date: '2026-09-15', completed: false, current: true, notes: 'Active assessment in progress.' },
      { stage: 'Interview', title: 'Case Defense Interview', date: 'TBD', completed: false, current: false },
      { stage: 'Offer', title: 'Final Decision', date: 'TBD', completed: false, current: false }
    ]
  },
  {
    id: 'app-paysprint',
    opportunityId: 'paysprint-ops-intern',
    company: 'PaySprint',
    role: 'Operations & Strategy Intern',
    location: 'Mumbai, Maharashtra (Onsite)',
    compensation: '₹18,000/month',
    appliedDate: '2026-09-12',
    currentStage: 'Applied',
    nextStep: {
      action: 'Awaiting Initial Cell Verification',
      date: '2026-09-20',
      time: '05:00 PM IST',
      venueOrLink: 'PlaceFlow Portal'
    },
    lastUpdated: '2026-09-12',
    notes: 'Application registered. Awaiting batch verification from T&P cell.',
    timeline: [
      { stage: 'Applied', title: 'Application Submitted', date: '2026-09-12', completed: true, current: true, notes: 'Resume and transcripts submitted.' },
      { stage: 'Shortlisted', title: 'Shortlisting by Recruiter', date: 'Pending', completed: false, current: false },
      { stage: 'Assessment', title: 'Operations Task', date: 'Pending', completed: false, current: false },
      { stage: 'Interview', title: 'City Lead Interview', date: 'Pending', completed: false, current: false },
      { stage: 'Offer', title: 'Offer Letter', date: 'Pending', completed: false, current: false }
    ]
  },
  {
    id: 'app-zetacomm',
    opportunityId: 'zetacomm-prod-intern',
    company: 'ZetaCommerce',
    role: 'Product Operations Intern',
    location: 'Bengaluru (Onsite)',
    compensation: '₹28,000/month',
    appliedDate: '2026-08-25',
    currentStage: 'Interview',
    nextStep: {
      action: 'Final Culture & Leadership Interview',
      date: '2026-09-26',
      time: '04:00 PM IST',
      venueOrLink: 'Google Meet (Invited by HR)'
    },
    lastUpdated: '2026-09-16',
    notes: 'Cleared technical interview and product teardown round. VP of Product interview scheduled.',
    timeline: [
      { stage: 'Applied', title: 'Application Submitted', date: '2026-08-25', completed: true, current: false },
      { stage: 'Shortlisted', title: 'Profile Shortlisted', date: '2026-08-30', completed: true, current: false },
      { stage: 'Assessment', title: 'Product Case Study', date: '2026-09-08', completed: true, current: false, notes: 'Secured Top 5 score.' },
      { stage: 'Interview', title: 'VP Product Interview', date: '2026-09-26', completed: false, current: true, notes: 'Focus on strategic product trade-offs.' },
      { stage: 'Offer', title: 'Offer Letter', date: 'TBD', completed: false, current: false }
    ]
  },
  {
    id: 'app-vertex-analytics',
    opportunityId: 'vertex-bi-intern',
    company: 'Vertex Analytics',
    role: 'Business Intelligence Intern',
    location: 'Hyderabad (Hybrid)',
    compensation: '₹22,000/month',
    appliedDate: '2026-08-15',
    currentStage: 'Shortlisted',
    nextStep: {
      action: 'Domain Interview Scheduling',
      date: '2026-09-28',
      time: '02:30 PM IST',
      venueOrLink: 'Microsoft Teams'
    },
    lastUpdated: '2026-09-10',
    notes: 'Shortlisted based on SQL assessment score of 95%.',
    timeline: [
      { stage: 'Applied', title: 'Application Submitted', date: '2026-08-15', completed: true, current: false },
      { stage: 'Shortlisted', title: 'Shortlisted for Interview', date: '2026-09-10', completed: true, current: true },
      { stage: 'Assessment', title: 'SQL & BI Test', date: '2026-09-05', completed: true, current: false },
      { stage: 'Interview', title: 'Technical Interview', date: '2026-09-28', completed: false, current: false },
      { stage: 'Offer', title: 'Offer Decision', date: 'TBD', completed: false, current: false }
    ]
  },
  {
    id: 'app-omnix-ai',
    opportunityId: 'omnix-research-intern',
    company: 'Omnix AI',
    role: 'AI Research Intern',
    location: 'Bengaluru (Onsite)',
    compensation: '₹35,000/month',
    appliedDate: '2026-08-20',
    currentStage: 'Rejected',
    nextStep: {
      action: 'Application Process Completed',
      date: '2026-09-01',
      venueOrLink: 'Archived'
    },
    lastUpdated: '2026-09-01',
    notes: 'Role prioritized candidates with published ML papers. Feedback: High analytical score, keep applying.',
    timeline: [
      { stage: 'Applied', title: 'Application Submitted', date: '2026-08-20', completed: true, current: false },
      { stage: 'Rejected', title: 'Process Concluded', date: '2026-09-01', completed: true, current: true, notes: 'Drive closed for this semester.' }
    ]
  }
];
