import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
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
          <ToastWrapper
            toastOptions={{
              classNames: {
                toast: 'dark:!bg-metal-900 border dark:!border-metal-800 !border-white !bg-white',
                title: 'text-metal-900 dark:!text-white',
                description: 'dark:!text-metal-300 text-metal-600',
                actionButton: 'dark:!bg-metal-800 !bg-metal-900 !text-white',
                cancelButton: 'dark:!bg-metal-800 !bg-metal-900 !text-white',
                closeButton: 'dark:!bg-metal-800 !bg-metal-900 !text-white',
                error: '!text-error-500',
                success: '!text-success-500',
                warning: '!text-warning-500',
                info: '!text-primary-500',
              },
            }}
          />
          <Navbar />
          <main className="relative pt-20">{children}</main>
          <Footer />
          <TopProgressBar />
        </KeepThemeProvider>
      </body>
    </html>
  )
}
