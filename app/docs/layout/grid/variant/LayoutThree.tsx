const LayoutThree = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-5 gap-5">
      <div className="order-1 col-span-12 rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900 lg:col-span-6 lg:row-span-4"></div>
      <div className="order-2 col-span-12 rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900 lg:col-span-6 lg:col-start-1 lg:row-start-5"></div>
      <div className="order-3 col-span-12 row-start-1 rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900 lg:col-span-6 lg:col-start-7"></div>
      <div className="order-4 col-span-6 row-start-2 rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900 lg:col-span-3 lg:col-start-7 lg:row-span-3"></div>
      <div className="order-5 col-span-6 row-start-2 rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900 lg:col-span-3 lg:col-start-10 lg:row-span-3"></div>
      <div className="order-6 col-span-6 rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900 lg:col-span-3 lg:col-start-7 lg:row-start-5"></div>
      <div className="order-7 col-span-6 rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900 lg:col-span-3 lg:col-start-10 lg:row-start-5"></div>
    </div>
  )
}

const LayoutThreeCode = `
export const GridLayoutThree = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-5 gap-5">
      <div className="order-1 col-span-12 lg:col-span-6 lg:row-span-4"></div>
      <div className="order-2 col-span-12 lg:col-span-6 lg:col-start-1 lg:row-start-5"></div>
      <div className="order-3 col-span-12 row-start-1 lg:col-span-6 lg:col-start-7"></div>
      <div className="order-4 col-span-6 row-start-2 lg:col-span-3 lg:col-start-7 lg:row-span-3"></div>
      <div className="order-5 col-span-6 row-start-2 lg:col-span-3 lg:col-start-10 lg:row-span-3"></div>
      <div className="order-6 col-span-6 lg:col-span-3 lg:col-start-7 lg:row-start-5"></div>
      <div className="order-7 col-span-6 lg:col-span-3 lg:col-start-10 lg:row-start-5"></div>
    </div>
  )
}
`

export { LayoutThree, LayoutThreeCode }
