'use client'
import { Carousel } from '../src'

const Page = () => {
  const slides = Array.from({ length: 5 }).map((_, idx) => (
    <div className="flex items-center justify-center rounded-xl border-2 border-metal-100 bg-metal-25 p-8" key={idx}>
      <h1 className="text-display text-metal-900">{idx + 1}</h1>
    </div>
  ))

  return (
    <section className=" py-20">
      <div className="container">
        <Carousel slides={slides} className="max-w-lg" />
      </div>
    </section>
  )
}

export default Page
