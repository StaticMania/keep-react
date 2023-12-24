'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { List, MagnifyingGlass, X } from 'phosphor-react'
import Search from './Search'
import { gettingStartedRoutes, navbarRoutes, routes } from '../../routes/routes'
import { Accordion } from '../src'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [showModal, setShowMainModal] = useState(false)
  const pathname = usePathname()

  const IsActive = (str: string) => {
    const lastPart = pathname.toLocaleLowerCase().split('/').pop()
    return str.toLocaleLowerCase() === '/' + lastPart
  }

  useEffect(() => {
    setActive(false)
    setShowMainModal(false)
  }, [pathname])

  const handleModal = () => {
    setShowMainModal(!showModal)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-metal-100 bg-white">
      <div className="relative px-6 2xl:container">
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
                  className="text-body-5 font-normal text-metal-500 hover:text-metal-900 active:text-metal-900">
                  {nav.name}
                </Link>
              ))}
            </div>
          </div>
          {showModal && <Search setShowMainModal={setShowMainModal} showModal={showModal} />}
          <div className="hidden items-end gap-3 lg:flex">
            <button
              onClick={handleModal}
              className="rounded grayscale transition duration-300 hover:bg-primary-50 hover:grayscale-0 sm:bg-primary-25 sm:p-3">
              <span>
                <MagnifyingGlass size={20} color="#455468" />
              </span>
            </button>
            <a
              href="https://github.com/StaticMania/keep-react"
              target="_blank"
              className="rounded grayscale transition duration-300 hover:bg-primary-50 hover:grayscale-0 sm:bg-primary-25 sm:p-3">
              <Image src="/images/icon/github.svg" height={20} width={20} alt="github" />
            </a>
            <a
              href="https://react-storybook.keepdesign.io"
              target="_blank"
              className="rounded grayscale transition duration-300 hover:bg-primary-50 hover:grayscale-0 sm:bg-primary-25 sm:p-3">
              <svg
                stroke="#FF4785"
                fill="#FF4785"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="20px"
                width="20px"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.279 1.2v21.596a1.2 1.2 0 01-1.26 1.2l-16.096-.72a1.2 1.2 0 01-1.15-1.16l-.75-19.797a1.2 1.2 0 011.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z"></path>
              </svg>
            </a>
            <a
              href="https://discord.gg/fSxDJyvJmr"
              target="_blank"
              className="rounded grayscale transition duration-300 hover:bg-primary-50 hover:grayscale-0 sm:bg-primary-25 sm:p-3">
              <Image src="/images/icon/discord.svg" height={20} width={20} alt="github" />
            </a>
            <Link
              href="/docs/getting-started/Introduction"
              className="group h-min w-fit justify-center rounded-md border border-metal-900  bg-metal-900 px-4 py-2.5 text-center text-body-5 font-medium capitalize text-white transition-all duration-75 ease-in hover:bg-metal-800 focus:ring-4 focus:ring-metal-800 active:bg-metal-900">
              get started
            </Link>
          </div>
          <div className="flex items-center justify-between gap-3 lg:hidden">
            <button
              onClick={handleModal}
              className="grayscale transition duration-300 hover:grayscale-0 sm:rounded sm:bg-primary-25 sm:p-2.5 sm:hover:bg-primary-50">
              <MagnifyingGlass size={20} color="#455468" />
            </button>
            <a
              href="https://github.com/StaticMania/keep-react"
              target="_blank"
              className="grayscale transition duration-300 hover:grayscale-0 sm:rounded sm:bg-primary-25 sm:p-2.5 sm:hover:bg-primary-50">
              <Image src="/images/icon/github.svg" height={20} width={20} alt="github" />
            </a>
            <a
              href="https://react-storybook.keepdesign.io"
              target="_blank"
              className="grayscale transition duration-300 hover:grayscale-0 sm:rounded sm:bg-primary-25 sm:p-2.5 sm:hover:bg-primary-50">
              <svg
                stroke="#FF4785"
                fill="#FF4785"
                strokeWidth="0"
                role="img"
                viewBox="0 0 24 24"
                height="20px"
                width="20px"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M16.71.243l-.12 2.71a.18.18 0 00.29.15l1.06-.8.9.7a.18.18 0 00.28-.14l-.1-2.76 1.33-.1a1.2 1.2 0 011.279 1.2v21.596a1.2 1.2 0 01-1.26 1.2l-16.096-.72a1.2 1.2 0 01-1.15-1.16l-.75-19.797a1.2 1.2 0 011.13-1.27L16.7.222zM13.64 9.3c0 .47 3.16.24 3.59-.08 0-3.2-1.72-4.89-4.859-4.89-3.15 0-4.899 1.72-4.899 4.29 0 4.45 5.999 4.53 5.999 6.959 0 .7-.32 1.1-1.05 1.1-.96 0-1.35-.49-1.3-2.16 0-.36-3.649-.48-3.769 0-.27 4.03 2.23 5.2 5.099 5.2 2.79 0 4.969-1.49 4.969-4.18 0-4.77-6.099-4.64-6.099-6.999 0-.97.72-1.1 1.13-1.1.45 0 1.25.07 1.19 1.87z"></path>
              </svg>
            </a>
            <a
              href="https://discord.com/invite/xsNDwPks"
              target="_blank"
              className="grayscale transition duration-300 hover:grayscale-0 sm:rounded sm:bg-primary-25 sm:p-2.5 sm:hover:bg-primary-50">
              <Image src="/images/icon/discord.svg" height={20} width={20} alt="github" />
            </a>
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
              <Accordion flush className="border-none bg-transparent">
                <Accordion.Panel>
                  <Accordion.Container className="p-0">
                    <Accordion.Title className="text-body-5 font-semibold text-metal-900">Quick Link</Accordion.Title>
                  </Accordion.Container>
                  <Accordion.Content className="p-0">
                    <ul className="-ml-px mt-3 space-y-2 border-l border-l-metal-100">
                      {navbarRoutes.map((route) => (
                        <li key={route.id}>
                          <Link
                            className={`-ml-px border-l border-l-transparent pl-3 text-body-5  leading-[28px] tracking-[-0.2px] text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900 ${
                              IsActive(route.href)
                                ? 'border-l !border-metal-900 text-metal-900 transition-all duration-150'
                                : ''
                            }`}
                            href={route.href}>
                            {route.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
              <Accordion flush className="border-none bg-transparent">
                <Accordion.Panel>
                  <Accordion.Container className="p-0">
                    <Accordion.Title className="text-body-5 font-semibold text-metal-900">
                      Getting Started
                    </Accordion.Title>
                  </Accordion.Container>
                  <Accordion.Content className="p-0">
                    <ul className="-ml-px mt-3 space-y-2 border-l border-l-metal-100">
                      {gettingStartedRoutes.map((route) => (
                        <li key={route.id}>
                          <Link
                            className={`-ml-px border-l border-l-transparent pl-3 text-body-5  leading-[28px] tracking-[-0.2px] text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900 ${
                              IsActive(route.href)
                                ? 'border-l !border-metal-900 text-metal-900 transition-all duration-150'
                                : ''
                            }`}
                            href={route.href}>
                            {route.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
              <Accordion flush className="border-none bg-transparent">
                <Accordion.Panel>
                  <Accordion.Container className="p-0">
                    <Accordion.Title className="text-body-5 font-semibold text-metal-900">Components</Accordion.Title>
                  </Accordion.Container>
                  <Accordion.Content className="p-0">
                    <ul className="mt-3 space-y-2 border-l border-l-metal-100 pb-24">
                      {routes.map((route) => (
                        <li key={route.id}>
                          <Link
                            className={`-ml-px border-l border-l-transparent pl-3 text-body-5  leading-[28px] tracking-[-0.2px] text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900 ${
                              IsActive(route.href)
                                ? 'border-l !border-metal-900 text-metal-900 transition-all duration-150'
                                : ''
                            }`}
                            href={route.href}>
                            {route.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
