import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'SOTS NETWORK - Professional Web Development & AI Solutions',
    template: '%s | SOTS NETWORK',
  },
  description: 'SOTS NETWORK specializes in AI & Web Solutions for creators and businesses. We offer website and landing page development, MVP creation, AI workflow automation, and strategic consultation. Transform your business with cutting-edge technology.',
  keywords: [
    'web development',
    'AI solutions',
    'landing page design',
    'MVP development',
    'business automation',
    'AI integration',
    'web3 development',
    'blockchain solutions',
    'website development',
    'automation tools',
    'Zapier integration',
    'Make integration',
    'Firebase',
    'Supabase',
    'business consulting',
  ],
  authors: [{ name: 'SOTS NETWORK' }],
  creator: 'SOTS NETWORK',
  publisher: 'SOTS NETWORK',
  generator: 'SOTS NETWORK',
  metadataBase: new URL('https://sotsnetwork.xyz'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sotsnetwork.xyz',
    siteName: 'SOTS NETWORK',
    title: 'SOTS NETWORK - Professional Web Development & AI Solutions',
    description: 'Transform your business with AI & Web Solutions. Professional website development, MVP creation, and automation services for modern businesses.',
    images: [
      {
        url: '/the real logo.png',
        width: 1200,
        height: 630,
        alt: 'SOTS NETWORK - AI & Web Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SOTS NETWORK - Professional Web Development & AI Solutions',
    description: 'Transform your business with AI & Web Solutions. Professional website development, MVP creation, and automation services.',
    images: ['/the real logo.png'],
    creator: '@realpaulchidera',
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
  icons: {
    icon: [
      { url: '/the real logo.png', type: 'image/png' },
    ],
    shortcut: '/the real logo.png',
    apple: '/the real logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SOTS NETWORK',
    url: 'https://sotsnetwork.xyz',
    logo: 'https://sotsnetwork.xyz/the real logo.png',
    description: 'Professional Web Development & AI Solutions for Modern Businesses',
    email: 'chidera@sotsnetwork.xyz',
    sameAs: [
      'https://x.com/realpaulchidera',
      'https://github.com/sotsnetwork',
      'https://www.linkedin.com/in/chidera-nwachukwu-32647a216',
      'https://instagram.com/sotsnetwork',
      'https://www.youtube.com/@sotsnetwork',
      'https://www.tiktok.com/@sotsnetwork',
      'https://discord.gg/STySgkqmbx',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'chidera@sotsnetwork.xyz',
      contactType: 'Customer Service',
    },
    areaServed: 'Worldwide',
    serviceType: [
      'Web Development',
      'AI Solutions',
      'Landing Page Design',
      'MVP Development',
      'Business Automation',
      'AI Integration',
      'Web3 Development',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SOTS NETWORK',
    url: 'https://sotsnetwork.xyz',
    description: 'Professional Web Development & AI Solutions for Modern Businesses',
    publisher: {
      '@type': 'Organization',
      name: 'SOTS NETWORK',
    },
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      {/* suppressHydrationWarning prevents browser extension interference from causing hydration mismatches */}
      <body suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
