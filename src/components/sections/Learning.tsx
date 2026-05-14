'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@components/ui/Button';
import { CAMPUS_IMAGES, WHY_CHOOSE_FEATURES } from '@lib/constants';

const sectionDescriptions = [
  'A more relevant MBA journey begins with coursework that reflects current business realities and classroom learning that stays aligned with industry expectations.',
  'Projects, presentations, and internships help students move from theory to execution with practical exposure that strengthens confidence over time.',
  'Industry interaction is woven into the learning experience so students understand recruiter expectations, workplace context, and professional standards early.',
  'Leadership development at IGSB goes beyond personality polish by building communication, presence, and decision-making through everyday academic life.',
  'Placement preparation starts early, giving students a clearer path toward internships, recruiter readiness, and stronger career momentum before final placements.',
  'Research, cases, and experiential learning keep academic work active, helping students connect reflection, analysis, and business problem-solving more naturally.',
];

const sectionImages = [
  CAMPUS_IMAGES.labSessionGroup,
  CAMPUS_IMAGES.laptopCollaborationSession,
  CAMPUS_IMAGES.libraryResearchScene,
  CAMPUS_IMAGES.outdoorLeadershipDiscussion,
  CAMPUS_IMAGES.placementReadyGroup,
  CAMPUS_IMAGES.groupPortrait,
];

const sections = WHY_CHOOSE_FEATURES.map((title: string, index: number) => ({
  id: index + 1,
  title,
  description: sectionDescriptions[index],
  image: sectionImages[index],
}));

// Duplicate items for infinite loop effect
const duplicatedSections = [...sections, ...sections, ...sections];

export default function Learning() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>(new Array(duplicatedSections.length).fill(null));
  const isJumping = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        if (isJumping.current) return;
        
        entries.forEach((entry: IntersectionObserverEntry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            // Map duplicated index back to 0-5
            setActiveIndex(index % sections.length);
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: '-25% 0px -25% 0px',
      }
    );

    const currentRefs = sectionRefs.current;
    currentRefs.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle infinite scroll jump
  const handleScroll = () => {
    if (!scrollContainerRef.current || isJumping.current) return;

    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    const singleSetHeight = (scrollHeight / 3);

    // If scrolled past the second set (the "real" one), jump back to the start of the second set
    if (scrollTop >= singleSetHeight * 2) {
      isJumping.current = true;
      scrollContainerRef.current.scrollTop = scrollTop - singleSetHeight;
      setTimeout(() => { isJumping.current = false; }, 50);
    } 
    // If scrolled before the second set, jump forward to the end of the second set
    else if (scrollTop <= singleSetHeight - clientHeight) {
      isJumping.current = true;
      scrollContainerRef.current.scrollTop = scrollTop + singleSetHeight;
      setTimeout(() => { isJumping.current = false; }, 50);
    }
  };

  // Initialize scroll position to the middle set
  useEffect(() => {
    if (scrollContainerRef.current) {
      const { scrollHeight } = scrollContainerRef.current;
      scrollContainerRef.current.scrollTop = scrollHeight / 3;
    }
  }, []);

  const scrollToSection = (index: number) => {
    // Always scroll to the middle set (index sections.length to 2*sections.length - 1)
    const targetIndex = sections.length + index;
    sectionRefs.current[targetIndex]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <section id="benefits" className="relative bg-[#fbf7ef] lg:h-screen lg:overflow-hidden">
      <div className="mx-auto flex h-full max-w-[1680px] flex-col lg:flex-row">
        {/* Left Side: Sticky Content */}
        <div className="z-20 flex w-full flex-col px-6 py-12 sm:px-10 lg:sticky lg:top-0 lg:h-full lg:w-[42%] lg:justify-center lg:px-14 xl:px-20">
          <div className="mb-8 lg:mb-12">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold tracking-wide text-[#b86b3f]"
            >
              Learning Beyond Classrooms
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-tight text-[#005c2a]"
            >
              Our learning approach prepares students for <span className="text-[#b86b3f]">real business challenges</span>.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg"
            >
              Our learning approach prepares students for real business challenges and professional responsibilities through industry-integrated modules.
            </motion.p>
          </div>

          <div className="relative mt-4 lg:mt-8">
            {/* Vertical Progress Line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-200" />
            
            <div className="space-y-4 lg:space-y-6">
              {sections.map((item: { id: number; title: string }, index: number) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(index)}
                  className="group relative flex items-center gap-6 text-left outline-none transition-all duration-300"
                  type="button"
                  suppressHydrationWarning
                >
                  <div className="relative z-10 flex h-4 w-4 shrink-0 items-center justify-center">
                    <motion.div
                      animate={{
                        scale: activeIndex === index ? 1.4 : 1,
                        backgroundColor: activeIndex === index ? '#fbf7ef' : '#e2e8f0',
                        borderColor: activeIndex === index ? '#f6b61f' : '#e2e8f0',
                        borderWidth: activeIndex === index ? '2px' : '0px',
                      }}
                      className="h-2 w-2 rounded-full transition-all duration-300"
                    />
                  </div>

                  <span
                    className={`text-sm font-medium transition-all duration-300 lg:text-base ${
                      activeIndex === index ? 'text-[#005c2a] font-bold translate-x-1' : 'text-slate-500'
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="mt-10 flex gap-3">
              <button
                onClick={() => scrollToSection((activeIndex - 1 + sections.length) % sections.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all hover:border-primary-200 hover:text-primary-700"
                aria-label="Previous section"
              >
                <ChevronUp className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollToSection((activeIndex + 1) % sections.length)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition-all hover:border-primary-200 hover:text-primary-700"
                aria-label="Next section"
              >
                <ChevronDown className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Vertical Scrollable Carousel */}
        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="relative w-full overflow-y-auto hide-scrollbar lg:h-full lg:w-[58%]"
        >
          <div className="flex flex-col gap-12 py-20 lg:gap-[50vh] lg:py-[40vh]">
            {duplicatedSections.map((item: { id: number; title: string; description: string; image: string }, index: number) => (
              <div
                key={`${item.id}-${index}`}
                ref={(el: HTMLDivElement | null) => {
                  sectionRefs.current[index] = el;
                }}
                data-index={index}
                className="relative flex min-h-fit items-center justify-center px-6 lg:min-h-[60vh] lg:px-16"
              >
                <div className="relative w-full max-w-xl pb-24 lg:pb-0">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] shadow-2xl lg:aspect-[16/11]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority={index >= sections.length && index < sections.length * 2}
                    />
                  </div>

                  {/* Floating Info Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="absolute -right-2 bottom-4 z-10 w-[94%] rounded-[1.5rem] bg-white p-6 shadow-2xl sm:p-7 lg:-right-12 lg:-bottom-16 lg:w-[80%] lg:p-8"
                  >
                    <h3 className="font-display text-base font-bold leading-tight text-[#005c2a] sm:text-lg lg:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-relaxed text-slate-500 sm:mt-3 sm:text-xs lg:text-sm">
                      {item.description}
                    </p>
                    <div className="mt-4 sm:mt-6">
                      <Button
                        variant="cta"
                        className="!h-8 !rounded-full !px-5 !py-0 !text-[10px]"
                      >
                        Learn More
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      ` }} />
    </section>
  );
}
