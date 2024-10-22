'use client'
import { useTheme } from 'next-themes'
import { MoonStars, SunDim } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { Dropdown, DropdownAction, DropdownContent, DropdownItem } from '../../../src'

const ViteThemeSwitcher = () => {
  const { setTheme } = useTheme()
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
    <Dropdown>
      <DropdownAction asChild>
        <button className="rounded-lg bg-primary-25 p-2.5 dark:bg-white">
          <MoonStars size={20} color="#1C222B" className="hidden dark:block" />
          <SunDim size={20} color="#444" className="block dark:hidden" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownAction>
      <DropdownContent
        align="start"
        className="w-[180px] border border-metal-100 dark:border-metal-800 dark:bg-metal-900">
        <DropdownItem onClick={() => setTheme('light')}>Light</DropdownItem>
        <DropdownItem onClick={() => setTheme('dark')}>Dark</DropdownItem>
        <DropdownItem onClick={() => setTheme('system')}>System</DropdownItem>
      </DropdownContent>
    </Dropdown>
  ) : null
}

export default ViteThemeSwitcher
