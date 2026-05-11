import Image from 'next/image'
import { Globe, Mail, Phone } from 'lucide-react'
import { CONTACT_INFO, SITE_CONFIG } from '@lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-slate-200 bg-slate-950 py-10 text-white">
      <div className="container-custom">
        <div className="editorial-shell dark-mesh border-white/10 p-7 md:p-9">
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-[1.05fr_0.95fr_0.85fr_0.85fr]">
            <div className="reveal-up">
              <div className="mb-5 flex items-center">
                <Image
                  src={SITE_CONFIG.logo}
                  alt="IGSB Logo"
                  width={144}
                  height={144}
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="max-w-md text-sm leading-7 text-slate-400">
                Accelerate your career and maximize your potential with a placement-oriented MBA built for business leadership.
              </p>
            </div>

            <div className="reveal-up reveal-delay-1">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                MBA Admissions
              </p>
              <div className="space-y-3 text-sm text-slate-300">
                <a className="flex items-center gap-3 hover:text-white" href={CONTACT_INFO.admissions.phoneHref}>
                  <Phone className="h-4 w-4 text-teal-300" />
                  Mobile: {CONTACT_INFO.admissions.phone}
                </a>
                <a className="flex items-center gap-3 hover:text-white" href={CONTACT_INFO.admissions.altPhoneHref}>
                  <Phone className="h-4 w-4 text-teal-300" />
                  Tel: {CONTACT_INFO.admissions.altPhone}
                </a>
                <a className="flex items-center gap-3 break-all hover:text-white" href={CONTACT_INFO.admissions.emailHref}>
                  <Mail className="h-4 w-4 text-teal-300" />
                  {CONTACT_INFO.admissions.email}
                </a>
              </div>
            </div>

            <div className="reveal-up reveal-delay-2">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Administrative Office
              </p>
              <div className="space-y-3 text-sm text-slate-300">
                <a className="flex items-center gap-3 hover:text-white" href={CONTACT_INFO.admin.phoneHref}>
                  <Phone className="h-4 w-4 text-teal-300" />
                  Mobile: {CONTACT_INFO.admin.phone}
                </a>
                <a className="flex items-center gap-3 break-all hover:text-white" href={CONTACT_INFO.admin.emailHref}>
                  <Mail className="h-4 w-4 text-teal-300" />
                  {CONTACT_INFO.admin.email}
                </a>
              </div>
            </div>

            <div className="reveal-up reveal-delay-3">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Examination Committee
              </p>
              <div className="space-y-3 text-sm text-slate-300">
                <a className="flex items-center gap-3 break-all hover:text-white" href={CONTACT_INFO.examCommittee.emailHref}>
                  <Mail className="h-4 w-4 text-teal-300" />
                  {CONTACT_INFO.examCommittee.email}
                </a>
                <a
                  className="flex items-center gap-3 hover:text-white"
                  href={SITE_CONFIG.links.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Globe className="h-4 w-4 text-teal-300" />
                  www.indiraigsb.edu.in
                </a>
              </div>
            </div>
          </div>

          <div className="mt-7 border-t border-white/10 pt-5 text-sm text-slate-500">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p>AICTE Approved | Affiliated to SPPU, Pune | DTE Code - 06976</p>
              <p>&copy; {currentYear} Indira Global School of Business. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
