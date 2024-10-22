'use client'
import { format } from 'date-fns'
import { Calendar } from 'phosphor-react'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { Button, DatePicker, Popover, PopoverAction, PopoverContent } from '../../../../src'

const DateRangePicker = () => {
  const [selected, setSelected] = useState<DateRange>()
  return (
    <Popover>
      <PopoverAction asChild>
        <Button
          color="secondary"
          size="lg"
          className="w-[280px] justify-start gap-2.5 border border-metal-100 text-body-4"
          variant="outline">
          <Calendar size={20} className="text-metal-400 dark:text-white" />
          {selected ? (
            <>
              {format(selected?.from ?? new Date(), 'LLL dd, y')} - {format(selected?.to ?? new Date(), 'LLL dd, y')}
            </>
          ) : (
            <span>Select Your Date</span>
          )}
        </Button>
      </PopoverAction>
      <PopoverContent align="start" className="max-w-min border-0">
        <DatePicker mode="range" selected={selected} onSelect={setSelected} showOutsideDays={true} />
      </PopoverContent>
    </Popover>
  )
}

const DateRangePickerCode = {
  'DatePickerComponent.jsx': `
'use client'
import { useState } from 'react'
import { format } from 'date-fns'
import { Calendar } from 'phosphor-react'
import { Button, DatePicker, Popover, PopoverContent, PopoverAction } from 'keep-react'

export const DatePickerComponent = () => {
  const [selected, setSelected] = useState(null)
  return (
    <Popover>
      <PopoverAction asChild>
        <Button color="secondary" size="lg" className="w-[286px] justify-start gap-2.5 border border-metal-100 text-body-4" variant="outline">
          <Calendar size={20} className="text-metal-400 dark:text-white" />
          {selected ? (
            <>
              {format(selected?.from ?? new Date(), 'LLL dd, y')} - {format(selected?.to ?? new Date(), 'LLL dd, y')}
            </>
          ) : (
            <span>Select Your Date</span>
          )}
        </Button>
      </PopoverAction>
      <PopoverContent align="start" className="max-w-min border-0">
        <DatePicker mode="range" selected={selected} onSelect={setSelected} showOutsideDays={true} />
      </PopoverContent>
    </Popover>
  )
}
`,
  'DatePickerComponent.tsx': `'use client'
import { format } from 'date-fns'
import { Calendar } from 'phosphor-react'
import { useState } from 'react'
import { Button, DatePicker, Popover, PopoverAction, PopoverContent } from 'keep-react'

type DateRange = {
    from: Date | undefined;
    to?: Date | undefined;
}

export const DatePickerComponent = () => {
  const [selected, setSelected] = useState<DateRange>()
  return (
    <Popover>
      <PopoverAction asChild>
        <Button color="secondary" size="lg" className="w-[286px] justify-start gap-2.5 border border-metal-100 text-body-4" variant="outline">
          <Calendar size={20} className="text-metal-400 dark:text-white" />
          {selected ? (
            <>
              {format(selected?.from ?? new Date(), 'LLL dd, y')} - {format(selected?.to ?? new Date(), 'LLL dd, y')}
            </>
          ) : (
            <span>Select Your Date</span>
          )}
        </Button>
      </PopoverAction>
      <PopoverContent align="start" className="max-w-min border-0">
        <DatePicker mode="range" selected={selected} onSelect={setSelected} showOutsideDays={true} />
      </PopoverContent>
    </Popover>
  )
}`,
}

export { DateRangePicker, DateRangePickerCode }
