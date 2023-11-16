import { Space_Mono } from 'next/font/google'
import React, { FC } from 'react'

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
    <div className={spaceMono.className + ' mx-auto w-full overflow-auto '}>
      <table className="whitespace-no-wrap border-metal-100 z-50 mt-10 min-w-max table-auto border bg-white text-left md:w-full lg:min-w-min">
        <thead>
          <tr>
            <th className="bg-metal-50 text-metal-900 rounded-bl rounded-tl px-4 py-3 text-body-5 font-medium">
              Property
            </th>
            <th className="bg-metal-50 text-metal-900 px-4 py-3 text-body-5 font-medium">Description</th>
            <th className="bg-metal-50 text-metal-900 rounded-br rounded-tr px-4 py-3 text-body-5 font-medium">Type</th>
            <th className="bg-metal-50 text-metal-900 rounded-br rounded-tr px-4 py-3 text-body-5 font-medium">
              Default
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item.id}>
                <td className="border-metal-100 border-t px-4 py-3 text-body-5 !font-medium text-black">
                  {item.propsName}
                </td>
                <td className="border-metal-100 text-metal-500 border-t px-4 py-3 text-body-5">
                  {item.propsDescription}
                </td>
                <td className="border-metal-100 border-t px-4 py-3 text-body-5 text-pink-400">
                  {typeof item.propsType === 'string'
                    ? item.propsType
                    : item.propsType.map((prop) => (
                        <pre key={prop} className="bg-metal-100 m-0.5 inline-block rounded px-2 py-0.5 ">
                          {prop}
                        </pre>
                      ))}
                </td>
                <td className="border-metal-100 text-metal-500 border-t px-4 py-3 text-body-5">
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
