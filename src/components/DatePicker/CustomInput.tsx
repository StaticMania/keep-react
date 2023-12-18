'use client'
import { Calendar } from 'phosphor-react'
import { useDatePickerContext } from './DatePickerContext'
import { cn } from '../../helpers/cn'
import { HTMLProps, Ref } from 'react'

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
        {icon ? icon : <Calendar size={24} color="#5E718D" />}
      </span>
    </>
  )
}
