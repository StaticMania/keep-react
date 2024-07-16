'use client'
import { format } from 'date-fns'
import { Calendar } from 'phosphor-react'
import { useState } from 'react'
import { Button, DatePicker, Popover, PopoverContent, PopoverTrigger } from '../../../../src'

const DefaultDatePicker = () => {
  const [date, setDate] = useState<Date>()
  return (
    <Popover showArrow={false} placement="bottom-start">
      <PopoverTrigger asChild>
        <Button className="w-[286px] justify-start gap-2" variant="outline">
          <Calendar size={20} className="text-metal-400 dark:text-white" />
          {date ? format(date ?? new Date(), 'PPP') : <span>Select Your Date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="z-50 max-w-min">
        <DatePicker mode="single" selected={date} onSelect={setDate} showOutsideDays={true} />
      </PopoverContent>
    </Popover>
  )
}

const DefaultDatePickerCode = `
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
        <Button className="w-[286px] justify-start gap-2" variant="outline">
          <Calendar size={20} className="text-metal-400 dark:text-white" />
          {date ? format(date ?? new Date(), 'PPP') : <span>Select Your Date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="z-50 max-w-min">
        <DatePicker mode="single" selected={date} onSelect={setDate} showOutsideDays={true} />
      </PopoverContent>
    </Popover>
  )
}
`

export { DefaultDatePicker, DefaultDatePickerCode }
