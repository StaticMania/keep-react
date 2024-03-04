import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import TopProgressBar from './components/TopProgressBar'
import './docs.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Keep React - Supercharge Your Web Development',
  description:
    'Explore our library of 40+ open-source React UI components and interactive elements, empowering you to create stunning web projects effortlessly.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        <Navbar />
        <main className="relative pt-20">{children}</main>
        <Footer />
        <TopProgressBar />
      </body>
    </html>
  )
}
