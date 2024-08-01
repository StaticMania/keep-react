'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { cn } from '../src/utils/cn'
const Page = () => {
  const [active, setActive] = useState(0)
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl ">
        <h1 className="mb-10 text-heading-5 font-semibold text-metal-900 dark:text-white">Tab Animation</h1>
        <div className="flex items-center gap-5">
          <button
            onClick={() => setActive(0)}
            className={cn(
              'relative h-10 w-36 rounded-full px-4 text-body-4 font-medium',
              active === 0 && 'text-white',
            )}>
            <span className="relative z-10">Figma</span>
            {active === 0 && (
              <motion.div
                layoutId="position"
                className="absolute inset-0 rounded-full bg-metal-900 text-white"></motion.div>
            )}
          </button>
          <button
            onClick={() => setActive(1)}
            className={cn(
              'relative h-10 w-36 rounded-full px-4 text-body-4 font-medium',
              active === 1 && 'text-white',
            )}>
            <span className="relative z-10">Documentation</span>
            {active === 1 && (
              <motion.div
                layoutId="position"
                className="absolute inset-0 rounded-full bg-metal-900 text-white"></motion.div>
            )}
          </button>
          <button
            onClick={() => setActive(2)}
            className={cn(
              'relative h-10 w-36 rounded-full px-4 text-body-4 font-medium',
              active === 2 && 'text-white',
            )}>
            <span className="relative z-10">Blog</span>
            {active === 2 && (
              <motion.div
                layoutId="position"
                className="absolute inset-0 rounded-full bg-metal-900 text-white"></motion.div>
            )}
          </button>
          <button
            onClick={() => setActive(3)}
            className={cn(
              'relative h-10 w-36 rounded-full px-4 text-body-4 font-medium',
              active === 3 && 'text-white',
            )}>
            <span className="relative z-10">Get Started</span>
            {active === 3 && (
              <motion.div
                layoutId="position"
                className="absolute inset-0 rounded-full bg-metal-900 text-white"></motion.div>
            )}
          </button>
        </div>
      </div>
    </section>
  )
}

export default Page
