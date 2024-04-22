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
        <h1 className="mb-2 inline-block w-full text-heading-6 font-semibold text-metal-900 dark:text-white">
          {title}
        </h1>
        <p className="text-body-3 text-metal-500 dark:text-metal-300">{description}</p>
      </div>
      <div id="mainContent">{children}</div>
    </div>
  )
}
