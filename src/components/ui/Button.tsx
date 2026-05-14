'use client'

import { MouseEvent, ReactNode, useState } from 'react'
import clsx from 'clsx'
import { ArrowUpRight } from 'lucide-react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'cta'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  href?: string
  download?: boolean | string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
  showIcon?: boolean
  suppressHydrationWarning?: boolean
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  loading = false,
  disabled = false,
  onClick,
  href,
  download,
  showIcon = false,
  type = 'button',
  ...props
}: ButtonProps) {
  const [isActive, setIsActive] = useState(false)
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])

  const baseStyles =
    'relative inline-flex min-h-[44px] touch-manipulation items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-all duration-300'

  const variants = {
    primary:
      'bg-primary-600 text-white shadow-lg shadow-primary-900/10 hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-xl',
    secondary:
      'bg-white/10 text-white border border-white/25 backdrop-blur hover:-translate-y-0.5 hover:bg-white/20',
    outline:
      'bg-white text-primary-700 border border-primary-200 hover:-translate-y-0.5 hover:border-primary-300 hover:bg-primary-50',
    cta:
      'bg-white text-[#153d62] shadow-2xl transition-all hover:-translate-y-1 active:scale-95 px-8 py-3.5 group font-bold',
  }

  const sizes = {
    sm: 'min-h-[44px] px-4 py-2.5 text-sm',
    md: 'min-h-[48px] px-6 py-3 text-base',
    lg: 'min-h-[52px] px-7 py-3.5 text-base md:px-8 md:text-lg',
  }

  const disabledStyles = disabled ? 'pointer-events-none opacity-50' : ''
  const activeStyles = isActive && !disabled ? 'scale-[0.98]' : 'scale-100'

  const createRipple = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (disabled) return

    const element = e.currentTarget
    const rect = element.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newRipple = {
      id: Date.now(),
      x,
      y,
    }

    setRipples((previous) => [...previous, newRipple])

    setTimeout(() => {
      setRipples((previous) => previous.filter((ripple) => ripple.id !== newRipple.id))
    }, 500)
  }

  const handlePress = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    createRipple(e)
    onClick?.()
  }

  const buttonClass = clsx(
    baseStyles,
    variants[variant],
    variant !== 'cta' && sizes[size],
    disabledStyles,
    activeStyles,
    className
  )

  const content = (
    <>
      {children}
      {(variant === 'cta' || showIcon) && (
        <div className={clsx(
          "flex items-center justify-center rounded-full transition-transform",
          variant === 'cta' ? "h-10 w-10 bg-[#153d62] text-white group-hover:rotate-45 ml-4" : "ml-2"
        )}>
          <ArrowUpRight className={variant === 'cta' ? "h-6 w-6" : "h-4 w-4"} />
        </div>
      )}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        className={buttonClass}
        onClick={handlePress}
        onMouseDown={() => !disabled && setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        onMouseLeave={() => setIsActive(false)}
        download={download}
        {...props}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={handlePress}
      onMouseDown={() => !disabled && setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseLeave={() => setIsActive(false)}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg
            className="h-4 w-4 animate-spin text-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          Loading...
        </span>
      ) : (
        content
      )}
    </button>
  )
}
