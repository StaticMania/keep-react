'use client'
import { motion, MotionProps } from 'framer-motion'
import { ButtonHTMLAttributes, cloneElement, ForwardedRef, forwardRef, isValidElement } from 'react'
import { cn } from '../../helpers/cn'
import { useTabContext } from './Context'
import { tabTheme } from './theme'

export type TabCombinedProps = ButtonHTMLAttributes<HTMLButtonElement> & MotionProps

export interface TabItemProps extends TabCombinedProps {
  label?: string
  asChild?: boolean
}

const TabItem = forwardRef<HTMLButtonElement, TabItemProps>(
  ({ children, className, label = '1', asChild, ...props }, ref: ForwardedRef<HTMLButtonElement>) => {
    const { activeItem, handleActive, itemType = 'button' } = useTabContext()

    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        onClick: () => handleActive && handleActive(label),
        ...props,
      })
    }

    return (
      <motion.button
        ref={ref}
        {...props}
        onClick={() => handleActive && handleActive(label)}
        initial={{ opacity: 0 }}
        animate={{
          backgroundColor: activeItem === label ? '#212121' : '#F0F0F0',
          color: activeItem === label ? '#FFF' : '#212121',
        }}
        className={cn(
          tabTheme.variants[itemType].base,
          tabTheme.variants[itemType].active[(activeItem === label).toString() as 'true' | 'false'],
          className,
        )}>
        {children}
      </motion.button>
    )
  },
)

TabItem.displayName = 'TabItem'

export { TabItem }
