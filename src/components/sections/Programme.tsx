import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@components/ui/Button'
import { PROGRAMME_DETAILS, WHAT_SETS_YOU_APART } from '@lib/constants'

export default function Programme() {
  return (
    <section id="curriculum" className="section-shell">
      <div className="container-custom">
        <div className="soft-card overflow-hidden">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="section-kicker">MBA Programme</p>
              <h2 className="section-title">2 Years | Full-Time</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                The IGSB MBA is designed for professional growth, leadership development, and long-term career success.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] bg-slate-950 p-6 text-white">
                  <p className="grid-label !text-teal-200">Duration</p>
                  <p className="mt-3 text-3xl font-semibold">{PROGRAMME_DETAILS.duration}</p>
                </div>
                <div className="rounded-[24px] bg-primary-50 p-6 text-slate-900">
                  <p className="grid-label">Format</p>
                  <p className="mt-3 text-3xl font-semibold">{PROGRAMME_DETAILS.format}</p>
                </div>
              </div>

              <div className="mt-6 rounded-[24px] border border-dashed border-primary-200 bg-primary-50/70 p-6">
                <p className="grid-label">What Sets You Apart</p>
                <div className="mt-4 grid gap-3">
                  {WHAT_SETS_YOU_APART.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary-600" />
                      <p className="leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[28px] bg-white p-6 shadow-[0_22px_70px_-42px_rgba(15,23,42,0.5)]">
                <div className="mb-5 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="grid-label">Specializations Offered</p>
                    <h3 className="mt-2 text-2xl font-semibold text-slate-950">Choose your focus area</h3>
                  </div>
                  <Button href="#apply" variant="outline" className="w-full justify-center sm:w-auto">
                    Apply Now
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {PROGRAMME_DETAILS.specializations.map((specialization) => (
                    <div
                      key={specialization}
                      className="flex items-start gap-3 rounded-[20px] border border-slate-200 bg-slate-50 p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary-600" />
                      <p className="font-medium text-slate-700">{specialization}</p>
                    </div>
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
