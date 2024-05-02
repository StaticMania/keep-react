'use client'
import { format } from 'date-fns'
import { Calendar } from 'phosphor-react'
import { useState } from 'react'
import { Button, DatePicker, Popover, PopoverContent, PopoverTrigger } from '../../../../src'

const MultipleDatePicker = () => {
  const [date, setDate] = useState<Date>()
  return (
    <Popover showArrow={false} placement="bottom-start">
      <PopoverTrigger asChild>
        <Button
          className="w-[286px] justify-start gap-2 rounded-xl border border-metal-50 px-4 text-left text-body-4 font-normal hover:bg-white active:focus:scale-100"
          variant="outline"
          color="secondary">
          <Calendar size={20} color="#AFBACA" />
          {date ? format(date ?? new Date(), 'PPP') : <span>Select Your Date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="z-50 max-w-min">
        <DatePicker numberOfMonths={2} mode="single" selected={date} onSelect={setDate} showOutsideDays={true} />
      </PopoverContent>
    </Popover>
  )
}

const MultipleDatePickerCode = `
'use client'
import { format } from 'date-fns'
import { useState } from 'react'
import { Calendar } from 'phosphor-react'
import { Button, DatePicker, Popover, PopoverContent, PopoverTrigger } from 'keep-react'

export const DatePickerComponent = () => {
  const [date, setDate] = useState(null)
  return (
    <Popover showArrow={false} placement="bottom-start">
      <PopoverTrigger asChild>
        <Button
          className="w-[286px] justify-start gap-2 rounded-xl border border-metal-50 px-4 text-left text-body-4 font-normal hover:bg-white active:focus:scale-100"
          variant="outline"
          color="secondary">
          <Calendar size={20} color="#AFBACA" />
          {date ? format(date ?? new Date(), 'PPP') : <span>Select Your Date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="z-50 max-w-min">
        <DatePicker numberOfMonths={2} mode="single" selected={date} onSelect={setDate} showOutsideDays={true} />
      </PopoverContent>
    </Popover>
  )
}
`

export { MultipleDatePicker, MultipleDatePickerCode }
