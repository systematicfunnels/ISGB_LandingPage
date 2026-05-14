import Image from 'next/image';
import { Button } from '@components/ui/Button';
import { CAMPUS_HIGHLIGHTS, CAMPUS_IMAGES } from '@lib/constants';

export default function Legacy() {
  return (
    <section className="section-shell pt-4 bg-[#fbf7ef]">
      <div className="container-custom">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <article className="overflow-hidden rounded-[2.7rem] border border-[#e5dac9] bg-white shadow-[0_28px_80px_-46px_rgba(15,23,42,0.18)]">
            <div className="grid gap-0 lg:grid-cols-[0.52fr_0.48fr]">
              <div className="p-6 md:p-7 lg:p-8">
                <p className="section-kicker mb-0">School Legacy</p>
                <h2 className="mt-4 max-w-[11ch] font-display text-[clamp(2.3rem,4.8vw,4.1rem)] font-semibold leading-[0.96] text-slate-950">
                  A campus environment shaped by continuity, care, and steady ambition.
                </h2>
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-700 sm:text-base">
                  The closing sections now move away from stacked boxes and toward a broader
                  editorial finish: one stronger story surface, clearer campus personality, and a
                  smoother path into admissions.
                </p>

                <div className="mt-7 space-y-5">
                  {CAMPUS_HIGHLIGHTS.map((highlight: { title: string; description: string }, index: number) => (
                    <div
                      key={highlight.title}
                      className="border-t border-[#dfd3c1] pt-5 first:border-t-0 first:pt-0"
                    >
                      <div className="flex items-start gap-4">
                        <p className="pt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-700">
                          {String(index + 1).padStart(2, '0')}
                        </p>
                        <div>
                          <p className="text-lg font-semibold text-slate-950">{highlight.title}</p>
                          <p className="mt-2 text-sm leading-6 text-slate-700">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7">
                  <Button href="#apply" variant="cta">
                    Start Your Journey
                  </Button>
                </div>
              </div>

              <div className="grid gap-0 border-t border-[#e0d4c4] lg:border-l lg:border-t-0">
                <div className="relative min-h-[18rem] overflow-hidden lg:min-h-[26rem]">
                  <Image
                    src={CAMPUS_IMAGES.outdoorLeadershipDiscussion}
                    alt="IGSB students in a leadership discussion"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid gap-0 border-t border-[#e0d4c4] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="relative min-h-[12rem] overflow-hidden border-b border-[#e0d4c4] sm:border-b-0 sm:border-r lg:border-b lg:border-r-0 xl:border-b-0 xl:border-r">
                    <Image
                      src={CAMPUS_IMAGES.hallwayTeamWalk}
                      alt="IGSB students walking together"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center bg-[#123445] p-6 text-white">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d7e2db]">
                        Community
                      </p>
                      <p className="mt-3 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-semibold leading-tight">
                        Learning with people who keep growth visible and shared.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
