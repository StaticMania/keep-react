'use client'
import { FC, createElement, forwardRef, useState } from 'react'
import RangePicker from 'react-datepicker'
import { CustomInput } from './CustomInput'
import { useDatePickerContext } from './DatePickerContext'

export const DateRangePicker: FC = () => {
  const { showTwoMonth, rangeDate, placeholder } = useDatePickerContext()
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(new Date())
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null)
  return (
    <RangePicker
      selectsRange={true}
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
