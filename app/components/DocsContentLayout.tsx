import type { FC, ReactNode } from 'react'

interface DocsContentLayoutProps {
  title: string
  description: string
  children: ReactNode
}

export const DocsContentLayout: FC<DocsContentLayoutProps> = function ({ title, description, children }) {
  return (
    <div>
      <div className="mb-[50px]">
        <h1 className="mb-2 inline-block w-full text-body-1 font-semibold leading-10 tracking-[-0.5px] text-metal-900 md:text-[26px]">
          {title}
        </h1>
        <p className="text-body-5 leading-6 tracking-[-0.3px] text-metal-700 md:text-body-4">{description}</p>
      </div>
      <div id="mainContent">{children}</div>
    </div>
  )
}
