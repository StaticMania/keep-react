'use client'
import { format } from 'date-fns'
import { Calendar } from 'phosphor-react'
import { useState } from 'react'
import { Button, DatePicker, Popover, PopoverAction, PopoverContent } from '../../../../src'

const DefaultDatePicker = () => {
  const [date, setDate] = useState<Date>()
  return (
    <Popover>
      <PopoverAction asChild>
        <Button
          color="secondary"
          size="lg"
          className="w-[280px] justify-start gap-2.5 border border-metal-100 text-body-4"
          variant="outline">
          <Calendar size={20} className="text-metal-400 dark:text-white" />
          {date ? format(date ?? new Date(), 'PPP') : <span>Select Your Date</span>}
        </Button>
      </PopoverAction>
      <PopoverContent align="start" className="max-w-min border-0">
        <DatePicker mode="single" selected={date} onSelect={setDate} showOutsideDays={true} />
      </PopoverContent>
    </Popover>
  )
}

const DefaultDatePickerCode = {
  'DatePickerComponent.jsx': `
'use client'
import { format } from 'date-fns'
import { useState } from 'react'
import { Calendar } from 'phosphor-react'
import { Button, DatePicker, Popover, PopoverContent, PopoverAction } from 'keep-react'

export const DatePickerComponent = () => {
  const [date, setDate] = useState(null)
  return (
    <Popover>
      <PopoverAction asChild>
        <Button color="secondary" size="lg" className="w-[286px] justify-start gap-2 border border-metal-100" variant="outline">
          <Calendar size={20} className="text-metal-400 dark:text-white" />
          {date ? format(date ?? new Date(), 'PPP') : <span>Select Your Date</span>}
        </Button>
      </PopoverAction>
      <PopoverContent align="start" className="max-w-min border-0">
        <DatePicker mode="single" selected={date} onSelect={setDate} showOutsideDays={true} />
      </PopoverContent>
    </Popover>
  )
}
`,
  'DatePickerComponent.tsx': `
'use client'
import { useState } from 'react'
import { format } from 'date-fns'
import { Calendar } from 'phosphor-react'
import { Button, DatePicker, Popover, PopoverAction, PopoverContent } from 'keep-react'

export const DatePickerComponent = () => {
  const [date, setDate] = useState<Date>()
  return (
    <Popover>
      <PopoverAction asChild>
        <Button
          color="secondary"
          size="lg"
          className="w-[286px] justify-start gap-2.5 border border-metal-100 text-body-4"
          variant="outline">
          <Calendar size={20} className="text-metal-400 dark:text-white" />
          {date ? format(date ?? new Date(), 'PPP') : <span>Select Your Date</span>}
        </Button>
      </PopoverAction>
      <PopoverContent align="start" className="max-w-min border-0">
        <DatePicker mode="single" selected={date} onSelect={setDate} showOutsideDays={true} />
      </PopoverContent>
    </Popover>
  )
}
`,
}
export { DefaultDatePicker, DefaultDatePickerCode }
