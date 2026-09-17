import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Modal } from '../components/common/Modal';
import {
  User,
  GraduationCap,
  Award,
  BookOpen,
  Mail,
  Phone,
  CheckCircle2,
  Edit3,
  Sparkles,
  FileText,
  ShieldCheck,
} from 'lucide-react';

export const ProfilePage: React.FC = () => {
  const { student, updateStudent } = useApp();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [name, setName] = useState(student.name);
  const [branch, setBranch] = useState(student.branch);
  const [cgpa, setCgpa] = useState(student.cgpa.toString());
  const [backlogs, setBacklogs] = useState(student.backlogs.toString());
  const [graduationYear, setGraduationYear] = useState(student.graduationYear.toString());

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedCgpa = parseFloat(cgpa) || student.cgpa;
    const parsedBacklogs = parseInt(backlogs, 10) || 0;
    const parsedGradYear = parseInt(graduationYear, 10) || student.graduationYear;

    updateStudent({
      name,
      branch,
      cgpa: parsedCgpa,
      backlogs: parsedBacklogs,
      graduationYear: parsedGradYear,
    });
    setIsEditModalOpen(false);
  };

  return (
    <div className='space-y-6 max-w-4xl mx-auto animate-fade-in'>
      {/* Header Banner */}
      <div className='bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-6'>
        <div className='flex items-center gap-5'>
          <div className='w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold text-xl flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0'>
            AS
          </div>
          <div>
            <div className='flex items-center gap-2'>
              <h2 className='text-xl font-bold text-slate-900'>{student.name}</h2>
              <span className='inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200'>
                <ShieldCheck className='w-3.5 h-3.5 text-emerald-600' />
                <span>Verified Candidate</span>
              </span>
            </div>
            <p className='text-xs text-slate-500 mt-0.5'>{student.department}</p>
            <p className='text-xs text-slate-400 mt-0.5'>College Roll No: {student.collegeId}</p>
          </div>
        </div>

        <button
          onClick={() => {
            setName(student.name);
            setBranch(student.branch);
            setCgpa(student.cgpa.toString());
            setBacklogs(student.backlogs.toString());
            setGraduationYear(student.graduationYear.toString());
            setIsEditModalOpen(true);
          }}
          className='inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer self-start sm:self-auto'
        >
          <Edit3 className='w-4 h-4' />
          <span>Edit Profile Credentials</span>
        </button>
      </div>

      {/* Academic Testing Callout */}
      <div className='p-4 bg-amber-50/80 rounded-2xl border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3'>
        <Sparkles className='w-4 h-4 text-amber-600 shrink-0 mt-0.5' />
        <div className='leading-relaxed'>
          <strong>Portfolio Reviewer Tip:</strong> Use the <strong>Edit Profile Credentials</strong> button to modify CGPA (e.g. raise to 8.9) or branch (e.g. Computer Science). Revisit the Opportunities page to immediately observe the dynamic Eligibility Engine re-evaluating in real time!
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Personal Details Card */}
        <div className='bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs'>
          <div className='flex items-center gap-2 text-sm font-bold text-slate-900 border-b border-slate-100 pb-3'>
            <User className='w-4 h-4 text-blue-600' />
            <span>Personal Information</span>
          </div>

          <div className='space-y-3 text-xs'>
            <div className='flex justify-between py-1 border-b border-slate-50'>
              <span className='text-slate-400'>Full Name</span>
              <strong className='text-slate-800'>{student.name}</strong>
            </div>
            <div className='flex justify-between py-1 border-b border-slate-50'>
              <span className='text-slate-400'>College Email</span>
              <strong className='text-slate-800'>{student.email}</strong>
            </div>
            <div className='flex justify-between py-1 border-b border-slate-50'>
              <span className='text-slate-400'>Phone Number</span>
              <strong className='text-slate-800'>{student.phone}</strong>
            </div>
            <div className='flex justify-between py-1'>
              <span className='text-slate-400'>Portfolio Link</span>
              <a
                href={student.portfolioUrl}
                target='_blank'
                rel='noreferrer'
                className='text-blue-600 hover:underline font-medium'
              >
                {student.portfolioUrl}
              </a>
            </div>
          </div>
        </div>

        {/* Academic Details Card */}
        <div className='bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-xs'>
          <div className='flex items-center gap-2 text-sm font-bold text-slate-900 border-b border-slate-100 pb-3'>
            <GraduationCap className='w-4 h-4 text-indigo-600' />
            <span>Academic Credentials</span>
          </div>

          <div className='space-y-3 text-xs'>
            <div className='flex justify-between py-1 border-b border-slate-50'>
              <span className='text-slate-400'>Degree & Branch</span>
              <strong className='text-slate-800 text-right max-w-[200px] truncate'>
                {student.branch}
              </strong>
            </div>
            <div className='flex justify-between py-1 border-b border-slate-50'>
              <span className='text-slate-400'>Graduation Batch</span>
              <strong className='text-slate-800'>{student.graduationYear}</strong>
            </div>
            <div className='flex justify-between py-1 border-b border-slate-50'>
              <span className='text-slate-400'>Cumulative CGPA</span>
              <strong className='text-blue-600 font-bold text-sm'>
                {student.cgpa.toFixed(1)} / 10.0
              </strong>
            </div>
            <div className='flex justify-between py-1'>
              <span className='text-slate-400'>Active Backlogs</span>
              <strong className='text-slate-800'>{student.backlogs}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Verified Skills Cloud */}
      <div className='bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-xs'>
        <div className='flex items-center gap-2 text-sm font-bold text-slate-900 border-b border-slate-100 pb-3'>
          <Award className='w-4 h-4 text-emerald-600' />
          <span>Skills & Technical Proficiencies</span>
        </div>

        <div className='flex flex-wrap gap-2 pt-1'>
          {student.skills.map((skill, index) => (
            <span
              key={index}
              className='text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 border border-slate-200/80 hover:bg-slate-200 transition-colors'
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title='Edit Student Credentials'
        subtitle='Test eligibility calculations by changing academic values'
        maxWidth='md'
      >
        <form onSubmit={handleSaveProfile} className='space-y-4 text-xs'>
          <div>
            <label className='block font-semibold text-slate-700 mb-1'>Candidate Name</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className='w-full p-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-500'
            />
          </div>

          <div>
            <label className='block font-semibold text-slate-700 mb-1'>Branch</label>
            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className='w-full p-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-500 bg-white'
            >
              <option value='Electronics & Communication Engineering'>
                Electronics & Communication Engineering (ECE)
              </option>
              <option value='Computer Science and Engineering'>
                Computer Science and Engineering (CSE)
              </option>
              <option value='Information Technology'>Information Technology (IT)</option>
              <option value='Electrical & Electronics Engineering'>
                Electrical & Electronics Engineering (EEE)
              </option>
              <option value='Mechanical Engineering'>Mechanical Engineering</option>
            </select>
          </div>

          <div className='grid grid-cols-2 gap-3'>
            <div>
              <label className='block font-semibold text-slate-700 mb-1'>
                CGPA <span className='text-blue-600 font-normal'>(Try 8.9 to test eligibility)</span>
              </label>
              <input
                type='number'
                step='0.1'
                min='0'
                max='10'
                value={cgpa}
                onChange={(e) => setCgpa(e.target.value)}
                required
                className='w-full p-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-500 font-bold'
              />
            </div>

            <div>
              <label className='block font-semibold text-slate-700 mb-1'>Active Backlogs</label>
              <input
                type='number'
                min='0'
                max='10'
                value={backlogs}
                onChange={(e) => setBacklogs(e.target.value)}
                required
                className='w-full p-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-500'
              />
            </div>
          </div>

          <div>
            <label className='block font-semibold text-slate-700 mb-1'>Graduation Year</label>
            <input
              type='number'
              value={graduationYear}
              onChange={(e) => setGraduationYear(e.target.value)}
              required
              className='w-full p-2.5 rounded-xl border border-slate-200 outline-none focus:border-blue-500'
            />
          </div>

          <div className='flex items-center justify-end gap-3 pt-3 border-t border-slate-100'>
            <button
              type='button'
              onClick={() => setIsEditModalOpen(false)}
              className='px-4 py-2 font-semibold text-slate-600 hover:text-slate-900 rounded-xl'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='px-5 py-2 font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-xs cursor-pointer'
            >
              Save Credentials
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
