"use client";
import { useState } from "react";
import { DatePicker } from "~/src";

const DatePickerWithTwoMonth = () => {
  const [_, setDate] = useState<Date | null>(null);

  return (
    <DatePicker showTwoMonth={true} singleDatePicker={setDate}>
      <DatePicker.SingleDate />
    </DatePicker>
  );
};

const DatePickerWithTwoMonthCode = `
"use client";
import { useState } from "react";
import { DatePicker } from "keep-react";

export const DatePickerComponent = () => {
  const [date, setDate] = useState(null);
  return (
    <DatePicker showTwoMonth={true} singleDatePicker={setDate}>
      <DatePicker.SingleDate />
    </DatePicker>
  );
}
`;

export { DatePickerWithTwoMonth, DatePickerWithTwoMonthCode };
