import { ReactNode } from 'react'
import clsx from 'clsx'

const shellClass = 'mx-auto w-full max-w-[1460px] px-4 sm:px-6 lg:px-8'

export function SectionShell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`${shellClass} ${className}`.trim()}>{children}</div>
}

export function Eyebrow({
  children,
  inverse = false,
  className = '',
}: {
  children: ReactNode
  inverse?: boolean
  className?: string
}) {
  return (
    <p
      className={clsx(
        'inline-flex rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em]',
        inverse
          ? 'border border-white/10 bg-white/5 text-white'
          : 'border border-primary-100 bg-primary-50 text-primary-700',
        className
      )}
    >
      {children}
    </p>
  )
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  inverse = false,
}: {
  eyebrow: string
  title: ReactNode
  description?: string
  centered?: boolean
  inverse?: boolean
}) {
  return (
    <div className={clsx('flex flex-col gap-6', centered && 'items-center text-center')}>
      <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow>
      <h2
        className={clsx(
          'font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.05] tracking-tight',
          inverse ? 'text-white' : 'text-slate-950'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            'max-w-3xl text-lg leading-relaxed',
            inverse ? 'text-white/80' : 'text-slate-600'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
