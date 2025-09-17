import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Grace Yaa Nalon - Full-Stack Developer Portfolio',
  description: 'Personal portfolio showcasing full-stack development skills, projects, and experience. Frontend creativity meets backend expertise.',
  keywords: 'full-stack developer, React, Next.js, TypeScript, Node.js, portfolio',
  authors: [{ name: 'Grace Yaa Nalon' }],
  openGraph: {
    title: 'Grace Yaa Nalon - Full-Stack Developer',
    description: 'Personal portfolio showcasing full-stack development skills',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
