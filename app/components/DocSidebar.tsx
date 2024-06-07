'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { gettingStartedRoutes, layoutRoutes, routes } from '../../routes/routes'
import { Accordion, AccordionContainer, AccordionContent, AccordionPanel, AccordionTitle } from '../src'

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
        <Accordion flush openFirstPanel>
          <AccordionPanel className="!border-b-0">
            <AccordionContainer className="p-0">
              <AccordionTitle className="text-body-4 font-semibold text-metal-900 first-letter:!mr-0 first-letter:!text-metal-900 dark:text-metal-900">
                Getting Started
              </AccordionTitle>
            </AccordionContainer>
            <AccordionContent className="p-0">
              <ul className="mt-3 space-y-1.5 border-l border-l-metal-100">
                {gettingStartedRoutes.map((route) => (
                  <li key={route.id}>
                    <Link
                      className={`-ml-px border-l border-l-transparent pl-3 text-body-4 font-medium text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900 ${
                        IsActive(route.href)
                          ? 'border-l !border-primary-500 text-primary-500 transition-colors duration-150 hover:text-primary-500'
                          : ''
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
        <Accordion flush openFirstPanel>
          <AccordionPanel className="!border-b-0">
            <AccordionContainer className="p-0">
              <AccordionTitle className="text-body-4 font-semibold text-metal-900 first-letter:!mr-0 first-letter:!text-metal-900 dark:text-metal-900">
                Layout
              </AccordionTitle>
            </AccordionContainer>
            <AccordionContent className="p-0">
              <ul className="mt-3 space-y-1.5 border-l border-l-metal-100">
                {layoutRoutes.map((route) => (
                  <li key={route.id}>
                    <Link
                      className={`-ml-px border-l border-l-transparent pl-3 text-body-4 font-medium text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900  ${
                        IsActive(route.href)
                          ? 'border-l !border-primary-500 text-primary-500 transition-colors duration-150 hover:text-primary-500'
                          : ''
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
        <Accordion openFirstPanel flush>
          <AccordionPanel className="!border-b-0">
            <AccordionContainer className="p-0">
              <AccordionTitle className="text-body-4 font-semibold text-metal-900 first-letter:!mr-0 first-letter:!text-metal-900 dark:text-metal-900">
                Components
              </AccordionTitle>
            </AccordionContainer>
            <AccordionContent className="p-0">
              <ul className="mb-4 mt-3 space-y-1.5 border-l border-l-metal-100">
                {routes.map((route) => (
                  <li key={route.id}>
                    <Link
                      className={`-ml-px border-l border-l-transparent pl-3 text-body-4 font-medium text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900  ${
                        IsActive(route.href)
                          ? 'border-l !border-primary-500 text-primary-500 transition-colors duration-150 hover:text-primary-500'
                          : ''
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
      </aside>
    </div>
  )
}

export default DocSidebar
