import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { OpportunityCard } from '../components/opportunities/OpportunityCard';
import { checkEligibility } from '../services/eligibilityEngine';
import { EmptyState } from '../components/common/EmptyState';
import {
  Search,
  Filter,
  Briefcase,
  SlidersHorizontal,
  X,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const OpportunitiesPage: React.FC = () => {
  const { student, opportunities, isApplied } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [eligibilityFilter, setEligibilityFilter] = useState<'all' | 'eligible' | 'ineligible'>('all');
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [workModeFilter, setWorkModeFilter] = useState<string>('all');

  // Filter logic
  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((opp) => {
      // 1. Search query across company, role, skills
      const q = searchQuery.toLowerCase().trim();
      if (q) {
        const matchCompany = opp.company.toLowerCase().includes(q);
        const matchRole = opp.role.toLowerCase().includes(q);
        const matchSkill = opp.skills.some((s) => s.toLowerCase().includes(q));
        if (!matchCompany && !matchRole && !matchSkill) return false;
      }

      // 2. Eligibility filter
      const elig = checkEligibility(student, opp);
      if (eligibilityFilter === 'eligible' && !elig.eligible) return false;
      if (eligibilityFilter === 'ineligible' && elig.eligible) return false;

      // 3. Type filter
      if (typeFilter !== 'all' && opp.type !== typeFilter) return false;

      // 4. Work mode filter
      if (workModeFilter !== 'all' && opp.workMode !== workModeFilter) return false;

      return true;
    });
  }, [opportunities, searchQuery, eligibilityFilter, typeFilter, workModeFilter, student]);

  const clearAllFilters = () => {
    setSearchQuery('');
    setEligibilityFilter('all');
    setTypeFilter('all');
    setWorkModeFilter('all');
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    eligibilityFilter !== 'all' ||
    typeFilter !== 'all' ||
    workModeFilter !== 'all';

  return (
    <div className='space-y-6 animate-fade-in'>
      {/* Page Header */}
      <div>
        <h2 className='text-2xl font-bold tracking-tight text-slate-900'>
          Placement Opportunities
        </h2>
        <p className='text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed'>
          Find opportunities that match your profile. Check dynamic eligibility for your branch and CGPA.
        </p>
      </div>

      {/* Search & Filter Controls Bar */}
      <div className='bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-xs space-y-4'>
        <div className='flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between'>
          {/* Live Search Input */}
          <div className='relative flex-1'>
            <Search className='w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2' />
            <input
              type='text'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder='Search by company (e.g. FinEdge), role (e.g. Product), or skill (e.g. SQL)...'
              className='w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all'
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className='absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600'
                aria-label='Clear search'
              >
                <X className='w-3.5 h-3.5' />
              </button>
            )}
          </div>

          {/* Eligibility Filter Tabs */}
          <div className='flex items-center bg-slate-100 p-1 rounded-xl self-start md:self-auto'>
            <button
              onClick={() => setEligibilityFilter('all')}
              className={
                'px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ' +
                (eligibilityFilter === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900')
              }
            >
              All Drives ({opportunities.length})
            </button>
            <button
              onClick={() => setEligibilityFilter('eligible')}
              className={
                'px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ' +
                (eligibilityFilter === 'eligible'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900')
              }
            >
              Eligible Only
            </button>
            <button
              onClick={() => setEligibilityFilter('ineligible')}
              className={
                'px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ' +
                (eligibilityFilter === 'ineligible'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900')
              }
            >
              Ineligible
            </button>
          </div>
        </div>

        {/* Secondary Filter Dropdowns */}
        <div className='flex flex-wrap items-center gap-2.5 pt-3 border-t border-slate-100 text-xs'>
          <div className='flex items-center gap-1.5 text-slate-400 font-medium mr-1'>
            <SlidersHorizontal className='w-3.5 h-3.5' />
            <span>Filters:</span>
          </div>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className='px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none focus:border-blue-500 text-xs cursor-pointer'
          >
            <option value='all'>All Opportunity Types</option>
            <option value='Internship'>Internship</option>
            <option value='Full-time'>Full-time (FTE)</option>
            <option value='Internship + PPO'>Internship + PPO</option>
          </select>

          <select
            value={workModeFilter}
            onChange={(e) => setWorkModeFilter(e.target.value)}
            className='px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none focus:border-blue-500 text-xs cursor-pointer'
          >
            <option value='all'>All Work Modes</option>
            <option value='Remote'>Remote</option>
            <option value='Hybrid'>Hybrid</option>
            <option value='Onsite'>Onsite</option>
          </select>

          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className='ml-auto inline-flex items-center gap-1 text-xs text-rose-600 hover:text-rose-700 font-medium px-2 py-1 rounded-md hover:bg-rose-50 transition-colors'
            >
              <X className='w-3 h-3' />
              <span>Reset Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Results Header Count */}
      <div className='flex items-center justify-between text-xs text-slate-500 px-1'>
        <span>
          Showing <strong>{filteredOpportunities.length}</strong> of {opportunities.length} opportunities
        </span>
        {searchQuery && (
          <span>
            Search results for: <strong className='text-slate-800'>{searchQuery}</strong>
          </span>
        )}
      </div>

      {/* Opportunity Cards Grid */}
      {filteredOpportunities.length > 0 ? (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredOpportunities.map((opp) => (
            <OpportunityCard
              key={opp.id}
              opportunity={opp}
              student={student}
              isApplied={isApplied(opp.id)}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Briefcase}
          title='No matching opportunities found'
          description='Try adjusting your search keywords, branch restrictions, or clear your eligibility filters.'
          actionText='Reset All Filters'
          onActionClick={clearAllFilters}
        />
      )}
    </div>
  );
};
