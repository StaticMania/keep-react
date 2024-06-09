import { ContainerData } from './ContainerData'

export const ContainerContent = () => {
  return (
    <div id="linkPage" className="min-w-full flex-none overflow-hidden px-4 sm:px-6 md:px-0">
      <table className="whitespace-no-wrap z-50 mt-10 w-full min-w-max table-auto overflow-hidden rounded-xl bg-white text-left dark:bg-metal-900 lg:min-w-min">
        <thead>
          <tr>
            <th className="rounded-tl-xl bg-metal-900 px-4 py-3 text-body-4 font-medium text-white dark:bg-white dark:text-metal-900">
              Class
            </th>
            <th className="bg-metal-900 px-4 py-3 text-body-4 font-medium text-white dark:bg-white dark:text-metal-900">
              Breakpoint
            </th>
            <th className="rounded-tr-xl bg-metal-900 px-4 py-3 text-body-4 font-medium text-white dark:bg-white dark:text-metal-900">
              Properties
            </th>
          </tr>
        </thead>
        <tbody className="align-baseline">
          {ContainerData.map((item) => (
            <tr key={item.id}>
              <td
                translate="no"
                className={
                  item.name &&
                  `border-t border-metal-100 px-4 py-3 text-body-4 font-normal text-metal-500 dark:border-metal-800 dark:text-metal-300`
                }>
                {item.name}
              </td>
              <td
                translate="no"
                className="border-t border-metal-100 px-4 py-3 text-body-4 font-normal text-metal-500 dark:border-metal-800 dark:text-metal-300">
                {item.breakpoints}
              </td>
              <td
                translate="no"
                className="border-t border-metal-100 px-4 py-3 text-body-4 font-normal text-metal-500 dark:border-metal-800 dark:text-metal-300">
                {item.properties}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
