const LayoutOne = () => {
  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      <div className="basis-4/5 rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
      <div className="flex basis-1/5 flex-col gap-y-5">
        <div className="rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
        <div className="rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
        <div className="rounded-xl border border-dashed bg-metal-25 p-10 dark:border-metal-800 dark:bg-metal-900"></div>
      </div>
    </div>
  )
}

const LayoutOneCode = `
export const LayoutOne = () => {
  return (
    <div className="flex flex-col gap-5 lg:flex-row">
      <div className="basis-4/5 rounded-xl border border-dashed p-10"></div>
      <div className="flex basis-1/5 flex-col gap-y-5">
        <div className="rounded-xl border border-dashed p-10"></div>
        <div className="rounded-xl border border-dashed p-10"></div>
        <div className="rounded-xl border border-dashed p-10"></div>
      </div>
    </div>
  )
}
`
export { LayoutOne, LayoutOneCode }
