export interface rangePicker {
  startDate: Date | null
  endDate: Date | null
}

import type { ReactNode } from 'react'
import { createContext, useContext } from 'react'

/**
 * The DatePickerContextType interface represents the props of the DatePickerContext component.
 * @interface DatePickerContextType
 */
export type DatePickerContextType = {
  /**
   * Determines whether to show two months in the DatePicker.
   */
  showTwoMonth?: boolean

  /**
   * The children of the DatePicker component.
   */
  children: ReactNode

  /**
   * A state setter for the single date picker.
   */
  singleDatePicker?: React.Dispatch<React.SetStateAction<Date | null>>

  /**
   * A function to handle range date selection.
   */
  rangeDate?: (value: rangePicker | ((prevValue: rangePicker | undefined) => rangePicker)) => void

  /**
   * A state setter for the year picker.
   */
  yearPicker?: React.Dispatch<React.SetStateAction<number | Date | null | undefined>>

  /**
   * A state setter for the month picker.
   */
  monthPicker?: React.Dispatch<React.SetStateAction<string | Date | null | undefined>>

  /**
   * A state setter for the time picker.
   */
  timePicker?: React.Dispatch<React.SetStateAction<string | Date | null | undefined>>

  /**
   * The CSS class name for the DatePicker component.
   */
  className?: string

  /**
   * The CSS style for the DatePicker icon.
   */
  iconStyle?: string

  /**
   * The icon element for the DatePicker component.
   */
  icon?: ReactNode

  /**
   * The placeholder text for the DatePicker component.
   */
  placeholder?: string
}
export const DatePickerContext = createContext<DatePickerContextType | undefined>(undefined)

export function useDatePickerContext(): DatePickerContextType {
  const context = useContext(DatePickerContext)
  if (!context) {
    throw new Error('useDatePickerContext should be used within the DatePickerContext provider!')
  }
  return context
}
