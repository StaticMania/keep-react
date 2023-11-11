import { FC, useState } from 'react'
import DatePicker from 'react-datepicker'
import CustomInput from './CustomInput'
import { useDatePickerContext } from './DatePickerContext'

export const TimePicker: FC = () => {
  const { timePicker } = useDatePickerContext()
  const [selectedTime, setSelectedTime] = useState(new Date())

  const handleTimePicker = (date: Date) => {
    setSelectedTime(date)
    const hours = date.getHours()
    const minutes = date.getMinutes()

    let formattedHours = hours % 12
    if (formattedHours === 0) {
      formattedHours = 12
    }

    const amOrPm = hours < 12 ? 'am' : 'pm'
    const formattedMinutes = String(minutes).padStart(2, '0')
    const newTime = `${formattedHours}:${formattedMinutes}${amOrPm}`
    timePicker && timePicker(newTime)
  }

  return (
    <DatePicker
      customInput={<CustomInput />}
      selected={selectedTime}
      onChange={handleTimePicker}
      showTimeSelect
      showPopperArrow={false}
      showTimeSelectOnly
      timeIntervals={5}
      timeCaption="Select Time"
      dateFormat="h:mm aa"
    />
  )
}
