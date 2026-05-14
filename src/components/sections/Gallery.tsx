'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const galleryItems = [
  { title: 'Research', image: '/IGSB_ASSETS/Copy of DSC09525.jpg' },
  { title: 'Learning', image: '/IGSB_ASSETS/Copy of DSC09535.jpg' },
  { title: 'Events', image: '/IGSB_ASSETS/Copy of DSC09570.jpg' },
  { title: 'Achievements', image: '/IGSB_ASSETS/Copy of DSC09661 (1).jpg' },
  { title: 'Graduated', image: '/IGSB_ASSETS/Copy of DSC09706.jpg' },
  { title: 'Graduation', image: '/IGSB_ASSETS/Copy of DSC09709.jpg' },
  { title: 'Campus Life', image: '/IGSB_ASSETS/Copy of DSC09766.jpg' },
  { title: 'Activities', image: '/IGSB_ASSETS/Copy of DSC09883.jpg' },
];

export default function Gallery() {
  // Duplicate items for seamless infinite scroll
  const duplicatedItems = [...galleryItems, ...galleryItems, ...galleryItems];

  return (
    <section className="relative overflow-hidden bg-[#1c4f80] py-16 sm:py-24">
      {/* Decorative background elements - More Visual */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[-10%] h-[50%] w-[50%] rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-cyan-400/5 blur-[120px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="relative z-10 mb-12 px-4 text-center text-white sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1] tracking-[-0.04em] text-white">
            Discover Our <span className="relative">
              Campus Gallery
              <svg className="absolute -bottom-2 left-0 w-full" width="100%" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0 5C20 2 40 2 60 5C80 8 100 5 100 5" stroke="#1295a5" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base font-medium leading-relaxed opacity-80">
            Explore moments from campus life, academic spaces, and student experiences that reflect
            the spirit, culture, and vibrancy of our university.
          </p>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden py-8">
        <motion.div
          className="flex gap-6 px-4"
          animate={{
            x: [0, -2560], // 8 items * (280px width + 24px gap)
          }}
          transition={{
            duration: 60, 
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.05, 
                rotate: 0, 
                zIndex: 50,
                transition: { duration: 0.3 }
              }}
              className={`flex-shrink-0 w-[240px] sm:w-[280px] bg-white rounded-[2rem] p-4 shadow-xl transform transition-all duration-500 cursor-pointer ${
                index % 2 === 0 ? 'rotate-2 translate-y-4' : '-rotate-2 -translate-y-4'
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] mb-4 shadow-inner">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 240px, 280px"
                />
              </div>
              <div className="py-1 text-center">
                <h3 className="font-display text-xl font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Subtle bottom shadow/gradient for depth */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
    </section>
  );
}
