'use client'
import { HTMLProps, Ref } from 'react'
import { cn } from '../../helpers/cn'
import { useDatePickerContext } from './DatePickerContext'

export const CustomInput = (props: HTMLProps<HTMLInputElement>, ref: Ref<HTMLInputElement>) => {
  const { className, icon, iconStyle } = useDatePickerContext()
  return (
    <>
      <input
        ref={ref}
        readOnly
        {...props}
        className={cn(
          'relative w-full rounded-md border border-metal-200 px-4 py-3 placeholder:text-body-4 placeholder:font-normal placeholder:text-metal-300 focus-within:border-metal-200 focus:outline-none',
          className,
        )}
      />
      <span
        className={cn(
          'pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 border-l border-l-metal-200 pl-1',
          iconStyle,
        )}>
        {icon ? (
          icon
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#5e718d" viewBox="0 0 256 256">
            <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z"></path>
          </svg>
        )}
      </span>
    </>
  )
}
