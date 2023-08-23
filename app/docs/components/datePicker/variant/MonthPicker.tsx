"use client";
import { useState } from "react";
import { DatePicker } from "@/src/components/DatePicker";

const MonthPicker = () => {
  const [monthPicker, setMonthPicker] = useState<Date | null | string>();
  return (
    <DatePicker monthPicker={setMonthPicker}>
      <DatePicker.Month />
    </DatePicker>
  );
};

const MonthPickerCode = `
"use client";
import { useState } from "react";
import { DatePicker } from "keep-design";

const MonthPicker = () => {
  const [monthPicker, setMonthPicker] = useState(null);
  return (
    <DatePicker monthPicker={setMonthPicker}>
      <DatePicker.Month />
    </DatePicker>
  );
};

export default MonthPicker;
`;

export { MonthPicker, MonthPickerCode };
