import { cloneElement, forwardRef, HTMLAttributes, isValidElement, Ref } from 'react'
import { cn } from '../../utils/cn'

export interface BreadcrumbItemProps extends HTMLAttributes<HTMLLIElement> {
  asChild?: boolean
}

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>(
  ({ children, asChild, className, ...props }, ref: Ref<HTMLLIElement>) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }

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
