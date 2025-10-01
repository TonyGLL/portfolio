import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Portafolio - Juan Pérez',
  description: 'Portafolio personal - Fullstack Developer'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <div className="min-h-screen max-w-6xl mx-auto px-6 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  )
}
