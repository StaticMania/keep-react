/**
 * This file defines a TypeScript React component named `ComponentApi` that renders a table displaying the properties of given component.
 *
 * The `ComponentApi` component accepts a single prop: `data`. This prop is an array of objects, where each object represents a property of the component being documented.
 *
 * Each object in the `data` array should have the following properties as defined by the `ComponentApiProps` interface:
 * - `id`: A unique identifier for the property.
 * - `propsName`: The name of the property.
 * - `propsDescription`: A description of what the property does.
 * - `default`: The default value of the property, if any. This is an optional property.
 * - `propsType`: The type of the property. This can be a string or an array of strings.
 */
import { Space_Mono } from "next/font/google";
import React, { FC } from "react";

// Define the interface for the properties of the component being documented
interface ComponentApiProps {
  id: number
  propsName: string
  propsDescription: string
  default?: string
  propsType: string | string[]
}

// Define the interface for the props of the `ComponentApi` component
interface ComponentProps {
  data: ComponentApiProps[]
}

// Load the Space Mono font from Google Fonts
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400"] });

// Define the `ComponentApi` component
const ComponentApi: FC<ComponentProps> = ({ data }) => {
  return (
    <div className={spaceMono.className + " w-full mx-auto overflow-auto"}>
      <table className="table-auto mt-10 mb-6 md:w-full text-left whitespace-no-wrap lg:min-w-min min-w-max bg-white border border-slate-100 z-50">
        <thead>
          <tr>
            <th className="rounded-bl rounded-tl bg-slate-50 px-4 py-3 text-sm font-medium leading-[22px] tracking-[-0.2px] text-slate-900">
              Property
            </th>
            <th className="bg-slate-50 px-4 py-3 text-sm font-medium leading-[22px] tracking-[-0.2px] text-slate-900">
              Description
            </th>
            <th className="rounded-br rounded-tr bg-slate-50 px-4 py-3 text-sm font-medium leading-[22px] tracking-[-0.2px] text-slate-900">
              Type
            </th>
            <th className="rounded-br rounded-tr bg-slate-50 px-4 py-3 text-sm font-medium leading-[22px] tracking-[-0.2px] text-slate-900">
              Default
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item.id}>
                <td className="border-t border-slate-100 px-4 py-3 text-sm !font-medium leading-[22px] tracking-[-0.3px] text-black">
                  {item.propsName}
                </td>
                <td className="border-t border-slate-100 px-4 py-3 text-sm leading-[22px] tracking-[-0.3px] text-slate-500">
                  {item.propsDescription}
                </td>
                <td className="border-t border-slate-100 px-4 py-3 text-sm leading-[22px] tracking-[-0.3px] text-pink-400">
                  {typeof item.propsType === 'string'
                    ? item.propsType
                    : item.propsType.map((prop) => (
                        <pre key={prop} className="m-0.5 inline-block rounded bg-slate-100 px-2 py-0.5 ">
                          {prop}
                        </pre>
                      ))}
                </td>
                <td className="border-t border-slate-100 px-4 py-3 text-sm leading-[22px] tracking-[-0.3px] text-slate-500">
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
