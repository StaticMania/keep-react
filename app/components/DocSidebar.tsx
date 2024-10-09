'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { gettingStartedRoutes, layoutRoutes, routes } from '../../routes/routes'
import { Accordion, AccordionAction, AccordionContent, AccordionItem, AccordionTitle } from '../src'

const DocSidebar = () => {
  const pathname = usePathname()

  const IsActive = (str: string) => {
    const lastPart = pathname.toLowerCase().split('/').pop()
    const strPart = str.toLowerCase().split('/').pop()
    return strPart === lastPart
  }
  return (
    <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
      <aside
        id="componentListSidebar"
        className="sticky top-28 h-[75vh] space-y-5 overflow-auto 2xl:top-56 2xl:py-6 2xl:pl-8">
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
      </aside>
    </div>
  )
}

export default DocSidebar
