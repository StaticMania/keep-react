'use client'
import { DatePicker } from '../../../../src'

const TimePicker = () => {
  return (
    <div className="w-1/3">
      <DatePicker placeholder="Select time">
        <DatePicker.Time />
      </DatePicker>
    </div>
  )
}

const TimePickerCode = `
"use client";
import { useState } from "react";
import { DatePicker } from "keep-react";

export const TimePickerComponent = () => {
  const [time, setTime] = useState(null);
  return (
    <DatePicker time={setTime} placeholder="Select time">
      <DatePicker.Time />
    </DatePicker>
  );
}
`

export { TimePicker, TimePickerCode }
