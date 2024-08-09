'use client'
import { AnimatePresence, motion, MotionProps } from 'framer-motion'
import { forwardRef, HTMLAttributes, Ref } from 'react'
import { cn } from '../../utils/cn'
import { useModalContext } from './ModalContext'
import { ModalPortal } from './ModalPortal'

type ModalContentProps = HTMLAttributes<HTMLDivElement> & MotionProps

const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    const { isOpen } = useModalContext()
    return (
      <AnimatePresence>
        {isOpen && (
          <ModalPortal key="modal">
            <motion.div
              {...props}
              className={cn(
                'modal-content relative w-[22rem] rounded-xl bg-white p-5 shadow-xLarge dark:bg-metal-900',
                className,
              )}
              ref={ref}
              initial={{ scale: 0.5, opacity: 0, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.3, type: 'spring', damping: 25, stiffness: 500 }}
              exit={{ opacity: 0.5, scale: 0.5, y: 40 }}>
              {children}
            </motion.div>
          </ModalPortal>
        )}
      </AnimatePresence>
    )
  },
)

ModalContent.displayName = 'ModalContent'

export { ModalContent }
