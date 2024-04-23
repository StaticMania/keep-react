'use client'
import { useTheme } from 'next-themes'
import { MoonStars, SunDim } from 'phosphor-react'
import { Dropdown } from '../src'

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme()
  return (
    <Dropdown
      placement="bottom-end"
      actionClassName="transition-all duration-300 bg-primary-25 border-0"
      className="max-w-[150px]"
      action={theme === 'dark' ? <MoonStars size={20} color="#fff" /> : <SunDim size={20} color="#444" />}>
      <Dropdown.List className="flex flex-col items-start">
        <button
          className="block w-full rounded-lg p-2 text-body-4 font-medium hover:bg-metal-100"
          onClick={() => setTheme('light')}>
          Light
        </button>
        <button
          className="block w-full rounded-lg p-2 text-body-4 font-medium hover:bg-metal-100"
          onClick={() => setTheme('dark')}>
          Dark
        </button>
        <button
          className="block w-full rounded-lg p-2 text-body-4 font-medium hover:bg-metal-100"
          onClick={() => setTheme('system')}>
          System
        </button>
      </Dropdown.List>
    </Dropdown>
  )
}

export default ThemeSwitcher
