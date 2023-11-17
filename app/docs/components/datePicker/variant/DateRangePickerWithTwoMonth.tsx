'use client'
import { useState } from 'react'
import { DatePicker } from '~/src'
import { rangePicker } from '~/src/components/DatePicker/DatePickerContext'

const DateRangePickerWithTwoMonth = () => {
  const [_, setRangeDate] = useState<rangePicker>()
  return (
    <div className="w-1/3">
      <DatePicker showTwoMonth={true} rangeDate={setRangeDate} placeholder="Start - Finish">
        <DatePicker.Range />
      </DatePicker>
    </div>
  )
}

const DateRangePickerWithTwoMonthCode = `
"use client";
import { useState } from "react";
import { DatePicker } from "keep-react";

export const DatePickerComponent = () => {
  const [rangeDate, setRangeDate] = useState(null);
  return (
    <DatePicker showTwoMonth={true} rangeDate={setRangeDate} placeholder="Start - Finish">
      <DatePicker.Range />
    </DatePicker>
  );
}
`

export { DateRangePickerWithTwoMonth, DateRangePickerWithTwoMonthCode }
