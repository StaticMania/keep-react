'use client'
import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { useProgressContext } from './Context'
import { progressTheme } from './theme'

export interface LineProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  lineBackground?: string
}

const LineProgressBar = forwardRef<HTMLDivElement, LineProgressBarProps>(({ className, lineBackground }, ref) => {
  const { line } = progressTheme
  const { lineProgressBar, size = 'md' } = useProgressContext()
  return (
    <div ref={ref} className={cn(line.progress.base, line.size[size], lineBackground)}>
      <div className={cn(line.progress.bar, className)} style={{ width: lineProgressBar + '%' }}></div>
    </div>
  )
})

LineProgressBar.displayName = 'LineProgressBar'

export { LineProgressBar }
