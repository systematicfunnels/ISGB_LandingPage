import Image from 'next/image'
import { BriefcaseBusiness, Building2, GraduationCap, Sparkles, Target } from 'lucide-react'
import { CAMPUS_IMAGES } from '@lib/constants'

const whyChooseItems = [
  {
    title: 'Industry-Aligned MBA Curriculum',
    description: 'Built around current business expectations and practical management thinking.',
    image: CAMPUS_IMAGES.libraryStacks,
    alt: 'IGSB students using library learning resources',
    icon: Building2,
    imageClassName: 'object-cover object-center',
  },
  {
    title: 'Live Projects & Internship Opportunities',
    description: 'Hands-on exposure through projects, internships, and application-led learning.',
    image: CAMPUS_IMAGES.computerLab,
    alt: 'IGSB students in a computer lab environment',
    icon: BriefcaseBusiness,
    imageClassName: 'object-cover object-center',
  },
  {
    title: 'Corporate Exposure & Industry Interaction',
    description: 'Regular interaction with industry speakers, mentors, and corporate perspectives.',
    image: CAMPUS_IMAGES.laptopCollaboration,
    alt: 'IGSB students collaborating around a laptop',
    icon: GraduationCap,
    imageClassName: 'object-cover object-center',
  },
  {
    title: 'Leadership & Personality Development',
    description: 'Focused development of confidence, communication, and managerial presence.',
    image: CAMPUS_IMAGES.outdoorDiscussion,
    alt: 'IGSB students in a group discussion outdoors',
    icon: Sparkles,
    imageClassName: 'object-cover object-center',
  },
  {
    title: 'Placement-Focused Training from Day One',
    description: 'Structured preparation for interviews, aptitude, and placement readiness.',
    image: CAMPUS_IMAGES.placementGroup,
    alt: 'IGSB students in a professional group portrait',
    icon: Target,
    imageClassName: 'object-cover object-center',
  },
]

export default function WhyChoose() {
  return (
    <section className="section-shell pt-6">
      <div className="container-custom">
        <div className="mb-8 max-w-3xl">
          <p className="section-kicker reveal-up">Why Choose IGSB?</p>
          <h2 className="section-title reveal-up reveal-delay-1">
            An MBA experience shaped around growth, leadership, and corporate readiness.
          </h2>
          <p className="reveal-up reveal-delay-2 mt-5 text-lg leading-8 text-slate-600">
            The IGSB MBA combines industry-oriented learning, experiential exposure, personality development, and placement preparation from day one.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseItems.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={item.title}
                className={`reveal-up reveal-delay-${Math.min((index % 4) + 1, 4)} spotlight-card hover-panel mesh-surface overflow-hidden rounded-[30px] border border-white/60 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)]`}
              >
                <div className="relative h-44 overflow-hidden rounded-t-[30px] xl:h-40">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className={`w-full ${item.imageClassName}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/48 via-slate-950/10 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex rounded-2xl bg-white/92 p-3 text-primary-700 shadow-lg">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="absolute right-5 top-5 grid-label rounded-full bg-slate-950/55 px-3 py-1 text-white backdrop-blur-sm">
                    0{index + 1}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
