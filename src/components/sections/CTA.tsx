'use client';

import { CheckCircle2, Download, Phone } from 'lucide-react';
import { Button } from '@components/ui/Button';
import EnquiryForm from '@components/forms/EnquiryForm';
import { CONTACT_INFO, SITE_CONFIG } from '@lib/constants';

const supportPoints = [
  'Download the brochure and review programme details',
  'Connect with admissions for guidance on your next step',
  'Prepare your enquiry and keep your application journey moving',
];

// Final refined CTA component with proper accessibility and validation
export default function CTA() {
  return (
    <section id="apply" className="section-shell bg-white">
      <div className="container-custom">
        <div className="overflow-hidden rounded-[2.5rem] border border-[#e6ddd0] bg-[#0c2d3b] text-white shadow-[0_28px_80px_-48px_rgba(15,23,42,0.3)]">
          <div className="grid gap-0 xl:grid-cols-[0.88fr_1.12fr]">
            <div className="border-b border-white/10 p-6 md:p-7 xl:border-b-0 xl:border-r xl:border-white/10">
              <p className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d7e2db]">
                Ready to Apply?
              </p>
              <h2 className="mt-5 font-display text-[clamp(2.3rem,5vw,4rem)] font-semibold leading-[0.96] text-white">
                Start Your MBA Journey Today
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/82 sm:text-base">
                Take the next step toward building a successful management career with a placement-oriented MBA from IGSB, Pune.
              </p>

              <div className="mt-7 space-y-3">
                {supportPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-[1.5rem] bg-white/8 px-4 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#f6c94c]" />
                    <p className="text-sm leading-6 text-white/84">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <Button
                  href={SITE_CONFIG.brochurePath}
                  download
                  size="lg"
                  className="justify-center bg-accent-500 text-slate-950 hover:bg-accent-600"
                >
                  Download Brochure
                  <Download className="h-4 w-4" />
                </Button>
                <Button
                  href={CONTACT_INFO.admissions.phoneHref}
                  variant="secondary"
                  size="lg"
                  className="justify-center"
                >
                  Speak to Counselor
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="p-6 md:p-10 lg:p-12">
              <div className="mb-8">
                <h3 className="font-display text-2xl font-bold text-white">
                  Fill the form to receive programme details instantly
                </h3>
              </div>

              <EnquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
