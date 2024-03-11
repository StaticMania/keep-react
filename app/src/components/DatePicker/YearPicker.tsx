'use client'
import { FC, createElement, forwardRef, useState } from 'react'
import YearPick from 'react-datepicker'
import { CustomInput } from './CustomInput'
import { useDatePickerContext } from './DatePickerContext'

export const YearPicker: FC = () => {
  const { year, placeholder } = useDatePickerContext()
  const [startDate, setStartDate] = useState<Date | null>(null)
  const handleDateChange = (date: Date | null) => {
    if (date) {
      setStartDate(date)
      const newYear = new Date(date).getFullYear()
      year && year(newYear)
    }
  }

  return (
    <YearPick
      placeholderText={placeholder}
      selected={startDate}
      onChange={handleDateChange}
      showYearPicker
      dateFormat="yyyy"
      customInput={createElement(forwardRef(CustomInput))}
      showPopperArrow={false}
      renderCustomHeader={({ date, decreaseYear, increaseYear, customHeaderCount }) => {
        const year = date.getFullYear()
        return (
          <div className="flex items-center justify-between px-5 pt-3">
            <button
              aria-label="Previous Month"
              className={customHeaderCount === 1 ? 'hidden' : ''}
              onClick={decreaseYear}>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#5e718d" viewBox="0 0 256 256">
                  <path d="M162.83,205.17a4,4,0,0,1-5.66,5.66l-80-80a4,4,0,0,1,0-5.66l80-80a4,4,0,1,1,5.66,5.66L85.66,128Z"></path>
                </svg>
              </span>
            </button>
            <p className="text-body-4 font-semibold text-metal-800">{year}</p>
            <button aria-label="Next Month" className={customHeaderCount === 1 ? 'hidden' : ''} onClick={increaseYear}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#5e718d" viewBox="0 0 256 256">
                <path d="M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"></path>
              </svg>
            </button>
          </div>
        )
      }}
    />
  )
}
