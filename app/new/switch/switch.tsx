'use client'
import { useState } from 'react'

export const Switch = () => {
  const [active, setActive] = useState(false)
  return (
    <div
      className={`relative h-5 w-9 cursor-pointer rounded-full ${active ? 'bg-primary-500 ring-2 ring-primary-50 ring-offset-1' : 'bg-metal-100'}`}
      onClick={() => setActive(!active)}>
      <div
        className={`absolute left-1.5 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full  ring-4 ring-white transition-all duration-300 ${active ? 'translate-x-4 bg-primary-500' : 'translate-x-0 bg-metal-100'}`}></div>
    </div>
  )
}
