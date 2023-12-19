import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { DatePicker } from '.'
import { rangePicker } from './DatePickerContext'

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    showTwoMonth: {
      description: 'Two month calendar show or not?',
      control: {
        type: 'radio',
      },
    },
    rangeDate: {
      description: 'Date picker range date function',
      table: {
        type: { summary: 'SetState' },
      },
    },
    singleDate: {
      description: 'Date picker single date function',
      table: {
        type: { summary: 'SetState' },
      },
    },
    month: {
      description: 'Month picker function',
      table: {
        type: { summary: 'SetState' },
      },
    },
    year: {
      description: 'Year picker function',
      table: {
        type: { summary: 'SetState' },
      },
    },
    time: {
      description: 'Time picker function',
      table: {
        type: { summary: 'SetState' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="mb-96">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof DatePicker>

const DefaultDatePickerComponent = () => {
  const [_, setDate] = useState<Date | null>(null)

  return (
    <div className="w-2/6">
      <DatePicker singleDate={setDate} placeholder="Select date">
        <DatePicker.SingleDate />
      </DatePicker>
    </div>
  )
}
const DatePickerWithTwoMonthComponent = () => {
  const [_, setDate] = useState<Date | null>(null)
  return (
    <div className="w-2/6">
      <DatePicker showTwoMonth singleDate={setDate} placeholder="Select date">
        <DatePicker.SingleDate />
      </DatePicker>
    </div>
  )
}
const DateRangePickerComponent = () => {
  const [_, setRangeDate] = useState<rangePicker>()
  return (
    <div className="w-2/6">
      <DatePicker rangeDate={setRangeDate} placeholder="Start - Finish">
        <DatePicker.Range />
      </DatePicker>
    </div>
  )
}
const DateRangePickerWithTwoMonthComponent = () => {
  const [_, setRangeDate] = useState<rangePicker>()
  return (
    <div className="w-2/6">
      <DatePicker showTwoMonth rangeDate={setRangeDate} placeholder="Start - Finish">
        <DatePicker.Range />
      </DatePicker>
    </div>
  )
}
const MonthPickerComponent = () => {
  const [_, setMonthPicker] = useState<Date | null | string>()
  return (
    <div className="w-2/6">
      <DatePicker month={setMonthPicker} placeholder="Select Month">
        <DatePicker.Month />
      </DatePicker>
    </div>
  )
}
const YearPickerComponent = () => {
  const [_, setYearPicker] = useState<number | Date | null>()

  return (
    <div className="w-2/6">
      <DatePicker year={setYearPicker} placeholder="Select year">
        <DatePicker.Year />
      </DatePicker>
    </div>
  )
}
const TimePickerComponent = () => {
  const [_, setTime] = useState<string | null | Date>()
  return (
    <div className="w-2/6">
      <DatePicker time={setTime}>
        <DatePicker.Time />
      </DatePicker>
    </div>
  )
}

export const DefaultDatePicker: Story = {
  render: () => <DefaultDatePickerComponent />,
}
export const DatePickerWithTwoMonth: Story = {
  render: () => <DatePickerWithTwoMonthComponent />,
}
export const DateRangePicker: Story = {
  render: () => <DateRangePickerComponent />,
}
export const DateRangePickerWithTwoMonth: Story = {
  render: () => <DateRangePickerWithTwoMonthComponent />,
}
export const MonthPicker: Story = {
  render: () => <MonthPickerComponent />,
}
export const YearPicker: Story = {
  render: () => <YearPickerComponent />,
}
export const TimePicker: Story = {
  render: () => <TimePickerComponent />,
}
