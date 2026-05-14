import Image from 'next/image'
import { Button } from '@components/ui/Button'
import { CAMPUS_IMAGES, SITE_CONFIG } from '@lib/constants'

export default function LegacyCTA() {
  return (
    <section className="relative w-full bg-white py-24 sm:py-32" id="legacy">
      <div className="mx-auto max-w-[1460px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#1c4f80] via-[#153d62] to-[#1295a5] px-8 py-16 text-white shadow-[0_40px_80px_-15px_rgba(21,61,98,0.3)] sm:px-20 sm:py-24">
          {/* Background Pattern - High Tech Grid */}
          <div className="absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:40px_40px]" />

          {/* Ambient Lighting */}
          <div className="absolute right-0 top-0 h-[50%] w-[50%] translate-x-1/3 -translate-y-1/3 rounded-full bg-white/10 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-[40%] w-[40%] -translate-x-1/3 translate-y-1/3 rounded-full bg-[#7ee0c6]/20 blur-[100px]" />

          <div className="relative z-10 grid gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            {/* Content Column */}
            <div className="flex flex-col items-start text-left">
              <div className="mb-10">
                <div className="relative h-12 w-40">
                  <Image
                    src={SITE_CONFIG.logo}
                    alt="IGSB"
                    fill
                    className="object-contain object-left brightness-0 invert"
                  />
                </div>
              </div>

              <h2 className="mb-10 font-display text-[clamp(2.2rem,5vw,4.2rem)] font-bold leading-[1.05] tracking-tight text-white">
                Take the next step toward building <br className="hidden sm:block" />
                a <span className="text-[#7ee0c6] italic">successful</span> management career
              </h2>

              <Button
                variant="cta"
                href={SITE_CONFIG.links.admissions}
                className="!h-16 !px-12 !text-xl"
              >
                Start Your MBA Journey Today
              </Button>
            </div>

            {/* Marketing Cutout Column */}
            <div className="relative h-[450px] w-full lg:h-[550px]">
              <div className="absolute bottom-0 right-0 h-[500px] w-[450px] lg:h-[700px] lg:w-[600px]">
                <Image
                  src={CAMPUS_IMAGES.boyStudentCutout}
                  alt="Successful Graduate"
                  fill
                  className="object-contain object-bottom drop-shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
