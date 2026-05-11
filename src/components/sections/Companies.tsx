import Image from 'next/image'
import { RECRUITER_LOGOS } from '@lib/constants'

export default function Companies() {
  // Split logos into two rows for opposite direction animation
  const firstRowLogos = RECRUITER_LOGOS.slice(0, Math.ceil(RECRUITER_LOGOS.length / 2))
  const secondRowLogos = RECRUITER_LOGOS.slice(Math.ceil(RECRUITER_LOGOS.length / 2))

  // Duplicate logos for seamless loop
  const firstRowDuplicated = [...firstRowLogos, ...firstRowLogos]
  const secondRowDuplicated = [...secondRowLogos, ...secondRowLogos]

  return (
    <section id="recruiters" className="py-10 md:py-12">
      <div className="container-custom">
        <div className="reveal-up editorial-shell dark-mesh overflow-hidden border-white/10 px-5 py-6 text-white sm:px-6 md:px-8 md:py-7">
          <div className="mb-6 max-w-3xl">
            <p className="section-kicker !border-white/10 !bg-white/10 !text-teal-200">
              Trusted by Industry, Defined by Outcomes
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              Recruiter network across finance, consulting, technology, and industry.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              Featured recruiters shown here are part of a wider network of 650+ hiring partners across consulting,
              banking, FMCG, automotive, insurance, and technology.
            </p>
          </div>

          {/* First Row - Moving Left */}
          <div className="company-marquee mb-5">
            <div className="company-marquee-row">
              {firstRowDuplicated.map((logo, index) => (
                <div key={`${logo.name}-first-${index}`} className="company-logo-item">
                  <Image 
                    src={logo.src} 
                    alt={logo.name} 
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Moving Right */}
          <div className="company-marquee">
            <div className="company-marquee-row-reverse">
              {secondRowDuplicated.map((logo, index) => (
                <div key={`${logo.name}-second-${index}`} className="company-logo-item">
                  <Image 
                    src={logo.src} 
                    alt={logo.name} 
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
