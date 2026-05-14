'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface LogoCarouselProps {
  logos: { name: string; src: string }[]
  speed?: number
  className?: string
}

export function LogoCarousel({ logos, speed = 40, className = '' }: LogoCarouselProps) {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos, ...logos]

  return (
    <div className={`relative flex overflow-hidden ${className}`}>
      <motion.div
        className="flex shrink-0 items-center gap-12 px-6"
        animate={{
          x: [0, -100 * logos.length], // Estimate width based on number of logos
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex h-24 w-52 shrink-0 items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={200}
              height={80}
              className="max-h-16 w-auto object-contain brightness-105 contrast-105"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
