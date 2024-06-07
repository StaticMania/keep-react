import { ReactNode } from 'react'
import DocSidebar from '../components/DocSidebar'
import TableOfContent from '../components/TableOfContent'

const DocsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <div className="sticky top-20 z-30 hidden h-4 w-full bg-primary-25 lg:block 2xl:h-20"></div>
      <div className="docs-page"></div>
      <div className="container relative z-20 grid grid-cols-12 gap-5 pt-10 2xl:pt-16">
        <DocSidebar />
        <div className="col-span-12 py-6 lg:col-span-9 xl:col-span-8 2xl:py-4">
          <div id="linkPage" className="overflow-y-auto">
            {children}
          </div>
        </div>
        <TableOfContent />
      </div>
    </section>
  )
}

export default DocsLayout
