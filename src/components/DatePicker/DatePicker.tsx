import { FC, ReactNode } from 'react'

import { DatePickerContext, rangePicker } from './DatePickerContext'
import { DateRangePicker } from './DateRangePicker'
import { MonthPicker } from './MonthPicker'
import { SingleDatePicker } from './SingleDatePicker'
import { TimePicker } from './TimePicker'
import { YearPicker } from './YearPicker'

/**
 * Props for the DatePicker component.
 * @interface DatePickerProps
 */
export interface DatePickerProps {
  /**
   * Determines whether to show two months in the date picker.
   */
  showTwoMonth?: boolean

  /**
   * Callback function for handling range date selection.
   * @param value - The selected range date value.
   */
  rangeDate?: (value: rangePicker | ((prevValue: rangePicker | undefined) => rangePicker)) => void

  /**
   * The content to be rendered inside the DatePicker component.
   */
  children: ReactNode

  /**
   * State setter for single date selection.
   */
  singleDatePicker?: React.Dispatch<React.SetStateAction<Date | null>>

  /**
   * State setter for year selection.
   */
  yearPicker?: React.Dispatch<React.SetStateAction<number | Date | null | undefined>>

  /**
   * State setter for month selection.
   */
  monthPicker?: React.Dispatch<React.SetStateAction<string | Date | null | undefined>>

  /**
   * State setter for time selection.
   */
  timePicker?: React.Dispatch<React.SetStateAction<string | Date | null | undefined>>

  /**
   * The CSS class name for the DatePicker component.
   */
  className?: string

  /**
   * The CSS style for the icon element.
   */
  iconStyle?: string

  /**
   * The placeholder text for the DatePicker component.
   */
  placeholder?: string

  /**
   * The icon element to be rendered inside the DatePicker component.
   */
  icon?: ReactNode
}

const DatePickerComponent: FC<DatePickerProps> = ({
  children,
  showTwoMonth = false,
  rangeDate,
  yearPicker,
  monthPicker,
  singleDatePicker,
  timePicker,
  className,
  icon,
  iconStyle,
  placeholder,
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
        className,
        icon,
        iconStyle,
        placeholder,
      }}>
      {children}
    </DatePickerContext.Provider>
  )
}

DatePickerComponent.displayName = 'DatePicker'
DateRangePicker.displayName = 'DatePicker.Range'
SingleDatePicker.displayName = 'DatePicker.SingleDate'
MonthPicker.displayName = 'DatePicker.Month'
YearPicker.displayName = 'DatePicker.Year'
TimePicker.displayName = 'DatePicker.Year'

export const DatePicker = Object.assign(DatePickerComponent, {
  Range: DateRangePicker,
  SingleDate: SingleDatePicker,
  Month: MonthPicker,
  Year: YearPicker,
  Time: TimePicker,
})
