import { useState } from 'react'
import DatePicker from 'react-datepicker'
import CustomInput from './CustomInput'
import { useDatePickerContext } from './DatePickerContext'

export const SingleDatePicker: React.FC = () => {
  const { showTwoMonth, singleDatePicker } = useDatePickerContext()
  const [date, setDate] = useState<Date | null>()
  const handleChange = (date: Date | null) => {
    setDate(date)
    singleDatePicker && singleDatePicker(date)
  }

  return (
    <DatePicker
      monthsShown={showTwoMonth ? 2 : 1}
      selected={date}
      onChange={handleChange}
      customInput={<CustomInput />}
      className="border-metal-300 rounded-md border placeholder:text-body-5"
      showPopperArrow={false}
      startDate={date}
      dateFormat="dd/MM/yyyy"></DatePicker>
  )
}
