import './globals.css'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Portfolio | José A González Llambia',
  description: 'Personal portfolio | Fullstack Developer',
  openGraph: {
    title: 'José A González Llambia | Fullstack Developer',
    description: 'Personal portfolio | Fullstack Developer',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <div className="min-h-screen max-w-6xl mx-auto px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  )
}
