import Image from 'next/image';
import { CAMPUS_IMAGES } from '@lib/constants';

const plannerItems = [
  {
    day: 'Monday',
    title: 'Core classroom sessions and faculty reviews',
    detail: 'Management foundations, discussions, and structured academic progression.',
  },
  {
    day: 'Wednesday',
    title: 'Industry expert interaction and workshop rhythm',
    detail: 'Guest sessions, application exercises, and collaborative reflection.',
  },
  {
    day: 'Friday',
    title: 'Placement readiness and project momentum',
    detail: 'Mock interviews, team work, presentation practice, and career-focused review.',
  },
];

const highlightCards = [
  {
    title: 'Admissions',
    description: 'Begin with brochure access, quick contact, or a prepared full enquiry.',
    image: CAMPUS_IMAGES.campusFacade,
  },
  {
    title: 'Learning',
    description: 'Explore a programme shaped through practical cases, projects, and discussion.',
    image: CAMPUS_IMAGES.laptopCollaborationSession,
  },
  {
    title: 'Placements',
    description: 'See how recruiter visibility and readiness support remain part of the journey.',
    image: CAMPUS_IMAGES.placementReadyGroup,
  },
];

export default function Planner() {
  return (
    <section className="section-shell">
      <div className="container-custom">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="section-kicker">What the Rhythm Can Look Like</p>
            <h2 className="max-w-[11ch] font-display text-[clamp(2.2rem,4.6vw,4rem)] font-semibold leading-[0.97] text-slate-950">
              Here&apos;s how learning, exposure, and preparation can move through the week.
            </h2>

            <div className="mt-7 space-y-4">
              {plannerItems.map((item) => (
                <article
                  key={item.day}
                  className="rounded-[2rem] border border-[#e7ddcf] bg-white p-5 shadow-[0_18px_48px_-38px_rgba(15,23,42,0.12)]"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-primary-700">
                    {item.day}
                  </p>
                  <h3 className="mt-3 font-display text-[1.8rem] font-semibold leading-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="overflow-hidden rounded-[2.3rem] border border-[#e7ddcf] bg-white p-3 shadow-[0_20px_58px_-42px_rgba(15,23,42,0.12)] sm:row-span-2">
              <div className="relative min-h-[18rem] overflow-hidden rounded-[1.8rem] sm:min-h-[26rem]">
                <Image
                  src={CAMPUS_IMAGES.labSessionGroup}
                  alt="IGSB students in an applied learning session"
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-[#e7ddcf] bg-white p-3 shadow-[0_20px_58px_-42px_rgba(15,23,42,0.12)]">
              <div className="relative h-[12rem] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={CAMPUS_IMAGES.groupPortrait}
                  alt="IGSB student group"
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            <article className="overflow-hidden rounded-[2rem] border border-[#e7ddcf] bg-white p-3 shadow-[0_20px_58px_-42px_rgba(15,23,42,0.12)]">
              <div className="relative h-[12rem] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={CAMPUS_IMAGES.computerLabSession}
                  alt="IGSB classroom activity"
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            <article className="overflow-hidden rounded-[2.3rem] border border-[#e7ddcf] bg-white p-3 shadow-[0_20px_58px_-42px_rgba(15,23,42,0.12)] sm:col-span-2">
              <div className="relative h-[13rem] overflow-hidden rounded-[1.7rem]">
                <Image
                  src={CAMPUS_IMAGES.outdoorLeadershipDiscussion}
                  alt="IGSB leadership activity"
                  fill
                  className="object-cover"
                />
              </div>
            </article>
          </div>
        </div>

        <div className="mt-10">
          <p className="section-kicker">Highlights</p>
          <div className="grid gap-5 lg:grid-cols-3">
            {highlightCards.map((card) => (
              <article
                key={card.title}
                className="overflow-hidden rounded-[2.2rem] border border-[#e7ddcf] bg-white shadow-[0_20px_58px_-42px_rgba(15,23,42,0.12)]"
              >
                <div className="relative h-[14rem] overflow-hidden">
                  <Image src={card.image} alt={card.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-[1.9rem] font-semibold leading-tight text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
