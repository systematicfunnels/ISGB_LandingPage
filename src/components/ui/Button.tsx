'use client'

import { MouseEvent, ReactNode, useState } from 'react'
import clsx from 'clsx'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  href?: string
  download?: boolean | string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
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
  ...props
}: ButtonProps) {
  const [isActive, setIsActive] = useState(false)
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])

  const baseStyles =
    'font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden gap-2'

  const variants = {
    primary:
      'bg-primary-600 text-white shadow-lg shadow-primary-900/10 hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-xl',
    secondary:
      'bg-white/10 text-white border border-white/25 backdrop-blur hover:-translate-y-0.5 hover:bg-white/20',
    outline:
      'bg-white text-primary-700 border border-primary-200 hover:-translate-y-0.5 hover:border-primary-300 hover:bg-primary-50',
  }

  const sizes = {
    sm: 'px-4 py-2.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-7 py-3.5 text-base md:px-8 md:text-lg',
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
    sizes[size],
    disabledStyles,
    activeStyles,
    className
  )

  const rippleMarkup = ripples.map((ripple) => (
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
  ))

  const content = loading ? (
    <svg
      className="h-5 w-5 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  ) : (
    children
  )

  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={buttonClass}
        suppressHydrationWarning
        onMouseDown={() => !disabled && setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        onMouseLeave={() => setIsActive(false)}
        onClick={handlePress}
      >
        {rippleMarkup}
        {content}
      </a>
    )
  }

  return (
    <button
      {...props}
      className={buttonClass}
      suppressHydrationWarning
      onMouseDown={() => !disabled && setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      onMouseLeave={() => setIsActive(false)}
      onClick={handlePress}
      disabled={disabled || loading}
    >
      {rippleMarkup}
      {content}
    </button>
  )
}
