import About from '@components/sections/About'
import Companies from '@components/sections/Companies'
import CTA from '@components/sections/CTA'
import Footer from '@components/Footer'
import Hero from '@components/sections/Hero'
import Legacy from '@components/sections/Legacy'
import Learning from '@components/sections/Learning'
import Placements from '@components/sections/Placements'
import Programme from '@components/sections/Programme'
import RevealObserver from '@components/RevealObserver'
import StickyMobileBar from '@components/StickyMobileBar'
import SuccessStories from '@components/sections/SuccessStories'
import WhyChoose from '@components/sections/WhyChoose'

export default function Home() {
  return (
    <main className="pb-24 md:pb-0">
      <RevealObserver />
      <Hero />
      <About />
      <WhyChoose />
      <Programme />
      <Learning />
      <Placements />
      <Companies />
      <SuccessStories />
      <Legacy />
      <CTA />
      <Footer />
      <StickyMobileBar />
    </main>
  )
}
