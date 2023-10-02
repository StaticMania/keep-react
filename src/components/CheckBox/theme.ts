import { keepCheckboxTheme } from ".";

export const checkboxTheme: keepCheckboxTheme = {
  checkboxInput: "hidden peer",
  base: "border flex items-center justify-center relative",
  disabled: "cursor-not-allowed opacity-50",
  enabled: "cursor-pointer opacity-100",
  color: {
    info: "peer-checked:border-primary-500 peer-checked:before:bg-primary-500 border-slate-200",
    warning:
      "peer-checked:border-warning-500 peer-checked:before:bg-warning-500 border-warning-500",
    success:
      "peer-checked:border-success-500 peer-checked:before:bg-success-600 border-success-500",
    error:
      "peer-checked:border-error-500 peer-checked:before:bg-error-500 border-error-500",
  },
  variant: {
    circle: "rounded-full before:rounded-full",
    square: "rounded before:rounded-sm",
  },
  labelColor: {
    error: "text-error-800 font-medium",
    info: "text-slate-800 font-medium",
    success: "text-success-800 font-medium",
    warning: "text-warning-800 font-medium",
  },
  size: {
    sm: "h-4 w-4 peer-checked:before:w-2 peer-checked:before:h-2",
    md: "h-5 w-5 peer-checked:before:w-2.5 peer-checked:before:h-2.5",
    lg: "h-6 w-6 peer-checked:before:w-3 peer-checked:before:h-3",
  },
  label: {
    sm: "text-sm select-none",
    lg: "text-base select-none",
    md: "text-lg select-none",
  },
};
