import { Student, Opportunity, EligibilityResult, CriteriaCheck } from '../types';

const BRANCH_ALIASES: Record<string, string[]> = {
  ECE: [
    'ECE',
    'ELECTRONICS & COMMUNICATION ENGINEERING',
    'ELECTRONICS AND COMMUNICATION ENGINEERING',
    'ELECTRONICS & COMMUNICATION',
    'ELECTRONICS AND COMMUNICATION',
  ],
  CSE: [
    'CSE',
    'COMPUTER SCIENCE AND ENGINEERING',
    'COMPUTER SCIENCE & ENGINEERING',
    'COMPUTER SCIENCE',
  ],
  IT: [
    'IT',
    'INFORMATION TECHNOLOGY',
  ],
  EEE: [
    'EEE',
    'ELECTRICAL & ELECTRONICS ENGINEERING',
    'ELECTRICAL AND ELECTRONICS ENGINEERING',
  ],
  MECH: [
    'MECH',
    'MECHANICAL ENGINEERING',
  ],
};

function branchesMatch(studentBranch: string, oppBranch: string): boolean {
  const s = studentBranch.trim().toUpperCase();
  const o = oppBranch.trim().toUpperCase();

  if (s === o) return true;
  if (s.includes(o) || o.includes(s)) return true;

  for (const group of Object.values(BRANCH_ALIASES)) {
    const groupUpper = group.map((b) => b.toUpperCase());
    const studentInGroup = groupUpper.some((b) => b === s || s.includes(b) || b.includes(s));
    const oppInGroup = groupUpper.some((b) => b === o || o.includes(b) || b.includes(o));
    if (studentInGroup && oppInGroup) {
      return true;
    }
  }

  return false;
}

export function checkEligibility(student: Student, opportunity: Opportunity): EligibilityResult {
  const reasons: string[] = [];
  const criteriaChecks: CriteriaCheck[] = [];

  // 1. CGPA Check
  const cgpaMet = student.cgpa >= opportunity.minCgpa;
  criteriaChecks.push({
    name: 'Minimum CGPA',
    required: opportunity.minCgpa.toFixed(1) + ' or higher',
    actual: student.cgpa.toFixed(1),
    met: cgpaMet,
  });
  if (!cgpaMet) {
    reasons.push(
      'Minimum CGPA required is ' +
        opportunity.minCgpa.toFixed(1) +
        ', but your CGPA is ' +
        student.cgpa.toFixed(1) +
        '.'
    );
  }

  // 2. Branch Check
  const allowsAllEngineering = opportunity.eligibleBranches.some(function (b) {
    const u = b.toUpperCase();
    return u === 'ALL ENGINEERING' || u === 'ALL BRANCHES' || u === 'OPEN TO ALL';
  });

  const branchMet =
    allowsAllEngineering ||
    opportunity.eligibleBranches.some(function (b) {
      return branchesMatch(student.branch, b);
    });

  criteriaChecks.push({
    name: 'Eligible Branch',
    required: allowsAllEngineering ? 'All Engineering Branches' : opportunity.eligibleBranches.join(', '),
    actual: student.branch,
    met: branchMet,
  });
  if (!branchMet) {
    reasons.push(
      student.branch +
        ' is not an eligible branch for this opportunity (' +
        opportunity.eligibleBranches.join(', ') +
        ').'
    );
  }

  // 3. Graduation Year Check
  const gradYearMet =
    opportunity.eligibleGradYears.length === 0 ||
    opportunity.eligibleGradYears.indexOf(student.graduationYear) !== -1;

  criteriaChecks.push({
    name: 'Graduation Batch',
    required:
      opportunity.eligibleGradYears.length > 0
        ? opportunity.eligibleGradYears.join(', ')
        : 'Open to all batches',
    actual: String(student.graduationYear),
    met: gradYearMet,
  });
  if (!gradYearMet) {
    reasons.push(
      'Targeted for ' +
        opportunity.eligibleGradYears.join(', ') +
        ' batch, but your graduation year is ' +
        student.graduationYear +
        '.'
    );
  }

  // 4. Backlogs Check
  const backlogsMet = student.backlogs <= opportunity.maxBacklogs;
  criteriaChecks.push({
    name: 'Active Backlogs',
    required:
      opportunity.maxBacklogs === 0
        ? '0 active backlogs allowed'
        : 'Max ' + opportunity.maxBacklogs + ' allowed',
    actual: String(student.backlogs),
    met: backlogsMet,
  });
  if (!backlogsMet) {
    reasons.push(
      'Opportunity allows maximum ' +
        opportunity.maxBacklogs +
        ' backlog(s), but you currently have ' +
        student.backlogs +
        '.'
    );
  }

  // 5. Deadline Check
  const deadlineDate = new Date(opportunity.deadline);
  const currentDate = new Date('2026-09-17');
  const deadlineActive = deadlineDate >= currentDate;

  criteriaChecks.push({
    name: 'Application Window',
    required: 'Open until ' + opportunity.deadline,
    actual: deadlineActive ? 'Applications Active' : 'Application Window Closed',
    met: deadlineActive,
  });
  if (!deadlineActive) {
    reasons.push('The application deadline (' + opportunity.deadline + ') has passed.');
  }

  const eligible = cgpaMet && branchMet && gradYearMet && backlogsMet && deadlineActive;

  return {
    eligible,
    reasons,
    criteriaChecks,
  };
}
