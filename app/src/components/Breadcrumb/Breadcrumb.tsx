'use client'
import { Children, FC, ReactElement, ReactNode, cloneElement } from 'react'
import { cn } from '../../helpers/cn'
import { Item } from './Item'
import { breadcrumbTheme } from './theme'

interface BreadcrumbProps {
  children?: ReactNode
  className?: string
  borderType?: 'border-xy' | 'border-y'
  dividerIcon?: ReactNode
  dividerIconStyle?: 'slash' | 'caret'
  icon?: ReactNode
}

export const BreadcrumbComponent: FC<BreadcrumbProps> = ({
  children,
  className,
  borderType,
  dividerIconStyle,
  dividerIcon,
  icon,
}) => {
  const childrenWithProps = Children.map(children, (child) =>
    cloneElement(child as ReactElement<any>, { dividerIconStyle: dividerIconStyle, dividerIcon: dividerIcon }),
  )
  return (
    <div className={cn(breadcrumbTheme.root.base, borderType && breadcrumbTheme.borderType[borderType], className)}>
      {icon ?? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#455468" viewBox="0 0 256 256">
          <path d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"></path>
        </svg>
      )}
      {childrenWithProps}
    </div>
  )
}

Item.displayName = 'Breadcrumb.Item'
export const Breadcrumb = Object.assign(BreadcrumbComponent, {
  Item,
})
