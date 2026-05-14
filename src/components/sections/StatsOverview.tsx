import { BriefcaseBusiness, GraduationCap, Handshake, Users } from 'lucide-react';
import { HERO_STATS, PROGRAMME_DETAILS } from '@lib/constants';

const overviewItems = [
  {
    label: 'Career outcomes',
    value: HERO_STATS[0].value,
    description: 'highest package highlighting the ambition built into the IGSB MBA journey',
    icon: BriefcaseBusiness,
  },
  {
    label: 'Recruiter network',
    value: HERO_STATS[2].value,
    description: 'industry connections supporting stronger placement visibility and access',
    icon: Handshake,
  },
  {
    label: 'Programme format',
    value: `${PROGRAMME_DETAILS.duration} / ${PROGRAMME_DETAILS.format}`,
    description: 'a full-time MBA built as one guided academic and professional progression',
    icon: GraduationCap,
  },
  {
    label: 'Learning culture',
    value: 'Collaborative',
    description: 'a close student community where peer learning and faculty guidance stay visible',
    icon: Users,
  },
];

export default function StatsOverview() {
  return (
    <section className="section-shell py-12 md:py-16">
      <div className="container-custom">
        <div className="rounded-[2.4rem] border border-[#e7ddcf] bg-white px-5 py-7 shadow-[0_20px_56px_-42px_rgba(15,23,42,0.12)] sm:px-6 md:px-8">
          <div className="mb-6 max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-700">
              An IGSB View
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[0.98] text-slate-950">
              Quick proof points that anchor the story before the page opens wider.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {overviewItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.label}
                  className="rounded-[1.8rem] bg-[#fbf7ef] px-5 py-5 shadow-[0_16px_44px_-38px_rgba(15,23,42,0.08)]"
                >
                  <Icon className="h-6 w-6 text-primary-700" />
                  <p className="mt-4 font-display text-[1.9rem] font-semibold leading-none text-slate-950">
                    {item.value}
                  </p>
                  <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-700">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
