'use client'
import { useState } from 'react'
import { DatePicker } from '~/src'

const YearPicker = () => {
  const [_, setYearPicker] = useState<number | Date | null>()
  return (
    <DatePicker yearPicker={setYearPicker}>
      <DatePicker.Year />
    </DatePicker>
  )
}

const YearPickerCode = `
"use client";

import { useState } from "react";
import { DatePicker } from "keep-react";

export const YearPickerComponent = () => {
  const [yearPicker, setYearPicker] = useState();
  return (
    <DatePicker yearPicker={setYearPicker}>
      <DatePicker.Year />
    </DatePicker>
  );
}
`

export { YearPicker, YearPickerCode }
