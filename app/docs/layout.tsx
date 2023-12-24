/* eslint-disable no-undef */
'use client'
import Link from 'next/link'
import { Accordion } from '../src'
import { ReactNode, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { gettingStartedRoutes, routes } from '../../routes/routes'

export interface Sections {
  id: number
  idName: string
}

const DocsLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState<string>('')
  const [allSection, setAllSection] = useState<NodeListOf<Element> | []>([])

  const [tableOfContents, setTableOfContents] = useState<HTMLUListElement | null>(null)

  // get the table of contents
  useEffect(() => {
    const toc = document.querySelector<HTMLUListElement>('#table-of-contents + ul')
    const sections: NodeListOf<Element> = document?.querySelectorAll('.section-title')

    if (sections !== null && sections.length > 0) {
      setAllSection(sections)
    }
    setTableOfContents(toc)
  }, [pathname])

  // link is active or not active
  const IsActive = (str: string) => {
    const lastPart = pathname.toLocaleLowerCase().split('/').pop()
    const strLastPart = str.toLocaleLowerCase().split('/').pop()
    return strLastPart === lastPart
  }

  const newIdArr: Sections[] = Array.from(allSection).map((section, index) => ({
    id: index + 1,
    idName: section.id,
  }))

  if (tableOfContents) {
    const linkElements = tableOfContents.querySelectorAll('li a')

    linkElements.forEach((link) => {
      const href = link.getAttribute('href')
      if ('#' + activeSection === href) {
        link.classList.add('active-link')
      } else {
        link.classList.remove('active-link')
      }
    })
  }

  // On this page active section html
  const innerHtml = tableOfContents?.innerHTML

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY

      for (const section of newIdArr) {
        const element = document.getElementById(section.idName)
        if (element) {
          const offsetTop = element.offsetTop
          if (currentPosition >= offsetTop && currentPosition < offsetTop + element.clientHeight) {
            setActiveSection(section.idName)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [newIdArr])

  return (
    <section className="pt-12 2xl:container">
      <aside
        id="linkPage"
        className="fixed left-0 top-20 z-20 hidden  h-screen  overflow-y-auto border-r border-r-metal-100 bg-white pt-8  lg:block lg:w-[calc(100vw-75vw)] 2xl:w-[calc(100%-75%)] 4k:w-[calc(100%-78%)]">
        <div className="ml-auto w-56 space-y-3 pr-3">
          <Accordion flush openFirstPanel className="border-none bg-transparent">
            <Accordion.Panel>
              <Accordion.Container className="p-0">
                <Accordion.Title className="text-body-5 font-semibold text-metal-900">Getting Started</Accordion.Title>
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
          <Accordion openFirstPanel flush className="border-none bg-transparent">
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
      </aside>
      <main className="mx-auto md:w-[calc(100vw-10vw)]  lg:w-[calc(100vw-5vw)] lg:pl-[calc(100vw-75vw)] xl:w-[calc(100vw-25vw)] xl:pl-[calc(100vw-85vw)] xl:pr-[calc(100vw-95vw)] 2xl:w-[calc(100vw-40vw)] 2xl:pl-[calc(100vw-93vw)] 2xl:pr-[calc(100vw-98vw)] 4k:w-[calc(100vw-49vw)] 4k:pl-[calc(100vw-100vw)] 4k:pr-[calc(100vw-95vw)]">
        <div className="overflow-y-auto px-4 pb-10">{children}</div>
      </main>
      <aside
        id="linkPage"
        className="fixed bottom-0 right-[max(0px,calc(50%-51rem))] top-16 z-20 hidden h-[calc(100vh-3rem)] overflow-y-auto pt-12 lg:w-[calc(100vw-80vw)] xl:block xl:w-[calc(100vw-82vw)] 2xl:w-[calc(100vw-86vw)] 4k:w-[calc(100vw-88vw)]">
        <div className="pl-5">
          <div className="flex flex-col justify-between overflow-y-auto">
            <h4 className="mb-2 text-body-5 font-semibold uppercase text-black/100">On this page</h4>
            <nav id="visible-table-of-contents">
              <ul
                dangerouslySetInnerHTML={{
                  __html: innerHtml ? innerHtml : '',
                }}
                className="border-l border-l-metal-100"
              />
            </nav>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default DocsLayout
