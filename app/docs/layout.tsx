/* eslint-disable no-undef */
'use client'
import Link from 'next/link'
import { Accordion, Typography } from '../src'
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
    <section>
      <div className="sticky top-20 z-30 hidden h-4 w-full bg-primary-25 lg:block 2xl:h-20"></div>
      <div className="docs-page"></div>
      <div className="container relative z-20 grid grid-cols-12 gap-5 pt-10 2xl:pt-16">
        <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
          <aside
            id="componentListSidebar"
            className="sticky top-28 h-[80vh] space-y-5 overflow-auto 2xl:top-56 2xl:py-6 2xl:pl-8">
            <Accordion flush openFirstPanel>
              <Accordion.Panel className="!border-b-0">
                <Accordion.Container className="p-0">
                  <Accordion.Title className="text-body-4 font-semibold text-metal-900 first-letter:!mr-0">
                    Getting Started
                  </Accordion.Title>
                </Accordion.Container>
                <Accordion.Content className="p-0">
                  <Typography variant="ul" className="mt-3 space-y-1.5 border-l border-l-metal-100">
                    {gettingStartedRoutes.map((route) => (
                      <Typography variant="li" key={route.id}>
                        <Link
                          className={`-ml-px border-l border-l-transparent pl-3 text-body-5 font-medium text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900 ${
                            IsActive(route.href)
                              ? 'border-l !border-primary-500 text-primary-500 transition-colors duration-150'
                              : ''
                          }`}
                          href={route.href}>
                          {route.name}
                        </Link>
                      </Typography>
                    ))}
                  </Typography>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion openFirstPanel flush>
              <Accordion.Panel className="!border-b-0">
                <Accordion.Container className="p-0">
                  <Accordion.Title className="text-body-4 font-semibold text-metal-900 first-letter:!mr-0">
                    Components
                  </Accordion.Title>
                </Accordion.Container>
                <Accordion.Content className="p-0">
                  <Typography variant="ul" className="mb-4 mt-3 space-y-1.5 border-l border-l-metal-100">
                    {routes.map((route) => (
                      <Typography variant="li" key={route.id}>
                        <Link
                          className={`-ml-px border-l border-l-transparent pl-3 text-body-5 font-medium text-metal-500 hover:-ml-px hover:border-l hover:border-metal-500 hover:text-metal-900 ${
                            IsActive(route.href)
                              ? 'border-l !border-primary-500 text-primary-500 transition-colors duration-150'
                              : ''
                          }`}
                          href={route.href}>
                          {route.name}
                        </Link>
                      </Typography>
                    ))}
                  </Typography>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </aside>
        </div>
        <div className="col-span-12 py-6 lg:col-span-9 xl:col-span-8 2xl:py-4">
          <div id="linkPage" className="overflow-y-auto">
            {children}
          </div>
        </div>
        <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
          <aside id="linkPage" className="sticky top-28 h-[80vh] 2xl:top-60">
            <div className="2xl:pl-5">
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
        </div>
      </div>
    </section>
  )
}

export default DocsLayout
