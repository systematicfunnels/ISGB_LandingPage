'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SwipeCarousel } from '@components/ui/SwipeCarousel';
import { TESTIMONIALS } from '@lib/constants';

export default function SuccessStories() {
  return (
    <section className="w-full bg-[#fbf7ef] py-16 lg:py-24">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-kicker"
          >
            Alumni Outcomes
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1] tracking-tight text-slate-950"
          >
            Student <span className="text-primary-700 italic">Success Stories</span>
          </motion.h2>
        </div>
        <div className="mx-auto grid min-h-[520px] w-full grid-cols-1 overflow-hidden rounded-[3rem] bg-primary-700 text-white shadow-2xl lg:min-h-[620px] lg:grid-cols-2">
          <div className="relative flex flex-col justify-center bg-primary-700">
            <SwipeCarousel
              className="h-full"
              autoPlay
              interval={7000}
              showArrows={false}
              showDots
              infinite
              dotContainerClassName="bottom-8 left-8 translate-x-0 gap-3 lg:bottom-12 lg:left-[70px]"
              dotClassName="h-[4px] w-[30px] rounded-full bg-white/20 transition-all"
              activeDotClassName="!h-[4px] !w-[45px] !bg-accent-500"
            >
              {TESTIMONIALS.map((story) => (
                <div
                  key={story.name}
                  className="flex h-full min-w-0 flex-col px-8 py-12 pb-24 sm:px-12 md:px-16 lg:px-[70px] lg:py-[60px] lg:pb-[100px]"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-accent-500 backdrop-blur-sm lg:h-20 lg:w-20"
                  >
                    <Quote className="h-8 w-8 fill-current lg:h-10 lg:w-10" />
                  </motion.div>

                  <h2 className="mt-8 font-display text-[24px] font-bold leading-[1.1] tracking-tight sm:text-[32px] lg:text-[42px] xl:text-[52px]">
                    {story.quote}
                  </h2>

                  <div className="mt-10 border-t border-white/10 pt-8">
                    <div className="flex items-center gap-6">
                      <div className="relative h-16 w-16 overflow-hidden rounded-2xl border-2 border-white/20 sm:h-20 sm:w-20 lg:h-24 lg:w-24">
                        <Image
                          src={story.image}
                          alt={story.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <p className="text-lg font-bold lg:text-2xl">
                          {story.name}
                        </p>
                        <p className="text-sm font-medium text-white/60 lg:text-base">
                          Batch {story.batch}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </SwipeCarousel>
          </div>

          <div className="relative min-h-[400px] overflow-hidden lg:min-h-full bg-gradient-to-br from-primary-700 to-primary-800">
            {/* Decorative background circles */}
            <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
              <circle cx="20%" cy="15%" r="150" fill="rgba(255,255,255,0.05)" />
              <circle cx="80%" cy="75%" r="200" fill="rgba(255,255,255,0.03)" />
              <circle cx="90%" cy="20%" r="100" fill="rgba(255,255,255,0.04)" />
              <circle cx="10%" cy="80%" r="120" fill="rgba(255,255,255,0.03)" />
            </svg>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* Centered student cutout */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[450px] lg:w-[450px]">
                <Image
                  src="/Herobg.png"
                  alt="Featured Student"
                  fill
                  className="object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
                  priority
                />
              </div>
            </div>
            
            <div className="absolute bottom-8 left-8 text-left lg:bottom-12 lg:left-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-500">
                Student Success Stories
              </p>
              <h3 className="mt-2 text-xl font-bold text-white">
                Real Journeys. Real Results.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

