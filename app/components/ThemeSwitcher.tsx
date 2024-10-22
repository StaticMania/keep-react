'use client'
import { useTheme } from 'next-themes'
import { Desktop, MoonStars, SunDim } from 'phosphor-react'
import { useEffect, useState } from 'react'

const ThemeSwitcher = () => {
  const { setTheme } = useTheme()
  const [client, setClient] = useState(false)
  const [showTheme, setShowTheme] = useState(false)

  useEffect(() => {
    let ignore = false
    if (!ignore) {
      setClient(true)
    }
    return () => {
      ignore = true
    }
  }, [])

  useEffect(() => {
    const handleEscapeKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        showTheme && setShowTheme(false)
      }
    }

    const handleClickOutsideModal = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest('.list-menu')) {
        showTheme && setShowTheme(false)
      }
    }

    if (showTheme) {
      document.addEventListener('keydown', handleEscapeKeyPress)
      document.addEventListener('mousedown', handleClickOutsideModal)
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress)
      document.removeEventListener('mousedown', handleClickOutsideModal)
    }
  }, [showTheme])

  return client ? (
    <div className="relative">
      <button
        onClick={() => setShowTheme(!showTheme)}
        className="rounded-lg border border-metal-100 bg-white p-2.5 transition-all duration-300 hover:bg-metal-25 dark:border-metal-800 dark:bg-metal-900 dark:hover:border-metal-600 dark:hover:bg-metal-900">
        <span className="hidden dark:block ">
          <MoonStars size={20} color="#fff" />
        </span>
        <span className="block dark:hidden">
          <SunDim size={20} color="#444" />
        </span>
        <span className="sr-only">Toggle theme</span>
      </button>

      {showTheme && (
        <div className="list-menu absolute right-0 top-[calc(100%+24px)] w-[150px] space-y-1 rounded-xl border border-metal-100 bg-white p-4 dark:border-metal-800 dark:bg-metal-900">
          <button
            className="theme-switch"
            onClick={() => {
              setTheme('light')
              setShowTheme(false)
            }}>
            <SunDim size={16} />
            Light
          </button>
          <button
            className="theme-switch"
            onClick={() => {
              setTheme('dark')
              setShowTheme(false)
            }}>
            <MoonStars size={16} />
            Dark
          </button>
          <button
            className="theme-switch"
            onClick={() => {
              setTheme('system')
              setShowTheme(false)
            }}>
            <Desktop size={16} />
            System
          </button>
        </div>
      )}
    </div>
  ) : null
}

export default ThemeSwitcher
