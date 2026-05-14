'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { CAMPUS_IMAGES } from '@lib/constants';

const contextCards = [
  {
    label: 'Local',
    title: 'A Pune campus where ideas and career goals stay close together.',
    description:
      'Students learn in a business-school environment where classrooms, peer conversations, and faculty guidance remain connected to everyday growth.',
    image: CAMPUS_IMAGES.campusFacade,
  },
  {
    label: 'Regional',
    title: 'Industry exposure that reaches beyond campus walls.',
    description:
      'Workshops, recruiter conversations, and practical assignments help students build a relationship to the business world around them.',
    image: CAMPUS_IMAGES.computerLabSession,
  },
  {
    label: 'Global',
    title: 'Business thinking shaped for wider contexts and larger ambition.',
    description:
      'Case work, cross-functional learning, and strategic thinking prepare students to understand organisations beyond one narrow role or market.',
    image: CAMPUS_IMAGES.libraryResearchScene,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function CampusJourney() {
  return (
    <section className="section-shell relative overflow-hidden bg-[#fbf7ef]">
      {/* Decorative background elements */}
      <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary-100/20 blur-3xl lg:h-[600px] lg:w-[600px]" />
      
      <div className="container-custom relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-20"
        >
          {/* First Block: Image Left, Text Right */}
          <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
            <motion.div variants={itemVariants} className="relative group">
              <div className="absolute -inset-4 rounded-[3rem] border border-primary-200/30 transition-all group-hover:inset-0" />
              <article className="relative overflow-hidden rounded-[2.7rem] border border-white/60 bg-white shadow-2xl shadow-slate-200/50">
                <div className="relative h-[24rem] overflow-hidden sm:h-[32rem]">
                  <Image
                    src={CAMPUS_IMAGES.hallwayTeamWalk}
                    alt="IGSB students walking together on campus"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                </div>
              </article>
            </motion.div>

            <motion.div variants={itemVariants} className="min-w-0 xl:pl-8">
              <p className="section-kicker">Our MBA Journey</p>
              <h2 className="max-w-[15ch] font-display text-[clamp(2.5rem,8vw,4.5rem)] font-bold leading-[0.95] text-slate-950">
                Your MBA Journey Towards Career Success Starts Here
              </h2>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                An MBA at IGSB is designed for students seeking professional growth, leadership opportunities, and long-term success in the corporate world.
              </p>
            </motion.div>
          </div>

          {/* Second Block: Text Left, Image Right */}
          <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-center">
            <motion.div variants={itemVariants} className="order-2 min-w-0 xl:order-1 xl:pr-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary-700">
                Campus Context
              </p>
              <h3 className="mt-4 max-w-[14ch] font-display text-[clamp(2rem,7vw,3.8rem)] font-bold leading-[0.98] text-slate-950">
                Students find room to grow, collaborate, and prepare with purpose.
              </h3>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                The MBA experience expands through classrooms, shared projects, mentor support, and
                exposure to industry expectations. It is not only about what students study, but
                also about how confidently they begin to carry themselves inside that process.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 relative group xl:order-2">
              <div className="absolute -inset-4 rounded-[3rem] border border-accent-200/20 transition-all group-hover:inset-0" />
              <article className="relative overflow-hidden rounded-[2.7rem] border border-white/60 bg-white shadow-2xl shadow-slate-200/50">
                <div className="relative h-[22rem] overflow-hidden sm:h-[30rem]">
                  <Image
                    src={CAMPUS_IMAGES.outdoorLeadershipDiscussion}
                    alt="IGSB students in a leadership discussion"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                </div>
              </article>
            </motion.div>
          </div>

          {/* Third Block: 3 Column Cards */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {contextCards.map((card) => (
              <motion.article
                key={card.label}
                variants={itemVariants}
                className="group overflow-hidden rounded-[2.5rem] border border-white/60 bg-white shadow-xl shadow-slate-200/40 transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-[16rem] overflow-hidden">
                  <Image 
                    src={card.image} 
                    alt={card.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
                <div className="p-8">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary-700">
                    {card.label}
                  </p>
                  <h4 className="mt-4 font-display text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
                    {card.title}
                  </h4>
                  <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">{card.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

