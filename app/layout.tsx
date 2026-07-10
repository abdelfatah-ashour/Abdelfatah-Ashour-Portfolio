import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import { StructuredData } from '@/components/StructuredData';
import { getProfile, getSite } from '@/lib/data';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

const site = getSite();
const profile = getProfile();

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.title} — ${profile.occupation}`,
    template: `%s — ${site.title}`,
  },
  description: site.description,
  applicationName: site.title,
  authors: [{ name: site.author, url: site.siteUrl }],
  creator: site.author,
  keywords: [
    'Abdelfatah Ashour',
    'Frontend Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'Portfolio',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: site.siteUrl,
    siteName: site.title,
    title: `${site.title} — ${profile.occupation}`,
    description: site.description,
    images: [
      {
        url: '/static/brand/og.png',
        width: 1200,
        height: 630,
        alt: `${site.title} — ${profile.occupation}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.title} — ${profile.occupation}`,
    description: site.description,
    images: ['/static/brand/twitter.png'],
    creator: '@abdoashour07',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [
      { url: '/static/brand/favicon.ico' },
      {
        url: '/static/brand/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/static/brand/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [{ url: '/static/brand/apple-touch-icon.png' }],
  },
  manifest: '/static/brand/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#f3f1ec',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-sm focus:bg-ink focus:px-4 focus:py-2 focus:text-mist"
        >
          Skip to content
        </a>
        <StructuredData site={site} profile={profile} />
        {children}
      </body>
    </html>
  );
}
