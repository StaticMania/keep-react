'use client'

import { usePathname } from 'next/navigation'
import { MagnifyingGlass } from 'phosphor-react'
import { useEffect, useState } from 'react'
import Search from './Search'

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg border border-metal-100 bg-white p-2.5 transition-all duration-300 hover:bg-metal-25 laptop:hidden dark:border-metal-800 dark:bg-metal-900 dark:hover:border-metal-600 dark:hover:bg-metal-900">
        <MagnifyingGlass className="size-5" />
      </button>
      <button
        onClick={() => setIsOpen(true)}
        className="hidden w-[300px] items-center justify-between rounded-lg border border-metal-100 px-3 py-2.5 text-body-4 font-normal text-metal-600 transition-all duration-300 hover:bg-white laptop:flex dark:border-metal-800 dark:bg-metal-900 dark:hover:border-metal-600 dark:hover:bg-metal-900">
        <span className="flex items-center gap-2 text-body-4 font-normal text-metal-300 dark:text-white">
          <MagnifyingGlass size={20} />
          <span>Search component</span>
        </span>
        <span className="flex items-center text-body-4 font-medium text-metal-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="">
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          K
        </span>
      </button>
      <Search setOpen={setIsOpen} open={isOpen} />
    </div>
  )
}

export default SearchBar
