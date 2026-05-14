import Image from 'next/image';
import { Globe, Mail, Phone } from 'lucide-react';
import { CONTACT_INFO, SITE_CONFIG } from '@lib/constants';

const footerLinks = [
  { href: '#programs', label: 'Programs' },
  { href: '#benefits', label: 'Why IGSB' },
  { href: '#placements', label: 'Placements' },
  { href: '#stories', label: 'Testimonials' },
  { href: '#apply', label: 'Apply' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[#e6ddd0] bg-[#0a2230] py-12 pb-28 text-white md:pb-12"
    >
      <div className="container-custom">
        <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Image
              src={SITE_CONFIG.logo}
              alt="IGSB Logo"
              width={200}
              height={85}
              className="h-14 w-auto object-contain brightness-0 invert"
            />
            <h2 className="mt-5 max-w-[14ch] font-display text-[clamp(1.9rem,8vw,3.2rem)] font-semibold leading-[0.98] text-white">
              Admissions support, programme details, and recruiter-focused MBA guidance.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/72 sm:text-base">
              Indira Global School of Business, Pune delivers a full-time MBA experience designed to
              support stronger learning, professional confidence, and placement preparation.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d7e2db]">
                Explore
              </p>
              <div className="mt-4 grid gap-3">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-white/84 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d7e2db]">
                Admissions
              </p>
              <div className="mt-4 space-y-4 text-sm text-white/78">
                <a
                  href={CONTACT_INFO.admissions.phoneHref}
                  className="flex items-center gap-3 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-[#f6c94c]" />
                  {CONTACT_INFO.admissions.phone}
                </a>
                <a
                  href={CONTACT_INFO.admissions.altPhoneHref}
                  className="flex items-center gap-3 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-[#f6c94c]" />
                  {CONTACT_INFO.admissions.altPhone}
                </a>
                <a
                  href={CONTACT_INFO.admissions.emailHref}
                  className="flex items-center gap-3 break-all hover:text-white"
                >
                  <Mail className="h-4 w-4 text-[#f6c94c]" />
                  {CONTACT_INFO.admissions.email}
                </a>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d7e2db]">
                Administration
              </p>
              <div className="mt-4 space-y-4 text-sm text-white/78">
                <a
                  href={CONTACT_INFO.admin.phoneHref}
                  className="flex items-center gap-3 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-[#f6c94c]" />
                  {CONTACT_INFO.admin.phone}
                </a>
                <a
                  href={CONTACT_INFO.admin.emailHref}
                  className="flex items-center gap-3 break-all hover:text-white"
                >
                  <Mail className="h-4 w-4 text-[#f6c94c]" />
                  {CONTACT_INFO.admin.email}
                </a>
                <a
                  href={CONTACT_INFO.examCommittee.emailHref}
                  className="flex items-center gap-3 break-all hover:text-white"
                >
                  <Mail className="h-4 w-4 text-[#f6c94c]" />
                  {CONTACT_INFO.examCommittee.email}
                </a>
              </div>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d7e2db]">
                Official
              </p>
              <div className="mt-4 space-y-4 text-sm text-white/78">
                <p>AICTE Approved</p>
                <p>Affiliated to SPPU, Pune</p>
                <p>DTE Code - 06976</p>
                <a
                  href={SITE_CONFIG.links.website}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-white"
                >
                  <Globe className="h-4 w-4 text-[#f6c94c]" />
                  www.indiraigsb.edu.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5 text-sm text-white/52">
          <div className="flex flex-col gap-2 xl:flex-row xl:items-center xl:justify-between">
            <p>{SITE_CONFIG.fullName}</p>
            <p>&copy; {currentYear} Indira Global School of Business. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
