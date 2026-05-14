'use client'

import React, { useState, useRef, useEffect, ReactNode } from 'react'
import { clsx } from 'clsx'

interface SwipeCarouselProps {
  children: ReactNode[]
  className?: string
  trackClassName?: string
  autoPlay?: boolean
  interval?: number
  showDots?: boolean
  showArrows?: boolean
  infinite?: boolean
  dotContainerClassName?: string
  dotClassName?: string
  activeDotClassName?: string
}

export function SwipeCarousel({
  children,
  className = '',
  trackClassName = '',
  autoPlay = false,
  interval = 3000,
  showDots = true,
  showArrows = true,
  infinite = false,
  dotContainerClassName = '',
  dotClassName = '',
  activeDotClassName = ''
}: SwipeCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [translateX, setTranslateX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const totalSlides = children.length

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isDragging) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => 
        infinite ? (prev + 1) % totalSlides : Math.min(prev + 1, totalSlides - 1)
      )
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, isDragging, totalSlides, infinite])

  // Touch/Mouse handlers
  const handleStart = (clientX: number) => {
    setIsDragging(true)
    setStartX(clientX)
  }

  const handleMove = (clientX: number) => {
    if (!isDragging) return
    
    const diff = clientX - startX
    setTranslateX(diff)
  }

  const handleEnd = (clientX: number) => {
    if (!isDragging) return
    
    const diff = clientX - startX
    const threshold = 50 // Minimum swipe distance
    
    setIsDragging(false)
    setTranslateX(0)

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe right - go to previous
        setCurrentIndex((prev) => infinite ? 
          (prev - 1 + totalSlides) % totalSlides : Math.max(prev - 1, 0)
        )
      } else {
        // Swipe left - go to next
        setCurrentIndex((prev) => infinite ? 
          (prev + 1) % totalSlides : Math.min(prev + 1, totalSlides - 1)
        )
      }
    }
  }

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    handleEnd(e.changedTouches[0].clientX)
  }

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    handleStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    handleMove(e.clientX)
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    handleEnd(e.clientX)
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      setTranslateX(0)
    }
  }

  // Navigation functions
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => infinite ? 
      (prev - 1 + totalSlides) % totalSlides : Math.max(prev - 1, 0)
    )
  }

  const goToNext = () => {
    setCurrentIndex((prev) => infinite ? 
      (prev + 1) % totalSlides : Math.min(prev + 1, totalSlides - 1)
    )
  }

  const containerClasses = clsx(
    'relative overflow-hidden',
    className
  )

  const slideClasses = clsx(
    'flex transition-transform duration-300 ease-out',
    isDragging ? 'transition-none' : '',
    trackClassName
  )

  const slideStyle = {
    transform: `translateX(calc(-${currentIndex * 100}% + ${translateX}px))`
  }

  return (
    <div className={containerClasses}>
      <div
        ref={containerRef}
        className={slideClasses}
        style={slideStyle}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && totalSlides > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-slate-800 shadow-[0_16px_36px_-22px_rgba(15,23,42,0.38)] transition-all duration-200 hover:scale-105 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 sm:flex"
            disabled={!infinite && currentIndex === 0}
            aria-label="Previous slide"
            suppressHydrationWarning
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-3 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/92 text-slate-800 shadow-[0_16px_36px_-22px_rgba(15,23,42,0.38)] transition-all duration-200 hover:scale-105 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 sm:flex"
            disabled={!infinite && currentIndex === totalSlides - 1}
            aria-label="Next slide"
            suppressHydrationWarning
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && totalSlides > 1 && (
        <div
          className={clsx(
            'absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2',
            dotContainerClassName
          )}
        >
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={clsx(
                'w-2 h-2 rounded-full transition-all duration-300',
                dotClassName,
                currentIndex === index
                  ? clsx('bg-primary-600 w-8', activeDotClassName)
                  : 'bg-white/60 hover:bg-white/80'
              )}
              aria-label={`Go to slide ${index + 1}`}
              suppressHydrationWarning
            />
          ))}
        </div>
      )}
    </div>
  )
}

// Mobile-specific carousel for company logos
interface MobileCarouselProps {
  items: string[]
  title: string
  className?: string
}

export function MobileCompanyCarousel({ items, title, className = '' }: MobileCarouselProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!isMobile) {
    // Desktop view - show grid
    return (
      <div className={className}>
        <h3 className="text-lg font-bold text-primary-600 mb-6">{title}</h3>
        <div className="grid grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="company-logo p-3 bg-slate-50 rounded-lg text-center text-sm font-semibold text-slate-700 hover:bg-primary-50 transition-colors cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    )
  }

  // Mobile view - show carousel
  return (
    <div className={className}>
      <h3 className="text-lg font-bold text-primary-600 mb-6">{title}</h3>
      <SwipeCarousel
        showDots={true}
        showArrows={false}
        autoPlay={false}
        infinite={true}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="p-3 bg-slate-50 rounded-lg text-center text-sm font-semibold text-slate-700"
          >
            {item}
          </div>
        ))}
      </SwipeCarousel>
    </div>
  )
}
