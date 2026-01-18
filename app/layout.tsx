import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SOTS NETWORK - Professional Web Development & AI Solutions',
  description: 'SOTS NETWORK specializes in AI & Web Solutions for creators and businesses. We offer website and landing page development, MVP creation, AI workflow automation, and strategic consultation.',
  generator: 'SOTS NETWORK',
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
  return (
    <html lang="en">
      {/* suppressHydrationWarning prevents browser extension interference from causing hydration mismatches */}
      <body suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
