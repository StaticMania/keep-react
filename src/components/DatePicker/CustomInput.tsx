import { Calendar } from "phosphor-react";
import { forwardRef } from "react";

export interface CustomInputProps {
  value?: string;
  onClick?: () => void;
  placeholder?: string;
}

// eslint-disable-next-line react/display-name
const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick, placeholder = "Date / Month / Year" }, ref) => {
    return (
      <>
        <input
          ref={ref}
          placeholder={placeholder}
          value={value}
          readOnly
          onClick={onClick}
          className="relative w-full rounded-md border border-slate-300 p-3 focus-within:border-slate-500 focus:outline-none focus-visible:!border-slate-500"
        />
        <span className="absolute top-3 right-3 border-l border-l-slate-200 pl-1">
          <Calendar size={28} color="#5E718D" />
        </span>
      </>
    );
  }
);

export default CustomInput;
