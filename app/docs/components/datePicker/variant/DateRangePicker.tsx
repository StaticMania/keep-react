"use client";
import { useState } from "react";
import { DatePicker } from "@/src/components/DatePicker";
import { rangePicker } from "@/src/components/DatePicker/DatePickerContext";

const DateRangePicker = () => {
  const [rangeDate, setRangeDate] = useState<rangePicker>();
  return (
    <DatePicker rangeDate={setRangeDate}>
      <DatePicker.Range />
    </DatePicker>
  );
};

const DateRangePickerCode = `
"use client";
import { useState } from "react";
import { DatePicker} from "keep-react";

const DateRangePicker = () => {
  const [rangeDate, setRangeDate] = useState(null);
  return (
    <DatePicker rangeDate={setRangeDate}>
      <DatePicker.Range />
    </DatePicker>
  );
};
export default DateRangePicker;
`;

export { DateRangePicker, DateRangePickerCode };
