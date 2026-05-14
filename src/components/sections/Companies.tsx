'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { RECRUITER_LOGOS } from '@lib/constants';

export default function Companies() {
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...RECRUITER_LOGOS, ...RECRUITER_LOGOS];

  return (
    <section className="py-16 md:py-24">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-[3rem] border border-white/60 bg-white px-6 py-10 shadow-2xl shadow-slate-200/50 backdrop-blur-sm sm:px-10 md:py-14"
        >
          <div className="mb-12 flex flex-col gap-4 items-center text-center">
            <div className="max-w-3xl">
              <p className="inline-flex rounded-full bg-primary-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-primary-700">
                OUR GRADUATES WORK AT
              </p>
            </div>
          </div>

          <div className="relative flex items-center gap-4">
            {/* Marquee Container */}
            <div className="relative overflow-hidden w-full">
              <div className="flex gap-12 pb-2">
                <motion.div
                  className="flex gap-12 items-center"
                  animate={{ x: ['0%', '-50%'] }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: 'loop',
                      duration: 25,
                      ease: 'linear',
                    },
                  }}
                >
                  {duplicatedLogos.map((logo, index) => (
                    <div
                      key={`${logo.name}-${index}`}
                      className="flex shrink-0 items-center justify-center px-8"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={240}
                        height={100}
                        className="h-20 w-auto object-contain brightness-110 contrast-110"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
