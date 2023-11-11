'use client'
import { useState } from 'react'
import { DatePicker } from '~/src'

const MonthPicker = () => {
  const [_, setMonthPicker] = useState<Date | null | string>()
  return (
    <DatePicker monthPicker={setMonthPicker}>
      <DatePicker.Month />
    </DatePicker>
  )
}

const MonthPickerCode = `
"use client";
import { useState } from "react";
import { DatePicker } from "keep-react";

export const MonthComponent = () => {
  const [monthPicker, setMonthPicker] = useState(null);
  return (
    <DatePicker monthPicker={setMonthPicker}>
      <DatePicker.Month />
    </DatePicker>
  );
}
`

export { MonthPicker, MonthPickerCode }
