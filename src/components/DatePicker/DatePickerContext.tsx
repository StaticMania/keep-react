export interface rangePicker {
  startDate: Date | null
  endDate: Date | null
}

import type { ReactNode } from 'react'
import { createContext, useContext } from 'react'

export type DatePickerContextType = {
  showTwoMonth?: boolean
  children: ReactNode
  singleDatePicker?: React.Dispatch<React.SetStateAction<Date | null>>
  rangeDate?: (value: rangePicker | ((prevValue: rangePicker | undefined) => rangePicker)) => void
  yearPicker?: React.Dispatch<React.SetStateAction<number | Date | null | undefined>>
  monthPicker?: React.Dispatch<React.SetStateAction<string | Date | null | undefined>>
  timePicker?: React.Dispatch<React.SetStateAction<string | Date | null | undefined>>
}

export const DatePickerContext = createContext<DatePickerContextType | undefined>(undefined)

export function useDatePickerContext(): DatePickerContextType {
  const context = useContext(DatePickerContext)
  if (!context) {
    throw new Error('useDatePickerContext should be used within the DatePickerContext provider!')
  }
  return context
}
