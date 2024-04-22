const LayoutThree = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="basis-full rounded-xl border border-dashed bg-metal-25 p-10"></div>
      <div className="flex flex-wrap gap-5 lg:flex-nowrap">
        <div className="basis-full rounded-xl border border-dashed bg-metal-25 p-10 lg:basis-1/4"></div>
        <div className="basis-full rounded-xl border border-dashed bg-metal-25 p-10 lg:basis-1/4"></div>
        <div className="basis-full rounded-xl border border-dashed bg-metal-25 p-10 lg:basis-1/4"></div>
        <div className="basis-full rounded-xl border border-dashed bg-metal-25 p-10 lg:basis-1/4"></div>
      </div>
    </div>
  )
}

const LayoutThreeCode = `
export const LayoutThree = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="basis-full rounded-xl border border-dashed p-10"></div>
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
export { LayoutThree, LayoutThreeCode }
