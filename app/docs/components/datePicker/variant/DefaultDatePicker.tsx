"use client";

import { useState } from "react";
import { DatePicker } from "@/src/components/DatePicker";

const DefaultDatePicker = () => {
  const [date, setDate] = useState<Date | null>(null);
  return (
    <DatePicker singleDatePicker={setDate}>
      <DatePicker.SingleDate />
    </DatePicker>
  );
};

const DefaultDatePickerCode = `
"use client";
import { useState } from "react";
import { DatePicker } from "keep-design";

const DefaultDatePicker = () => {
  const [date, setDate] = useState(null);
  return (
    <DatePicker singleDatePicker={setDate}>
      <DatePicker.SingleDate />
    </DatePicker>
  );
};

export default DefaultDatePicker;
`;

export { DefaultDatePicker, DefaultDatePickerCode };
