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
          className="relative w-full rounded-md border border-slate-200 px-4 py-2.5 placeholder:text-base placeholder:font-normal focus:outline-none"
        />
        <span className="pointer-events-none absolute right-3 top-3 border-l border-l-slate-200 pl-1">
          <Calendar size={24} color="#5E718D" />
        </span>
      </>
    )
  },
)

export default CustomInput
