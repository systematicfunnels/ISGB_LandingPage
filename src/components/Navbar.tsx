'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { SITE_CONFIG, CONTACT_INFO } from '@lib/constants';
import { Button } from '@components/ui/Button';

const navItems = [
  { label: 'Programme', href: '#programs' },
  { label: 'Placements', href: '#placements' },
  { label: 'Stories', href: '#stories' },
  { label: 'Legacy', href: '#legacy' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? 'bg-gradient-to-r from-[#1c4f80] via-[#153d62] to-[#1295a5] shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto max-w-[1460px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative h-16 w-64 sm:w-80 transition-all duration-300">
              <Image
                src={SITE_CONFIG.logo}
                alt="IGSB Logo"
                fill
                priority
                className="object-contain object-left transition-all duration-300"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-white/90 hover:text-white' : 'text-slate-600 hover:text-cyan-600'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
             <a
              href={CONTACT_INFO.admissions.phoneHref}
              className={`hidden sm:inline-flex text-sm font-bold transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-slate-900'
              }`}
            >
              {CONTACT_INFO.admissions.phone}
            </a>
            <Button
              variant="cta"
              href="#apply"
              className={`!py-2 !px-5 text-xs ${isScrolled ? '!bg-white !text-[#1c4f80]' : ''}`}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
