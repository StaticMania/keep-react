const LayoutOne = () => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-12 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-8 dark:border-metal-800 dark:bg-metal-900"></div>
      <div className="col-span-12 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-4 dark:border-metal-800 dark:bg-metal-900"></div>
      <div className="col-span-6 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-3 dark:border-metal-800 dark:bg-metal-900"></div>
      <div className="col-span-6 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-3 dark:border-metal-800 dark:bg-metal-900"></div>
      <div className="col-span-6 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-3 dark:border-metal-800 dark:bg-metal-900"></div>
      <div className="col-span-6 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-3 dark:border-metal-800 dark:bg-metal-900"></div>
    </div>
  )
}

const LayoutOneCode = `
export const GridLayoutOne = () => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-12 lg:col-span-8"></div>
      <div className="col-span-12 lg:col-span-4"></div>
      <div className="col-span-6 lg:col-span-3"></div>
      <div className="col-span-6 lg:col-span-3"></div>
      <div className="col-span-6 lg:col-span-3"></div>
      <div className="col-span-6 lg:col-span-3"></div>
    </div>
  )
}
`

export { LayoutOne, LayoutOneCode }
