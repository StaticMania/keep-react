'use client'
import { Space_Mono } from 'next/font/google'
import { FC } from 'react'

interface ComponentApiProps {
  id: number
  propsName: string
  propsDescription: string
  default?: string
  propsType: string | string[]
}

interface ComponentProps {
  data: ComponentApiProps[]
}

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400'] })

const ComponentApi: FC<ComponentProps> = ({ data }) => {
  return (
    <div className={spaceMono.className + 'mx-auto w-full overflow-auto'}>
      <table className="whitespace-no-wrap z-50 mt-10 min-w-max table-auto overflow-hidden rounded-xl bg-white text-left dark:bg-metal-900 md:w-full lg:min-w-min">
        <thead>
          <tr>
            <th className="rounded-bl rounded-tl bg-metal-50 px-4  py-3 text-body-4 font-medium text-metal-900 dark:bg-white dark:text-metal-900">
              Property
            </th>
            <th className="bg-metal-50 px-4 py-3 text-body-4 font-medium text-metal-900 dark:bg-white dark:text-metal-900">
              Description
            </th>
            <th className="bg-metal-50 px-4  py-3 text-body-4 font-medium text-metal-900 dark:bg-white dark:text-metal-900">
              Type
            </th>
            <th className="rounded-br  bg-metal-50 px-4 py-3 text-body-4 font-medium text-metal-900 dark:bg-white dark:text-metal-900">
              Default
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item.id}>
                <td className="border-t border-metal-100 px-4 py-3 text-body-4 !font-medium text-black dark:border-metal-800 dark:text-metal-300">
                  {item.propsName}
                </td>
                <td className="border-t border-metal-100 px-4 py-3 text-body-4 text-metal-400 dark:border-metal-800 dark:text-metal-300">
                  {item.propsDescription}
                </td>
                <td className="border-t border-metal-100 px-4 py-3 text-body-4 text-metal-400 dark:border-metal-800 dark:text-metal-300">
                  {typeof item.propsType === 'string'
                    ? item.propsType
                    : item?.propsType?.map((prop) => (
                        <pre
                          key={prop}
                          className="m-0.5 inline-block rounded-xl bg-metal-100 px-2 py-0.5 dark:bg-metal-800">
                          {prop}
                        </pre>
                      ))}
                </td>
                <td className="border-t border-metal-100 px-4 py-3 text-body-4 text-metal-400 dark:border-metal-800 dark:text-metal-300">
                  {item.default ? item.default : 'None'}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ComponentApi
