"use client";
import { useState } from "react";
import { DatePicker } from "@/src/components";
import { rangePicker } from "@/src/components/DatePicker/DatePickerContext";

const DateRangePickerWithTwoMonth = () => {
  const [rangeDate, setRangeDate] = useState<rangePicker>();
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

const DateRangePickerWithTwoMonth = () => {
  const [rangeDate, setRangeDate] = useState(null);
  return (
    <DatePicker showTwoMonth={true} rangeDate={setRangeDate}>
      <DatePicker.Range />
    </DatePicker>
  );
};

export default DateRangePickerWithTwoMonth;
`;

export { DateRangePickerWithTwoMonth, DateRangePickerWithTwoMonthCode };
