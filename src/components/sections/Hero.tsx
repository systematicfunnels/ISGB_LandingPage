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
    <section className="relative min-h-screen pt-32 overflow-hidden bg-gradient-to-br from-[#1c4f80] via-[#153d62] to-[#1295a5] text-white">
      {/* BACKGROUND CAMPUS IMAGE - HIDDEN FOR TESTING */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src={CAMPUS_IMAGES.campusFacade}
          alt="IGSB Campus"
          fill
          className="object-cover object-center opacity-60"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/40" />
      </div> */}

      {/* Legacy Section Style Background Elements */}
      <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:40px_40px] z-0" />
      <div className="absolute right-0 top-0 h-[50%] w-[50%] translate-x-1/3 -translate-y-1/3 rounded-full bg-white/10 blur-[100px] z-0" />
      <div className="absolute bottom-0 left-0 h-[40%] w-[40%] -translate-x-1/3 translate-y-1/3 rounded-full bg-[#7ee0c6]/20 blur-[100px] z-0" />

      {/* Subtle Grid Background Pattern */}
      <div 
        className="absolute inset-0 z-[1] opacity-[0.03]" 
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px' 
        }} 
      />
      
      <div className="mx-auto max-w-[1460px] px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Left Student Cutout - Sharp and positioned at bottom for mobile/tablet */}
        <div className="absolute left-1/2 xl:left-[-5rem] bottom-[-20px] md:bottom-[-40px] xl:top-[5%] xl:bottom-auto -translate-x-1/2 xl:translate-x-0 w-[260px] h-[380px] sm:w-[320px] sm:h-[450px] xl:w-[450px] xl:h-[650px] z-20 pointer-events-none opacity-100 transition-all duration-700">
          <Image
            src={CAMPUS_IMAGES.mbaStudentCutout}
            alt="MBA Student"
            fill
            className="object-contain object-bottom xl:object-center drop-shadow-2xl"
            priority
          />
        </div>

        {/* Right Student Cutout - Desktop only */}
        <div className="absolute -right-20 top-[5%] hidden xl:block w-[450px] h-[650px] z-20 pointer-events-none">
          <Image
            src={CAMPUS_IMAGES.boyStudentCutout}
            alt="Boy Student"
            fill
            className="object-contain object-center drop-shadow-2xl"
            priority
          />
        </div>

        <div className="flex flex-col items-center text-center relative z-30 pb-[320px] sm:pb-[400px] xl:pb-0">
          {/* TOP BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2 shadow-sm"
          >
            <div className="bg-white rounded-full p-1">
              <GraduationCap className="h-3 w-3 text-[#153d62]" />
            </div>
            <span className="text-[13px] font-medium text-white tracking-tight">
              {HERO_COPY.society} {HERO_COPY.campus}
            </span>
          </motion.div>

          {/* MAIN HEADING */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-10 max-w-4xl font-display text-[clamp(2.5rem,6.5vw,5.5rem)] font-black leading-[1.05] tracking-tight text-white"
          >
            Accelerate <span className="relative inline-block text-[#7ee0c6]">
              Your Career.
              <svg 
                className="absolute -bottom-2 left-0 w-full h-4 text-[#7ee0c6]/40" 
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
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#7ee0c6]">
              {HERO_COPY.approvals}
            </p>
            <p className="text-base leading-relaxed text-white/90 sm:text-lg font-medium">
              {HERO_COPY.intro}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href="#apply"
                className="group relative inline-flex items-center justify-center rounded-full bg-[#7ee0c6] px-8 py-3.5 text-sm font-bold text-slate-950 shadow-[0_20px_40px_-15px_rgba(126,224,198,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(126,224,198,0.6)]"
              >
                Apply Now
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </a>
              <a
                href="/igsb-brochure.pdf"
                className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 hover:shadow-lg"
              >
                Download Brochure
              </a>
              <a
                href="tel:+919657856103"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:text-white hover:shadow-md"
              >
                Speak to an Admission Counselor
              </a>
            </div>
          </motion.div>
        </div>

        {/* FLOATING ELEMENTS - Increased z-index to be above cutouts */}
        <div className="absolute inset-0 pointer-events-none z-40">
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
            className="absolute left-[15%] top-[45%] hidden lg:flex items-center gap-2 rounded-lg bg-teal-600 px-5 py-2.5 text-white shadow-[0_10px_25px_-5px_rgba(13,152,168,0.4)]"
          >
            <Star className="h-4 w-4 fill-white" />
            <span className="text-[13px] font-bold tracking-tight">Excellence</span>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-teal-600 rotate-45 rounded-sm" />
          </motion.div>

          {/* Innovation Badge (Top Right) */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute right-[15%] top-[18%] hidden lg:flex items-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-white shadow-[0_10px_25px_-5px_rgba(2,132,199,0.4)]"
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
