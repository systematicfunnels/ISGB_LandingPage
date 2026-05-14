'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { APPROVAL_LOGOS, HERO_COPY } from '@lib/constants';
import { SectionShell, SectionHeader } from '@components/ui/LandingUI';

const accreditationCards = [
  {
    rank: 'DTE Code 06976',
    logo: APPROVAL_LOGOS[1].src, // AICTE
    name: 'AICTE',
    desc: 'AICTE Approved Technical Institution for Quality Management Education',
    color: 'bg-primary-600',
  },
  {
    rank: 'Affiliated',
    logo: APPROVAL_LOGOS[2].src, // SPPU
    name: 'SPPU',
    desc: 'Permanently Affiliated to Savitribai Phule Pune University (SPPU)',
    color: 'bg-accent-500',
  },
  {
    rank: '30+ Years',
    logo: APPROVAL_LOGOS[0].src, // IGSB
    name: 'Indira Legacy',
    desc: 'Three Decades of Excellence in Academic Innovation & Industry Prep',
    color: 'bg-primary-900',
  },
  {
    rank: 'High ROI',
    logo: '/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/Nielseniq-new-logo.png',
    name: 'Placements',
    desc: 'Record 16.5 LPA Highest Package with 650+ Global Recruiting Partners',
    color: 'bg-teal-600',
  },
];

export default function TrustBar() {
  return (
    <section className="relative z-30 pb-16 pt-6 lg:pt-10 bg-white">
      <SectionShell>
        {/* Intro Text Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-[2.5rem] border border-primary-100 bg-primary-50/30 p-8 shadow-xl backdrop-blur-md lg:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary-700">
                TRUSTED INSTITUTION
              </p>
              <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-slate-900 lg:text-4xl">
                Empowering MBA Professionals for <span className="text-primary-700">Global Careers</span>.
              </h2>
            </div>
            <p className="text-base leading-relaxed text-slate-600 lg:text-lg font-medium">
              {HERO_COPY.intro}
            </p>
          </div>
        </motion.div>

        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Credentials & Recognition"
            title={
              <>
                Rankings & <span className="text-primary-700">Accreditations</span>
              </>
            }
          />
          <div className="flex gap-3">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-sm transition-all hover:border-primary-200 hover:text-primary-700 hover:shadow-md" aria-label="Previous">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition-all hover:border-primary-200 hover:text-primary-700 hover:shadow-md" aria-label="Next">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {accreditationCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-primary-50 bg-white px-6 pb-10 pt-14 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#1c4f80_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              
              {/* Top Ribbon */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 z-20">
                <div className="relative">
                  <div className={`rounded-b-xl ${card.color} px-6 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-lg`}>
                    {card.rank}
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex flex-1 flex-col items-center text-center">
                <div className="relative mb-8 h-20 w-32 transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={card.logo}
                    alt={card.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{card.name}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionShell>
    </section>
  );
}
