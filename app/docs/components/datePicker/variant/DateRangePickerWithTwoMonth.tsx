'use client'
import { DatePicker } from '../../../../src'

const DateRangePickerWithTwoMonth = () => {
  return (
    <div className="w-1/3">
      <DatePicker showTwoMonth={true} placeholder="Start - Finish">
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
