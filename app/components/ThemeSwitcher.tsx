'use client'
import { useTheme } from 'next-themes'
import { MoonStars, SunDim } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Dropdown, DropdownAction, DropdownContent, DropdownList } from '../src'

const ThemeSwitcher = () => {
  const { setTheme, theme } = useTheme()
  const [client, setClient] = useState(false)

  useEffect(() => {
    let ignore = false
    if (!ignore) {
      setClient(true)
    }
    return () => {
      ignore = true
    }
  }, [])
  return client ? (
    <Dropdown placement="bottom-end" className="max-w-[150px]">
      <DropdownAction>
        {theme === 'dark' ? <MoonStars size={20} color="#fff" /> : <SunDim size={20} color="#444" />}
      </DropdownAction>
      <DropdownContent>
        <DropdownList className="flex flex-col items-start">
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
        </DropdownList>
      </DropdownContent>
    </Dropdown>
  ) : null
}

export default ThemeSwitcher
