import { useState } from "react";
import DatePicker from "react-datepicker";
import CustomInput from "./CustomInput";
import { useDatePickerContext } from "./DatePickerContext";

export const DateRangePicker: React.FC = () => {
  const { showTwoMonth, rangeDate } = useDatePickerContext();
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);

  return (
    <DatePicker
      selectsRange
      monthsShown={showTwoMonth ? 2 : 1}
      showPopperArrow={false}
      startDate={selectedStartDate}
      endDate={selectedEndDate}
      dateFormat="dd/MM/yy"
      onChange={(dates) => {
        const [startDate, endDate] = dates as [Date, Date];
        setSelectedStartDate(startDate);
        setSelectedEndDate(endDate);
        rangeDate &&
          rangeDate({
            startDate: startDate,
            endDate: endDate,
          });
      }}
      customInput={<CustomInput />}
      className="rounded-md border border-slate-300 placeholder:text-sm"
    />
  );
};
