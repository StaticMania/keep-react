import { FC, ReactNode } from 'react'

interface PropertiesTableProps {
  children?: ReactNode
}

export const PropertiesTable: FC<PropertiesTableProps> = ({ children }) => {
  return (
    <div id="linkPage" className="min-w-full flex-none overflow-hidden px-4 sm:px-6 md:px-0">
      <table className="whitespace-no-wrap z-50 mt-10 w-full min-w-max table-auto overflow-hidden rounded-xl bg-white text-left lg:min-w-min dark:bg-metal-900">
        <thead>
          <tr>
            <th className="rounded-tl-xl bg-metal-900 px-4 py-3 text-body-4 font-medium text-white dark:bg-white dark:text-metal-900">
              Class
            </th>
            <th className="rounded-tr-xl bg-metal-900 px-4 py-3 text-body-4 font-medium text-white dark:bg-white dark:text-metal-900">
              Properties
            </th>
          </tr>
        </thead>
        {children}
      </table>
    </div>
  )
}
