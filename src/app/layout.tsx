import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SITE_CONFIG } from '@lib/constants'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0f2d2c',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: 'IGSB Pune | Modern MBA Admissions',
  description: SITE_CONFIG.description,
  icons: {
    icon: SITE_CONFIG.favicon,
    shortcut: SITE_CONFIG.favicon,
    apple: SITE_CONFIG.favicon,
  },
  keywords: [
    'MBA Pune',
    'IGSB',
    'Indira Global School of Business',
    'MBA Admissions',
    'AICTE Approved',
    'MBA College Pune',
    'Placement Assistance',
  ],
  authors: [{ name: 'IGSB Pune' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_CONFIG.url,
    siteName: 'IGSB Pune',
    title: 'IGSB Pune | Modern MBA Admissions',
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'IGSB Pune campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IGSB Pune | Modern MBA Admissions',
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
