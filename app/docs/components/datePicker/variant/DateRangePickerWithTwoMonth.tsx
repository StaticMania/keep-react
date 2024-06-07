'use client'
import { format } from 'date-fns'
import { Calendar } from 'phosphor-react'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { Button, DatePicker, Popover, PopoverContent, PopoverTrigger } from '../../../../src'

const DateRangePicker2 = () => {
  const [selected, setSelected] = useState<DateRange>()
  return (
    <Popover showArrow={false} placement="bottom-start">
      <PopoverTrigger asChild>
        <Button
          className="w-[286px] justify-start gap-2 rounded-xl border border-metal-50 px-4 text-left text-body-4 font-normal text-metal-600 hover:bg-white active:focus:scale-100 dark:border-metal-900 dark:bg-metal-900 dark:text-white dark:hover:bg-metal-800"
          variant="outline"
          color="secondary">
          <Calendar size={20} className="text-metal-400 dark:text-white" />
          {selected ? (
            <>
              {format(selected?.from ?? new Date(), 'LLL dd, y')} - {format(selected?.to ?? new Date(), 'LLL dd, y')}
            </>
          ) : (
            <span>Select Your Date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="z-50 max-w-min">
        <DatePicker mode="range" numberOfMonths={2} selected={selected} onSelect={setSelected} showOutsideDays={true} />
      </PopoverContent>
    </Popover>
  )
}

const DateRangePicker2Code = `
'use client'
import { useState } from 'react'
import { format } from 'date-fns'
import { Calendar } from 'phosphor-react'
import { Button, DatePicker, Popover, PopoverContent, PopoverTrigger } from 'keep-react'

export const DatePickerComponent = () => {
  const [selected, setSelected] = useState(null)
  return (
    <Popover showArrow={false} placement="bottom-start">
      <PopoverTrigger asChild>
        <Button
          className="w-[286px] justify-start gap-2 rounded-xl border border-metal-50 px-4 text-left text-body-4 font-normal text-metal-600 hover:bg-white active:focus:scale-100 dark:border-metal-900 dark:bg-metal-900 dark:text-white dark:hover:bg-metal-800"
          variant="outline"
          color="secondary">
          <Calendar size={20} className="text-metal-400 dark:text-white" />
          {selected ? (
            <>
              {format(selected?.from ?? new Date(), 'LLL dd, y')} - {format(selected?.to ?? new Date(), 'LLL dd, y')}
            </>
          ) : (
            <span>Select Your Date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="z-50 max-w-min">
        <DatePicker mode="range" numberOfMonths={2} selected={selected} onSelect={setSelected} showOutsideDays={true} />
      </PopoverContent>
    </Popover>
  )
}
`

export { DateRangePicker2, DateRangePicker2Code }
