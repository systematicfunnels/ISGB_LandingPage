'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { SectionShell, Eyebrow } from '@components/ui/LandingUI'
import { LogoCarousel } from '@components/ui/LogoCarousel'
import {
  HERO_STATS,
  PLACEMENT_SUPPORT,
  RECRUITER_LOGOS,
  SITE_CONFIG,
  TOP_CAREER_ROLES,
} from '@lib/constants'

export default function PlacementOutcomes() {
  return (
    <section className="w-full bg-white py-16 sm:py-20" id="placements">
      <SectionShell>
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Eyebrow>Placement Outcomes</Eyebrow>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1] tracking-[-0.04em] text-[#15253c]">
            Trusted by industry. <span className="italic text-[#1295a5]">Defined</span> by outcomes.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {HERO_STATS.map((stat: { label: string; value: string }, i: number) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-slate-50 bg-white p-8 text-center shadow-sm"
            >
              <p className="font-display text-[2.5rem] leading-none tracking-[-0.03em] text-[#1295a5]">
                {stat.value}
              </p>
              <div className="mt-3 h-0.5 w-8 mx-auto bg-[#7ee0c6]/20 rounded-full" />
              <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-8 inline-flex rounded-full bg-primary-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-primary-700">
            OUR GRADUATES WORK AT
          </p>
          <LogoCarousel logos={RECRUITER_LOGOS} speed={55} />
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-slate-50 bg-white p-8 shadow-lg"
          >
            <Eyebrow>Top Career Roles</Eyebrow>
            <h3 className="mt-6 font-display text-[1.8rem] leading-tight tracking-[-0.02em] text-[#15253c]">
              Where our graduates lead.
            </h3>
            <div className="mt-8 flex flex-wrap gap-3">
              {TOP_CAREER_ROLES.map((role: string) => (
                <span
                  key={role}
                  className="rounded-full border border-slate-50 bg-slate-50 px-5 py-2 text-xs font-bold text-[#153d62] transition-colors hover:bg-[#1295a5] hover:text-white"
                >
                  {role}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-[2rem] bg-[#153d62] p-8 text-white shadow-xl"
          >
            <Eyebrow inverse={true}>Placement Support</Eyebrow>
            <h3 className="mt-6 font-display text-[2rem] leading-tight tracking-[-0.02em]">
              Structured. Continuous. <span className="text-[#7ee0c6]">Outcome-driven.</span>
            </h3>
            <div className="mt-8 space-y-4">
              {PLACEMENT_SUPPORT.map((item: string) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#7ee0c6]" />
                  </div>
                  <p className="text-base leading-relaxed text-white/80">{item}</p>
                </div>
              ))}
            </div>
            <Link
              href={SITE_CONFIG.brochurePath}
              className="mt-10 inline-flex items-center justify-center rounded-full bg-[#1295a5] px-8 py-3.5 text-base font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0f7d8a]"
            >
              Placement Brochure
            </Link>
          </motion.div>
        </div>
      </SectionShell>
    </section>
  )
}
