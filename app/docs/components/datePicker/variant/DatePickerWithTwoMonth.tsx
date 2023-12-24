'use client'
import { useState } from 'react'
import { DatePicker } from '../../../../src'

const DatePickerWithTwoMonth = () => {
  const [date, setDate] = useState<Date | null>(null)
  console.log(date)
  return (
    <div className="w-1/3">
      <DatePicker showTwoMonth={true} singleDate={setDate} placeholder="Select date">
        <DatePicker.SingleDate />
      </DatePicker>
    </div>
  )
}

const DatePickerWithTwoMonthCode = `
"use client";
import { useState } from "react";
import { DatePicker } from "keep-react";

export const DatePickerComponent = () => {
  const [date, setDate] = useState(null);
  return (
    <DatePicker showTwoMonth={true} singleDate={setDate} placeholder="Select date">
      <DatePicker.SingleDate />
    </DatePicker>
  );
}
`

export { DatePickerWithTwoMonth, DatePickerWithTwoMonthCode }
