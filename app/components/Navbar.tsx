'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Command, List, MagnifyingGlass, X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { gettingStartedRoutes, navbarRoutes, routes } from '../../routes/routes'
import { Accordion, AccordionContainer, AccordionContent, AccordionPanel, AccordionTitle } from '../src'
import Search from './Search'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const IsActive = (str: string) => {
    const lastPart = pathname.toLowerCase().split('/').pop()
    const strPart = str.toLowerCase().split('/').pop()
    return strPart === lastPart
  }

  useEffect(() => {
    setActive(false)
    setIsOpen(false)
  }, [pathname])

  return (
    <header className="fixed top-0 z-50 w-full border-b border-metal-100 bg-white">
      <div className="relative mx-auto max-w-7xl px-6 2xl:px-0">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-28">
            <Link href="/" className="flex">
              <Image width={130} src="/images/keep.svg" height={53} alt="Keep React" className="hidden md:block" />
              <Image width={100} src="/images/keep.svg" height={35} alt="Keep React" className="block md:hidden" />
            </Link>
            <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
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
          <div className="hidden items-center gap-3 lg:flex">
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
          </div>
          <div className="flex items-center justify-between gap-1.5 sm:gap-3 lg:hidden">
            <button
              onClick={openModal}
              className="hidden w-[250px] items-center justify-between rounded-lg bg-primary-25 px-3 py-2.5 text-body-4 font-normal text-metal-600 transition-all duration-300 hover:bg-primary-50 sm:flex">
              <span className="flex items-center gap-2 text-body-4 font-normal text-metal-400">
                <MagnifyingGlass size={20} />
                <span>Search component...</span>
              </span>
              <span className="flex items-center text-body-4 font-normal text-metal-400">
                <Command size={20} />K
              </span>
            </button>

            <button
              onClick={openModal}
              className="flex rounded-lg bg-primary-25 p-2.5 transition duration-300 hover:bg-primary-50  sm:hidden">
              <MagnifyingGlass size={20} />
            </button>
            <Link
              href="https://github.com/StaticMania/keep-react"
              target="_blank"
              className="rounded-lg bg-primary-25 p-2.5 transition duration-300 hover:bg-primary-50">
              <Image src="/images/icon/github.svg" height={20} width={20} alt="github" />
            </Link>
            <Link
              href="https://discord.gg/xTf6w2nm9Z"
              target="_blank"
              className="rounded-lg bg-primary-25 p-2.5 transition duration-300 hover:bg-primary-50">
              <Image src="/images/icon/discord.svg" height={20} width={20} alt="github" />
            </Link>
            <button onClick={() => setActive(!active)}>
              {active ? (
                <span>
                  <X size={24} color="#455468" />
                </span>
              ) : (
                <span>
                  <List size={24} color="#455468" />
                </span>
              )}
            </button>
          </div>
          <div
            id="linkPage"
            className={`fixed right-0 top-[73px] h-screen w-72 overflow-y-auto border-l border-l-metal-100 bg-white pl-8 transition-all duration-300 lg:hidden ${
              active ? 'translate-x-0' : 'translate-x-full'
            }`}>
            <div className="mt-5 space-y-3 pr-4">
              <Accordion flush>
                <AccordionPanel className="!border-b-0">
                  <AccordionContainer className="p-0">
                    <AccordionTitle className="text-body-4 font-semibold text-metal-900 first-letter:!mr-0 first-letter:!text-metal-900">
                      Quick Link
                    </AccordionTitle>
                  </AccordionContainer>
                  <AccordionContent className="p-0">
                    <ul className="-ml-px mt-3 space-y-2 border-l border-l-metal-100">
                      {navbarRoutes.map((route) => (
                        <li key={route.id}>
                          <Link
                            className={`-ml-px border-l border-l-transparent pl-3 text-body-5 font-medium text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900 ${
                              IsActive(route.href) ? 'border-l !border-primary-500 !text-primary-500' : ''
                            }`}
                            href={route.href}>
                            {route.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>
              <Accordion flush>
                <AccordionPanel className="!border-b-0">
                  <AccordionContainer className="p-0">
                    <AccordionTitle className="text-body-4 font-semibold text-metal-900 first-letter:!mr-0 first-letter:!text-metal-900">
                      Getting Started
                    </AccordionTitle>
                  </AccordionContainer>
                  <AccordionContent className="p-0">
                    <ul className="-ml-px mt-3 space-y-2 border-l border-l-metal-100">
                      {gettingStartedRoutes.map((route) => (
                        <li key={route.id}>
                          <Link
                            className={`-ml-px border-l border-l-transparent pl-3 text-body-5 font-medium text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900 ${
                              IsActive(route.href) ? 'border-l !border-primary-500 !text-primary-500' : ''
                            }`}
                            href={route.href}>
                            {route.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>
              <Accordion flush>
                <AccordionPanel className="!border-b-0">
                  <AccordionContainer className="p-0">
                    <AccordionTitle className="text-body-4 font-semibold text-metal-900 first-letter:!mr-0 first-letter:!text-metal-900">
                      Components
                    </AccordionTitle>
                  </AccordionContainer>
                  <AccordionContent className="p-0">
                    <ul className="mt-3 space-y-2 border-l border-l-metal-100 pb-24">
                      {routes.map((route) => (
                        <li key={route.id}>
                          <Link
                            className={`-ml-px border-l border-l-transparent pl-3 text-body-5 font-medium text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900 ${
                              IsActive(route.href) ? 'border-l !border-primary-500 !text-primary-500' : ''
                            }`}
                            href={route.href}>
                            {route.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionPanel>
              </Accordion>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
