'use client'
import { HTMLAttributes, forwardRef, useEffect, useState } from 'react'
import { cn } from '../../helpers/cn'
import { ProgressContext } from './Context'
import { LineProgressText } from './LineText'
import { progressTheme } from './theme'

interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  progress?: number
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export const LineProgressComponent = forwardRef<HTMLDivElement, ProgressProps>(
  ({ progress = 0, size = 'md', children, className, ...props }, ref) => {
    const [progressBar, setProgressBar] = useState(0)
    const { line } = progressTheme

    useEffect(() => {
      const timer = setTimeout(() => setProgressBar(progress), 200)
      return () => clearTimeout(timer)
    }, [progress])

    return (
      <div ref={ref} {...props} className={cn(line.root, className)}>
        <ProgressContext.Provider value={{ lineProgressBar: progressBar, size }}>{children}</ProgressContext.Provider>
      </div>
    )
  },
)

LineProgressComponent.displayName = 'LineProgress'

export const LineProgress = Object.assign(LineProgressComponent, {
  Text: LineProgressText,
  Bar: LineProgressText,
})
