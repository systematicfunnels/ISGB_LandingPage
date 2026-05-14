'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { GraduationCap, Target, Users, TrendingUp } from 'lucide-react'
import { SectionShell, SectionHeader } from '@components/ui/LandingUI'

const featureDetails = [
  {
    title: 'Academic Excellence',
    icon: GraduationCap,
    desc: 'Industry-relevant programs designed to deliver strong academic foundations and practical knowledge.',
    color: 'bg-primary-600',
  },
  {
    title: 'Global Learning Hub',
    icon: Target,
    desc: 'A diverse, inclusive campus experience that supports global perspectives and growth worldwide.',
    color: 'bg-primary-600',
  },
  {
    title: 'World Class Faculty',
    icon: Users,
    desc: 'Learn from industry-leading experts, combining real-world experience with innovative teaching techniques.',
    color: 'bg-primary-600',
  },
  {
    title: 'Career Driven Learning',
    icon: TrendingUp,
    desc: 'Hands-on training, research opportunities, and career guidance to prepare future leaders.',
    color: 'bg-primary-600',
  },
];

export default function Excellence() {
  return (
    <section className="w-full bg-white py-20 lg:py-32" id="why-choose">
      <SectionShell>
        <div className="mb-16 flex flex-col items-center text-center">
          <SectionHeader
            centered
            eyebrow="Why Choose Us"
            title={
              <>
                Why Choose <span className="relative inline-block">
                  IGSB?
                  <svg className="absolute -bottom-2 left-0 w-full" width="100%" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                    <path d="M0 5C20 2 40 2 60 5C80 8 100 5 100 5" stroke="#f59e0b" strokeWidth="4" fill="none" strokeLinecap="round" />
                  </svg>
                </span>
              </>
            }
            description="IGSB offers quality education, experienced faculty, and industry focused programs. We prepare students with the knowledge, skills, and confidence to succeed globally."
          />
          <div className="mt-8">
            <div className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-6 py-2 text-sm font-bold text-primary-700 shadow-sm">
              Indira Legacy Since 1980
            </div>
          </div>
        </div>

        {/* 3-Column Grid Layout with Balanced Center Image */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr_1fr] lg:items-center">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            {/* Academic Excellence Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group rounded-[2rem] border border-slate-100 bg-white p-8 shadow-lg transition-all hover:shadow-2xl lg:text-right lg:items-end flex flex-col"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-lg transition-transform group-hover:scale-110">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{featureDetails[0].title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{featureDetails[0].desc}</p>
            </motion.div>

            {/* World Class Faculty Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group rounded-[2rem] border border-slate-100 bg-white p-8 shadow-lg transition-all hover:shadow-2xl lg:text-right lg:items-end flex flex-col"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-lg transition-transform group-hover:scale-110">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{featureDetails[2].title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{featureDetails[2].desc}</p>
            </motion.div>
          </div>

          {/* CENTER COLUMN (Balanced Image Cutout) */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center py-8 lg:py-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1.15, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] w-full max-w-[480px] z-10"
            >
              <Image
                src="/WHA1.png"
                alt="Why Choose IGSB"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            
            {/* Soft ambient glow behind the cutout */}
            <div className="absolute inset-0 -z-0 flex items-center justify-center">
              <div className="h-72 w-72 rounded-full bg-primary-100/40 blur-[100px]" />
              <div className="h-60 w-60 rounded-full bg-accent-100/20 blur-[80px]" />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-8 order-3">
            {/* Global Learning Hub Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group rounded-[2rem] border border-slate-100 bg-white p-8 shadow-lg transition-all hover:shadow-2xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-lg transition-transform group-hover:scale-110">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{featureDetails[1].title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{featureDetails[1].desc}</p>
            </motion.div>

            {/* Career Driven Learning Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group rounded-[2rem] border border-slate-100 bg-white p-8 shadow-lg transition-all hover:shadow-2xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-600 text-white shadow-lg transition-transform group-hover:scale-110">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{featureDetails[3].title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{featureDetails[3].desc}</p>
            </motion.div>
          </div>
        </div>
      </SectionShell>
    </section>
  )
}
