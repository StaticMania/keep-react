'use client'
import { useState } from 'react'
import { DatePicker } from '~/src'

const YearPicker = () => {
  const [_, setYearPicker] = useState<number | Date | null>()
  return (
    <div className="w-1/3">
      <DatePicker yearPicker={setYearPicker} placeholder="Select Year">
        <DatePicker.Year />
      </DatePicker>
    </div>
  )
}

const YearPickerCode = `
"use client";
import { useState } from "react";
import { DatePicker } from "keep-react";

export const YearPickerComponent = () => {
  const [yearPicker, setYearPicker] = useState();
  return (
    <DatePicker yearPicker={setYearPicker} placeholder="Select Year">
      <DatePicker.Year />
    </DatePicker>
  );
}
`

export { YearPicker, YearPickerCode }
