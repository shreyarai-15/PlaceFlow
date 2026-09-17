import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/common/Sidebar';
import { Topbar } from '../components/common/Topbar';
import { ToastContainer } from '../components/common/Toast';

export const DashboardLayout: React.FC = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className='min-h-screen bg-slate-50 flex'>
      {/* Desktop Sidebar */}
      <div className='hidden md:block w-64 shrink-0 h-screen sticky top-0 z-40'>
        <Sidebar />
      </div>

      {/* Mobile Drawer Overlay & Sidebar */}
      {mobileSidebarOpen && (
        <div
          className='fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs md:hidden'
          onClick={() => setMobileSidebarOpen(false)}
        >
          <div
            className='w-64 h-full bg-slate-900 shadow-2xl'
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar onCloseMobile={() => setMobileSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className='flex-1 flex flex-col min-w-0 min-h-screen'>
        <Topbar onOpenMobileSidebar={() => setMobileSidebarOpen(true)} />
        <main className='flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto'>
          <Outlet />
        </main>
        <ToastContainer />
      </div>
    </div>
  );
};
