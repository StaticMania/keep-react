import { forwardRef, HTMLAttributes, Ref } from 'react'
import { cn } from '../../helpers/cn'

export const BreadcrumbItem = forwardRef<HTMLLIElement, HTMLAttributes<HTMLLIElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLLIElement>) => {
    return (
      <li
        {...props}
        className={cn(
          'flex cursor-pointer items-center gap-1.5 text-body-4 font-medium text-metal-900 transition-colors duration-300 hover:text-primary-500 dark:text-white dark:hover:text-primary-500',
          className,
        )}
        ref={ref}>
        {children}
      </li>
    )
  },
)

BreadcrumbItem.displayName = 'Breadcrumb.Item'
