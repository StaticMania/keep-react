import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { BreadcrumbItem } from './Item'

interface BreadcrumbProps extends HTMLAttributes<HTMLUListElement> {
  borderType?: 'border-xy' | 'border-y'
}

const BreadcrumbComponent = forwardRef<HTMLUListElement, BreadcrumbProps>(
  ({ children, className, borderType, ...props }, ref) => {
    return (
      <ul
        className={cn(
          'flex max-w-max items-center gap-3 border-metal-100 px-3.5 py-2.5',
          borderType === 'border-y' && 'border-y',
          borderType === 'border-xy' && 'rounded-xl border',
          className,
        )}
        {...props}
        ref={ref}>
        {children}
      </ul>
    )
  },
)

BreadcrumbComponent.displayName = 'Breadcrumb'

export const Breadcrumb = Object.assign(BreadcrumbComponent, {
  Item: BreadcrumbItem,
})
