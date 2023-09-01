import { ComponentApiProps } from "@/types/types";
import { Space_Mono } from "next/font/google";
import React, { FC } from "react";

interface ComponentProps {
  data: ComponentApiProps[];
}

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400"] });

const ComponentApi: FC<ComponentProps> = ({ data }) => {
  return (
    <div className={spaceMono.className + " w-full mx-auto overflow-auto"}>
      <table className="table-auto mt-10 mb-6 md:w-full text-left whitespace-no-wrap lg:min-w-min min-w-max bg-white border border-slate-100">
        <thead>
          <tr>
            <th className="px-4 py-3 font-medium text-slate-900 text-sm leading-[22px] tracking-[-0.2px] bg-slate-50 rounded-tl rounded-bl">
              Property
            </th>
            <th className="px-4 py-3 font-medium text-slate-900 text-sm leading-[22px] tracking-[-0.2px] bg-slate-50">
              Description
            </th>
            <th className="px-4 py-3 font-medium text-slate-900 text-sm leading-[22px] tracking-[-0.2px] bg-slate-50 rounded-tr rounded-br">
              Type
            </th>
            <th className="px-4 py-3 font-medium text-slate-900 text-sm leading-[22px] tracking-[-0.2px] bg-slate-50 rounded-tr rounded-br">
              Default
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item.id}>
                <td className="border-t border-slate-100 px-4 py-3 text-sm text-black !font-medium leading-[22px] tracking-[-0.3px]">
                  {item.propsName}
                </td>
                <td className="border-t border-slate-100 px-4 py-3 text-sm text-slate-500 leading-[22px] tracking-[-0.3px]">
                  {item.propsDescription}
                </td>
                <td className="border-t text-pink-400 border-slate-100 px-4 py-3 text-sm leading-[22px] tracking-[-0.3px]">
                  {typeof item.propsType === "string"
                    ? item.propsType
                    : item.propsType.map((prop) => (
                        <pre
                          key={prop}
                          className="px-2 py-0.5 rounded bg-slate-100 inline-block m-0.5 "
                        >
                          {prop}
                        </pre>
                      ))}
                </td>
                <td className="border-t text-slate-500 border-slate-100 px-4 py-3 text-sm leading-[22px] tracking-[-0.3px]">
                  {item.default ? item.default : "None"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ComponentApi;
