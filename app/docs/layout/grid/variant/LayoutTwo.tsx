const LayoutTwo = () => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-12 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-8"></div>
      <div className="col-span-12 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-4"></div>
      <div className="col-span-4 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-4"></div>
      <div className="col-span-4 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-4"></div>
      <div className="col-span-4 rounded-xl border border-dashed bg-metal-25 p-10 lg:col-span-4"></div>
      <div className="order-1 col-span-6 rounded-xl border border-dashed bg-metal-25 p-10 lg:order-1 lg:col-span-3"></div>
      <div className="order-3 col-span-12 rounded-xl border border-dashed bg-metal-25 p-10 lg:order-2 lg:col-span-6"></div>
      <div className="order-2 col-span-6 rounded-xl border border-dashed bg-metal-25 p-10 lg:order-3 lg:col-span-3"></div>
    </div>
  )
}

const LayoutTwoCode = `
export const GridLayoutTwo = () => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-12 lg:col-span-8"></div>
      <div className="col-span-12 lg:col-span-4"></div>
      <div className="col-span-4 lg:col-span-4"></div>
      <div className="col-span-4 lg:col-span-4"></div>
      <div className="col-span-4 lg:col-span-4"></div>
      <div className="order-1 col-span-6 lg:order-1 lg:col-span-3"></div>
      <div className="order-3 col-span-12 lg:order-2 lg:col-span-6"></div>
      <div className="order-2 col-span-6 lg:order-3 lg:col-span-3"></div>
    </div>
  )
}

`

export { LayoutTwo, LayoutTwoCode }
