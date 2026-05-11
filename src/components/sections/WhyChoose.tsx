import { BriefcaseBusiness, Building2, GraduationCap, Sparkles } from 'lucide-react'
import { WHY_CHOOSE_FEATURES } from '@lib/constants'

const icons = [Building2, BriefcaseBusiness, GraduationCap, Sparkles]
const descriptions = [
  'Built around current business expectations and practical management thinking.',
  'Hands-on exposure through projects, internships, and application-led learning.',
  'Regular interaction with industry speakers, mentors, and corporate perspectives.',
  'Focused development of confidence, communication, and managerial presence.',
  'Structured preparation for interviews, aptitude, and placement readiness.',
  'A learning environment shaped by case work, research, and business problem solving.',
]

export default function WhyChoose() {
  return (
    <section className="section-shell pt-8">
      <div className="container-custom">
        <div className="mb-10 max-w-3xl">
          <p className="section-kicker reveal-up">Why Choose IGSB?</p>
          <h2 className="section-title reveal-up reveal-delay-1">
            An MBA experience shaped around growth, leadership, and corporate readiness.
          </h2>
          <p className="reveal-up reveal-delay-2 mt-6 text-lg leading-8 text-slate-600">
            The IGSB MBA combines industry-oriented learning, experiential exposure, personality development, and placement preparation from day one.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_FEATURES.map((feature, index) => {
            const Icon = icons[index % icons.length]

            return (
              <div
                key={feature}
                className={`reveal-up reveal-delay-${Math.min((index % 4) + 1, 4)} spotlight-card hover-panel mesh-surface rounded-[30px] border border-white/60 p-6 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.35)]`}
              >
                <div className="mb-6 flex items-center justify-between gap-3">
                  <div className="inline-flex rounded-2xl bg-primary-50 p-3 text-primary-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="grid-label">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">{feature}</h3>
                <p className="mt-4 leading-7 text-slate-600">{descriptions[index]}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
