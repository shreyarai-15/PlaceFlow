import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  Student,
  Opportunity,
  Application,
  PlacementEvent,
  Notification,
  ToastMessage,
} from '../types';
import { initialStudent } from '../data/student';
import { initialOpportunities } from '../data/opportunities';
import { initialApplications } from '../data/applications';
import { initialEvents } from '../data/events';
import { initialNotifications } from '../data/notifications';

interface AppContextType {
  student: Student;
  updateStudent: (updated: Partial<Student>) => void;
  opportunities: Opportunity[];
  applications: Application[];
  applyToOpportunity: (opportunityId: string, notes?: string) => { success: boolean; message: string };
  isApplied: (opportunityId: string) => boolean;
  getApplicationForOpportunity: (opportunityId: string) => Application | undefined;
  events: PlacementEvent[];
  notifications: Notification[];
  markNotificationAsRead: (id: string) => void;
  markAllNotificationsAsRead: () => void;
  unreadNotificationsCount: number;
  toasts: ToastMessage[];
  addToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
  resetDemoData: () => void;
  stats: {
    totalApplications: number;
    shortlisted: number;
    interviews: number;
    offers: number;
  };
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load initial states from localStorage with fallbacks
  const [student, setStudent] = useState<Student>(() => {
    const saved = localStorage.getItem('placeflow_student');
    return saved ? JSON.parse(saved) : initialStudent;
  });

  const [opportunities, setOpportunities] = useState<Opportunity[]>(() => {
    const saved = localStorage.getItem('placeflow_opportunities');
    return saved ? JSON.parse(saved) : initialOpportunities;
  });

  const [applications, setApplications] = useState<Application[]>(() => {
    const saved = localStorage.getItem('placeflow_applications');
    return saved ? JSON.parse(saved) : initialApplications;
  });

  const [events, setEvents] = useState<PlacementEvent[]>(() => {
    const saved = localStorage.getItem('placeflow_events');
    return saved ? JSON.parse(saved) : initialEvents;
  });

  const [notifications, setNotifications] = useState<Notification[]>(() => {
    const saved = localStorage.getItem('placeflow_notifications');
    return saved ? JSON.parse(saved) : initialNotifications;
  });

  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('placeflow_student', JSON.stringify(student));
  }, [student]);

  useEffect(() => {
    localStorage.setItem('placeflow_opportunities', JSON.stringify(opportunities));
  }, [opportunities]);

  useEffect(() => {
    localStorage.setItem('placeflow_applications', JSON.stringify(applications));
  }, [applications]);

  useEffect(() => {
    localStorage.setItem('placeflow_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('placeflow_notifications', JSON.stringify(notifications));
  }, [notifications]);

  const addToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 5);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const updateStudent = (updated: Partial<Student>) => {
    setStudent((prev) => ({
      ...prev,
      ...updated,
    }));
    addToast('Profile updated successfully!', 'info');
  };

  const isApplied = (opportunityId: string): boolean => {
    return applications.some((app) => app.opportunityId === opportunityId);
  };

  const getApplicationForOpportunity = (opportunityId: string): Application | undefined => {
    return applications.find((app) => app.opportunityId === opportunityId);
  };

  const applyToOpportunity = (
    opportunityId: string,
    notes?: string
  ): { success: boolean; message: string } => {
    if (isApplied(opportunityId)) {
      return { success: false, message: 'You have already submitted an application for this role.' };
    }

    const opp = opportunities.find((o) => o.id === opportunityId);
    if (!opp) {
      return { success: false, message: 'Opportunity not found.' };
    }

    const currentDateStr = '2026-09-17';
    const newAppId = 'app-' + Date.now().toString();

    const newApplication: Application = {
      id: newAppId,
      opportunityId: opp.id,
      company: opp.company,
      role: opp.role,
      location: opp.location,
      compensation: opp.compensation,
      appliedDate: currentDateStr,
      currentStage: 'Applied',
      nextStep: {
        action: 'Application Under Initial Review',
        date: '2026-09-24',
        time: '05:00 PM IST',
        venueOrLink: 'PlaceFlow Portal',
      },
      lastUpdated: currentDateStr,
      notes: notes || 'Submitted directly via PlaceFlow Portal by candidate.',
      timeline: [
        {
          stage: 'Applied',
          title: 'Application Submitted',
          date: currentDateStr,
          completed: true,
          current: true,
          notes: 'Candidate confirmed application with current academic credentials (CGPA: ' + student.cgpa.toFixed(1) + ').',
        },
        {
          stage: 'Shortlisted',
          title: 'Profile Shortlisting',
          date: 'Pending',
          completed: false,
          current: false,
        },
        {
          stage: 'Assessment',
          title: 'Assessment Round',
          date: 'Pending',
          completed: false,
          current: false,
        },
        {
          stage: 'Interview',
          title: 'Technical & Managerial Interviews',
          date: 'Pending',
          completed: false,
          current: false,
        },
        {
          stage: 'Offer',
          title: 'Final Placement Decision',
          date: 'Pending',
          completed: false,
          current: false,
        },
      ],
    };

    // Update applications
    setApplications((prev) => [newApplication, ...prev]);

    // Increment applicantsCount on opportunity
    setOpportunities((prev) =>
      prev.map((o) => (o.id === opp.id ? { ...o, applicantsCount: o.applicantsCount + 1 } : o))
    );

    // Create notification
    const newNotif: Notification = {
      id: 'notif-' + Date.now().toString(),
      title: 'Application Submitted',
      message: 'Your application for ' + opp.company + ' (' + opp.role + ') was successfully submitted.',
      timestamp: 'Just now',
      dateCategory: 'Today',
      type: 'update',
      read: false,
      actionLink: '/applications',
    };
    setNotifications((prev) => [newNotif, ...prev]);

    // Toast
    addToast('Application submitted successfully to ' + opp.company + '!', 'success');

    return { success: true, message: 'Application submitted successfully.' };
  };

  const markNotificationAsRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const markAllNotificationsAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    addToast('All notifications marked as read', 'info');
  };

  const unreadNotificationsCount = notifications.filter((n) => !n.read).length;

  const resetDemoData = () => {
    localStorage.removeItem('placeflow_student');
    localStorage.removeItem('placeflow_opportunities');
    localStorage.removeItem('placeflow_applications');
    localStorage.removeItem('placeflow_events');
    localStorage.removeItem('placeflow_notifications');

    setStudent(initialStudent);
    setOpportunities(initialOpportunities);
    setApplications(initialApplications);
    setEvents(initialEvents);
    setNotifications(initialNotifications);

    addToast('Demo data reset to default state', 'info');
  };

  // Calculated Stats
  const stats = {
    totalApplications: applications.length,
    shortlisted: applications.filter((a) => a.currentStage === 'Shortlisted').length,
    interviews: applications.filter((a) => a.currentStage === 'Interview').length,
    offers: applications.filter((a) => a.currentStage === 'Offer').length,
  };

  return (
    <AppContext.Provider
      value={{
        student,
        updateStudent,
        opportunities,
        applications,
        applyToOpportunity,
        isApplied,
        getApplicationForOpportunity,
        events,
        notifications,
        markNotificationAsRead,
        markAllNotificationsAsRead,
        unreadNotificationsCount,
        toasts,
        addToast,
        removeToast,
        resetDemoData,
        stats,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
