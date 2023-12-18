'use client'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { createElement, forwardRef, useState } from 'react'
import MonthPick from 'react-datepicker'
import { useDatePickerContext } from './DatePickerContext'
import { CustomInput } from './CustomInput'

export const MonthPicker: React.FC = () => {
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
              <CaretLeft size={18} color="#5E718D" weight="thin" />
            </span>
          </button>
          <p className="text-body-4 font-semibold text-metal-800">
            {monthDate.toLocaleString('en-US', {
              month: 'long',
              year: 'numeric',
            })}
          </p>
          <button aria-label="Next Month" className={` ${customHeaderCount === 1 && 'hidden'}`} onClick={increaseMonth}>
            <CaretRight size={18} color="#5E718D" weight="thin" />
          </button>
        </div>
      )}
    />
  )
}
