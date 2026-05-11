import Image from 'next/image'
import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '@lib/constants'

export default function SuccessStories() {
  return (
    <section className="section-shell">
      <div className="container-custom">
        <div className="mb-7 max-w-3xl">
          <p className="section-kicker reveal-up">Student Success Stories</p>
          <h2 className="section-title reveal-up reveal-delay-1">
            Real alumni voices that reflect learning, support, and career growth at IGSB.
          </h2>
          <p className="reveal-up reveal-delay-2 mt-5 text-lg leading-8 text-slate-600">
            These stories are drawn from real student experiences and highlight how academic guidance, industry exposure, and placement support shape outcomes at IGSB.
          </p>
        </div>

        <div className="story-marquee reveal-up reveal-delay-3">
          <div className="story-marquee-track pb-2">
            {[false, true].map((isCopy) => (
              <div
                key={isCopy ? 'copy' : 'primary'}
                aria-hidden={isCopy}
                className={isCopy ? 'story-marquee-set story-marquee-copy' : 'story-marquee-set'}
              >
                {TESTIMONIALS.map((testimonial) => (
                  <article
                    key={`${testimonial.name}-${isCopy ? 'copy' : 'main'}`}
                    className="story-card spotlight-card hover-panel editorial-shell mesh-surface h-full shrink-0 snap-start overflow-hidden p-2.5 sm:p-3"
                  >
                    <div className="relative overflow-hidden rounded-[24px]">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={900}
                        height={1100}
                        className={`h-[190px] w-full object-cover sm:h-[205px] md:h-[215px] lg:h-[225px] ${
                          testimonial.name === 'Nikita Dalvi' ? 'object-[center_10%]' : 'object-[center_18%]'
                        }`}
                      />
                    </div>

                    <div className="story-card-body p-3.5 sm:p-4">
                      <div className="mb-3 inline-flex rounded-full bg-primary-50 p-2.5 text-primary-700 md:mb-4 md:p-3">
                        <Quote className="h-4 w-4" />
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight text-slate-950 md:text-xl">
                        {testimonial.name}
                      </h3>
                      <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 md:text-xs md:tracking-[0.18em]">
                        {testimonial.batch}
                      </p>
                      <p className="story-card-quote mt-3 text-sm leading-6 text-slate-600 md:leading-6">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <div className="story-card-highlight-wrap rounded-[20px] bg-white/85 p-3.5 shadow-sm">
                        <p className="grid-label">Highlight</p>
                        <p className="story-card-highlight mt-2 text-sm leading-6 text-slate-700">
                          {testimonial.outcome}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
