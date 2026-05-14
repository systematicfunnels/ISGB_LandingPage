'use client';

import { motion } from 'framer-motion';
import { Clock3, GraduationCap, Landmark, Sparkles } from 'lucide-react';
import { Button } from '@components/ui/Button';
import { SectionShell, SectionHeader } from '@components/ui/LandingUI';
import { PROGRAMME_DETAILS } from '@lib/constants';

const programmeCards = [
  {
    title: 'Marketing Management',
    duration: PROGRAMME_DETAILS.duration,
    format: PROGRAMME_DETAILS.format,
    eligibility: 'Graduation required',
    highlight: 'Brand, sales, consumer, and strategic marketing pathways',
    color: 'bg-orange-50 text-orange-700 border-orange-100 hover:bg-orange-600 hover:text-white',
  },
  {
    title: 'Financial Management',
    duration: PROGRAMME_DETAILS.duration,
    format: PROGRAMME_DETAILS.format,
    eligibility: 'Graduation required',
    highlight: 'Finance, analysis, valuation, and business decision support',
    color: 'bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-600 hover:text-white',
  },
  {
    title: 'Human Resource Management',
    duration: PROGRAMME_DETAILS.duration,
    format: PROGRAMME_DETAILS.format,
    eligibility: 'Graduation required',
    highlight: 'Talent, people strategy, organisational behaviour, and culture',
    color: 'bg-purple-50 text-purple-700 border-purple-100 hover:bg-purple-600 hover:text-white',
  },
  {
    title: 'Operations and Supply Chain',
    duration: PROGRAMME_DETAILS.duration,
    format: PROGRAMME_DETAILS.format,
    eligibility: 'Graduation required',
    highlight: 'Operations, process, logistics, and supply chain management',
    color: 'bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-600 hover:text-white',
  },
];

export default function Programme() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <SectionShell>
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="MBA Specializations"
            title={
              <>
                Choose a career-focused <span className="text-primary-700">MBA pathway</span>.
              </>
            }
            description="Each specialization is designed to build practical business capability and sharper domain knowledge."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {programmeCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex flex-col rounded-[2.5rem] border border-primary-50 bg-[#fbf7ef]/30 p-8 shadow-lg transition-all hover:shadow-2xl hover:bg-white hover:-translate-y-1"
            >
              <div className={`inline-flex self-start rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors duration-300 ${card.color}`}>
                Specialization
              </div>
              
              <h3 className="mt-6 font-display text-3xl font-bold leading-tight text-slate-950 group-hover:text-primary-700 transition-colors">
                {card.title}
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-slate-600 transition-colors group-hover:text-slate-900">
                {card.highlight}
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <div className="flex items-center gap-3 rounded-2xl bg-white p-3 text-xs font-semibold text-slate-700 shadow-sm transition-all group-hover:shadow-md">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                    <Clock3 className="h-4 w-4" />
                  </div>
                  {card.duration}
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white p-3 text-xs font-semibold text-slate-700 shadow-sm transition-all group-hover:shadow-md">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                    <Landmark className="h-4 w-4" />
                  </div>
                  {card.format}
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white p-3 text-xs font-semibold text-slate-700 shadow-sm transition-all group-hover:shadow-md">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                    <GraduationCap className="h-4 w-4" />
                  </div>
                  {card.eligibility}
                </div>
              </div>

              <div className="mt-auto pt-10 flex flex-col gap-3">
                <Button href="#apply" variant="cta" className="group-hover:scale-[1.02]">
                  Apply Now
                </Button>
                <Button href="#benefits" variant="outline" className="justify-center border-slate-200 bg-transparent hover:bg-slate-50 transition-all">
                  Learn More
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 relative overflow-hidden rounded-[3rem] bg-slate-950 p-8 text-white shadow-2xl md:p-12"
        >
          <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-primary-900/20 to-transparent" />
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
          
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-primary-400">
                <Sparkles className="h-5 w-5" />
                <p className="text-[10px] font-bold uppercase tracking-[0.25em]">Programme Snapshot</p>
              </div>
              <h3 className="mt-4 font-display text-3xl font-bold leading-tight md:text-4xl">
                Start your transformation journey with IGSB Pune today.
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button href="#apply" variant="cta" className="!bg-accent-500 !text-slate-950 hover:!bg-accent-600 px-10">
                Apply Now
              </Button>
              <Button href="#benefits" variant="secondary" size="lg" className="px-10 border-white/20">
                Why IGSB?
              </Button>
            </div>
          </div>
        </motion.div>
      </SectionShell>
    </section>
  );
}
