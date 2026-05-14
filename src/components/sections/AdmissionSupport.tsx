'use client'

import { motion } from 'framer-motion'
import { SectionShell, Eyebrow } from '@components/ui/LandingUI'

import EnquiryForm from '@components/forms/EnquiryForm'
import { HERO_COPY } from '@lib/constants'

export default function AdmissionSupport() {
  return (
    <section className="bg-white py-12" id="hero-enquiry">
      <SectionShell>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] border border-[#efe7db] bg-[#fdfbf7] p-8 shadow-[0_32px_64px_-48px_rgba(21,37,60,0.15)] sm:p-10"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <Eyebrow>Admission Support</Eyebrow>
              <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,3.2rem)] leading-[1] tracking-[-0.04em] text-[#15253c]">
                Ready to start? <span className="italic text-[#1295a5]">Get in touch.</span>
              </h2>
              <p className="mt-4 text-slate-600 font-medium">{HERO_COPY.formLine}</p>
            </div>

            <div className="lg:min-w-[65%]">
              <EnquiryForm dark={false} className="!space-y-4" />
            </div>
          </div>
        </motion.div>
      </SectionShell>
    </section>
  )
}
