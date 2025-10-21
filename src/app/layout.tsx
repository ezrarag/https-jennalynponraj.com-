import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import MuiThemeProvider from '@/components/MuiThemeProvider';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';

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
        <SmoothScrollProvider>
          <MuiThemeProvider>
            {/* Visual Continuity Layer */}
            <div className="fixed inset-0 pointer-events-none z-[1] opacity-10 mix-blend-overlay">
              <div 
                className="w-full h-full"
                style={{
                  backgroundImage: `
                    linear-gradient(90deg, transparent 98%, rgba(255,255,255,0.1) 100%),
                    linear-gradient(0deg, transparent 98%, rgba(255,255,255,0.1) 100%)
                  `,
                  backgroundSize: '50px 50px'
                }}
              />
            </div>
            {children}
          </MuiThemeProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
