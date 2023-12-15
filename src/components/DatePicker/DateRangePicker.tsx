'use client'
import { createElement, forwardRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import { useDatePickerContext } from './DatePickerContext'
import { CustomInput } from './CustomInput'

export const DateRangePicker: React.FC = () => {
  const { showTwoMonth, rangeDate, placeholder } = useDatePickerContext()
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null)
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null)
  return (
    <DatePicker
      selectsRange
      monthsShown={showTwoMonth ? 2 : 1}
      showPopperArrow={false}
      startDate={selectedStartDate}
      endDate={selectedEndDate}
      dateFormat="dd/MM/yy"
      placeholderText={placeholder}
      onChange={(dates) => {
        const [startDate, endDate] = dates as [Date, Date]
        setSelectedStartDate(startDate)
        setSelectedEndDate(endDate)
        rangeDate &&
          rangeDate({
            startDate: startDate,
            endDate: endDate,
          })
      }}
      customInput={createElement(forwardRef(CustomInput))}
    />
  )
}
