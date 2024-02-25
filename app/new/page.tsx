'use client'

import { Checkbox } from './Checkbox/Checkbox'

const Page = () => {
  return (
    <section className=" py-20">
      <div className="container">
        <Checkbox variant="checked" />
        <Checkbox variant="dashed" />
        <Checkbox variant="rounded" />
        <Checkbox variant="circle" />
      </div>
    </section>
  )
}

export default Page
