import Navbar from '@components/Navbar'
import Hero from '@components/sections/Hero'
import AdmissionSupport from '@components/sections/AdmissionSupport'
import Excellence from '@components/sections/Excellence'
import UniversityPrograms from '@components/sections/UniversityPrograms'
import WhatSetsYouApart from '@components/sections/WhatSetsYouApart'
import PlacementOutcomes from '@components/sections/PlacementOutcomes'
import Testimonials from '@components/sections/Testimonials'
import Gallery from '@components/sections/Gallery'
import LegacyCTA from '@components/sections/LegacyCTA'
import MainFooter from '@components/MainFooter'
import { LogoCarousel } from '@components/ui/LogoCarousel'
import { RECRUITER_LOGOS } from '@lib/constants'
import { SectionShell } from '@components/ui/LandingUI'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950 selection:bg-[#1295a5]/20 selection:text-[#153d62]">
      <Navbar />
      {/* Page-wide decorative background */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.02]">
        <div className="absolute top-0 left-0 w-full h-full [background-image:radial-gradient(#1c4f80_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      {/* HERO SECTION */}
      <Hero />

      {/* TRUST BAR / LOGO CAROUSEL */}
      <section className="border-y border-slate-100 bg-slate-50/50 py-10">
        <SectionShell>
          <p className="mb-8 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
            Our Graduates Work At
          </p>
          <LogoCarousel logos={RECRUITER_LOGOS} speed={60} />
        </SectionShell>
      </section>

      {/* QUICK ENQUIRY FORM */}
      <AdmissionSupport />

      {/* EXCELLENCE SECTION */}
      <Excellence />

      {/* UNIVERSITY PROGRAMS SECTION */}
      <UniversityPrograms />

      {/* WHAT SETS YOU APART SECTION */}
      <WhatSetsYouApart />

      {/* PLACEMENT OUTCOMES SECTION */}
      <PlacementOutcomes />

      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* GALLERY SECTION */}
      <Gallery />

      {/* LEGACY CTA SECTION */}
      <LegacyCTA />

      {/* FOOTER */}
      <MainFooter />
    </main>
  )
}
