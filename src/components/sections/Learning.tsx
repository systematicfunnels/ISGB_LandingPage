import Image from 'next/image'
import { GraduationCap, LineChart, Presentation, Users } from 'lucide-react'
import { CAMPUS_IMAGES, LEARNING_EXPERIENCES } from '@lib/constants'

const icons = [Presentation, Users, LineChart, GraduationCap]

export default function Learning() {
  return (
    <section className="section-shell">
      <div className="container-custom">
        <div className="grid gap-7 lg:grid-cols-[1fr_1fr] lg:gap-7">
          <div className="reveal-up editorial-shell dark-mesh p-6 text-white md:p-6">
            <p className="section-kicker !border-white/10 !bg-white/10 !text-teal-200">
              Learning Beyond Classrooms
            </p>
            <h2 className="section-title text-white">
              Our learning approach prepares students for real business challenges and professional responsibilities.
            </h2>

            <div className="mt-6 grid gap-4">
              {LEARNING_EXPERIENCES.map((experience, index) => {
                const Icon = icons[index % icons.length]

                return (
                  <div
                    key={experience}
                    className={`reveal-up reveal-delay-${Math.min((index % 4) + 1, 4)} spotlight-card hover-panel flex items-start gap-4 rounded-[24px] border border-white/10 bg-white/5 p-5`}
                  >
                    <div className="rounded-2xl bg-white/10 p-3 text-teal-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-base leading-7 text-slate-200">{experience}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="grid gap-5">
            <div className="reveal-up reveal-delay-1 spotlight-card hover-panel editorial-shell mesh-surface overflow-hidden p-3">
              <div className="relative overflow-hidden rounded-[26px]">
                <Image
                  src={CAMPUS_IMAGES.labSessionGroup}
                  alt="IGSB students in a lab setting"
                  width={1400}
                  height={900}
                  className="h-[230px] w-full object-cover object-center md:h-[260px]"
                />
              </div>
            </div>
            <div className="reveal-up reveal-delay-2 spotlight-card hover-panel editorial-shell overflow-hidden p-3">
              <div className="relative overflow-hidden rounded-[26px] bg-primary-50">
                <Image
                  src={CAMPUS_IMAGES.studentGroupPortrait}
                  alt="IGSB students in a group learning setting"
                  width={900}
                  height={1300}
                  className="h-[230px] w-full object-cover object-center md:h-[260px]"
                />
              </div>
            </div>
            <div className="reveal-up reveal-delay-3 spotlight-card hover-panel editorial-shell dark-mesh flex flex-col justify-between p-5 text-white sm:p-6">
              <div>
                <p className="grid-label !text-teal-100">Learning outcome</p>
                <p className="mt-3 text-3xl font-semibold tracking-tight">
                  Students build stronger business judgment, communication, and readiness for modern corporate roles.
                </p>
              </div>
              <p className="mt-5 text-white/80">
                Business case studies, expert sessions, project work, and mentoring keep the MBA connected to real-world expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
