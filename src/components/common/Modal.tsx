import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'md',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
  }[maxWidth];

  const modalElement = (
    <div
      className='fixed inset-0 z-[100] overflow-y-auto bg-slate-900/60 backdrop-blur-xs'
      role='dialog'
      aria-modal='true'
      aria-labelledby='modal-title'
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className='flex min-h-full items-center justify-center p-3 sm:p-4 text-center'>
        <div
          ref={modalRef}
          className={
            'w-full ' +
            maxWidthClasses +
            ' bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden text-left max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-3.5rem)] flex flex-col my-auto transition-all'
          }
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className='flex items-start justify-between px-5 sm:px-6 py-4 border-b border-slate-100 bg-slate-50/80 shrink-0'>
            <div>
              <h2 id='modal-title' className='text-base sm:text-lg font-bold text-slate-900 tracking-tight'>
                {title}
              </h2>
              {subtitle && <p className='text-xs text-slate-500 mt-0.5'>{subtitle}</p>}
            </div>
            <button
              onClick={onClose}
              className='p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-xl transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500'
              aria-label='Close modal'
            >
              <X className='w-5 h-5' />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className='p-5 sm:p-6 overflow-y-auto flex-1 overscroll-contain'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalElement, document.body);
};
