export interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
  collegeId: string;
  department: string;
  branch: string;
  graduationYear: number;
  cgpa: number;
  backlogs: number;
  skills: string[];
  resumeUrl?: string;
  portfolioUrl?: string;
  portfolioLink?: string;
}

export interface Opportunity {
  id: string;
  company: string;
  logoText: string;
  logoBg: string;
  role: string;
  location: string;
  workMode: 'Remote' | 'Onsite' | 'Hybrid';
  type: 'Internship' | 'Full-time' | 'Internship + PPO';
  compensation: string;
  duration?: string;
  minCgpa: number;
  eligibleBranches: string[];
  eligibleGradYears: number[];
  maxBacklogs: number;
  deadline: string;
  postedDate: string;
  applicantsCount: number;
  aboutRole: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  selectionProcess: Array<{
    step: number;
    title: string;
    description: string;
  }>;
}

export type ApplicationStage = 'Applied' | 'Shortlisted' | 'Assessment' | 'Interview' | 'Offer' | 'Rejected';

export interface ApplicationTimelineItem {
  stage: ApplicationStage;
  title: string;
  date: string;
  completed: boolean;
  current: boolean;
  notes?: string;
}

export interface Application {
  id: string;
  opportunityId: string;
  company: string;
  role: string;
  location: string;
  compensation: string;
  appliedDate: string;
  currentStage: ApplicationStage;
  nextStep?: {
    action: string;
    date: string;
    time?: string;
    venueOrLink?: string;
  };
  lastUpdated: string;
  timeline: ApplicationTimelineItem[];
  notes?: string;
}

export type EventType = 'Assessment' | 'Interview' | 'Pre-placement talk' | 'Application deadline';

export interface PlacementEvent {
  id: string;
  title: string;
  company: string;
  type: EventType;
  date: string;
  time: string;
  locationOrMode: string;
  status: 'Upcoming' | 'Completed' | 'Live';
  opportunityId?: string;
  actionText?: string;
}

export type NotificationType = 'interview' | 'deadline' | 'assessment' | 'update' | 'general';

export interface Notification {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  dateCategory: 'Today' | 'Earlier';
  type: NotificationType;
  read: boolean;
  actionLink?: string;
}

export interface CriteriaCheck {
  name: string;
  required: string;
  actual: string;
  met: boolean;
}

export interface EligibilityResult {
  eligible: boolean;
  reasons: string[];
  criteriaChecks: CriteriaCheck[];
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  message: string;
}
