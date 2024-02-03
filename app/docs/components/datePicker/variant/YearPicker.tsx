'use client'
import { DatePicker } from '../../../../src'

const YearPicker = () => {
  return (
    <div className="w-1/3">
      <DatePicker placeholder="Select Year">
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
    <DatePicker year={setYearPicker} placeholder="Select Year">
      <DatePicker.Year />
    </DatePicker>
  );
}
`

export { YearPicker, YearPickerCode }
