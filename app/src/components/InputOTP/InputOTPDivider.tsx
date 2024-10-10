'use client'
import { cloneElement, ComponentPropsWithoutRef, ElementRef, forwardRef, isValidElement } from 'react'

type InputOTPDividerProps = ComponentPropsWithoutRef<'div'> & {
  asChild?: boolean
}

const InputOTPDivider = forwardRef<ElementRef<'div'>, InputOTPDividerProps>(({ asChild, children, ...props }, ref) => {
  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      itemRef: ref,
      ...props,
    })
  }
  return (
    <div ref={ref} {...props} className="px-2.5">
      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={14} fill="#455468" viewBox="0 0 256 256">
        <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128Z"></path>
      </svg>
    </div>
  )
})
InputOTPDivider.displayName = 'InputOTPDivider'

export { InputOTPDivider }
