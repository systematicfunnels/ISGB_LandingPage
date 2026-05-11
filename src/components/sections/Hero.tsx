 'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  ArrowRight,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@components/ui/Button'
import {
  APPROVAL_LOGOS,
  CAMPUS_IMAGES,
  CONTACT_INFO,
  HERO_BADGES,
  HERO_COPY,
  SITE_CONFIG,
} from '@lib/constants'

const HERO_APPROVAL_BADGES = [
  {
    name: 'Indira',
    src: SITE_CONFIG.favicon,
  },
  ...APPROVAL_LOGOS.filter((logo) => logo.name !== 'IGSB'),
] as const

function getApprovalLogoClass(name: string) {
  switch (name) {
    case 'Indira':
      return 'h-14 sm:h-16 md:h-[70px]'
    case 'AICTE':
      return 'h-14 sm:h-16 md:h-[72px]'
    case 'SPPU':
      return 'h-11 sm:h-12 md:h-[54px]'
    default:
      return 'h-14 sm:h-16 md:h-[68px]'
  }
}

type AnimatedStatProps = {
  end: number
  decimals?: number
  prefix?: string
  suffix?: string
  duration?: number
}

function AnimatedStat({
  end,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1400,
}: AnimatedStatProps) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const nextValue = end * eased

      setValue(progress >= 1 ? end : nextValue)

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick)
      }
    }

    frame = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(frame)
  }, [duration, end])

  return (
    <>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-secondary-700 via-slate-950 to-[#07111d] pb-[4.5rem] pt-6 text-white md:pb-24 md:pt-8">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <Image
          src={CAMPUS_IMAGES.heroBackground}
          alt="IGSB campus"
          fill
          className="object-cover object-center opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-transparent to-[#07111d]/90" />
        {/* Animated glow effects */}
        <div className="orb-glow absolute left-[5%] top-20 h-64 w-64 rounded-full bg-teal-500/15 blur-3xl animate-pulse" />
        <div className="orb-glow absolute right-[8%] bottom-20 h-72 w-72 rounded-full bg-accent-500/12 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="orb-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Mobile Top Bar - Enhanced UX */}
        <div className="mb-6 flex items-center justify-between gap-3 md:hidden">
          <div className="flex items-center gap-3">
            <Image
              src={SITE_CONFIG.logo}
              alt="IGSB Logo"
              width={96}
              height={96}
              className="h-12 w-auto object-contain"
            />
          </div>
          <a
            href={CONTACT_INFO.admissions.phoneHref}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
          >
            <PhoneCall className="h-4 w-4 text-primary-600" />
            <span className="hidden sm:inline">Call Now</span>
          </a>
        </div>

        {/* Desktop Top Bar - Professional UX */}
        <div className="reveal-up mb-7 hidden rounded-2xl border border-white/15 bg-gradient-to-r from-white/12 via-primary-900/20 to-accent-500/8 backdrop-blur-md shadow-2xl md:flex md:items-center md:justify-between md:px-6 md:py-4">
          {/* Left side - Key messages */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {/* Logo + Brand */}
            <div className="flex items-center gap-3">
              <Image
                src={SITE_CONFIG.logo}
                alt="IGSB Logo"
                width={144}
                height={144}
                className="h-16 w-auto object-contain"
              />
            </div>
            
            {/* Divider */}
            <span className="hidden h-4 w-px bg-white/20 lg:block" />
            
            {/* Value propositions */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
              <span className="flex items-center gap-1.5 text-white/90">
                <svg className="h-4 w-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Placement-Oriented
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-white/30 xl:block" />
              <span className="flex items-center gap-1.5 text-white/90">
                <svg className="h-4 w-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                AICTE Approved
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-white/30 xl:block" />
              <span className="flex items-center gap-1.5 text-white/90">
                <svg className="h-4 w-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                24/7 Support
              </span>
            </div>
          </div>

          {/* Right side - CTA */}
          <a
            href={CONTACT_INFO.admissions.phoneHref}
            className="group ml-4 flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-slate-50 active:scale-95"
          >
            <PhoneCall className="h-4 w-4 text-primary-600 transition-transform group-hover:rotate-12" />
            <span>{CONTACT_INFO.admissions.phone}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Main Content Grid - Improved Layout */}
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
          {/* Left Column - Content */}
          <div className="max-w-2xl lg:pt-8">
            {/* Badges - Enhanced */}
            <div className="reveal-up reveal-delay-1 mb-6 flex flex-wrap gap-2">
              {HERO_BADGES.map((badge) => (
                <span 
                  key={badge} 
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors"
                >
                  <CheckCircle2 className="h-3 w-3 text-teal-400" />
                  {badge}
                </span>
              ))}
            </div>

            <h1 className="reveal-up reveal-delay-1 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-white md:text-7xl">
              {HERO_COPY.title}
            </h1>

            <p className="reveal-up reveal-delay-2 mt-5 max-w-2xl text-xl text-teal-100 md:text-2xl">
              {HERO_COPY.subtitle}
            </p>

            <p className="reveal-up reveal-delay-3 mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              {HERO_COPY.intro}
            </p>

            <div className="reveal-up reveal-delay-3 mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button href="#apply" size="lg" className="w-full justify-between sm:w-auto sm:justify-center">
                Apply Now
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                href={SITE_CONFIG.brochurePath}
                download
                variant="secondary"
                size="lg"
                className="w-full justify-between sm:w-auto sm:justify-center"
              >
                Download Brochure
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                href={CONTACT_INFO.admissions.phoneHref}
                variant="secondary"
                size="lg"
                className="w-full justify-between sm:w-auto sm:justify-center"
              >
                Speak to an Admission Counselor
                <PhoneCall className="h-5 w-5" />
              </Button>
            </div>

            <p className="reveal-up reveal-delay-4 mt-5 text-sm font-medium text-slate-300">
              Fill the form to receive programme details instantly
            </p>
          </div>

          <div className="relative">
            <div className="float-wide absolute -left-6 top-8 hidden h-40 w-40 rounded-full bg-teal-400/18 blur-3xl lg:block" />
            <div className="float-soft absolute right-0 top-0 hidden h-48 w-48 rounded-full bg-blue-500/18 blur-3xl lg:block" />

            <div className="reveal-up reveal-delay-2 relative mx-auto max-w-[560px] lg:ml-auto">
              <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-teal-400/18 blur-3xl" />
              <div className="absolute -right-4 top-24 h-36 w-36 rounded-full bg-accent-500/14 blur-3xl" />

              <div className="relative overflow-hidden rounded-[36px] bg-white/[0.05] p-4 shadow-[0_30px_90px_rgba(15,23,42,0.34)] backdrop-blur-xl sm:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.08),transparent_24%),linear-gradient(160deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />

                <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center rounded-full border border-teal-300/20 bg-teal-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-teal-100">
                    2026 Admissions Open
                  </div>
                  <div className="inline-flex items-center rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-medium text-slate-200">
                    AICTE Approved and SPPU Affiliated
                  </div>
                </div>

                <div className="relative z-10 mt-5 min-h-[430px] sm:min-h-[520px]">
                  <div className="absolute left-1/2 top-8 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-gradient-to-b from-accent-500/16 via-white/8 to-transparent blur-3xl sm:h-[320px] sm:w-[320px]" />

                  <div className="absolute left-0 top-8 z-20 rounded-[24px] border border-white/12 bg-slate-950/65 px-4 py-3 shadow-[0_18px_40px_rgba(15,23,42,0.3)] backdrop-blur-md">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                      Highest Package
                    </p>
                    <p className="mt-2 text-3xl font-semibold tracking-tight text-white">
                      <AnimatedStat end={16.5} decimals={1} suffix=" LPA" />
                    </p>
                  </div>

                  <div className="absolute bottom-10 right-0 z-20 rounded-[24px] border border-white/12 bg-slate-950/65 px-4 py-3 shadow-[0_18px_40px_rgba(15,23,42,0.3)] backdrop-blur-md">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                      Recruiters
                    </p>
                    <p className="mt-2 text-3xl font-semibold tracking-tight text-white">
                      <AnimatedStat end={650} suffix="+" />
                    </p>
                  </div>

                  <div className="absolute inset-x-8 bottom-0 top-12 overflow-hidden rounded-[32px] border border-white/14 bg-gradient-to-br from-white/96 via-[#f3efe5] to-[#dcedea] shadow-[0_28px_90px_rgba(15,23,42,0.24)] sm:inset-x-12 sm:top-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_34%)]" />
                    <div className="absolute inset-x-[8%] top-[8%] bottom-[8%] rounded-[28px] border border-white/60" />
                    <div className="absolute right-5 top-5 z-20 rounded-[22px] border border-slate-200/80 bg-white/96 px-4 py-3 shadow-[0_18px_40px_rgba(15,23,42,0.22)] backdrop-blur-md sm:right-7 sm:top-7">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-700">
                        Average Package
                      </p>
                      <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-950 sm:text-[2rem]">
                        <AnimatedStat end={7.75} decimals={2} suffix=" LPA" />
                      </p>
                    </div>
                    <Image
                      src={CAMPUS_IMAGES.femaleStudent}
                      alt="IGSB MBA Student"
                      fill
                      className="translate-y-6 scale-[1.08] object-contain object-bottom sm:translate-y-8 sm:scale-[1.1]"
                      priority
                    />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#e7f2ef] via-[#e7f2ef]/92 to-transparent" />
                  </div>

                  <div className="absolute inset-x-[22%] bottom-2 h-10 rounded-full bg-slate-950/18 blur-2xl" />
                </div>

                <div className="relative z-10 mt-5">
                  <div className="rounded-[26px] border border-white/10 bg-slate-950/56 px-4 py-4 backdrop-blur-md sm:px-5 sm:py-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-300">
                      Approvals & Affiliations
                    </p>
                    <div className="mt-4 grid grid-cols-3 items-center gap-4 md:gap-8">
                      {HERO_APPROVAL_BADGES.map((logo) => (
                        <div
                          key={logo.name}
                          className="flex min-h-[80px] w-full items-center justify-center sm:min-h-[92px] md:min-h-[96px]"
                        >
                          <Image
                            src={logo.src}
                            alt={logo.name}
                            width={96}
                            height={96}
                            className={`${getApprovalLogoClass(logo.name)} w-auto max-w-full object-contain`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
