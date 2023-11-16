import { Calendar } from 'phosphor-react'
import { forwardRef } from 'react'

export interface CustomInputProps {
  value?: string
  onClick?: () => void
  placeholder?: string
}

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick, placeholder = 'Date / Month / Year' }, ref) => {
    return (
      <>
        <input
          ref={ref}
          placeholder={placeholder}
          value={value}
          readOnly
          onClick={onClick}
          className="relative w-full rounded-md border border-metal-300 p-3 focus-within:border-metal-500 focus:outline-none focus-visible:!border-metal-500"
        />
        <span className="pointer-events-none absolute right-3 top-3 border-l border-l-metal-200 pl-1">
          <Calendar size={24} color="#5E718D" />
        </span>
      </>
    )
  },
)

export default CustomInput
