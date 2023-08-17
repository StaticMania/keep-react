"use client";

import { useState } from "react";
import { DatePicker } from "@/src/components/DatePicker";

const TimePicker = () => {
  const [time, setTime] = useState<string | null | Date>();
  return (
    <DatePicker timePicker={setTime}>
      <DatePicker.Year />
    </DatePicker>
  );
};

const TimePickerCode = `
"use client";

import { useState } from "react";
import { DatePicker } from "keep-design";

const TimePicker = () => {
  const [time, setTime] = useState<string | null | Date>();
  return (
    <DatePicker timePicker={setTime}>
      <DatePicker.Year />
    </DatePicker>
  );
};

export default TimePicker;

`;

export { TimePicker, TimePickerCode };
