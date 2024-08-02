'use client'
import { motion } from 'framer-motion'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import { useTabContext } from './TabContext'

export type TabItemProps = HTMLAttributes<HTMLButtonElement> & {
  value: string
  contentClassName?: string
  bgClassName?: string
}

const TabItem = forwardRef<HTMLButtonElement, TabItemProps>(
  ({ children, contentClassName, bgClassName, className, value, ...props }, ref) => {
    const { activeItem, handleActive, defaultActive, vertical } = useTabContext()

    const handleClick = () => {
      handleActive(value)
    }

    return (
      <button
        key="tab-item"
        data-active={activeItem === value}
        onClick={handleClick}
        ref={ref}
        {...props}
        className={cn(
          'relative h-9 min-w-28 max-w-max px-5 text-body-4 font-medium text-metal-900 data-[active=false]:text-metal-900 data-[active=true]:text-white dark:data-[active=false]:text-white dark:data-[active=true]:text-metal-900',
          className,
        )}>
        {activeItem === value ? (
          <motion.span
            layoutId={defaultActive}
            transition={{ duration: 0.4, type: 'spring' }}
            className={cn(
              'absolute inset-0 bg-metal-900 dark:bg-white',
              vertical ? 'rounded-lg' : 'rounded-t-lg',
              bgClassName,
            )}></motion.span>
        ) : null}
        <span
          className={cn(
            'relative z-10 flex items-center justify-center gap-1 transition-all duration-500',
            contentClassName,
          )}>
          {children}
        </span>
      </button>
    )
  },
)

TabItem.displayName = 'TabItem'

export { TabItem }
