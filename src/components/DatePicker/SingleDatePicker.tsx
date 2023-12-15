'use client'
import { FC, createElement, forwardRef, useState } from 'react'
import DatePicker from 'react-datepicker'
import { useDatePickerContext } from './DatePickerContext'
import { CustomInput } from './CustomInput'

export const SingleDatePicker: FC = () => {
  const { showTwoMonth, singleDatePicker, placeholder } = useDatePickerContext()
  const [date, setDate] = useState<Date | null>()
  const handleChange = (date: Date | null) => {
    setDate(date)
    singleDatePicker && singleDatePicker(date)
  }

  return (
    <DatePicker
      placeholderText={placeholder}
      monthsShown={showTwoMonth ? 2 : 1}
      selected={date}
      onChange={handleChange}
      customInput={createElement(forwardRef(CustomInput))}
      className="rounded-md border border-metal-300 placeholder:text-body-5"
      showPopperArrow={false}
      startDate={date}
      dateFormat="dd/MM/yyyy"></DatePicker>
  )
}
