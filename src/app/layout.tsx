import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import Navbar from '@/components/navbar';
import ScrollToTop from '@/components/scrollToTop';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Chris Nielson | Senior Frontend Engineer & Software Developer',
  description:
    'Senior Frontend Engineer specializing in React, TypeScript, and Next.js. Currently at Domo, with 4+ years experience building scalable web applications. Based in Utah County.',
  keywords: [
    'Chris Nielson',
    'Christopher Nielson',
    'Frontend Engineer',
    'Software Developer',
    'React',
    'TypeScript',
    'Next.js',
    'Utah',
    'Domo',
  ],
  authors: [{ name: 'Chris Nielson' }],
  creator: 'Chris Nielson',
  openGraph: {
    title: 'Chris Nielson | Senior Frontend Engineer',
    description:
      'Senior Frontend Engineer specializing in React, TypeScript, and Next.js. Building innovative web applications with focus on user experience.',
    url: 'https://chrisnielson.dev',
    siteName: 'Chris Nielson Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chris Nielson | Senior Frontend Engineer',
    description: 'Senior Frontend Engineer specializing in React, TypeScript, and Next.js.',
    creator: '@ctniel1',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <ScrollToTop />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
