import { BriefcaseBusiness, Compass, GraduationCap } from 'lucide-react';
import { Button } from '@components/ui/Button';

const pathwayCards = [
  {
    title: 'Learn',
    description:
      'Students build stronger management foundations through guided academics, case work, and specialisation pathways.',
    icon: GraduationCap,
    href: '#curriculum',
  },
  {
    title: 'Experience',
    description:
      'Campus life, projects, and collaborative learning help students turn knowledge into confidence and participation.',
    icon: Compass,
    href: '#about',
  },
  {
    title: 'Apply',
    description:
      'Admissions should feel like the start of a more focused journey toward placement readiness and professional growth.',
    icon: BriefcaseBusiness,
    href: '#apply',
  },
];

export default function Pathways() {
  return (
    <section className="section-shell bg-[#fbf7ef]">
      <div className="container-custom">
        <div className="mb-10 max-w-4xl">
          <p className="section-kicker">Chart Your Path at IGSB</p>
          <h2 className="section-title">
            Three clear ways to understand the MBA journey from first look to next step.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {pathwayCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="rounded-[2.3rem] border border-[#e7ddcf] bg-white p-6 shadow-[0_20px_58px_-42px_rgba(15,23,42,0.12)] md:p-7"
              >
                <Icon className="h-7 w-7 text-primary-700" />
                <h3 className="mt-5 font-display text-[2rem] font-semibold leading-tight text-slate-950">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  {card.description}
                </p>
                <div className="mt-6">
                  <Button href={card.href} variant="cta">
                    Learn More
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
