import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@components/ui/Button'
import { CAMPUS_IMAGES } from '@lib/constants'

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="container-custom">
        <div className="grid items-center gap-7 lg:grid-cols-[1fr_1fr] lg:gap-8">
          <div className="reveal-up relative">
            <div className="mesh-surface rounded-[36px] p-3 shadow-[0_30px_100px_-45px_rgba(15,23,42,0.4)]">
              <div className="relative overflow-hidden rounded-[28px]">
                <Image
                  src={CAMPUS_IMAGES.campusFacade}
                  alt="IGSB campus environment"
                  width={1200}
                  height={900}
                  className="h-[300px] w-full object-cover md:h-[420px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          <div>
            <p className="section-kicker reveal-up">Your MBA Journey Towards Career Success Starts Here</p>
            <h2 className="section-title reveal-up reveal-delay-1">
              An MBA at IGSB is designed for students seeking professional growth, leadership opportunities, and long-term success in the corporate world.
            </h2>
            <p className="reveal-up reveal-delay-2 mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              The programme is built to strengthen business fundamentals, leadership thinking, and corporate readiness for ambitious management careers.
            </p>

            <div className="reveal-up reveal-delay-4 mt-6 flex flex-col gap-4 sm:flex-row">
              <Button href="#curriculum" size="lg">
                View Programme
                <ArrowUpRight className="h-5 w-5" />
              </Button>
              <Button href="#apply" variant="outline" size="lg">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
