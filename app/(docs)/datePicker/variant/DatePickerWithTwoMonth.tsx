"use client";

import { DatePicker } from "@/src/components/DatePicker";
import { useState } from "react";

const DatePickerWithTwoMonth = () => {
  const [date, setDate] = useState<Date | null>(null);
  return (
    <DatePicker showTwoMonth={true} singleDatePicker={setDate}>
      <DatePicker.SingleDate />
    </DatePicker>
  );
};

const DatePickerWithTwoMonthCode = `
"use client";
import { useState } from "react";
import { DatePicker } from "keep-design";

const DatePickerWithTwoMonth = () => {
  const [date, setDate] = useState(null);
  return (
    <DatePicker showTwoMonth={true} singleDatePicker={setDate}>
      <DatePicker.SingleDate />
    </DatePicker>
  );
};

export default DatePickerWithTwoMonth;
`;

export { DatePickerWithTwoMonth, DatePickerWithTwoMonthCode };
