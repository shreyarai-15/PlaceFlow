import React, { useState } from 'react';
import { Opportunity, Student } from '../../types';
import { Modal } from '../common/Modal';
import { CheckCircle2, ShieldAlert, UserCheck } from 'lucide-react';
import { getInitials } from '../../utils/initials';

interface ApplyModalProps {
  opportunity: Opportunity;
  student: Student;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (notes?: string) => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({
  opportunity,
  student,
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      onConfirm(notes);
      setIsSubmitting(false);
      onClose();
    }, 400);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={'Apply to ' + opportunity.company}
      subtitle={'Submit your official placement application for ' + opportunity.role}
      maxWidth='lg'
    >
      <form onSubmit={handleSubmit} className='space-y-4 sm:space-y-5'>
        {/* Opportunity Recap Card */}
        <div className='p-3.5 sm:p-4 bg-slate-50 rounded-2xl border border-slate-200/80 space-y-2'>
          <div className='flex items-center justify-between'>
            <span className='text-[10px] font-bold text-slate-400 uppercase tracking-wider'>
              Role Summary
            </span>
            <span className='text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60'>
              {opportunity.type}
            </span>
          </div>

          <div>
            <h4 className='font-bold text-slate-900 text-sm sm:text-base'>{opportunity.role}</h4>
            <p className='text-xs text-slate-500 font-medium'>{opportunity.company}</p>
          </div>

          <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-200/60 text-xs'>
            <div>
              <span className='text-slate-400 block text-[10px]'>Stipend / CTC</span>
              <strong className='text-slate-800 font-semibold'>{opportunity.compensation}</strong>
            </div>
            <div>
              <span className='text-slate-400 block text-[10px]'>Location</span>
              <strong className='text-slate-800 font-semibold truncate block'>{opportunity.location}</strong>
            </div>
            <div>
              <span className='text-slate-400 block text-[10px]'>Deadline</span>
              <strong className='text-slate-800 font-semibold'>{opportunity.deadline}</strong>
            </div>
          </div>
        </div>

        {/* Candidate Profile Snapshot */}
        <div className='p-3.5 sm:p-4 bg-blue-50/60 rounded-2xl border border-blue-100 space-y-2'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-1.5 text-xs font-bold text-blue-950'>
              <UserCheck className='w-4 h-4 text-blue-600' />
              <span>Verified Candidate Credentials</span>
            </div>
            <div className='w-6 h-6 rounded-lg bg-blue-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 shadow-xs'>
              {getInitials(student.name)}
            </div>
          </div>
          <p className='text-xs text-blue-900/80 leading-relaxed'>
            These verified academic details will be transmitted to {opportunity.company} and logged with the campus placement cell:
          </p>

          <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-xs'>
            <div className='bg-white p-2 sm:p-2.5 rounded-xl border border-blue-100 shadow-2xs'>
              <span className='text-[10px] text-slate-400 block'>Full Name</span>
              <strong className='text-slate-900 font-bold truncate block'>{student.name}</strong>
            </div>
            <div className='bg-white p-2 sm:p-2.5 rounded-xl border border-blue-100 shadow-2xs'>
              <span className='text-[10px] text-slate-400 block'>Branch</span>
              <strong className='text-slate-900 font-bold truncate block' title={student.branch}>{student.branch}</strong>
            </div>
            <div className='bg-white p-2 sm:p-2.5 rounded-xl border border-blue-100 shadow-2xs'>
              <span className='text-[10px] text-slate-400 block'>Verified CGPA</span>
              <strong className='text-blue-600 font-bold block'>{student.cgpa.toFixed(1)} / 10</strong>
            </div>
            <div className='bg-white p-2 sm:p-2.5 rounded-xl border border-blue-100 shadow-2xs'>
              <span className='text-[10px] text-slate-400 block'>Backlogs</span>
              <strong className='text-slate-900 font-bold block'>{student.backlogs}</strong>
            </div>
          </div>
        </div>

        {/* Candidate Statement / Notes */}
        <div>
          <label className='block text-xs font-semibold text-slate-700 mb-1.5'>
            Candidate Note / Remarks <span className='text-slate-400 font-normal'>(Optional)</span>
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={2}
            placeholder='Highlight relevant projects, coursework, or product experience for the recruiter...'
            className='w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-400 resize-none bg-white'
          />
        </div>

        {/* Confirmation check info */}
        <div className='p-3 bg-amber-50/90 rounded-xl border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-900'>
          <ShieldAlert className='w-4 h-4 text-amber-600 shrink-0 mt-0.5' />
          <p className='leading-relaxed'>
            By confirming, you verify your availability for upcoming interview stages and agree to recruitment guidelines.
          </p>
        </div>

        {/* Sticky Modal Action Buttons */}
        <div className='sticky bottom-0 bg-white/95 backdrop-blur-xs pt-3 pb-1 border-t border-slate-100 flex items-center justify-end gap-3'>
          <button
            type='button'
            onClick={onClose}
            disabled={isSubmitting}
            className='px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer'
          >
            Cancel
          </button>
          <button
            type='submit'
            disabled={isSubmitting}
            className='px-5 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-md shadow-blue-500/25 transition-all flex items-center gap-2 cursor-pointer'
          >
            {isSubmitting ? (
              <>
                <span className='w-3 h-3 border-2 border-white/40 border-t-white rounded-full animate-spin'></span>
                <span>Submitting Application...</span>
              </>
            ) : (
              <>
                <CheckCircle2 className='w-4 h-4' />
                <span>Confirm Application</span>
              </>
            )}
          </button>
        </div>
      </form>
    </Modal>
  );
};
