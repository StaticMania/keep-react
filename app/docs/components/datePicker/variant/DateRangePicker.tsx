'use client'
import { format } from 'date-fns'
import { Calendar } from 'phosphor-react'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import { Button, DatePicker, Popover } from '../../../../src'

const DateRangePicker = () => {
  const [selected, setSelected] = useState<DateRange>()
  return (
    <Popover showArrow={false} placement="bottom-start">
      <Popover.Action asChild>
        <Button
          className="w-[286px] justify-start gap-2 rounded-lg border border-metal-50 text-left text-body-4 font-normal hover:bg-white active:focus:scale-100"
          variant="outline"
          color="secondary">
          <Calendar size={20} color="#AFBACA" />
          {selected ? (
            <>
              {format(selected?.from ?? new Date(), 'LLL dd, y')} - {format(selected?.to ?? new Date(), 'LLL dd, y')}
            </>
          ) : (
            <span>Select Your Date</span>
          )}
        </Button>
      </Popover.Action>
      <Popover.Content className="z-50 max-w-min">
        <DatePicker mode="range" selected={selected} onSelect={setSelected} showOutsideDays={true} />
      </Popover.Content>
    </Popover>
  )
}

const DateRangePickerCode = `
'use client'
import { useState } from 'react'
import { format } from 'date-fns'
import { Calendar } from 'phosphor-react'
import { Button, DatePicker, Popover } from 'keep-react'

export const DatePickerComponent = () => {
  const [selected, setSelected] = useState(null)
  return (
    <Popover showArrow={false} placement="bottom-start">
      <Popover.Action asChild>
        <Button
          className="w-[286px] justify-start gap-2 rounded-lg border border-metal-50 text-left text-body-4 font-normal hover:bg-white active:focus:scale-100"
          variant="outline"
          color="secondary">
          <Calendar size={20} color="#AFBACA" />
          {selected ? (
            <>
              {format(selected?.from ?? new Date(), 'LLL dd, y')} - {format(selected?.to ?? new Date(), 'LLL dd, y')}
            </>
          ) : (
            <span>Select Your Date</span>
          )}
        </Button>
      </Popover.Action>
      <Popover.Content className="z-50 max-w-min">
        <DatePicker mode="range" selected={selected} onSelect={setSelected} showOutsideDays={true} />
      </Popover.Content>
    </Popover>
  )
}
`

export { DateRangePicker, DateRangePickerCode }
