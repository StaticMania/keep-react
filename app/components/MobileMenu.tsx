'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Command, List, MagnifyingGlass, X } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { gettingStartedRoutes, layoutRoutes, routes } from '~/routes/routes'
import {
  Accordion,
  AccordionAction,
  AccordionContent,
  AccordionItem,
  AccordionTitle,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  VisuallyHidden,
} from '../src'
import Search from './Search'
import ThemeSwitcher from './ThemeSwitcher'

const MobileMenu = () => {
  const pathname = usePathname()
  const [active, setActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [showDrawer, setShowDrawer] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  useEffect(() => {
    setActive(false)
    setIsOpen(false)
    setShowDrawer(false)
  }, [pathname])

  const IsActive = (str: string) => {
    const lastPart = pathname.toLowerCase().split('/').pop()
    const strPart = str.toLowerCase().split('/').pop()
    return strPart === lastPart
  }
  return (
    <>
      <div className="flex items-center justify-between gap-1.5 sm:gap-3 laptop:hidden">
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
          className="flex rounded-lg bg-primary-25 p-2.5 transition duration-300 hover:bg-primary-50 sm:hidden dark:text-metal-900">
          <MagnifyingGlass className="size-5" />
        </button>
        <Link
          href="https://github.com/StaticMania/keep-react"
          target="_blank"
          className="hidden rounded-lg bg-primary-25 p-2.5 transition duration-300 hover:bg-primary-50 sm:block">
          <Image src="/images/icon/github.svg" height={20} width={20} alt="github" />
        </Link>
        <Link
          href="https://discord.gg/xTf6w2nm9Z"
          target="_blank"
          className="rounded-lg bg-primary-25 p-2.5 transition duration-300 hover:bg-primary-50">
          <Image src="/images/icon/discord.svg" height={20} width={20} alt="github" />
        </Link>
        <ThemeSwitcher />
        <button onClick={() => setShowDrawer(!showDrawer)}>
          {active ? (
            <span>
              <X size={24} className="text-metal-900 dark:text-white" />
            </span>
          ) : (
            <span>
              <List size={24} className="text-metal-900 dark:text-white" />
            </span>
          )}
        </button>
      </div>
      <Search setIsOpen={setIsOpen} isOpen={isOpen} />
      <Drawer showCloseIcon={false} onOpenChange={setShowDrawer} open={showDrawer}>
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
    </>
  )
}

export default MobileMenu
