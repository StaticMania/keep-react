import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'
import { useProgressContext } from './Context'
import { progressTheme } from './theme'

export interface CircleLineProps extends HTMLAttributes<SVGSVGElement> {
  strokeWidth?: number
  strokeColor?: string
}

const CircleProgressLine = forwardRef<SVGSVGElement, CircleLineProps>(
  ({ className, strokeWidth = 2.5, strokeColor, ...props }, ref) => {
    const { circle } = progressTheme
    const { progressBar = 0 } = useProgressContext()
    return (
      <svg {...props} ref={ref} className={circle.svg.base} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
        <circle
          cx={18}
          cy={18}
          r={16}
          fill="none"
          className={cn(circle.svg.circle, className)}
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
    )
  },
)

CircleProgressLine.displayName = 'CircleProgress.Circle'

export { CircleProgressLine }
