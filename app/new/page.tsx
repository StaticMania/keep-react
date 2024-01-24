'use client'

import { Slider } from '../src'

const Page = () => {
  return (
    <section className="min-h-screen  py-20">
      <div className="container space-y-5">
        <h1 className="mx-auto mb-10 text-center text-3xl font-bold">Server component</h1>
        <div className="py-10">
          <Slider
            defaultValue={300}
            max={1000}
            min={100}
            onChange={(value: number | number[]) => console.log(value)}
            step={100}
            tooltip="bottom"
          />
        </div>
      </div>
    </section>
  )
}

export default Page
