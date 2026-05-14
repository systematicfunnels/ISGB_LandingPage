'use client';

import { ChangeEvent, FormEvent, useEffect, useId, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@components/ui/Button';
import { PROGRAMME_DETAILS, CONTACT_INFO } from '@lib/constants';

interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  specialization: string;
}

const initialFormData: LeadFormData = {
  name: '',
  phone: '',
  email: '',
  specialization: '',
};

interface EnquiryFormProps {
  onSuccess?: () => void;
  className?: string;
  dark?: boolean;
}

export default function EnquiryForm({ onSuccess, className, dark = true }: EnquiryFormProps) {
  const [formData, setFormData] = useState<LeadFormData>(initialFormData);
  const [isPrepared, setIsPrepared] = useState(false);
  const [specializationError, setSpecializationError] = useState(false);
  
  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const specializationId = useId();

  useEffect(() => {
    const storedEmail = window.sessionStorage.getItem('igsbHeroEmail');
    if (storedEmail) {
      setFormData((current) => (current.email ? current : { ...current, email: storedEmail }));
    }
  }, []);

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
  )}`;

  const handleChange = (field: keyof LeadFormData) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { value } = event.target;
    if (isPrepared) setIsPrepared(false);
    if (field === 'specialization' && specializationError) setSpecializationError(false);
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.specialization) {
      setSpecializationError(true);
      return;
    }
    
    if (isPrepared) {
      // Simulate API call for better reliability
      try {
        console.log('Sending enquiry:', formData);
        // Fallback to mailto for now as requested by behavior preservation
        window.location.href = enquiryMailto;
        onSuccess?.();
      } catch (error) {
        console.error('Submission failed', error);
      }
      return;
    }
    setIsPrepared(true);
  };

  const inputClasses = `w-full rounded-[1.4rem] border px-4 py-3 outline-none transition focus:border-accent-400 ${
    dark 
      ? 'border-white/20 bg-white/10 text-white placeholder:text-white/40' 
      : 'border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400'
  }`;

  const labelClasses = `text-sm font-medium ${dark ? 'text-white/90' : 'text-slate-700'}`;

  return (
    <form className={`space-y-5 ${className}`} onSubmit={handleSubmit}>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor={nameId} className={labelClasses}>Full name</label>
          <input
            id={nameId}
            className={inputClasses}
            value={formData.name}
            onChange={handleChange('name')}
            placeholder="Enter your name"
            autoComplete="name"
            required
            suppressHydrationWarning
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor={phoneId} className={labelClasses}>Phone number</label>
          <input
            id={phoneId}
            type="tel"
            inputMode="tel"
            className={inputClasses}
            value={formData.phone}
            onChange={handleChange('phone')}
            placeholder="Enter your phone number"
            autoComplete="tel"
            required
            suppressHydrationWarning
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={emailId} className={labelClasses}>Email address</label>
        <input
          id={emailId}
          type="email"
          className={inputClasses}
          value={formData.email}
          onChange={handleChange('email')}
          placeholder="Enter your email"
          autoComplete="email"
          required
          suppressHydrationWarning
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor={specializationId} className={labelClasses}>
          Preferred specialization
          <span className="ml-1 text-red-400">*</span>
        </label>
        <select
          id={specializationId}
          className={`${inputClasses} ${
            specializationError ? 'border-red-400 bg-red-900/10' : ''
          } [&>option]:text-slate-900`}
          value={formData.specialization}
          onChange={handleChange('specialization')}
          required
          suppressHydrationWarning
        >
          <option value="">Select a specialization</option>
          {PROGRAMME_DETAILS.specializations.map((spec: string) => (
            <option key={spec} value={spec}>{spec}</option>
          ))}
        </select>
        {specializationError && <p className="mt-1 text-sm font-medium text-red-400">Please select a specialization.</p>}
      </div>

      <AnimatePresence>
        {isPrepared && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-sm text-emerald-500 flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              <p>Details prepared! You can now send your enquiry via email.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-2">
        <Button
          type="submit"
          variant="cta"
          className="w-full !bg-accent-500 !text-slate-950 hover:!bg-accent-600"
          suppressHydrationWarning
        >
          {isPrepared ? 'Send Enquiry via Email' : 'Prepare Enquiry'}
        </Button>
      </div>
    </form>
  );
}
