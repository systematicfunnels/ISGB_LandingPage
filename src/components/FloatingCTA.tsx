'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Modal } from '@components/ui/Modal';
import EnquiryForm from '@components/forms/EnquiryForm';

export default function FloatingCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 50, rotate: -90 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="fixed right-6 bottom-24 z-[100] hidden lg:block"
      >
        <button
          onClick={() => setIsModalOpen(true)}
          className="group relative flex h-28 w-28 flex-col items-center justify-center rounded-full bg-accent-500 text-slate-950 shadow-[0_20px_50px_-15px_rgba(245,158,11,0.6)] transition-all duration-300 hover:scale-110 hover:shadow-[0_25px_60px_-12px_rgba(245,158,11,0.7)]"
          suppressHydrationWarning
        >
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-slate-950/20 group-hover:animate-[spin_8s_linear_infinite]" />
          <ArrowDown className="h-5 w-5 mb-1 animate-bounce" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-center px-3 leading-tight">
            Apply Now
          </span>
        </button>
      </motion.div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size="lg"
        showCloseButton={false}
        className="!rounded-[2.5rem] overflow-hidden"
      >
        <div className="-m-6 bg-[#0c2d3b] p-8 md:p-12 relative">
          {/* Custom Close Button for dark background */}
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white/70 transition-all hover:bg-white/20 hover:text-white"
            aria-label="Close modal"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="mb-8 pr-8">
            <h3 className="font-display text-3xl font-bold text-white">
              MBA Admissions Open · 2026
            </h3>
            <p className="mt-4 text-white/70">
              Fill the form below to receive detailed programme information and speak with our admissions counselor.
            </p>
          </div>
          <EnquiryForm onSuccess={() => setIsModalOpen(false)} />
        </div>
      </Modal>
    </>
  );
}
