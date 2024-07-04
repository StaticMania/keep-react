'use client'
import { ButtonHTMLAttributes, ForwardedRef, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../helpers/cn'
import { useTabContext } from './Context'

export interface TabItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  asChild?: boolean
}

const TabItem = forwardRef<HTMLButtonElement, TabItemProps>(
  ({ children, className, label = '1', asChild, ...props }, ref: ForwardedRef<HTMLButtonElement>) => {
    const { activeItem, handleActive, itemType } = useTabContext()

    let classNames: string = ''

    if (itemType === 'button') {
      classNames = cn(
        'rounded-lg px-4 py-2.5 text-body-4 font-medium transition-all duration-200',
        activeItem === label ? 'bg-metal-900 text-white' : 'bg-metal-50 text-metal-900 hover:text-metal-800',
        className,
      )
    }

    if (itemType === 'link') {
      classNames = cn(
        'rounded-none border-b-2 border-b-transparent px-4 py-2.5 text-body-4 font-medium transition-all duration-200',
        activeItem === label
          ? 'border-b-metal-900 dark:border-b-white dark:text-white text-metal-900'
          : 'text-metal-600 dark:text-metal-300 dark:hover:text-metal-200 hover:text-metal-900',
      )
    }

    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        onClick: () => handleActive && handleActive(label),
        ...props,
      })
    }

    return (
      <button ref={ref} {...props} onClick={() => handleActive && handleActive(label)} className={classNames}>
        {children}
      </button>
    )
  },
)

TabItem.displayName = 'TabItem'

export { TabItem }
