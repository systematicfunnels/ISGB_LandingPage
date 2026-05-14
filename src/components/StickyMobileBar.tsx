import { Button } from '@components/ui/Button';
import { PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '@lib/constants';

export default function StickyMobileBar() {
  return (
    <div className="fixed inset-x-3 bottom-3 z-40 md:hidden">
      <div className="grid grid-cols-2 gap-3 rounded-[28px] border border-white/70 bg-white/85 p-3 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)] backdrop-blur-2xl">
        <Button
          href="#apply"
          variant="cta"
          className="!min-h-[52px] !px-4 !py-3 !text-sm"
        >
          Enquire Now
        </Button>
        <a
          href={CONTACT_INFO.admissions.phoneHref}
          aria-label="Call admissions"
          className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-primary-700"
        >
          <PhoneCall className="h-4 w-4" />
          Call
        </a>
      </div>
    </div>
  );
}
