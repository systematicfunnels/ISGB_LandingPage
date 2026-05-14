'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Book, Clock, GraduationCap } from 'lucide-react'
import { SectionShell } from '@components/ui/LandingUI'
import { Button } from '@components/ui/Button'
import { PROGRAMME_CARDS, SITE_CONFIG } from '@lib/constants'

interface ProgramCardData {
  title: string
  description: string
  tag: string
  duration: string
  credits: string
  image: string
  highlight?: boolean
}

function ProgramCard({ card, index }: { card: ProgramCardData; index: number }) {
  const isHighlighted = card.highlight === true

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 * index }}
      className={`group relative flex flex-col overflow-hidden rounded-[2rem] shadow-sm transition-all duration-300 hover:shadow-xl ${
        isHighlighted ? 'bg-[#1c4f80] text-white' : 'bg-white text-[#15253c]'
      }`}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(min-width: 1024px) 350px, 100vw"
        />
        {/* Tag */}
        <div className="absolute right-3 top-3">
          <span
            className={`rounded-lg px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider ${
              isHighlighted ? 'bg-white text-[#1c4f80]' : 'bg-[#1295a5] text-white'
            }`}
          >
            {card.tag}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-grow flex-col p-6">
        <h3 className={`font-display text-xl font-bold leading-tight ${isHighlighted ? 'text-white' : 'text-[#15253c]'}`}>
          {card.title}
        </h3>
        <p
          className={`mt-3 text-sm leading-relaxed line-clamp-2 ${
            isHighlighted ? 'text-white/80' : 'text-slate-500'
          }`}
        >
          {card.description}
        </p>

        {/* Footer */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-current/10 pt-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider">
              <Clock className="h-3.5 w-3.5 opacity-60" />
              <span>{card.duration}</span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider">
              <Book className="h-3.5 w-3.5 opacity-60" />
              <span>{card.credits}</span>
            </div>
          </div>

          <Button
            href={SITE_CONFIG.links.admissions}
            variant="cta"
            className="!rounded-xl !px-4 !py-2 !text-xs"
          >
            Apply
          </Button>
        </div>
      </div>
    </motion.article>
  )
}

export default function UniversityPrograms() {
  return (
    <section className="relative w-full bg-[#fbfbfd] py-24 sm:py-32" id="programs">
      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Column 1: Card 1 and Section Info */}
          <div className="flex flex-col gap-8 lg:col-span-1">
            <ProgramCard card={PROGRAMME_CARDS[0]} index={0} />
            
            <div className="mt-4">
              <p className="max-w-[280px] text-lg font-bold leading-tight text-[#15253c]">
                Thoughtfully Crafted Education Driven by Excellence and Innovation
              </p>
              <div className="mt-8 flex gap-3">
                <button
                  suppressHydrationWarning
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-[#15253c] transition hover:bg-slate-50 active:scale-95"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  suppressHydrationWarning
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1c4f80] text-white shadow-lg transition hover:bg-[#153d62] active:scale-95"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Column 2-4: Header and remaining cards */}
          <div className="lg:col-span-3">
            <div className="flex flex-col gap-12">
              {/* Header Row */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-6">
                  <div className="hidden sm:block">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#1295a5]/5 text-[#1295a5]">
                      <GraduationCap size={48} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h2 className="font-display text-[clamp(2.5rem,5vw,3.8rem)] leading-[1.1] tracking-[-0.03em] text-[#15253c]">
                    Discover Our <br className="hidden lg:block" /> University Programs
                  </h2>
                </div>
                <div className="self-start sm:self-center">
                  <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-2 text-sm font-bold text-[#15253c] shadow-sm">
                    Leading Our <span className="ml-1 font-black">Programs</span>
                  </span>
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid gap-6 sm:grid-cols-3">
                {PROGRAMME_CARDS.slice(1).map((card: any, index: number) => (
                  <ProgramCard key={card.title} card={card} index={index + 1} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionShell>
    </section>
  )
}
