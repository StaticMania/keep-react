"use client";
import { useState } from "react";
import { DatePicker } from "@/src/components";

const YearPicker = () => {
  const [yearPicker, setYearPicker] = useState<number | Date | null>();
  return (
    <DatePicker yearPicker={setYearPicker}>
      <DatePicker.Year />
    </DatePicker>
  );
};

const YearPickerCode = `
"use client";

import { useState } from "react";
import { DatePicker } from "keep-react";

const YearPicker = () => {
  const [yearPicker, setYearPicker] = useState();
  return (
    <DatePicker yearPicker={setYearPicker}>
      <DatePicker.Year />
    </DatePicker>
  );
};

export default YearPicker;

`;

export { YearPicker, YearPickerCode };
