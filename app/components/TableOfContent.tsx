/* eslint-disable no-undef */
'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export interface Sections {
  id: number
  idName: string
}

const TableOfContent = () => {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState<string>('')
  const [allSection, setAllSection] = useState<NodeListOf<Element> | []>([])
  const [tableOfContents, setTableOfContents] = useState<HTMLUListElement | null>(null)

  useEffect(() => {
    const toc = document.querySelector<HTMLUListElement>('#table-of-contents + ul')
    const sections: NodeListOf<Element> = document?.querySelectorAll('.section-title')

    if (sections !== null && sections.length > 0) {
      setAllSection(sections)
    }

    setTableOfContents(toc)
  }, [pathname])

  const newIdArr: Sections[] = Array.from(allSection).map((section, index) => ({
    id: index + 1,
    idName: section.id,
  }))

  if (tableOfContents) {
    const linkElements = tableOfContents.querySelectorAll('li a')

    linkElements.forEach((link) => {
      const href = link.getAttribute('href')
      link.setAttribute('data-disable-nprogress', 'true')
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
    <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
      <aside id="linkPage" className="sticky top-28 h-[80vh] 2xl:top-60">
        <div className="2xl:pl-5">
          <div className="flex flex-col justify-between overflow-y-auto">
            <h4 className="mb-2 text-body-4 font-semibold uppercase text-black/100">On this page</h4>
            <nav id="visible-table-of-contents">
              <ul
                dangerouslySetInnerHTML={{
                  __html: innerHtml ?? '',
                }}
                className="border-l border-l-metal-100"
              />
            </nav>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default TableOfContent
