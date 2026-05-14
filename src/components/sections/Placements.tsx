'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, Trophy, ShieldCheck } from 'lucide-react';
import { AnimatedValue } from '@components/ui/Infographic';
import { SectionShell, SectionHeader, Eyebrow } from '@components/ui/LandingUI';
import {
  CAMPUS_IMAGES,
  HERO_STATS,
  PLACEMENT_SUPPORT,
  RECRUITER_LOGOS,
  TOP_CAREER_ROLES,
} from '@lib/constants';

const outcomeStats = [
  { 
    label: HERO_STATS[0].label, 
    value: <AnimatedValue end={16.5} decimals={1} suffix=" LPA" />,
    icon: Trophy,
    color: 'text-orange-600 bg-orange-50',
  },
  { 
    label: HERO_STATS[1].label, 
    value: <AnimatedValue end={7.75} decimals={2} suffix=" LPA" />,
    icon: TrendingUp,
    color: 'text-primary-600 bg-primary-50',
  },
  { 
    label: HERO_STATS[2].label, 
    value: <AnimatedValue end={650} suffix="+" />,
    icon: Users,
    color: 'text-blue-600 bg-blue-50',
  },
  { 
    label: HERO_STATS[3].label, 
    value: <AnimatedValue end={100} suffix="%" />,
    icon: ShieldCheck,
    color: 'text-emerald-600 bg-emerald-50',
  },
];

const featuredPartners = RECRUITER_LOGOS.slice(0, 12);

export default function Placements() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <SectionShell>
        <div className="mb-16 max-w-4xl">
          <SectionHeader
            eyebrow="Placement-Driven MBA"
            title={
              <>
                Strong <span className="text-primary-700">Placement Performance</span> and Outcomes.
              </>
            }
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {outcomeStats.map((stat, index) => (
            <motion.article
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-[2.5rem] border border-primary-50 bg-[#fbf7ef]/30 p-8 shadow-lg transition-all hover:shadow-2xl hover:bg-white hover:-translate-y-1"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/50 blur-2xl group-hover:bg-primary-100/50 transition-colors" />
              
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${stat.color} mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <stat.icon className="h-6 w-6" />
              </div>
              
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
              <div className="mt-4 font-display text-[2.8rem] font-bold tracking-tight text-slate-950">
                {stat.value}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <motion.article 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-[3rem] border border-primary-50 bg-white shadow-xl transition-all hover:shadow-2xl"
          >
            <div className="relative h-[22rem] overflow-hidden sm:h-[26rem]">
              <Image
                src={CAMPUS_IMAGES.placementReadyGroup}
                alt="IGSB students prepared for placements"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
            <div className="p-8 md:p-10">
              <Eyebrow className="mb-6">Placement Readiness</Eyebrow>
              <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
                Support that keeps students interview-ready and recruiter-aware.
              </h3>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {PLACEMENT_SUPPORT.map((item) => (
                  <div key={item} className="flex items-start gap-3 group/item">
                    <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition-colors group-hover/item:bg-primary-600 group-hover/item:text-white">
                      <CheckCircle2 className="h-3 w-3" />
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-slate-600 transition-colors group-hover/item:text-slate-900">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          <div className="flex flex-col gap-8">
            <motion.article 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-[3rem] bg-slate-950 p-8 text-white shadow-2xl md:p-10 transition-all hover:shadow-primary-900/20"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-500/10 blur-3xl transition-opacity group-hover:opacity-100" />
              
              <Eyebrow inverse className="mb-6">Career Paths</Eyebrow>
              <h3 className="relative z-10 mt-4 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
                Roles shaped by business depth and recruiter expectations.
              </h3>
              <div className="relative z-10 mt-8 flex flex-wrap gap-3">
                {TOP_CAREER_ROLES.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-primary-100 backdrop-blur-sm transition-all hover:bg-primary-600 hover:text-white sm:text-sm cursor-default"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </motion.article>

            <motion.article 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[3rem] border border-primary-50 bg-white p-8 shadow-xl transition-all hover:shadow-2xl md:p-10"
            >
              <div className="flex items-center justify-between mb-8">
                <p className="inline-flex rounded-full bg-primary-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-primary-700">
                  OUR GRADUATES WORK AT
                </p>
                <p className="text-xs font-bold text-slate-400">Featured Partners</p>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {featuredPartners.map((logo, index) => (
                  <motion.div
                    key={logo.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex h-28 items-center justify-center rounded-2xl border border-slate-50 bg-[#fbf7ef]/30 p-4 transition-all hover:bg-white hover:shadow-lg hover:border-primary-100"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      width={140}
                      height={60}
                      className="max-h-16 w-auto object-contain brightness-105 contrast-105"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </SectionShell>
    </section>
  );
}
