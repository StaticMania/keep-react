'use client'
import { ComponentProps } from 'react'
import { DayPicker } from 'react-day-picker'
import { cn } from '../../helpers/cn'

export type CalendarProps = ComponentProps<typeof DayPicker>

const DatePicker = ({ className, classNames, showOutsideDays = true, ...props }: CalendarProps) => {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'flex max-w-min rounded-xl border border-metal-50 bg-white p-5 dark:border-metal-900 dark:bg-metal-900',
        className,
      )}
      classNames={{
        months: 'flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: 'text-body-3 font-semibold text-metal-900',
        nav: 'space-x-1 flex items-center',
        nav_button:
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 inline-flex items-center justify-center whitespace-nowrap rounded-lg text-body-4 font-medium ring-offset-1 transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-metal-50 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 hover:bg-metal-25 hover:text-metal-900 border border-metal-200 dark:border-metal-700 dark:fill-white dark:hover:bg-metal-800 dark:hover:border-metal-800',
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex border-y border-metal-50 dark:border-metal-800',
        head_cell: 'text-metal-400 dark:text-white rounded-xl w-10 font-normal text-body-4',
        row: 'flex w-full mt-2',
        cell: cn(
          'relative p-0 text-center text-body-4 focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-metal-500 [&:has([aria-selected].day-outside)]:bg-metal-50 dark:[&:has([aria-selected].day-outside)]:bg-metal-700 [&:has([aria-selected].day-outside)]:text-metal-400 [&:has([aria-selected].day-range-end)]:rounded-r-xl',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-xl [&:has(>.day-range-start)]:rounded-l-xl first:[&:has([aria-selected])]:rounded-l-xl last:[&:has([aria-selected])]:rounded-r-xl'
            : '[&:has([aria-selected])]:rounded-xl',
        ),
        day: 'h-10 w-10 p-0 font-normal aria-selected:opacity-100 inline-flex items-center justify-center whitespace-nowrap rounded-lg text-body-4 font-medium ring-offset-metal-50` transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-metal-50 focus-visible:ring-offset-1 disabled:pointer-events-none day-outside disabled:opacity-50 hover:bg-metal-50 dark:hover:bg-metal-800',
        day_range_end: 'day-range-end',
        day_range_start: 'day-range-start',
        day_selected:
          'bg-metal-900 dark:bg-metal-800 text-white hover:bg-metal-800 hover:text-white focus:bg-metal-900 focus:text-white',
        day_today: 'bg-metal-50 dark:bg-metal-800 dark:text-white text-metal-900',
        day_outside:
          'day-outside text-metal-300 aria-selected:text-metal-400 aria-selected:bg-metal-100 aria-selected:text-metal-400 dark:text-metal-600 dark:aria-selected:text-metal-400 dark:aria-selected:bg-metal-700',
        day_disabled: 'text-metal-100 opacity-50',
        day_range_middle: 'aria-selected:bg-metal-50 aria-selected:text-metal-500 dark:aria-selected:bg-metal-700',
        day_hidden: 'invisible',
        ...classNames,
      }}
      components={{
        IconLeft: () => (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 256 256">
            <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
          </svg>
        ),
        IconRight: () => (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 256 256">
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>
        ),
      }}
      {...props}
    />
  )
}
DatePicker.displayName = 'DatePicker'

export { DatePicker }
