'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowDown,
  GraduationCap,
  Sparkles,
  Star,
  Book,
} from 'lucide-react';

import { CAMPUS_IMAGES, HERO_COPY } from '@lib/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 overflow-hidden bg-white text-slate-900">
      {/* BACKGROUND CAMPUS IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src={CAMPUS_IMAGES.campusFacade}
          alt="IGSB Campus"
          fill
          className="object-cover object-center opacity-40"
          priority
          sizes="100vw"
        />
        {/* Subtle Gradient Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
      </div>

      {/* Subtle Grid Background Pattern */}
      <div 
        className="absolute inset-0 z-[1] opacity-[0.03]" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px' 
        }} 
      />
      
      <div className="mx-auto max-w-[1460px] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Left Student Cutout */}
        <div className="absolute -left-20 top-[5%] hidden xl:block w-[450px] h-[650px] z-20 pointer-events-none">
          <Image
            src={CAMPUS_IMAGES.mbaStudentCutout}
            alt="MBA Student"
            fill
            className="object-contain object-center drop-shadow-2xl"
            priority
          />
        </div>

        {/* Right Student Cutout */}
        <div className="absolute -right-20 top-[5%] hidden xl:block w-[450px] h-[650px] z-20 pointer-events-none">
          <Image
            src={CAMPUS_IMAGES.boyStudentCutout}
            alt="Boy Student"
            fill
            className="object-contain object-center drop-shadow-2xl"
            priority
          />
        </div>

        <div className="flex flex-col items-center text-center relative z-30">
          {/* TOP BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white px-5 py-2 shadow-sm"
          >
            <div className="bg-slate-900 rounded-full p-1">
              <GraduationCap className="h-3 w-3 text-white" />
            </div>
            <span className="text-[13px] font-medium text-slate-800 tracking-tight">
              {HERO_COPY.society} {HERO_COPY.campus}
            </span>
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 max-w-4xl font-display text-[clamp(2.5rem,6.5vw,5.5rem)] font-black leading-[1.05] tracking-tight text-slate-950"
          >
            Accelerate <span className="relative inline-block">
              Your Career.
              <svg 
                className="absolute -bottom-2 left-0 w-full h-4 text-primary-600/40" 
                viewBox="0 0 100 10" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M0 5 Q 25 0 50 5 T 100 5" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="8" 
                  strokeLinecap="round"
                />
              </svg>
            </span> <br className="hidden sm:block" />
            Maximize Your Potential.
          </motion.h1>

          {/* SUBTEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-3xl space-y-6"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-600">
              {HERO_COPY.approvals}
            </p>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg font-medium">
              {HERO_COPY.intro}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#apply"
                className="group relative inline-flex items-center justify-center rounded-full bg-accent-500 px-8 py-3.5 text-sm font-bold text-slate-950 shadow-[0_20px_40px_-15px_rgba(245,158,11,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(245,158,11,0.6)]"
              >
                Apply Now
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
              <a
                href="/igsb-brochure.pdf"
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-900 bg-white px-8 py-3.5 text-sm font-bold text-slate-900 transition-all duration-300 hover:bg-slate-50 hover:shadow-lg"
              >
                Download Brochure
              </a>
              <a
                href="tel:+919657856103"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-8 py-3.5 text-sm font-medium text-slate-600 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900 hover:shadow-md"
              >
                Speak to an Admission Counselor
              </a>
            </div>
          </motion.div>
        </div>

        {/* FLOATING ELEMENTS */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Top Left: Book Icon */}
          <motion.div
            animate={{ 
              rotate: [-5, 5, -5],
              y: [0, -10, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[5%] top-[10%] hidden lg:block opacity-[0.15]"
          >
            <Book size={80} strokeWidth={1} className="text-slate-900" />
          </motion.div>

          {/* Excellence Badge (Mid Left) */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[8%] top-[45%] hidden lg:flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-white shadow-[0_10px_25px_-5px_rgba(13,152,168,0.4)]"
          >
            <Star className="h-4 w-4 fill-white" />
            <span className="text-[13px] font-bold tracking-tight">Excellence</span>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-teal-600 rotate-45 rounded-sm" />
          </motion.div>

          {/* Innovation Badge (Top Right) */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-[8%] top-[15%] hidden lg:flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-white shadow-[0_10px_25px_-5px_rgba(2,132,199,0.4)]"
          >
            <Sparkles className="h-4 w-4 fill-white" />
            <span className="text-[13px] font-bold tracking-tight">Innovation</span>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary-600 rotate-45 rounded-sm" />
          </motion.div>

          {/* Graduation Cap (Mid Right) */}
          <motion.div
            animate={{ 
              rotate: [15, 20, 15],
              y: [0, -15, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[10%] top-[40%] hidden lg:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-slate-900/10 blur-2xl rounded-full translate-y-10" />
              <GraduationCap 
                size={140} 
                strokeWidth={0.5} 
                className="text-slate-900 opacity-20 relative z-10" 
              />
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
}
