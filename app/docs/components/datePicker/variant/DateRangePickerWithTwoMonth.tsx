"use client";
import { useState } from "react";
import { DatePicker } from "~/src";
import { rangePicker } from "~/src/components/DatePicker/DatePickerContext";

const DateRangePickerWithTwoMonth = () => {
  const [_, setRangeDate] = useState<rangePicker>();
  return (
    <DatePicker showTwoMonth={true} rangeDate={setRangeDate}>
      <DatePicker.Range />
    </DatePicker>
  );
};

const DateRangePickerWithTwoMonthCode = `
"use client";
import { useState } from "react";
import { DatePicker } from "keep-react";

export const DatePickerComponent = () => {
  const [rangeDate, setRangeDate] = useState(null);
  return (
    <DatePicker showTwoMonth={true} rangeDate={setRangeDate}>
      <DatePicker.Range />
    </DatePicker>
  );
}
`;

export { DateRangePickerWithTwoMonth, DateRangePickerWithTwoMonthCode };
