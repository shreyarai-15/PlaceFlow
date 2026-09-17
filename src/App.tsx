import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { DashboardLayout } from './layouts/DashboardLayout';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { OpportunitiesPage } from './pages/OpportunitiesPage';
import { OpportunityDetailsPage } from './pages/OpportunityDetailsPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { CalendarPage } from './pages/CalendarPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { ProfilePage } from './pages/ProfilePage';
import { NotFoundPage } from './pages/NotFoundPage';

export function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          {/* Public / Demo Login Route */}
          <Route path='/login' element={<LoginPage />} />

          {/* Root Redirect to Dashboard */}
          <Route path='/' element={<Navigate to='/dashboard' replace />} />

          {/* Protected Dashboard Shell Routes */}
          <Route element={<DashboardLayout />}>
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/opportunities' element={<OpportunitiesPage />} />
            <Route path='/opportunities/:id' element={<OpportunityDetailsPage />} />
            <Route path='/applications' element={<ApplicationsPage />} />
            <Route path='/calendar' element={<CalendarPage />} />
            <Route path='/notifications' element={<NotificationsPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Route>

          {/* 404 Fallback Route */}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
