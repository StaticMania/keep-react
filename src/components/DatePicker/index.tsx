import { FC, ReactNode } from "react";

import { DatePickerContext, rangePicker } from "./DatePickerContext";
import DateRangePicker from "./DateRangePicker";
import MonthPicker from "./MonthPicker";
import SingleDatePicker from "./SingleDatePicker";
import TimePicker from "./TimePicker";
import YearPicker from "./YearPicker";
import "./DatePicker.css";

interface DatePickerProps {
  showTwoMonth?: boolean;
  rangeDate?: (
    value: rangePicker | ((prevValue: rangePicker | undefined) => rangePicker)
  ) => void;
  children: ReactNode;
  singleDatePicker?: React.Dispatch<React.SetStateAction<Date | null>>;
  yearPicker?: React.Dispatch<
    React.SetStateAction<number | Date | null | undefined>
  >;
  monthPicker?: React.Dispatch<
    React.SetStateAction<string | Date | null | undefined>
  >;
  timePicker?: React.Dispatch<
    React.SetStateAction<string | Date | null | undefined>
  >;
}

const DatePickerComponent: FC<DatePickerProps> = ({
  children,
  showTwoMonth = false,
  rangeDate,
  yearPicker,
  monthPicker,
  singleDatePicker,
  timePicker,
}) => {
  return (
    <DatePickerContext.Provider
      value={{
        children,
        showTwoMonth,
        rangeDate,
        yearPicker,
        monthPicker,
        singleDatePicker,
        timePicker,
      }}
    >
      {children}
    </DatePickerContext.Provider>
  );
};

DatePickerComponent.displayName = "DatePicker";
DateRangePicker.displayName = "DatePicker.Range";
SingleDatePicker.displayName = "DatePicker.SingleDate";
MonthPicker.displayName = "DatePicker.Month";
YearPicker.displayName = "DatePicker.Year";
TimePicker.displayName = "DatePicker.Year";

export const DatePicker = Object.assign(DatePickerComponent, {
  Range: DateRangePicker,
  SingleDate: SingleDatePicker,
  Month: MonthPicker,
  Year: YearPicker,
  Time: TimePicker,
});
