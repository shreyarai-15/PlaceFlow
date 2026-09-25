import React from 'react';
import { Application } from '../../types';
import { Modal } from '../common/Modal';
import { ApplicationStatusBadge } from './ApplicationStatusBadge';
import { ApplicationTimeline } from './ApplicationTimeline';
import { Calendar, MapPin, IndianRupee, Clock, ExternalLink, MessageSquare, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { getInitials } from '../../utils/initials';

interface ApplicationDetailDrawerProps {
  application: Application | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ApplicationDetailDrawer: React.FC<ApplicationDetailDrawerProps> = ({
  application,
  isOpen,
  onClose,
}) => {
  const { student } = useApp();
  if (!application) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={application.company}
      subtitle={application.role + ' • Applied on ' + application.appliedDate}
      maxWidth='xl'
    >
      <div className='space-y-6'>
        {/* Applicant Snapshot */}
        <div className='flex items-center justify-between p-3 bg-blue-50/50 rounded-xl border border-blue-100/80 text-xs'>
          <div className='flex items-center gap-2.5 min-w-0'>
            <div className='w-7 h-7 rounded-lg bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs'>
              {getInitials(student.name)}
            </div>
            <div className='min-w-0'>
              <span className='font-semibold text-slate-900 block truncate'>{student.name}</span>
              <span className='text-[11px] text-slate-500 block truncate'>{student.email}</span>
            </div>
          </div>
          <span className='text-[10px] font-semibold text-blue-700 bg-white px-2 py-0.5 rounded-md border border-blue-200 shrink-0'>
            Applicant
          </span>
        </div>

        {/* Header Summary */}
        <div className='p-4 bg-slate-50 rounded-2xl border border-slate-200/80 flex flex-wrap items-center justify-between gap-4'>
          <div>
            <div className='flex items-center gap-2'>
              <h3 className='font-bold text-slate-900 text-base'>{application.role}</h3>
              <ApplicationStatusBadge stage={application.currentStage} size='sm' />
            </div>
            <p className='text-xs text-slate-500 mt-0.5'>{application.company}</p>
          </div>

          <div className='flex items-center gap-4 text-xs text-slate-600'>
            <div className='flex items-center gap-1 text-slate-700 font-semibold'>
              <IndianRupee className='w-3.5 h-3.5 text-slate-400' />
              <span>{application.compensation}</span>
            </div>
            <div className='flex items-center gap-1 text-slate-500'>
              <MapPin className='w-3.5 h-3.5 text-slate-400' />
              <span>{application.location}</span>
            </div>
          </div>
        </div>

        {/* Next Step Callout Box */}
        {application.nextStep && (
          <div className='p-4 bg-blue-50/80 rounded-2xl border border-blue-200/80 space-y-2'>
            <div className='flex items-center justify-between'>
              <span className='text-[11px] font-bold uppercase tracking-wider text-blue-800'>
                Next Action Required
              </span>
              <span className='text-xs font-semibold text-blue-700 bg-white px-2 py-0.5 rounded-md border border-blue-200'>
                {application.nextStep.date} {application.nextStep.time && '• ' + application.nextStep.time}
              </span>
            </div>
            <p className='text-sm font-bold text-blue-950'>{application.nextStep.action}</p>
            {application.nextStep.venueOrLink && (
              <p className='text-xs text-blue-800/90'>
                <strong>Venue / Portal:</strong> {application.nextStep.venueOrLink}
              </p>
            )}
          </div>
        )}

        {/* Placement Journey Timeline */}
        <div>
          <h4 className='text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4'>
            Recruitment Process Progression
          </h4>
          <ApplicationTimeline
            timeline={application.timeline}
            currentStage={application.currentStage}
          />
        </div>

        {/* Notes & Remarks */}
        {application.notes && (
          <div className='p-3.5 bg-slate-50 rounded-xl border border-slate-200/60 text-xs text-slate-600 flex items-start gap-2.5'>
            <MessageSquare className='w-4 h-4 text-slate-400 shrink-0 mt-0.5' />
            <div>
              <strong className='text-slate-800 block mb-0.5'>T&P / Recruiter Remarks:</strong>
              <p className='leading-relaxed'>{application.notes}</p>
            </div>
          </div>
        )}

        {/* Modal Actions */}
        <div className='flex items-center justify-end gap-3 pt-3 border-t border-slate-100'>
          <button
            onClick={onClose}
            className='px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors'
          >
            Close Details
          </button>
        </div>
      </div>
    </Modal>
  );
};
