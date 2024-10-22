'use client'
import { OTPInputContext } from 'input-otp'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useContext } from 'react'
import { cn } from '../../utils/cn'

const InputOTPItem = forwardRef<ElementRef<'div'>, ComponentPropsWithoutRef<'div'> & { index: number }>(
  ({ index, className, ...props }, ref) => {
    const inputOTPContext = useContext(OTPInputContext)

    const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex h-16 w-[52px] items-center justify-center rounded-[10px] border border-metal-100 text-heading-6 font-medium text-metal-900 transition-all dark:border-metal-800 dark:text-white',
          isActive && 'z-10 ring-2 ring-metal-600 ring-offset-metal-200 dark:ring-metal-800',
          className,
        )}
        {...props}>
        {char}
        {hasFakeCaret && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[22px] w-px animate-blinkIn bg-metal-300 duration-1000 dark:bg-white" />
          </div>
        )}
      </div>
    )
  },
)
InputOTPItem.displayName = 'InputOTPItem'

export { InputOTPItem }
