'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useProgressContext } from './Context'
import { progressTheme } from './theme'

export interface LineProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  lineBackground?: string
}

const LineProgressBar = forwardRef<HTMLDivElement, LineProgressBarProps>(({ className, lineBackground }, ref) => {
  const { line } = progressTheme
  const { lineProgressBar } = useProgressContext()
  return (
    <div ref={ref} className={cn(line.progress.base, 'h-2.5', lineBackground)}>
      <div className={cn(line.progress.bar, className)} style={{ width: lineProgressBar + '%' }}></div>
    </div>
  )
})

LineProgressBar.displayName = 'LineProgressBar'

export { LineProgressBar }
