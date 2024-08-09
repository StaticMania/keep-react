'use client'
import { motion, MotionProps } from 'framer-motion'
import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '../../utils/cn'
import { useTabContext } from './TabContext'

export type TabContentProps = HTMLAttributes<HTMLDivElement> &
  MotionProps & {
    value: string
  }

const TabContent = forwardRef<HTMLDivElement, TabContentProps>(({ children, className, value, ...props }, ref) => {
  const { activeItem } = useTabContext()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -5 }}
      whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, ease: 'anticipate' } }}
      {...props}
      data-active={activeItem === value}
      className={cn(
        'w-full text-body-4 font-normal text-metal-600 data-[active=true]:block data-[active=false]:hidden dark:text-metal-300',
        className,
      )}>
      {children}
    </motion.div>
  )
})

TabContent.displayName = 'TabContent'

export { TabContent }
