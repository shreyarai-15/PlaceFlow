import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { checkEligibility } from '../services/eligibilityEngine';
import { EligibilityResultView } from '../components/opportunities/EligibilityResult';
import { ApplyModal } from '../components/opportunities/ApplyModal';
import { EmptyState } from '../components/common/EmptyState';
import {
  ArrowLeft,
  MapPin,
  Calendar,
  IndianRupee,
  Users,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  AlertCircle,
  Building,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  Check,
} from 'lucide-react';

export const OpportunityDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { opportunities, student, isApplied, applyToOpportunity, getApplicationForOpportunity } = useApp();

  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const opportunity = opportunities.find((o) => o.id === id);

  if (!opportunity) {
    return (
      <EmptyState
        icon={Briefcase}
        title='Opportunity Not Found'
        description='The placement drive you are looking for does not exist or may have been unlisted.'
        actionText='Back to Opportunities'
        actionLink='/opportunities'
      />
    );
  }

  const eligibility = checkEligibility(student, opportunity);
  const alreadyApplied = isApplied(opportunity.id);
  const existingApplication = getApplicationForOpportunity(opportunity.id);
  const isDeadlinePassed = new Date(opportunity.deadline) < new Date('2026-09-17');

  const handleApplyConfirm = (notes?: string) => {
    applyToOpportunity(opportunity.id, notes);
  };

  return (
    <div className='space-y-6 max-w-5xl mx-auto animate-fade-in'>
      {/* Back Navigation Bar */}
      <div className='flex items-center justify-between'>
        <Link
          to='/opportunities'
          className='inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors'
        >
          <ArrowLeft className='w-4 h-4' />
          <span>Back to Opportunities</span>
        </Link>

        <div className='flex items-center gap-1.5 text-xs text-slate-400'>
          <span>Opportunities</span>
          <ChevronRight className='w-3 h-3 text-slate-300' />
          <span className='text-slate-800 font-medium truncate max-w-xs'>{opportunity.company}</span>
        </div>
      </div>

      {/* Main Header Banner Card */}
      <div className='bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6'>
        <div className='flex flex-col sm:flex-row sm:items-start justify-between gap-6'>
          <div className='flex items-start gap-4 sm:gap-5'>
            <div
              className={
                'w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-white text-xl shadow-md shrink-0 ' +
                opportunity.logoBg
              }
            >
              {opportunity.logoText}
            </div>

            <div className='space-y-1.5'>
              <div className='flex flex-wrap items-center gap-2'>
                <span className='text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100'>
                  {opportunity.type}
                </span>
                <span className='text-xs font-semibold text-slate-500'>
                  Posted {opportunity.postedDate}
                </span>
              </div>

              <h1 className='text-xl sm:text-2xl font-bold tracking-tight text-slate-900'>
                {opportunity.role}
              </h1>

              <div className='flex items-center gap-2 text-sm font-semibold text-slate-700'>
                <Building className='w-4 h-4 text-slate-400' />
                <span>{opportunity.company}</span>
              </div>
            </div>
          </div>

          {/* Primary Action Button (Right Side) */}
          <div className='sm:self-center shrink-0 flex flex-col items-start sm:items-end gap-2'>
            {alreadyApplied ? (
              <div className='space-y-1 sm:text-right'>
                <button
                  disabled
                  className='px-6 py-3 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 cursor-not-allowed shadow-xs'
                >
                  <Check className='w-4 h-4 text-emerald-600' />
                  <span>Application Submitted</span>
                </button>
                <Link
                  to='/applications'
                  className='text-[11px] font-semibold text-blue-600 hover:text-blue-700 underline block'
                >
                  View in My Applications →
                </Link>
              </div>
            ) : isDeadlinePassed ? (
              <button
                disabled
                className='px-6 py-3 bg-slate-100 text-slate-500 border border-slate-200 rounded-2xl text-xs sm:text-sm font-bold cursor-not-allowed'
              >
                Application Window Closed
              </button>
            ) : eligibility.eligible ? (
              <button
                onClick={() => setIsApplyModalOpen(true)}
                className='px-7 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-2xl shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2 cursor-pointer'
              >
                <CheckCircle2 className='w-4 h-4' />
                <span>Apply Now</span>
              </button>
            ) : (
              <div className='sm:text-right'>
                <button
                  disabled
                  className='px-6 py-3 bg-slate-100 text-slate-400 border border-slate-200 rounded-2xl text-xs sm:text-sm font-bold cursor-not-allowed'
                  title='Review reasons below'
                >
                  Not Eligible to Apply
                </button>
                <span className='text-[10px] text-rose-500 font-medium block mt-1'>
                  Criteria requirement unmet
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Quick Attribute Badges Bar */}
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-100 text-xs'>
          <div className='p-3 bg-slate-50/70 rounded-xl border border-slate-200/60'>
            <span className='text-slate-400 text-[10px] block font-medium uppercase tracking-wider'>
              Compensation
            </span>
            <strong className='text-slate-900 font-bold text-sm block mt-0.5'>
              {opportunity.compensation}
            </strong>
          </div>

          <div className='p-3 bg-slate-50/70 rounded-xl border border-slate-200/60'>
            <span className='text-slate-400 text-[10px] block font-medium uppercase tracking-wider'>
              Location & Mode
            </span>
            <strong className='text-slate-900 font-bold text-sm block mt-0.5 truncate'>
              {opportunity.location}
            </strong>
          </div>

          <div className='p-3 bg-slate-50/70 rounded-xl border border-slate-200/60'>
            <span className='text-slate-400 text-[10px] block font-medium uppercase tracking-wider'>
              Min Required CGPA
            </span>
            <strong className='text-slate-900 font-bold text-sm block mt-0.5'>
              {opportunity.minCgpa.toFixed(1)} / 10
            </strong>
          </div>

          <div className='p-3 bg-slate-50/70 rounded-xl border border-slate-200/60'>
            <span className='text-slate-400 text-[10px] block font-medium uppercase tracking-wider'>
              Deadline
            </span>
            <strong className='text-slate-900 font-bold text-sm block mt-0.5'>
              {opportunity.deadline}
            </strong>
          </div>
        </div>
      </div>

      {/* DYNAMIC ELIGIBILITY RESULT SECTION */}
      <section className='space-y-2'>
        <div className='flex items-center justify-between'>
          <h3 className='text-base font-bold text-slate-900'>Candidate Eligibility Engine</h3>
          <span className='text-xs text-slate-500'>
            Evaluated against: <strong>{student.name} ({student.branch}, CGPA {student.cgpa.toFixed(1)})</strong>
          </span>
        </div>
        <EligibilityResultView result={eligibility} />
      </section>

      {/* About Role & Responsibilities */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {/* Left 2 Cols: Description & Selection Process */}
        <div className='lg:col-span-2 space-y-6'>
          {/* About */}
          <div className='bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs'>
            <h3 className='font-bold text-slate-900 text-base'>About the Role</h3>
            <p className='text-xs sm:text-sm text-slate-600 leading-relaxed'>
              {opportunity.aboutRole}
            </p>
          </div>

          {/* Responsibilities */}
          <div className='bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs'>
            <h3 className='font-bold text-slate-900 text-base'>Key Responsibilities</h3>
            <ul className='space-y-2 text-xs sm:text-sm text-slate-600'>
              {opportunity.responsibilities.map((resp, i) => (
                <li key={i} className='flex items-start gap-2.5 leading-relaxed'>
                  <span className='w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0'></span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className='bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs'>
            <h3 className='font-bold text-slate-900 text-base'>Requirements & Preferred Background</h3>
            <ul className='space-y-2 text-xs sm:text-sm text-slate-600'>
              {opportunity.requirements.map((req, i) => (
                <li key={i} className='flex items-start gap-2.5 leading-relaxed'>
                  <span className='w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0'></span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Selection Workflow Process */}
          <div className='bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs'>
            <h3 className='font-bold text-slate-900 text-base'>Selection Process Workflow</h3>
            <div className='space-y-3'>
              {opportunity.selectionProcess.map((step) => (
                <div
                  key={step.step}
                  className='flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70'
                >
                  <div className='w-7 h-7 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs'>
                    {step.step}
                  </div>
                  <div>
                    <h4 className='font-bold text-xs sm:text-sm text-slate-900'>{step.title}</h4>
                    <p className='text-xs text-slate-500 mt-0.5 leading-relaxed'>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right 1 Col: Skills & Company Overview Card */}
        <div className='space-y-6'>
          {/* Required Skills Card */}
          <div className='bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs'>
            <h3 className='font-bold text-slate-900 text-base'>Required Skills</h3>
            <div className='flex flex-wrap gap-2'>
              {opportunity.skills.map((skill, i) => (
                <span
                  key={i}
                  className='text-xs font-semibold px-3 py-1 rounded-xl bg-blue-50 text-blue-700 border border-blue-100'
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Company Brief Card */}
          <div className='bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs'>
            <h3 className='font-bold text-slate-900 text-base'>Drive Overview</h3>
            <div className='space-y-3 text-xs text-slate-600'>
              <div className='flex justify-between py-1.5 border-b border-slate-100'>
                <span className='text-slate-400'>Eligible Batch</span>
                <strong className='text-slate-800 font-semibold'>{opportunity.eligibleGradYears.join(', ')}</strong>
              </div>
              <div className='flex justify-between py-1.5 border-b border-slate-100'>
                <span className='text-slate-400'>Max Backlogs Allowed</span>
                <strong className='text-slate-800 font-semibold'>{opportunity.maxBacklogs}</strong>
              </div>
              <div className='flex justify-between py-1.5 border-b border-slate-100'>
                <span className='text-slate-400'>Applicants Registered</span>
                <strong className='text-slate-800 font-semibold'>{opportunity.applicantsCount}</strong>
              </div>
              <div className='flex justify-between py-1.5'>
                <span className='text-slate-400'>Application Window</span>
                <strong className='text-emerald-700 font-semibold'>
                  {isDeadlinePassed ? 'Closed' : 'Active'}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Confirmation Modal */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        opportunity={opportunity}
        student={student}
        onConfirm={handleApplyConfirm}
      />
    </div>
  );
};
