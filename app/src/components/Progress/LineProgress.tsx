'use client'
import { HTMLAttributes, forwardRef, useEffect, useState } from 'react'
import { cn } from '../../utils/cn'
import { ProgressContext } from './Context'
import { progressTheme } from './theme'

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  progress?: number
}

const LineProgress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ progress = 0, children, className, ...props }, ref) => {
    const [progressBar, setProgressBar] = useState(0)
    const { line } = progressTheme

    useEffect(() => {
      const timer = setTimeout(() => setProgressBar(progress), 200)
      return () => clearTimeout(timer)
    }, [progress])

    return (
      <div ref={ref} {...props} className={cn(line.root, className)}>
        <ProgressContext.Provider value={{ lineProgressBar: progressBar }}>{children}</ProgressContext.Provider>
      </div>
    )
  },
)

LineProgress.displayName = 'LineProgress'

export { LineProgress }
