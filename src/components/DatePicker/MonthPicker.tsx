import { CaretLeft, CaretRight } from 'phosphor-react'
import CustomInput from './CustomInput'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { useDatePickerContext } from './DatePickerContext'

export const MonthPicker: React.FC = () => {
  const { monthPicker } = useDatePickerContext()
  const [month, setMonth] = useState(new Date())
  const handleMonthChange = (date: Date) => {
    setMonth(date)
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = new Date(date).getFullYear()
    const newMonth = `${month}/${year}`
    monthPicker && monthPicker(newMonth)
  }
  return (
    <DatePicker
      selected={month}
      onChange={handleMonthChange}
      dateFormat="MM/yyyy"
      showPopperArrow={false}
      showMonthYearPicker
      customInput={<CustomInput />}
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
          <p className="text-base font-semibold text-slate-800">
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
