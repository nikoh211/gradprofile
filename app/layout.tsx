import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MastersGuide - AI-Powered Graduate School Recommendations',
  description: 'Get personalized university recommendations and insights for your master\'s program applications using advanced AI analysis.',
  metadataBase: new URL('https://masters-guide.vercel.app'),
  openGraph: {
    title: 'MastersGuide - AI-Powered Graduate School Recommendations',
    description: 'Get personalized university recommendations and insights for your master\'s program applications using advanced AI analysis.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MastersGuide - AI-Powered Graduate School Recommendations',
    description: 'Get personalized university recommendations and insights for your master\'s program applications using advanced AI analysis.',
    images: ['/og-image.jpg'],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.className} min-h-screen bg-background flex flex-col`}>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'
