import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { SectionShell } from '@components/ui/LandingUI'
import { CONTACT_INFO, SITE_CONFIG } from '@lib/constants'

export default function MainFooter() {
  return (
    <footer id="contact" className="w-full bg-[#15253c] py-16 text-white">
      <SectionShell>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="relative h-16 w-[12rem]">
              <Image
                src={SITE_CONFIG.logo}
                alt={SITE_CONFIG.name}
                fill
                className="object-contain object-left brightness-[1.12]"
                sizes="192px"
              />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/82">
              Accelerate your career. Maximize your potential with a placement-oriented MBA from IGSB, Pune.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7f3ee]">MBA Admissions</p>
            <div className="mt-4 space-y-3 text-sm text-white/88">
              <Link href={CONTACT_INFO.admissions.phoneHref} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4" />
                Mobile: {CONTACT_INFO.admissions.phone}
              </Link>
              <Link href={CONTACT_INFO.admissions.altPhoneHref} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4" />
                Tel: {CONTACT_INFO.admissions.altPhone}
              </Link>
              <Link href={CONTACT_INFO.admissions.emailHref} className="flex items-center gap-2 break-all hover:text-white">
                <Mail className="h-4 w-4" />
                {CONTACT_INFO.admissions.email}
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7f3ee]">Administrative Office</p>
            <div className="mt-4 space-y-3 text-sm text-white/88">
              <Link href={CONTACT_INFO.admin.phoneHref} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4" />
                Mobile: {CONTACT_INFO.admin.phone}
              </Link>
              <Link href={CONTACT_INFO.admin.emailHref} className="flex items-center gap-2 break-all hover:text-white">
                <Mail className="h-4 w-4" />
                {CONTACT_INFO.admin.email}
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7f3ee]">Examination Committee</p>
            <div className="mt-4 space-y-3 text-sm text-white/88">
              <Link href={CONTACT_INFO.examCommittee.emailHref} className="flex items-center gap-2 break-all hover:text-white">
                <Mail className="h-4 w-4" />
                {CONTACT_INFO.examCommittee.email}
              </Link>
              <Link href={SITE_CONFIG.links.website} className="flex items-center gap-2 hover:text-white">
                <MapPin className="h-4 w-4" />
                www.indiraigsb.edu.in
              </Link>
            </div>
          </div>
        </div>
      </SectionShell>
    </footer>
  )
}
