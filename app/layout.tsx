import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
} 