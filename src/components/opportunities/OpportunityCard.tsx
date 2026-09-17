import React from 'react';
import { Link } from 'react-router-dom';
import { Opportunity, Student } from '../../types';
import { checkEligibility } from '../../services/eligibilityEngine';
import { EligibilityBadge } from './EligibilityBadge';
import { MapPin, Calendar, Users, ArrowRight, IndianRupee, GraduationCap } from 'lucide-react';

interface OpportunityCardProps {
  opportunity: Opportunity;
  student: Student;
  isApplied: boolean;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({
  opportunity,
  student,
  isApplied,
}) => {
  const eligibility = checkEligibility(student, opportunity);
  const isDeadlinePassed = new Date(opportunity.deadline) < new Date('2026-09-17');

  return (
    <div className='bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group'>
      <div>
        {/* Top Header */}
        <div className='flex items-start justify-between gap-3'>
          <div className='flex items-center gap-3'>
            <div
              className={
                'w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white text-sm shadow-xs ' +
                opportunity.logoBg
              }
            >
              {opportunity.logoText}
            </div>
            <div>
              <h3 className='font-semibold text-slate-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-1'>
                {opportunity.role}
              </h3>
              <p className='text-xs font-medium text-slate-500'>{opportunity.company}</p>
            </div>
          </div>
          <EligibilityBadge
            isEligible={eligibility.eligible}
            isApplied={isApplied}
            isDeadlinePassed={isDeadlinePassed}
            size='sm'
          />
        </div>

        {/* Location & Compensation */}
        <div className='mt-4 flex flex-wrap items-center gap-y-1.5 gap-x-3 text-xs text-slate-600'>
          <div className='flex items-center gap-1 text-slate-700 font-medium'>
            <IndianRupee className='w-3.5 h-3.5 text-slate-400' />
            <span>{opportunity.compensation}</span>
          </div>
          <div className='flex items-center gap-1 text-slate-500'>
            <MapPin className='w-3.5 h-3.5 text-slate-400' />
            <span>{opportunity.location}</span>
          </div>
        </div>

        {/* Requirements snippet */}
        <div className='mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500'>
          <div className='flex items-center gap-1'>
            <GraduationCap className='w-3.5 h-3.5 text-slate-400' />
            <span>Min CGPA: <strong className='text-slate-700'>{opportunity.minCgpa.toFixed(1)}</strong></span>
          </div>
          <div className='flex items-center gap-1'>
            <Users className='w-3.5 h-3.5 text-slate-400' />
            <span>{opportunity.applicantsCount} applicants</span>
          </div>
        </div>

        {/* Skills pill tags */}
        <div className='mt-3 flex flex-wrap gap-1.5'>
          {opportunity.skills.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className='text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600'
            >
              {skill}
            </span>
          ))}
          {opportunity.skills.length > 3 && (
            <span className='text-[10px] text-slate-400 font-medium px-1 py-0.5'>
              +{opportunity.skills.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Footer / CTA */}
      <div className='mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between'>
        <div className='flex items-center gap-1 text-[11px] text-slate-500'>
          <Calendar className='w-3 h-3 text-slate-400' />
          <span>Deadline: {opportunity.deadline}</span>
        </div>

        <Link
          to={'/opportunities/' + opportunity.id}
          className='inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 group-hover:translate-x-0.5 transition-transform'
        >
          <span>View Details</span>
          <ArrowRight className='w-3.5 h-3.5' />
        </Link>
      </div>
    </div>
  );
};
