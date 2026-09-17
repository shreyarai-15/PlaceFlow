import React from 'react';
import { EligibilityResult } from '../../types';
import { CheckCircle2, AlertTriangle, Check, X } from 'lucide-react';

interface EligibilityResultProps {
  result: EligibilityResult;
}

export const EligibilityResultView: React.FC<EligibilityResultProps> = ({ result }) => {
  return (
    <div className='rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs'>
      {/* Banner Header */}
      <div
        className={
          'p-4 sm:p-5 flex items-start gap-3.5 border-b ' +
          (result.eligible
            ? 'bg-emerald-50/70 border-emerald-200/80 text-emerald-900'
            : 'bg-rose-50/70 border-rose-200/80 text-rose-900')
        }
      >
        <div className='shrink-0 mt-0.5'>
          {result.eligible ? (
            <div className='w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs'>
              <CheckCircle2 className='w-5 h-5' />
            </div>
          ) : (
            <div className='w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center shadow-xs'>
              <AlertTriangle className='w-5 h-5' />
            </div>
          )}
        </div>
        <div>
          <h3 className='text-base font-bold tracking-tight'>
            {result.eligible ? '✓ You are eligible to apply' : 'You are not eligible for this opportunity'}
          </h3>
          <p className='text-xs sm:text-sm mt-0.5 opacity-90 leading-relaxed'>
            {result.eligible
              ? 'Your profile meets all listed eligibility criteria for this placement opportunity.'
              : 'Your current academic profile does not satisfy one or more recruiter criteria.'}
          </p>

          {!result.eligible && result.reasons.length > 0 && (
            <div className='mt-3 p-3 bg-white/80 rounded-xl border border-rose-200/60 text-xs text-rose-800 space-y-1.5'>
              <div className='font-semibold text-rose-900'>Reasons:</div>
              <ul className='list-disc list-inside space-y-1 pl-1'>
                {result.reasons.map((reason, idx) => (
                  <li key={idx} className='leading-relaxed'>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Criteria Breakdown Comparison Table */}
      <div className='p-4 sm:p-5'>
        <h4 className='text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3'>
          Criteria Verification Breakdown
        </h4>
        <div className='overflow-x-auto'>
          <table className='w-full text-left text-xs border-collapse'>
            <thead>
              <tr className='border-b border-slate-100 text-slate-400 font-medium'>
                <th className='pb-2.5 pr-4'>Requirement</th>
                <th className='pb-2.5 px-4'>Criteria Required</th>
                <th className='pb-2.5 px-4'>Your Profile</th>
                <th className='pb-2.5 pl-4 text-right'>Status</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-slate-100'>
              {result.criteriaChecks.map((chk, i) => (
                <tr key={i} className='hover:bg-slate-50/60 transition-colors'>
                  <td className='py-2.5 pr-4 font-semibold text-slate-800'>{chk.name}</td>
                  <td className='py-2.5 px-4 text-slate-600 max-w-xs truncate' title={chk.required}>
                    {chk.required}
                  </td>
                  <td className='py-2.5 px-4 text-slate-700 font-medium'>{chk.actual}</td>
                  <td className='py-2.5 pl-4 text-right'>
                    {chk.met ? (
                      <span className='inline-flex items-center gap-1 font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md'>
                        <Check className='w-3.5 h-3.5' />
                        <span>Pass</span>
                      </span>
                    ) : (
                      <span className='inline-flex items-center gap-1 font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md'>
                        <X className='w-3.5 h-3.5' />
                        <span>Failed</span>
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
