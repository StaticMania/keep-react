const LayoutOne = () => {
  return (
    <div className="columns-1 space-y-4 lg:columns-3">
      <div className="space-y-4">
        <div className="h-[200px] w-full rounded-xl border border-dashed border-metal-100 bg-metal-25 p-10"></div>
        <div className="h-[300px] w-full rounded-xl border border-dashed border-metal-100 bg-metal-25 p-10"></div>
      </div>
      <div className="space-y-4">
        <div className="h-[300px] w-full rounded-xl border border-dashed border-metal-100 bg-metal-25 p-10"></div>
        <div className="h-[200px] w-full rounded-xl border border-dashed border-metal-100 bg-metal-25 p-10"></div>
      </div>
      <div className="space-y-4">
        <div className="h-[350px] w-full rounded-xl border border-dashed border-metal-100 bg-metal-25 p-10"></div>
        <div className="h-[150px] w-full rounded-xl border border-dashed border-metal-100 bg-metal-25 p-10"></div>
      </div>
    </div>
  )
}

const LayoutOneCode = `
export const LayoutOne = () => {
  return (
    <div className="columns-3">
      <div className="space-y-4">
        <div className="h-[200px] w-full rounded-xl border border-metal-100 bg-metal-25 p-10 border-dashed"></div>
        <div className="h-[300px] w-full rounded-xl border border-metal-100 bg-metal-25 p-10 border-dashed"></div>
      </div>
      <div className="space-y-4">
        <div className="h-[300px] w-full rounded-xl border border-metal-100 bg-metal-25 p-10 border-dashed"></div>
        <div className="h-[200px] w-full rounded-xl border border-metal-100 bg-metal-25 p-10 border-dashed"></div>
      </div>
      <div className="space-y-4">
        <div className="h-[350px] w-full rounded-xl border border-metal-100 bg-metal-25 p-10 border-dashed"></div>
        <div className="h-[150px] w-full rounded-xl border border-metal-100 bg-metal-25 p-10 border-dashed"></div>
      </div>
    </div>
  )
}
`
export { LayoutOne, LayoutOneCode }
