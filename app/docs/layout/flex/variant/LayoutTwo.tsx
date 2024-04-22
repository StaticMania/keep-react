const LayoutTwo = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <div className="basis-1/2 rounded-xl border border-dashed bg-metal-25 p-10"></div>
        <div className="basis-1/2 rounded-xl border border-dashed bg-metal-25 p-10"></div>
      </div>
      <div className="flex flex-wrap gap-5 lg:flex-nowrap">
        <div className="basis-full rounded-xl border border-dashed bg-metal-25 p-10 lg:basis-1/4"></div>
        <div className="basis-full rounded-xl border border-dashed bg-metal-25 p-10 lg:basis-1/4"></div>
        <div className="basis-full rounded-xl border border-dashed bg-metal-25 p-10 lg:basis-1/4"></div>
        <div className="basis-full rounded-xl border border-dashed bg-metal-25 p-10 lg:basis-1/4"></div>
      </div>
    </div>
  )
}

const LayoutTwoCode = `
export const LayoutTwo = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <div className="basis-1/2 rounded-xl border border-dashed p-10"></div>
        <div className="basis-1/2 rounded-xl border border-dashed p-10"></div>
      </div>
      <div className="flex flex-wrap gap-5 lg:flex-nowrap">
        <div className="basis-full rounded-xl border border-dashed p-10 lg:basis-1/4"></div>
        <div className="basis-full rounded-xl border border-dashed p-10 lg:basis-1/4"></div>
        <div className="basis-full rounded-xl border border-dashed p-10 lg:basis-1/4"></div>
        <div className="basis-full rounded-xl border border-dashed p-10 lg:basis-1/4"></div>
      </div>
    </div>
  )
}
`
export { LayoutTwo, LayoutTwoCode }
