'use client'
import type { Dispatch, ReactNode, SetStateAction } from 'react'
import { createContext, useContext } from 'react'

/**
 * Represents a range picker with start and end dates.
 * @interface rangePicker
 */
export interface rangePicker {
  /**
   * The start date of the range picker.
   * @type {Date | null}
   * @default null
   */
  startDate: Date | null
  /**
   * The end date of the range picker.
   * @type {Date | null}
   * @default null
   */
  endDate: Date | null
}

/**
 * The DatePickerContextType interface represents the props of the DatePickerContext component.
 * @interface DatePickerContextType
 */
export type DatePickerContextType = {
  /**
   * Determines whether to show two months in the DatePicker.
   * @type {boolean}
   * @default false
   */
  showTwoMonth?: boolean

  /**
   * The children of the DatePicker component.
   * @type {ReactNode}
   * @default null
   */
  children: ReactNode

  /**
   * A state setter for the single date picker.
   * @type {Dispatch<SetStateAction<Date | null>>}
   * @default null
   */
  singleDate?: Dispatch<SetStateAction<Date | null>>

  /**
   * A function to handle range date selection.
   * @param value - The selected range date value.
   * @type {(value: rangePicker | ((prevValue: rangePicker | undefined) => rangePicker)) => void}
   */
  // eslint-disable-next-line no-unused-vars
  rangeDate?: (value: rangePicker | ((prevValue: rangePicker | undefined) => rangePicker)) => void

  /**
   * A state setter for the year picker.
   * @type {Dispatch<SetStateAction<number | Date | null | undefined>>}
   * @default null
   */
  year?: Dispatch<SetStateAction<number | Date | null | undefined>>

  /**
   * A state setter for the month picker.
   * @type {Dispatch<SetStateAction<string | Date | null | undefined>>}
   * @default null
   */
  month?: Dispatch<SetStateAction<string | Date | null | undefined>>

  /**
   * A state setter for the time picker.
   * @type {Dispatch<SetStateAction<string | Date | null | undefined>>}
   * @default null
   */
  time?: Dispatch<SetStateAction<string | Date | null | undefined>>

  /**
   * The CSS class name for the DatePicker component.
   * @type {string}
   * @default ''
   */
  className?: string

  /**
   * The CSS style for the DatePicker icon.
   * @type {string}
   * @default ''
   */
  iconStyle?: string

  /**
   * The icon element for the DatePicker component.
   * @type {ReactNode}
   * @default null
   */
  icon?: ReactNode

  /**
   * The placeholder text for the DatePicker component.
   * @type {string}
   * @default ''
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
