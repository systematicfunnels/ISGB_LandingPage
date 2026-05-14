'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Compass, ShieldCheck } from 'lucide-react';
import { Button } from '@components/ui/Button';
import { SectionShell, SectionHeader } from '@components/ui/LandingUI';
import { CAMPUS_IMAGES } from '@lib/constants';

const aboutCards = [
  {
    label: 'Our Purpose',
    icon: Compass,
    title: 'Nurturing Changemakers',
    text: 'IGSB supports changemakers who want to learn by doing, think with clarity, and grow into business leaders with stronger judgment.',
  },
  {
    label: 'Our Promise',
    icon: ShieldCheck,
    title: 'Practical Excellence',
    text: 'Students experience an academic community where collaboration, practical learning, and career readiness move together every day.',
  },
];

const locationFacts = ['Pune', 'AICTE Approved', 'Affiliated to SPPU'];

export default function About() {
  return (
    <section id="about" className="bg-[#fbf7ef] py-24 lg:py-32">
      <SectionShell>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeader
              eyebrow="About IGSB"
              title={
                <>
                  Where curiosity grows, and <span className="text-primary-700">confidence</span> becomes visible.
                </>
              }
              description="We are a business school where academic rigor meets practical application. Our mission is to transform students into industry-ready professionals through a journey of continuous learning and industry exposure."
            />

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {aboutCards.map((card) => (
                <div key={card.label} className="group relative rounded-3xl border border-transparent bg-white/50 p-6 transition-all hover:border-primary-100 hover:bg-white hover:shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white">
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-950 transition-colors group-hover:text-primary-700">{card.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Button href="#apply" variant="cta" className="px-10">
                Explore IGSB
              </Button>
              <div className="flex items-center gap-4 border-l border-slate-200 pl-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-primary-100 flex items-center justify-center overflow-hidden">
                       <Image
                        src={`/images/ellie.jpg`}
                        alt="Student"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-xs font-bold text-slate-500">Join 500+ Students</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-[24rem] overflow-hidden rounded-[2.5rem] shadow-2xl">
                  <Image
                    src={CAMPUS_IMAGES.outdoorLeadershipDiscussion}
                    alt="Students discussion"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="rounded-[2rem] bg-slate-900 p-8 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary-400">Location</p>
                  <p className="mt-2 text-2xl font-bold">Pune Campus</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {locationFacts.slice(1).map((fact) => (
                      <span key={fact} className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase">
                        {fact}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="pt-12 space-y-4">
                <div className="rounded-[2rem] bg-primary-500 p-8 text-white">
                  <h4 className="text-4xl font-bold">15+</h4>
                  <p className="mt-2 text-xs font-bold uppercase tracking-widest">Years Legacy</p>
                </div>
                <div className="relative h-[24rem] overflow-hidden rounded-[2.5rem] shadow-2xl">
                  <Image
                    src={CAMPUS_IMAGES.campusFacade}
                    alt="Campus facade"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative Dots */}
            <div className="absolute -right-8 -top-8 h-32 w-32 [background-image:radial-gradient(#e2e8f0_2px,transparent_2px)] [background-size:16px_16px] pointer-events-none" />
            <div className="absolute -left-8 -bottom-8 h-32 w-32 [background-image:radial-gradient(#e2e8f0_2px,transparent_2px)] [background-size:16px_16px] pointer-events-none" />
          </motion.div>
        </div>
      </SectionShell>
    </section>
  );
}
