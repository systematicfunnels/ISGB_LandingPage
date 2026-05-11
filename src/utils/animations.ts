'use client'

// Intersection Observer utilities for scroll animations based on IBM specifications

export interface AnimationConfig {
  threshold?: number
  rootMargin?: string
  animationClass?: string
  staggerDelay?: number
  once?: boolean
}

export class AnimationObserver {
  private observer: IntersectionObserver | null = null
  private animatedElements = new Set<Element>()

  constructor(private config: AnimationConfig = {}) {
    this.config = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      animationClass: 'section-animate',
      staggerDelay: 100,
      once: true,
      ...config
    }
  }

  /**
   * Observe elements with animation classes
   */
  observeElements(selector: string): void {
    if (typeof window === 'undefined') return

    // Clean up existing observer
    this.disconnect()

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target
            
            // Add stagger delay for multiple elements
            if (this.config.staggerDelay && element.parentElement) {
              const siblings = Array.from(element.parentElement.children)
              const elementIndex = siblings.indexOf(element)
              const delay = elementIndex * this.config.staggerDelay
              
              setTimeout(() => {
                this.animateElement(element)
              }, delay)
            } else {
              this.animateElement(element)
            }

            // Unobserve if animation should only run once
            if (this.config.once && this.observer) {
              this.observer.unobserve(element)
            }
          } else if (!this.config.once) {
            // Reverse animation when element leaves viewport
            this.reverseAnimation(entry.target)
          }
        })
      },
      {
        threshold: this.config.threshold,
        rootMargin: this.config.rootMargin
      }
    )

    // Start observing all matching elements
    document.querySelectorAll(selector).forEach((element) => {
      this.observer?.observe(element)
    })
  }

  /**
   * Animate a single element
   */
  private animateElement(element: Element): void {
    if (this.animatedElements.has(element) && this.config.once) return

    // Add animation class
    element.classList.add('visible')
    
    // Add specific animation classes based on element type
    if (element.classList.contains('hero-title')) {
      element.classList.add('hero-title')
    } else if (element.classList.contains('hero-subtitle')) {
      element.classList.add('hero-subtitle')
    } else if (element.classList.contains('hero-cta')) {
      element.classList.add('hero-cta')
    } else if (element.classList.contains('feature-card')) {
      element.classList.add('animate-slide-up-fade')
    } else if (element.classList.contains('company-logo')) {
      element.classList.add('animate-fade-in')
    }

    this.animatedElements.add(element)
  }

  /**
   * Reverse animation when element leaves viewport
   */
  private reverseAnimation(element: Element): void {
    element.classList.remove('visible')
  }

  /**
   * Disconnect the observer
   */
  disconnect(): void {
    if (this.observer) {
      this.observer.disconnect()
      this.observer = null
    }
    this.animatedElements.clear()
  }
}

/**
 * Initialize scroll animations for common sections
 */
export function initializeScrollAnimations(): void {
  if (typeof window === 'undefined') return

  // Hero section animations
  const heroObserver = new AnimationObserver({
    threshold: 0.1,
    rootMargin: '0px',
    once: true
  })
  heroObserver.observeElements('.hero-animate')

  // Section animations with stagger
  const sectionObserver = new AnimationObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
    staggerDelay: 100,
    once: true
  })
  sectionObserver.observeElements('.section-animate')

  // Feature cards with specific animation
  const featureObserver = new AnimationObserver({
    threshold: 0.1,
    staggerDelay: 150,
    once: true
  })
  featureObserver.observeElements('.feature-card')

  // Company logos
  const logoObserver = new AnimationObserver({
    threshold: 0.2,
    staggerDelay: 50,
    once: true
  })
  logoObserver.observeElements('.company-logo')

  // Stats and numbers
  const statsObserver = new AnimationObserver({
    threshold: 0.5,
    once: true
  })
  statsObserver.observeElements('.stat-animate')
}

/**
 * Animate numbers counting up
 */
export function animateNumber(
  element: Element,
  target: number,
  duration: number = 1000
): void {
  if (typeof window === 'undefined') return

  const start = 0
  const increment = target / (duration / 16) // 60fps
  let current = start

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }
    
    if (element instanceof HTMLElement) {
      element.textContent = Math.floor(current).toLocaleString()
    }
  }, 16)
}

/**
 * Create a staggered animation for grid items
 */
export function createStaggeredAnimation(
  selector: string,
  animationClass: string = 'animate-slide-up-fade',
  staggerDelay: number = 100
): void {
  if (typeof window === 'undefined') return

  const elements = document.querySelectorAll(selector)
  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add(animationClass)
    }, index * staggerDelay)
  })
}

/**
 * Parallax scroll effect
 */
export function createParallaxEffect(selector: string, speed: number = 0.5): void {
  if (typeof window === 'undefined') return

  const elements = document.querySelectorAll(selector)
  
  const handleScroll = () => {
    const scrolled = window.pageYOffset
    
    elements.forEach((element) => {
      if (element instanceof HTMLElement) {
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top + scrolled
        const elementHeight = rect.height
        
        // Only apply parallax if element is in viewport
        if (elementTop < scrolled + window.innerHeight && 
            elementTop + elementHeight > scrolled) {
          const yPos = -(scrolled - elementTop) * speed
          element.style.transform = `translateY(${yPos}px)`
        }
      }
    })
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
}

/**
 * Lazy load images with fade-in animation
 */
export function lazyLoadImages(selector: string = 'img[data-src]'): void {
  if (typeof window === 'undefined') return

  const imageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          const src = img.dataset.src
          
          if (src) {
            img.src = src
            img.classList.add('animate-fade-in')
            img.removeAttribute('data-src')
            imageObserver.unobserve(img)
          }
        }
      })
    },
    {
      rootMargin: '50px'
    }
  )

  document.querySelectorAll(selector).forEach((img) => {
    imageObserver.observe(img)
  })
}

/**
 * Initialize all animations on page load
 */
export function initAnimations(): void {
  if (typeof window === 'undefined') return

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initializeScrollAnimations()
      lazyLoadImages()
    })
  } else {
    initializeScrollAnimations()
    lazyLoadImages()
  }

  // Cleanup on page unload
  window.addEventListener('beforeunload', () => {
    // Clean up any ongoing animations
  })
}

// Export default initialization function
export default initAnimations
