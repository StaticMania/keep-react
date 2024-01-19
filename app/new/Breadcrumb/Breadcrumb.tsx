import { ReactNode, FC, Children, ReactElement, cloneElement } from 'react'
import { cn } from '~/app/src/helpers/cn'
import { Item } from './Item'

interface BreadcrumbProps {
  children?: ReactNode
  className?: string
  borderType?: 'border-xy' | 'border-y'
  dividerIcon?: ReactNode
  dividerIconStyle?: 'slash' | 'caret'
  icon?: ReactNode
}

export const breadcrumbTheme = {
  root: {
    base: 'flex max-w-[407px] items-center gap-2 px-3 py-2',
  },
  borderType: {
    'border-xy': 'rounded-xl border border-metal-100',
    'border-y': 'border-y border-metal-100',
  },

  item: {
    base: 'flex items-center gap-1',
    icon: {
      slash: 'flex h-4 w-4 items-center justify-center text-xl text-metal-600',
      caret: 'flex h-4 w-4 items-center justify-center text-metal-600',
    },
    text: {
      base: 'rounded-md px-[6px] py-1 text-body-5 font-medium transition-all duration-150 hover:text-primary-500',
      activeType: {
        base: 'bg-primary-25 text-primary-500',
        border: 'border border-primary-500 text-primary-500',
      },
    },
  },
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
      {icon ? (
        icon
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#455468" viewBox="0 0 256 256">
          <path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path>
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
