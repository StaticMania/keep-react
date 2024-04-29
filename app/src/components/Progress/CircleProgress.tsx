'use client'
import { HTMLAttributes, forwardRef, useEffect, useState } from 'react'
import { cn } from '../../helpers/cn'
import { CircleProgressLine } from './CircleLine'
import { CircleProgressText } from './CircleText'
import { ProgressContext } from './Context'
import { progressTheme } from './theme'

interface ProgressCircleProps extends HTMLAttributes<HTMLDivElement> {
  progress?: number
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export const ProgressCircleComponent = forwardRef<HTMLDivElement, ProgressCircleProps>(
  ({ progress = 0, size = 'md', children, className, ...props }, ref) => {
    const [progressBar, setProgressBar] = useState(0)
    const { circle } = progressTheme

    useEffect(() => {
      const timer = setTimeout(() => setProgressBar(progress), 200)
      return () => clearTimeout(timer)
    }, [progress])

    return (
      <div ref={ref} {...props} className={cn(circle.root, circle.size[size], className)}>
        <ProgressContext.Provider value={{ progressBar: progressBar, size }}>{children}</ProgressContext.Provider>
      </div>
    )
  },
)

ProgressCircleComponent.displayName = 'CircleProgress'

export const CircleProgress = Object.assign(ProgressCircleComponent, {
  Text: CircleProgressText,
  Circle: CircleProgressLine,
})
