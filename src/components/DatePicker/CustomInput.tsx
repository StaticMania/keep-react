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
          className="border-metal-300 focus-within:border-metal-500 focus-visible:!border-metal-500 relative w-full rounded-md border p-3 focus:outline-none"
        />
        <span className="border-l-metal-200 pointer-events-none absolute right-3 top-3 border-l pl-1">
          <Calendar size={28} color="#5E718D" />
        </span>
      </>
    )
  },
)

export default CustomInput
