'use client'
import { HTMLAttributes, forwardRef, useEffect, useState } from 'react'
import { cn } from '../../utils/cn'
import { ProgressContext } from './Context'
import { progressTheme } from './theme'

interface ProgressCircleProps extends HTMLAttributes<HTMLDivElement> {
  progress?: number
}

const CircleProgress = forwardRef<HTMLDivElement, ProgressCircleProps>(
  ({ progress = 0, children, className, ...props }, ref) => {
    const [progressBar, setProgressBar] = useState(0)
    const { circle } = progressTheme

    useEffect(() => {
      const timer = setTimeout(() => setProgressBar(progress), 200)
      return () => clearTimeout(timer)
    }, [progress])

    return (
      <div ref={ref} {...props} className={cn(circle.root, className)}>
        <ProgressContext.Provider value={{ progressBar: progressBar }}>{children}</ProgressContext.Provider>
      </div>
    )
  },
)

CircleProgress.displayName = 'CircleProgress'

export { CircleProgress }
