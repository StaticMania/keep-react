import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

export interface StepsPointProps extends HTMLAttributes<HTMLDivElement> {
  isComplete: boolean
  rootClassName?: string
  className?: string
  lineClassName?: string
}

const StepsPoint = forwardRef<HTMLDivElement, StepsPointProps>(
  ({ isComplete, className, lineClassName, rootClassName, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          'flex min-h-6 min-w-6 flex-col items-center align-middle text-body-5 md:inline-flex md:w-full md:flex-row md:flex-wrap',
          rootClassName,
        )}>
        <span
          data-completed={isComplete}
          className={cn(
            'flex size-6 shrink-0 items-center justify-center rounded-full bg-transparent font-medium text-metal-900 data-[completed=false]:border-metal-200 data-[completed=true]:border-primary-500 data-[completed=true]:text-primary-500 dark:bg-transparent dark:text-white',
            children ? 'border-2' : 'border-4',
            className,
          )}>
          {children}
        </span>
        <div
          data-completed={isComplete}
          className={cn(
            'mt-2 h-full w-px group-last:hidden data-[completed=false]:bg-metal-200 data-[completed=true]:bg-primary-500 md:ms-2 md:mt-0 md:h-px md:w-full md:flex-1 dark:bg-neutral-700',
            lineClassName,
          )}
        />
      </div>
    )
  },
)

StepsPoint.displayName = 'StepsPoint'

export { StepsPoint }
