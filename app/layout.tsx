import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { KeepThemeProvider } from './components/ThemeProvider'
import TopProgressBar from './components/TopProgressBar'
import './docs.css'
import './globals.css'
import { ToastWrapper } from './src'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Keep React - Supercharge Your Web Development',
  description:
    'Explore our library of 40+ open-source React UI components and interactive elements, empowering you to create stunning web projects effortlessly.',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <KeepThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <ToastWrapper />
          <Header />
          <main className="relative pt-20">{children}</main>
          <Footer />
          <TopProgressBar />
        </KeepThemeProvider>
      </body>
    </html>
  )
}
