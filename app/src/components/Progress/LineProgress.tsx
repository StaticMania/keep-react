'use client'
import { FC, ReactNode, useEffect, useState } from 'react'
import { cn } from '../../helpers/cn'
import { LineText } from './LineText'
import { progressTheme } from './theme'

interface ProgressProps {
  children?: ReactNode
  className?: string
  progress?: number
  lineBg?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

export const LineProgressComponent: FC<ProgressProps> = ({
  progress = 0,
  size = 'md',
  lineBg = 'bg-primary-50',
  children,
  className,
}) => {
  const [progressBar, setProgressBar] = useState(0)
  const { line } = progressTheme

  useEffect(() => {
    const timer = setTimeout(() => setProgressBar(progress), 200)
    return () => clearTimeout(timer)
  }, [progress])

  return (
    <div className={line.root}>
      <div className={cn(line.progress.base, line.size[size], lineBg)} role="progressbar">
        <div className={cn(line.progress.bar, className)} style={{ width: progressBar + '%' }}></div>
      </div>
      {children && <div className={cn(line.text.base, line.text.content[size])}>{children}</div>}
    </div>
  )
}

LineText.displayName = 'LineProgress.Text'
export const LineProgress = Object.assign(LineProgressComponent, {
  Text: LineText,
})
