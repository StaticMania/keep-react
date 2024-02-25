'use client'
import { Textarea } from './Textarea/Textarea'

const page = () => {
  return (
    <section className="py-20">
      <div className="container">
        <Textarea placeholder="Type your message here." />
      </div>
    </section>
  )
}

export default page
