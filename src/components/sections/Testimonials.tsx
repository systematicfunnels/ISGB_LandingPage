'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { SectionShell } from '@components/ui/LandingUI'
import { TESTIMONIALS } from '@lib/constants'

interface Testimonial {
  image: string
  name: string
  quote: string
  batch: string
}

function TestimonialCard({ story }: { story: Testimonial }) {
  return (
    <div className="flex w-[450px] shrink-0 items-center gap-5 rounded-full border border-slate-100 bg-white p-3 shadow-sm transition-all hover:shadow-md">
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-[#1295a5]/10">
        <Image
          src={story.image}
          alt={story.name}
          width={64}
          height={64}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="min-w-0 flex-1 pr-6">
        <p className="line-clamp-2 text-sm leading-relaxed text-slate-600">
          {story.quote}
        </p>
        <p className="mt-1 flex items-center gap-2 text-[11px] font-bold text-[#15253c]">
          <span className="truncate">{story.name}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span className="truncate font-medium text-slate-400">{story.batch}</span>
        </p>
      </div>
    </div>
  )
}

function TestimonialMarquee({ items, direction = 'left', speed = 40 }: { items: Testimonial[]; direction?: 'left' | 'right'; speed?: number }) {
  const containerVariants = {
    animate: {
      x: direction === 'left' ? [-2000, 0] : [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: speed,
          ease: "linear" as const,
        },
      },
    },
  };

  return (
    <div className="flex overflow-hidden py-4">
      <motion.div
        className="flex gap-6 whitespace-nowrap"
        variants={containerVariants}
        animate="animate"
      >
        {/* Render triple sets to ensure seamless loop */}
        {[...items, ...items, ...items].map((story, i) => (
          <TestimonialCard key={`${story.name}-${i}`} story={story} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[#fbfbfd] py-16 sm:py-24" id="stories">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(#1c4f80_1px,transparent_1px),linear-gradient(90deg,#1c4f80_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-20" />
        
        <motion.div 
          animate={{ rotate: [0, 5, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-20 text-slate-200/40 hidden lg:block"
        >
          <Quote size={200} className="fill-current" />
        </motion.div>
        
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#1295a5]/5 rounded-full blur-3xl" />
      </div>

      <SectionShell className="relative z-10">
        <div className="text-center">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1] tracking-[-0.04em] text-[#15253c]">
            Whats our <span className="relative">
              student says
              <svg className="absolute -bottom-2 left-0 w-full" width="100%" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0 5C20 2 40 2 60 5C80 8 100 5 100 5" stroke="#1295a5" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-500">
            Hear directly from our students as they share their experiences, achievements, and 
            journey within our vibrant academic community
          </p>
        </div>

        <div className="mt-20 flex flex-col gap-2">
          <TestimonialMarquee items={TESTIMONIALS} direction="left" speed={60} />
          <TestimonialMarquee items={[...TESTIMONIALS].reverse()} direction="right" speed={70} />
          <TestimonialMarquee items={TESTIMONIALS} direction="left" speed={65} />
        </div>
      </SectionShell>
    </section>
  )
}
