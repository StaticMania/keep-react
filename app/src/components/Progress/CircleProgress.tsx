'use client'
import { Children, FC, ReactElement, ReactNode, cloneElement, useEffect, useState } from 'react'
import { cn } from '../../helpers/cn'
import { CircleText } from './CircleText'
import { progressTheme } from './theme'

interface ProgressCircleProps {
  children?: ReactNode
  className?: string
  progress?: number
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  strokeBgColor?: string
  strokeColor?: string
  strokeWidth?: number
}

export const ProgressCircleComponent: FC<ProgressCircleProps> = ({
  progress = 0,
  size = 'md',
  children,
  strokeBgColor,
  strokeColor,
  strokeWidth = 2.5,
}) => {
  const childrenWithProps = Children.map(children, (child) => cloneElement(child as ReactElement<any>, { size }))
  const [progressBar, setProgressBar] = useState(0)
  const { circle } = progressTheme

  useEffect(() => {
    const timer = setTimeout(() => setProgressBar(progress), 200)
    return () => clearTimeout(timer)
  }, [progress])

  return (
    <div className={cn(circle.root, circle.size[size])}>
      <svg className={circle.svg.base} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx={18}
          cy={18}
          r={16}
          fill="none"
          className={cn(circle.svg.circle, strokeBgColor)}
          strokeWidth={strokeWidth}
        />
        <g className={circle.svg.g}>
          <circle
            cx={18}
            cy={18}
            r={16}
            fill="none"
            className={cn(circle.svg.gCircle, strokeColor)}
            strokeWidth={strokeWidth}
            strokeDasharray={100}
            strokeDashoffset={100 - progressBar}
          />
        </g>
      </svg>
      {childrenWithProps && <div className={cn(circle.text.base, circle.text.content[size])}>{childrenWithProps}</div>}
    </div>
  )
}

CircleText.displayName = 'CircleProgress.Text'
export const CircleProgress = Object.assign(ProgressCircleComponent, {
  Text: CircleText,
})
