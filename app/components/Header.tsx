'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { List, X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import KeepDarkLogo from '../../public/images/keep-dark.svg'
import KeepLogo from '../../public/images/keep.svg'
import { gettingStartedRoutes, layoutRoutes, navbarRoutes, routes } from '../../routes/routes'
import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionItem,
  AccordionTitle,
  buttonVariants,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  VisuallyHidden,
} from '../src'
import { cn } from '../src/utils/cn'
import SearchBar from './SearchBar'
import ThemeSwitcher from './ThemeSwitcher'

const Header = () => {
  const pathname = usePathname()
  const [active, setActive] = useState(false)

  useEffect(() => {
    setActive(false)
  }, [pathname])

  const IsActive = (str: string) => {
    const lastPart = pathname.toLowerCase().split('/').pop()
    const strPart = str.toLowerCase().split('/').pop()
    return strPart === lastPart
  }
  return (
    <header
      className={`fixed top-0 z-50 w-full border-b bg-white dark:border-metal-800 ${pathname === '/' ? 'border-b-metal-100 dark:border-b-metal-900 dark:bg-[#0D1015]' : 'border-b-transparent dark:border-b-transparent dark:bg-metal-900'}`}>
      <div className="relative mx-auto max-w-7xl px-6 2xl:px-0">
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-28">
            <Link href="/" className="flex">
              <Image src={KeepLogo} alt="Keep React" width="130" height="53" className="block dark:hidden" />
              <Image src={KeepDarkLogo} alt="Keep React" width="130" height="53" className="hidden dark:block" />
            </Link>
            <div className="hidden laptop:ml-auto laptop:flex laptop:items-center laptop:space-x-10">
              {navbarRoutes.map((nav) => (
                <Link
                  key={nav.id}
                  href={nav.href}
                  target={nav.redirect ? '_blank' : '_self'}
                  className={`text-body-4 font-medium text-metal-600 hover:text-primary-500 active:text-primary-500 dark:text-metal-300 dark:active:text-white ${nav.name === 'Documentation' && pathname.includes('/docs/') ? 'text-primary-500 dark:text-white' : ''} ${nav.name === 'Blog' && pathname === '/blog' ? 'text-primary-500 dark:text-white' : ''}`}>
                  {nav.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <SearchBar />
            <Link
              href="https://github.com/StaticMania/keep-react"
              target="_blank"
              className="rounded-lg border border-metal-100 bg-white p-2.5 transition-all duration-300 hover:bg-metal-25 dark:border-metal-800 dark:bg-metal-900 dark:hover:border-metal-600 dark:hover:bg-metal-900">
              <Image src="/images/icon/github.svg" height={22} width={22} alt="github" className="block dark:hidden" />
              <Image
                src="/images/icon/github-dark.svg"
                height={22}
                width={22}
                alt="github"
                className="hidden dark:block"
              />
            </Link>
            <Link
              href="https://discord.gg/fSxDJyvJmr"
              target="_blank"
              className="rounded-lg border border-metal-100 bg-white p-2.5 transition-all duration-300 hover:bg-metal-25 dark:border-metal-800 dark:bg-metal-900 dark:hover:border-metal-600 dark:hover:bg-metal-900">
              <Image src="/images/icon/discord.svg" height={22} width={22} alt="discord" />
            </Link>
            <ThemeSwitcher />
            <button
              onClick={() => setActive(!active)}
              className="rounded-lg border border-metal-100 bg-white p-2.5 transition-all duration-300 hover:bg-metal-25 laptop:hidden dark:border-metal-800 dark:bg-metal-900 dark:hover:border-metal-600 dark:hover:bg-metal-900">
              {active ? (
                <span>
                  <X size={20} className="text-metal-900 dark:text-white" />
                </span>
              ) : (
                <span>
                  <List size={20} className="text-metal-900 dark:text-white" />
                </span>
              )}
            </button>
            <Link
              href="/docs/getting-started/introduction"
              className={cn(buttonVariants({ color: 'secondary' }), 'hidden sm:block')}>
              get started
            </Link>
            <Drawer showCloseIcon={false} onOpenChange={setActive} open={active}>
              <DrawerContent
                position="right"
                className="w-full space-y-3 overflow-auto rounded-none p-6 md:w-1/2 laptop:hidden">
                <DrawerClose asChild className="absolute right-2 top-2">
                  <button className="cursor-pointer">
                    <X size={16} className="text-metal-900 dark:text-white" />
                  </button>
                </DrawerClose>
                <VisuallyHidden>
                  <DrawerTitle />
                  <DrawerDescription />
                </VisuallyHidden>
                <Accordion collapsible type="single" flush defaultValue="getting-started">
                  <AccordionItem value="getting-started" className="border-b-0">
                    <AccordionAction className="px-0 py-0">
                      <AccordionTitle className="text-body-4 font-semibold text-metal-900 dark:text-white">
                        Getting Started
                      </AccordionTitle>
                    </AccordionAction>
                    <AccordionContent className="p-0">
                      <ul className="mt-3 space-y-1.5 border-l border-l-metal-100 dark:border-l-metal-800">
                        {gettingStartedRoutes.map((route) => (
                          <li key={route.id}>
                            <Link
                              className={`-ml-px border-l border-l-transparent pl-3 text-body-4 font-medium text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900 dark:text-metal-400 dark:hover:border-white dark:hover:text-white ${
                                IsActive(route.href)
                                  ? 'border-l !border-primary-500 text-primary-500 transition-colors duration-150 hover:text-primary-500 dark:!border-white dark:text-white dark:hover:text-white'
                                  : ''
                              }`}
                              href={route.href}>
                              {route.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion collapsible type="single" flush defaultValue="layout">
                  <AccordionItem className="border-b-0" value="layout">
                    <AccordionAction className="px-0 py-0">
                      <AccordionTitle className="text-body-4 font-semibold text-metal-900 dark:text-white">
                        Layout
                      </AccordionTitle>
                    </AccordionAction>
                    <AccordionContent className="p-0">
                      <ul className="mt-3 space-y-1.5 border-l border-l-metal-100 dark:border-l-metal-800">
                        {layoutRoutes.map((route) => (
                          <li key={route.id}>
                            <Link
                              className={`-ml-px border-l border-l-transparent pl-3 text-body-4 font-medium text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900 dark:text-metal-400 dark:hover:border-white dark:hover:text-white ${
                                IsActive(route.href)
                                  ? 'border-l !border-primary-500 text-primary-500 transition-colors duration-150 hover:text-primary-500 dark:!border-white dark:text-white dark:hover:text-white'
                                  : ''
                              }`}
                              href={route.href}>
                              {route.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion collapsible type="single" flush defaultValue="components">
                  <AccordionItem className="border-b-0" value="components">
                    <AccordionAction className="px-0 py-0">
                      <AccordionTitle className="text-body-4 font-semibold text-metal-900 dark:text-white">
                        Components
                      </AccordionTitle>
                    </AccordionAction>
                    <AccordionContent className="p-0">
                      <ul className="mt-3 space-y-1.5 border-l border-l-metal-100 dark:border-l-metal-800">
                        {routes.map((route) => (
                          <li key={route.id}>
                            <Link
                              className={`-ml-px border-l border-l-transparent pl-3 text-body-4 font-medium text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900 dark:text-metal-400 dark:hover:border-white dark:hover:text-white ${
                                IsActive(route.href)
                                  ? 'border-l !border-primary-500 text-primary-500 transition-colors duration-150 hover:text-primary-500 dark:!border-white dark:text-white dark:hover:text-white'
                                  : ''
                              }`}
                              href={route.href}>
                              {route.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </DrawerContent>
            </Drawer>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
