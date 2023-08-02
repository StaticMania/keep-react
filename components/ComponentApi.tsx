import { ComponentApiProps } from "@/types/types";
import React, { FC } from "react";

interface ComponentProps {
  data: ComponentApiProps[];
}

const ComponentApi: FC<ComponentProps> = ({ data }) => {
  return (
    <div className="w-full mx-auto overflow-auto">
      <table className="table-auto md:w-full text-left whitespace-no-wrap lg:min-w-min min-w-max">
        <thead>
          <tr>
            <th className="px-4 py-3 tracking-wider font-medium text-slate-900 text-sm bg-slate-25 rounded-tl rounded-bl">
              Property
            </th>
            <th className="px-4 py-3 tracking-wider font-medium text-slate-900 text-sm bg-slate-25">
              Description
            </th>
            <th className="px-4 py-3 tracking-wider font-medium text-slate-900 text-sm bg-slate-25">
              Type
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => {
            return (
              <tr key={item.id}>
                <td className="border-t border-slate-50 px-4 py-3">
                  {item.propsName}
                </td>
                <td className="border-t border-slate-50 px-4 py-3">
                  {item.propsDescription}
                </td>
                <td className="border-t border-slate-50 px-4 py-3">
                  {item.propsType}
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
