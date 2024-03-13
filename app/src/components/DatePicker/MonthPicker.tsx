'use client'
import { FC, createElement, forwardRef, useState } from 'react'
import MonthPick from 'react-datepicker'
import { CustomInput } from './CustomInput'
import { useDatePickerContext } from './DatePickerContext'

export const MonthPicker: FC = () => {
  const { month, placeholder } = useDatePickerContext()
  const [selectedMonth, setSelectedMonth] = useState(new Date())

  const handleMonthChange = (date: Date) => {
    setSelectedMonth(date)
    const monthInNumber = String(date.getMonth() + 1).padStart(2, '0')
    const year = new Date(date).getFullYear()
    const newMonth = `${monthInNumber}/${year}`
    month && month(newMonth)
  }

  return (
    <MonthPick
      placeholderText={placeholder}
      selected={selectedMonth}
      onChange={handleMonthChange}
      dateFormat="MM/yyyy"
      showPopperArrow={false}
      showMonthYearPicker
      customInput={createElement(forwardRef(CustomInput))}
      renderCustomHeader={({ monthDate, customHeaderCount, decreaseMonth, increaseMonth }) => (
        <div className="flex items-center justify-between">
          <button
            aria-label="Previous Month"
            className={` ${customHeaderCount === 1 && 'hidden'}`}
            onClick={decreaseMonth}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#5e718d" viewBox="0 0 256 256">
                <path d="M162.83,205.17a4,4,0,0,1-5.66,5.66l-80-80a4,4,0,0,1,0-5.66l80-80a4,4,0,1,1,5.66,5.66L85.66,128Z"></path>
              </svg>
            </span>
          </button>
          <p className="text-body-4 font-semibold text-metal-800">
            {monthDate.toLocaleString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </p>
          <button aria-label="Next Month" className={` ${customHeaderCount === 1 && 'hidden'}`} onClick={increaseMonth}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#5e718d" viewBox="0 0 256 256">
              <path d="M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"></path>
            </svg>
          </button>
        </div>
      )}
    />
  )
}
