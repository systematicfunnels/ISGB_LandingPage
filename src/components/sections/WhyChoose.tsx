import Image from 'next/image';
import { Button } from '@components/ui/Button';
import { CAMPUS_IMAGES } from '@lib/constants';

const focusAreas = [
  {
    step: '01',
    title: 'Applied learning that stays visible',
    description: 'Case-led sessions, presentations, and projects keep business learning active.',
  },
  {
    step: '02',
    title: 'A campus culture that feels close',
    description: 'Students build confidence in a supportive, collaborative MBA environment.',
  },
  {
    step: '03',
    title: 'Industry context throughout the journey',
    description: 'Career preparation stays connected to academic growth instead of appearing late.',
  },
  {
    step: '04',
    title: 'Professional growth with personal guidance',
    description: 'Faculty support, peer learning, and reflection help students grow with clarity.',
  },
];

export default function WhyChoose() {
  return (
    <section className="section-shell pt-8">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div>
            <p className="section-kicker">The IGSB Experience</p>
            <h2 className="max-w-[11ch] font-display text-[clamp(2.35rem,4.8vw,4.2rem)] font-semibold leading-[0.97] text-slate-950">
              One stronger picture of campus life, not a grid of equal features.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              This section now gives one visual moment clear dominance, then supports it with the
              four experience themes that matter most.
            </p>

            <article className="mt-7 overflow-hidden rounded-[2.6rem] border border-[#e7ddcf] bg-white shadow-[0_26px_80px_-48px_rgba(15,23,42,0.15)]">
              <div className="relative h-[20rem] overflow-hidden sm:h-[24rem] lg:h-[29rem]">
                <Image
                  src={CAMPUS_IMAGES.groupPortrait}
                  alt="IGSB students in a collaborative group"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid gap-5 p-6 md:grid-cols-[0.42fr_0.58fr] md:p-7">
                <div>
                  <p className="grid-label">Student Life</p>
                  <p className="mt-3 font-display text-[clamp(1.9rem,3.6vw,2.95rem)] font-semibold leading-tight text-slate-950">
                    More guided, more connected, and more visible from day one.
                  </p>
                </div>
                <div className="text-sm leading-7 text-slate-600 sm:text-base">
                  Students are not left to assemble the MBA experience on their own. The campus
                  environment keeps collaboration, support, and career preparation close to daily
                  learning.
                </div>
              </div>
            </article>
          </div>

          <div className="lg:pt-16">
            <article className="overflow-hidden rounded-[2.3rem] border border-[#e7ddcf] bg-[#f3ecdf] p-5 shadow-[0_22px_64px_-44px_rgba(15,23,42,0.14)] md:p-6">
              <div className="relative h-[14rem] overflow-hidden rounded-[1.7rem] sm:h-[17rem]">
                <Image
                  src={CAMPUS_IMAGES.computerLabSession}
                  alt="IGSB students in a computer lab"
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            <div className="mt-5 space-y-4">
              {focusAreas.map((item) => (
                <article
                  key={item.step}
                  className="rounded-[1.9rem] border border-[#e7ddcf] bg-white px-5 py-5 shadow-[0_18px_48px_-38px_rgba(15,23,42,0.12)]"
                >
                  <div className="flex items-start gap-4">
                    <p className="pt-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-700">
                      {item.step}
                    </p>
                    <div>
                      <p className="text-lg font-semibold text-slate-950">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-7">
              <Button href="#stories" variant="cta">
                See Student Stories
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
