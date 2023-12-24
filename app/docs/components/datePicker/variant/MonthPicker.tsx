'use client'
import { useState } from 'react'
import { DatePicker } from '../../../../src'

const MonthPicker = () => {
  const [month, setMonthPicker] = useState<Date | null | string>()
  console.log(month)
  return (
    <div className="w-1/3">
      <DatePicker month={setMonthPicker} placeholder="Select Month">
        <DatePicker.Month />
      </DatePicker>
    </div>
  )
}

const MonthPickerCode = `
"use client";
import { useState } from "react";
import { DatePicker } from "keep-react";

export const MonthComponent = () => {
  const [monthPicker, setMonthPicker] = useState(null);
  return (
    <DatePicker month={setMonthPicker} placeholder="Select Month">
      <DatePicker.Month />
    </DatePicker>
  );
}
`

export { MonthPicker, MonthPickerCode }
