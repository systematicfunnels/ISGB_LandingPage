import Image from 'next/image';
import { CAMPUS_IMAGES } from '@lib/constants';

const values = [
  {
    title: 'Curiosity',
    description: 'Students ask stronger questions and stay open to deeper business understanding.',
  },
  {
    title: 'Integrity',
    description: 'Professional credibility begins with consistency, responsibility, and judgment.',
  },
  {
    title: 'Collaboration',
    description: 'Peer learning and teamwork remain central to the IGSB environment.',
  },
  {
    title: 'Leadership',
    description: 'Confidence grows through participation, reflection, and real responsibility.',
  },
  {
    title: 'Career Focus',
    description: 'Academic effort stays linked to employability and long-term direction.',
  },
];

export default function Values() {
  return (
    <section className="section-shell pt-8">
      <div className="container-custom">
        <div className="mb-10 max-w-4xl">
          <p className="section-kicker">Here&apos;s What Makes IGSB, IGSB</p>
          <h2 className="section-title">
            A business-school culture where students are invited to become capable, thoughtful, and
            well-rounded professionals.
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-5">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-[2rem] border border-[#e7ddcf] bg-white p-5 shadow-[0_18px_48px_-38px_rgba(15,23,42,0.12)]"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f3ecdf] font-display text-lg font-semibold text-primary-700">
                {value.title.charAt(0)}
              </div>
              <h3 className="mt-4 font-display text-[1.8rem] font-semibold leading-tight text-slate-950">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{value.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <article className="overflow-hidden rounded-[2.6rem] border border-[#e7ddcf] bg-white shadow-[0_26px_76px_-46px_rgba(15,23,42,0.14)]">
            <div className="grid gap-0 md:grid-cols-[0.45fr_0.55fr]">
              <div className="relative min-h-[19rem] overflow-hidden">
                <Image
                  src={CAMPUS_IMAGES.femaleStudentPortrait}
                  alt="IGSB student portrait"
                  fill
                  className="object-cover object-[center_12%]"
                />
              </div>
              <div className="flex items-center bg-[#123445] p-6 text-white md:p-7">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d7e2db]">
                    Student Perspective
                  </p>
                  <p className="mt-4 font-display text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-tight">
                    Anyone stepping into IGSB should feel that growth is supported, shared, and
                    genuinely possible.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <div className="rounded-[2.3rem] bg-[#f3ecdf] p-6 shadow-[0_22px_60px_-42px_rgba(15,23,42,0.12)] md:p-7">
            <p className="grid-label">Belonging</p>
            <p className="mt-3 font-display text-[clamp(1.9rem,3.6vw,2.9rem)] font-semibold leading-tight text-slate-950">
              Students learn best when they can ask, contribute, and grow without hesitation.
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
              The strongest school environments are not only academically demanding. They also make
              it easier for students to speak up, build relationships, and participate with
              confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
