"use client";
import { useState } from "react";
import { DatePicker } from "~/src";

const DefaultDatePicker = () => {
  const [_, setDate] = useState<Date | null>(null);
  return (
    <DatePicker singleDatePicker={setDate}>
      <DatePicker.SingleDate />
    </DatePicker>
  );
};

const DefaultDatePickerCode = `
"use client";
import { useState } from "react";
import { DatePicker } from "keep-react";

export const DatePickerComponent = () => {
  const [date, setDate] = useState(null);
  return (
    <DatePicker singleDatePicker={setDate}>
      <DatePicker.SingleDate />
    </DatePicker>
  );
}
`;

export { DefaultDatePicker, DefaultDatePickerCode };
