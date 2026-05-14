'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence, PanInfo } from 'framer-motion'
import { Book, Clock, GraduationCap, MapPin } from 'lucide-react'

import { SectionShell } from '@components/ui/LandingUI'
import { WHAT_SETS_YOU_APART_DATA } from '@lib/constants'

interface WhatSetsYouApartItem {
  title: string
  description: string
  image: string
  number: string
  active?: boolean
}

export default function WhatSetsYouApart() {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(WHAT_SETS_YOU_APART_DATA.length / 2)
  )

  const [isHovered, setIsHovered] = useState(false)

  const [cardOffset, setCardOffset] = useState(250)

  const containerRef = useRef<HTMLDivElement>(null)

  // ================================
  // RESPONSIVE CARD OFFSET
  // ================================
  useEffect(() => {
    const updateOffset = () => {
      setCardOffset(window.innerWidth < 640 ? 150 : 250)
    }

    updateOffset()

    window.addEventListener('resize', updateOffset)

    return () => {
      window.removeEventListener('resize', updateOffset)
    }
  }, [])

  // ================================
  // AUTO SCROLL
  // ================================
  useEffect(() => {
    if (isHovered) return

    const id = setInterval(() => {
      setActiveIndex(
        (prev) => (prev + 1) % WHAT_SETS_YOU_APART_DATA.length
      )
    }, 4000)

    return () => clearInterval(id)
  }, [isHovered])

  // ================================
  // DRAG HANDLER
  // ================================
  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    const threshold = 50

    if (info.offset.x < -threshold) {
      setActiveIndex(
        (prev) => (prev + 1) % WHAT_SETS_YOU_APART_DATA.length
      )
    } else if (info.offset.x > threshold) {
      setActiveIndex(
        (prev) =>
          (prev - 1 + WHAT_SETS_YOU_APART_DATA.length) %
          WHAT_SETS_YOU_APART_DATA.length
      )
    }
  }

  return (
    <section
      className="relative overflow-hidden bg-white py-16 sm:py-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(#1c4f80_1px,transparent_1px),linear-gradient(90deg,#1c4f80_1px,transparent_1px)] [background-size:40px_40px]" />

        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-10 top-20 hidden text-[#1295a5]/10 lg:block"
        >
          <Book size={120} />
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute right-10 top-40 hidden text-[#1c4f80]/10 lg:block"
        >
          <GraduationCap size={140} />
        </motion.div>
      </div>

      <SectionShell className="relative z-10">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1] tracking-[-0.04em] text-[#15253c]">
            What Sets{' '}
            <span className="relative">
              You Apart

              <svg
                className="absolute -bottom-2 left-0 w-full"
                width="100%"
                height="8"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5C20 2 40 2 60 5C80 8 100 5 100 5"
                  stroke="#1295a5"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-slate-500">
            Five qualities that define an IGSB graduate and prepare them for a
            global leadership career. Stay ahead with skills designed to enrich
            your professional journey.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mt-20 flex items-center justify-center overflow-hidden py-10">
          <motion.div
            ref={containerRef}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={{
              x:
                -(activeIndex -
                  Math.floor(WHAT_SETS_YOU_APART_DATA.length / 2)) *
                cardOffset,
            }}
            transition={{
              type: 'spring',
              stiffness: 150,
              damping: 22,
              mass: 0.8,
            }}
            className="flex cursor-grab items-end justify-center gap-4 active:cursor-grabbing sm:gap-6 lg:gap-8"
          >
            {WHAT_SETS_YOU_APART_DATA.map(
              (item: WhatSetsYouApartItem, index: number) => {
                const isActive = index === activeIndex

                const heightClass =
                  index % 2 === 0
                    ? 'h-[200px] sm:h-[280px]'
                    : 'h-[280px] sm:h-[380px]'

                const activeHeight = 'h-[350px] sm:h-[480px]'

                return (
                  <motion.div
                    key={item.title}
                    onClick={() => setActiveIndex(index)}
                    animate={{
                      scale: isActive ? 1.15 : 0.85,
                      opacity: isActive ? 1 : 0.35,
                      zIndex: isActive ? 30 : 10,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 180,
                      damping: 25,
                    }}
                    className={`relative flex shrink-0 flex-col items-center transition-all duration-700 ${
                      isActive
                        ? 'w-[280px] sm:w-[450px]'
                        : 'w-[120px] sm:w-[200px]'
                    }`}
                  >
                    <div
                      className={`relative w-full overflow-hidden rounded-[1.5rem] shadow-2xl transition-all duration-700 sm:rounded-[2.5rem] ${
                        isActive ? activeHeight : heightClass
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="pointer-events-none object-cover"
                        priority={isActive}
                      />

                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{
                              duration: 0.5,
                              ease: 'easeOut',
                            }}
                            className="absolute inset-x-4 bottom-4 z-30 sm:inset-x-6 sm:bottom-6"
                          >
                            <div className="rounded-2xl bg-white p-4 shadow-2xl sm:p-6">
                              <div className="flex items-center gap-3 text-[#1295a5]">
                                <MapPin className="h-3.5 w-3.5" />

                                <span className="text-[10px] font-bold uppercase tracking-widest">
                                  Pune, IGSB Campus
                                </span>

                                <div className="ml-auto flex items-center gap-2 text-slate-400">
                                  <Clock className="h-3.5 w-3.5" />

                                  <span className="text-[10px] font-bold uppercase tracking-widest">
                                    Ongoing
                                  </span>
                                </div>
                              </div>

                              <h4 className="mt-3 font-display text-lg font-bold leading-tight text-[#15253c] sm:text-xl">
                                {item.title}
                              </h4>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )
              }
            )}
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative mt-16 px-4">
          <div className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 border-b border-dashed border-slate-200" />

          <div className="relative mx-auto flex max-w-4xl items-center justify-between">
            {/* Active Indicator */}
            <motion.div
              className="absolute top-1/2 z-0 h-[2px] -translate-y-1/2 origin-left bg-[#1295a5]"
              animate={{
                left: `${
                  (activeIndex /
                    (WHAT_SETS_YOU_APART_DATA.length - 1)) *
                  100
                }%`,
                width: '2px',
              }}
              transition={{
                type: 'spring',
                stiffness: 150,
                damping: 20,
              }}
            />

            {WHAT_SETS_YOU_APART_DATA.map((_, index: number) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="group relative flex flex-col items-center"
                aria-label={`Go to slide ${index + 1}`}
              >
                <motion.div
                  animate={{
                    scale: index === activeIndex ? 1.5 : 1,
                    backgroundColor:
                      index === activeIndex
                        ? '#1295a5'
                        : '#cbd5e1',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                  }}
                  className={`relative z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full transition-colors duration-500 ${
                    index === activeIndex
                      ? 'ring-4 ring-[#1295a5]/20 shadow-[0_0_25px_rgba(18,149,165,0.8)]'
                      : 'hover:bg-slate-400'
                  }`}
                />

                {index === activeIndex && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute -inset-2 rounded-full border border-[#1295a5]/30"
                    transition={{
                      type: 'spring',
                      stiffness: 150,
                      damping: 20,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </SectionShell>
    </section>
  )
}
