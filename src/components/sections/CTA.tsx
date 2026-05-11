'use client'

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react'
import { ArrowRight, CheckCircle2, ChevronDown, Download, Mail, PencilLine, Phone } from 'lucide-react'
import { Button } from '@components/ui/Button'
import { CONTACT_INFO, PROGRAMME_DETAILS, SITE_CONFIG } from '@lib/constants'

interface LeadFormData {
  name: string
  phone: string
  email: string
  specialization: string
}

const initialFormData: LeadFormData = {
  name: '',
  phone: '',
  email: '',
  specialization: '',
}

export default function CTA() {
  const [formData, setFormData] = useState<LeadFormData>(initialFormData)
  const [isPrepared, setIsPrepared] = useState(false)
  const [isSpecializationOpen, setIsSpecializationOpen] = useState(false)
  const [specializationError, setSpecializationError] = useState(false)
  const specializationRef = useRef<HTMLDivElement | null>(null)

  const enquiryMailto = `${CONTACT_INFO.admissions.emailHref}?subject=${encodeURIComponent(
    `IGSB MBA enquiry from ${formData.name || 'prospective student'}`
  )}&body=${encodeURIComponent(
    [
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Preferred specialization: ${formData.specialization || 'Not selected'}`,
      '',
      'Please share programme details with me.',
    ].join('\n')
  )}`

  const handleChange =
    (field: keyof LeadFormData) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      if (isPrepared) {
        setIsPrepared(false)
      }

      if (field === 'specialization' && specializationError) {
        setSpecializationError(false)
      }

      setFormData((current) => ({
        ...current,
        [field]: event.target.value,
      }))
    }

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!specializationRef.current?.contains(event.target as Node)) {
        setIsSpecializationOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSpecializationOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!formData.specialization) {
      setSpecializationError(true)
      setIsSpecializationOpen(true)
      return
    }

    setIsPrepared(true)
  }

  return (
    <section id="apply" className="section-shell">
      <div className="container-custom">
        <div className="reveal-up editorial-shell dark-mesh overflow-hidden text-white shadow-[0_40px_120px_-60px_rgba(15,23,42,0.8)]">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative overflow-hidden p-6 md:p-8">
              <div className="orb-glow absolute left-0 top-0 h-48 w-48 rounded-full bg-teal-400/18 blur-3xl" />
              <div className="orb-glow absolute bottom-0 right-0 h-56 w-56 rounded-full bg-blue-500/18 blur-3xl" />
              <div className="relative">
                <p className="section-kicker !border-white/10 !bg-white/10 !text-teal-200">
                  Start Your MBA Journey Today
                </p>
                <h2 className="section-title text-white">
                  Take the next step toward building a successful management career with a placement-oriented MBA from IGSB, Pune.
                </h2>

                <div className="mt-7 grid gap-4">
                  <a
                    href={CONTACT_INFO.admissions.phoneHref}
                    className="spotlight-card hover-panel flex items-center gap-4 rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                  >
                    <div className="rounded-2xl bg-white/10 p-3 text-teal-200">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-slate-400">MBA Admissions</p>
                      <p className="mt-1 text-lg font-semibold">{CONTACT_INFO.admissions.phone}</p>
                    </div>
                  </a>

                  <a
                    href={CONTACT_INFO.admissions.emailHref}
                    className="spotlight-card hover-panel flex items-center gap-4 rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                  >
                    <div className="rounded-2xl bg-white/10 p-3 text-teal-200">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Email</p>
                      <p className="mt-1 text-lg font-semibold">{CONTACT_INFO.admissions.email}</p>
                    </div>
                  </a>
                </div>

                <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Button href="#enquiry-form" size="lg">
                    Apply Now
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <Button href={SITE_CONFIG.brochurePath} download variant="secondary" size="lg">
                    Download Brochure
                  </Button>
                </div>
              </div>
            </div>

            <div id="enquiry-form" className="mesh-surface p-6 text-slate-900 md:p-8">
              <p className="grid-label">Programme enquiry</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                Prepare your enquiry and connect with admissions quickly.
              </h3>
              <p className="mt-3 max-w-xl leading-7 text-slate-600">
                Prepare your enquiry here, then choose the fastest next step with admissions. Your details stay on
                this device until you decide to call or email.
              </p>

              <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Full name
                    <input
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 outline-none transition focus:border-primary-300 focus:bg-white"
                      value={formData.name}
                      onChange={handleChange('name')}
                      placeholder="Enter your name"
                      autoComplete="name"
                      required
                      suppressHydrationWarning
                    />
                  </label>

                  <label className="block text-sm font-medium text-slate-700">
                    Phone number
                    <input
                      type="tel"
                      inputMode="tel"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 outline-none transition focus:border-primary-300 focus:bg-white"
                      value={formData.phone}
                      onChange={handleChange('phone')}
                      placeholder="Enter your phone number"
                      autoComplete="tel"
                      required
                      suppressHydrationWarning
                    />
                  </label>
                </div>

                <label className="block text-sm font-medium text-slate-700">
                  Email address
                  <input
                    type="email"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 outline-none transition focus:border-primary-300 focus:bg-white"
                    value={formData.email}
                    onChange={handleChange('email')}
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    suppressHydrationWarning
                  />
                </label>

                <label className="block text-sm font-medium text-slate-700">
                  Preferred specialization
                  <div ref={specializationRef} className="relative mt-2">
                    <button
                      type="button"
                      className={`w-full rounded-2xl border px-4 py-3 pr-12 text-left outline-none transition ${
                        specializationError
                          ? 'border-red-300 bg-red-50/70'
                          : 'border-slate-200 bg-white/88'
                      } focus:border-primary-300 focus:bg-white focus:shadow-[0_0_0_4px_rgba(20,184,166,0.08)]`}
                      onClick={() => setIsSpecializationOpen((current) => !current)}
                      aria-haspopup="listbox"
                      aria-expanded={isSpecializationOpen}
                      suppressHydrationWarning
                    >
                      <span className={formData.specialization ? 'text-slate-700' : 'text-slate-500'}>
                        {formData.specialization || 'Select a specialization'}
                      </span>
                    </button>
                    <ChevronDown
                      className={`pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500 transition-transform ${
                        isSpecializationOpen ? 'rotate-180' : ''
                      }`}
                    />
                    {isSpecializationOpen ? (
                      <div className="absolute bottom-[calc(100%+0.5rem)] left-0 right-0 z-30 overflow-hidden rounded-[24px] border border-slate-200 bg-white p-2 shadow-[0_22px_60px_-30px_rgba(15,23,42,0.35)]">
                        <div className="mb-1 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-700">
                          Choose Specialization
                        </div>
                        <div className="grid max-h-64 gap-1 overflow-y-auto">
                          <button
                            type="button"
                            className={`rounded-[18px] px-3 py-3 text-left text-sm font-medium transition ${
                              !formData.specialization
                                ? 'bg-primary-50 text-primary-700'
                                : 'text-slate-500 hover:bg-slate-50'
                            }`}
                            onClick={() => {
                              setFormData((current) => ({
                                ...current,
                                specialization: '',
                              }))
                              setSpecializationError(false)
                              setIsPrepared(false)
                              setIsSpecializationOpen(false)
                            }}
                          >
                            Select a specialization
                          </button>
                          {PROGRAMME_DETAILS.specializations.map((specialization) => (
                            <button
                              key={specialization}
                              type="button"
                              className={`rounded-[18px] px-3 py-3 text-left text-sm font-medium transition ${
                                formData.specialization === specialization
                                  ? 'bg-primary-50 text-primary-700'
                                  : 'text-slate-700 hover:bg-slate-50'
                              }`}
                              onClick={() => {
                                setFormData((current) => ({
                                  ...current,
                                  specialization,
                                }))
                                setSpecializationError(false)
                                setIsPrepared(false)
                                setIsSpecializationOpen(false)
                              }}
                            >
                              {specialization}
                            </button>
                          ))}
                        </div>
                      </div>
                    ) : null}
                    <select
                      className="pointer-events-none absolute inset-0 opacity-0"
                      value={formData.specialization}
                      onChange={handleChange('specialization')}
                      tabIndex={-1}
                      aria-hidden="true"
                      suppressHydrationWarning
                    >
                      <option value="">Select a specialization</option>
                      {PROGRAMME_DETAILS.specializations.map((specialization) => (
                        <option key={specialization} value={specialization}>
                          {specialization}
                        </option>
                      ))}
                    </select>
                  </div>
                  {specializationError ? (
                    <p className="mt-2 text-sm font-medium text-red-600">
                      Please select a specialization.
                    </p>
                  ) : null}
                </label>

                <Button type="submit" size="lg" className="w-full">
                  Prepare Enquiry
                  <ArrowRight className="h-5 w-5" />
                </Button>

                {isPrepared ? (
                  <div className="rounded-[28px] border border-primary-100 bg-white/90 p-5 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.25)]">
                    <div className="flex items-start gap-3">
                      <div className="rounded-2xl bg-primary-50 p-3 text-primary-700">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-slate-950">Your enquiry details are ready.</p>
                        <p className="mt-2 leading-7 text-slate-600">
                          Continue with your preferred next step to connect with admissions quickly.
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      <Button href={enquiryMailto} size="md" className="w-full justify-center">
                        Open Email Draft
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button
                        href={CONTACT_INFO.admissions.phoneHref}
                        variant="outline"
                        size="md"
                        className="w-full justify-center"
                      >
                        Call Admissions
                        <Phone className="h-4 w-4" />
                      </Button>
                      <Button
                        href={SITE_CONFIG.brochurePath}
                        download
                        variant="secondary"
                        size="md"
                        className="w-full justify-center"
                      >
                        Download Brochure
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsPrepared(false)}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition hover:text-primary-800"
                    >
                      <PencilLine className="h-4 w-4" />
                      Edit details
                    </button>
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
