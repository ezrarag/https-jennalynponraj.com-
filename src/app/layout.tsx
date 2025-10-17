import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import MuiThemeProvider from '@/components/MuiThemeProvider';

const poppins = Poppins({ 
  subsets: ['latin'], 
  variable: '--font-poppins',
  weight: ['700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Jennalyn Ponraj — Maverick Artist & Founder',
  description: 'Official website of Jennalyn Ponraj, featuring her creative works, music, and artistic vision.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${poppins.variable} font-sans antialiased bg-black text-white`}>
        <MuiThemeProvider>
          {children}
        </MuiThemeProvider>
      </body>
    </html>
  )
}
