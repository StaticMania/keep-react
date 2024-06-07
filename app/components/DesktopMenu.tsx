'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Command, MagnifyingGlass } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { navbarRoutes } from '~/routes/routes'
import Search from './Search'
import ThemeSwitcher from './ThemeSwitcher'

const DesktopMenu = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])
  return (
    <>
      <div className="flex items-center space-x-28">
        <Link href="/" className="flex">
          <Image width={130} src="/images/keep.svg" height={53} alt="Keep React" className="hidden md:block" />
          <Image width={100} src="/images/keep.svg" height={35} alt="Keep React" className="block md:hidden" />
        </Link>
        <div className="hidden laptop:ml-auto laptop:flex laptop:items-center laptop:space-x-10">
          {navbarRoutes.map((nav) => (
            <Link
              key={nav.id}
              href={nav.href}
              target={nav.redirect ? '_blank' : '_self'}
              className={`text-body-4 font-medium text-metal-600 hover:text-primary-500 active:text-primary-500 ${nav.name === 'Documentation' && pathname.includes('/docs/') ? 'text-primary-500' : ''}`}>
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
      <Search setIsOpen={setIsOpen} isOpen={isOpen} closeModal={closeModal} />
      <div className="hidden items-center gap-3 laptop:flex">
        <button
          onClick={openModal}
          className="flex w-[300px] items-center justify-between rounded-lg bg-primary-25 px-3 py-2.5 text-body-4 font-normal text-metal-600 transition-all duration-300 hover:bg-primary-50">
          <span className="flex items-center gap-2 text-body-4 font-normal text-metal-400">
            <MagnifyingGlass size={20} />
            <span>Search component...</span>
          </span>
          <span className="flex items-center text-body-4 font-normal text-metal-400">
            <Command size={20} />K
          </span>
        </button>
        <Link
          href="https://github.com/StaticMania/keep-react"
          target="_blank"
          className="rounded-lg bg-primary-25 p-2.5 transition-all duration-300 hover:bg-primary-50">
          <Image src="/images/icon/github.svg" height={22} width={22} alt="github" />
        </Link>
        <Link
          href="https://discord.gg/fSxDJyvJmr"
          target="_blank"
          className="rounded-lg bg-primary-25 p-2.5 transition-all duration-300 hover:bg-primary-50">
          <Image src="/images/icon/discord.svg" height={22} width={22} alt="discord" />
        </Link>
        <Link
          href="/docs/getting-started/introduction"
          className="rounded-lg bg-metal-900 px-4 py-2.5 text-body-4 font-normal capitalize text-white transition-all duration-300 hover:bg-metal-800">
          get started
        </Link>
        <ThemeSwitcher />
      </div>
    </>
  )
}

export default DesktopMenu
