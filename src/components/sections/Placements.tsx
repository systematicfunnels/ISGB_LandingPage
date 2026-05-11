import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@components/ui/Button'
import { HERO_STATS, PLACEMENT_SUPPORT, SITE_CONFIG, TOP_CAREER_ROLES } from '@lib/constants'

export default function Placements() {
  return (
    <section id="placements" className="section-shell">
      <div className="container-custom">
        <div className="reveal-up editorial-shell dark-mesh overflow-hidden p-6 text-white md:p-8">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="section-kicker !border-white/10 !bg-white/10 !text-teal-200">
                Placement-Driven MBA
              </p>
              <h2 className="section-title text-white">Strong Placement Performance</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                At IGSB, placements are supported through structured training, industry engagement,
                and continuous career development.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {HERO_STATS.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`reveal-up reveal-delay-${Math.min(index + 1, 4)} spotlight-card hover-panel rounded-[24px] border border-white/10 bg-white/5 p-5`}
                  >
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="reveal-up reveal-delay-4 mt-4 rounded-[24px] border border-teal-300/20 bg-teal-400/10 p-5">
                <p className="text-xl font-semibold text-white">100% Placement Assistance</p>
              </div>

              <div className="reveal-up reveal-delay-4 mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="#apply">
                  Apply Now
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button href={SITE_CONFIG.brochurePath} download variant="secondary">
                  Download Brochure
                </Button>
              </div>
            </div>

            <div className="space-y-5">
              <div className="reveal-up reveal-delay-2 spotlight-card hover-panel rounded-[28px] bg-white p-6 text-slate-900">
                <p className="grid-label">Placement Support Includes</p>
                <div className="mt-5 grid gap-3">
                  {PLACEMENT_SUPPORT.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-[20px] bg-slate-50 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary-600" />
                      <p className="leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="reveal-up reveal-delay-3 spotlight-card hover-panel rounded-[28px] border border-white/10 bg-white/5 p-6">
                <p className="grid-label !text-teal-200">Top Career Roles</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {TOP_CAREER_ROLES.map((role) => (
                    <span
                      key={role}
                      className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/80"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
