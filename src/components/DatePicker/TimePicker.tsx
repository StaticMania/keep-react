'use client'
import { FC, createElement, forwardRef, useState } from 'react'
import TimePick from 'react-datepicker'
import { useDatePickerContext } from './DatePickerContext'
import { CustomInput } from './CustomInput'

export const TimePicker: FC = () => {
  const { time, placeholder } = useDatePickerContext()
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
    time && time(newTime)
  }

  return (
    <TimePick
      placeholderText={placeholder}
      customInput={createElement(forwardRef(CustomInput))}
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
