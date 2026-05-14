'use client'

import { ReactNode, useEffect, useState } from 'react'

type AnimatedValueProps = {
  end: number
  decimals?: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

type InfographicStatCardProps = {
  label: string
  value: ReactNode
  caption?: string
  tone?: 'dark' | 'light' | 'teal'
  className?: string
  accent?: ReactNode
}

type InfographicStepBadgeProps = {
  step: number
  className?: string
}

export function AnimatedValue({
  end,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1400,
  className = '',
}: AnimatedValueProps) {
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
    <span className={className}>
      {prefix}
      {value.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export function InfographicStatCard({
  label,
  value,
  caption,
  tone = 'dark',
  className = '',
  accent,
}: InfographicStatCardProps) {
  const toneClassMap = {
    dark: 'border-white/12 bg-slate-950/68 text-white shadow-[0_18px_44px_rgba(15,23,42,0.3)]',
    light: 'border-slate-200/80 bg-white/96 text-slate-950 shadow-[0_18px_44px_rgba(15,23,42,0.16)]',
    teal: 'border-teal-300/20 bg-teal-400/12 text-white shadow-[0_18px_44px_rgba(15,23,42,0.22)]',
  } as const

  const labelClassMap = {
    dark: 'text-slate-300',
    light: 'text-primary-700',
    teal: 'text-teal-100',
  } as const

  const captionClassMap = {
    dark: 'text-slate-400',
    light: 'text-slate-500',
    teal: 'text-teal-50/80',
  } as const

  return (
    <div className={`rounded-[24px] border px-4 py-4 backdrop-blur-md ${toneClassMap[tone]} ${className}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${labelClassMap[tone]}`}>
            {label}
          </p>
          <div className="mt-2 text-3xl font-semibold tracking-tight">
            {value}
          </div>
          {caption ? (
            <p className={`mt-2 text-sm leading-6 ${captionClassMap[tone]}`}>
              {caption}
            </p>
          ) : null}
        </div>
        {accent ? <div className="shrink-0">{accent}</div> : null}
      </div>
    </div>
  )
}

export function InfographicStepBadge({
  step,
  className = '',
}: InfographicStepBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/15 bg-slate-950/65 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur-sm ${className}`}
    >
      Step {String(step).padStart(2, '0')}
    </span>
  )
}
