'use client'
import { useState } from 'react'
import { DatePicker } from '~/src'

const TimePicker = () => {
  const [_, setTime] = useState<string | null | Date>()
  return (
    <DatePicker timePicker={setTime}>
      <DatePicker.Time />
    </DatePicker>
  )
}

const TimePickerCode = `
"use client";
import { useState } from "react";
import { DatePicker } from "keep-react";

export const TimePickerComponent = () => {
  const [time, setTime] = useState(null);
  return (
    <DatePicker timePicker={setTime}>
      <DatePicker.Time />
    </DatePicker>
  );
}
`

export { TimePicker, TimePickerCode }
