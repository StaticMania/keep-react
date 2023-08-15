import { keepCheckboxTheme } from ".";

export const checkboxTheme: keepCheckboxTheme = {
  base: "form-checkbox outline-none flex items-center justify-center mr-2",
  disabled: "cursor-not-allowed opacity-50",
  enabled: "cursor-pointer opacity-100",
  type: {
    circle: "rounded-full checked:after:rounded-full",
    round: "rounded checked:after:rounded-sm",
  },
  variant: {
    withCheck: {
      error:
        "border border-error-100 focus:ring-0 focus:ring-offset-0 bg-error-25 shadow shadow-error-100 checked:bg-error-600 checked:hover:bg-error-600 checked:focus:bg-error-600",
      info: "border border-primary-100 focus:ring-0 focus:ring-offset-0 bg-slate-25 shadow shadow-primary-100 checked:bg-primary-600 checked:hover:bg-primary-600 checked:focus:bg-primary-600",
      success:
        "border border-success-100 focus:ring-0 focus:ring-offset-0 bg-success-25 shadow shadow-success-100 checked:bg-success-600 checked:hover:bg-success-600 checked:focus:bg-success-600",
      warning:
        "border border-warning-100 focus:ring-0 focus:ring-offset-0 bg-warning-25 shadow shadow-warning-100 checked:bg-warning-600 checked:hover:bg-warning-600 checked:focus:bg-warning-600",
    },
    withoutCheck: {
      error:
        'border border-error-100 focus:ring-0 focus:ring-offset-0 checked:bg-none checked:bg-error-25 checked:after:content-[" "] checked:after:bg-error-600 checked:border checked:border-error-500 checked:hover:bg-transparent checked:hover:border checked:hover:border-error-500 checked:focus:bg-transparent checked:focus:border checked:focus:border-error-500',
      info: 'border border-primary-100 focus:ring-0 focus:ring-offset-0 checked:bg-none checked:bg-slate-25 checked:after:content-[" "] checked:after:bg-primary-600 checked:border checked:border-primary-500 checked:hover:bg-transparent checked:hover:border checked:hover:border-primary-500 checked:focus:bg-transparent checked:focus:border checked:focus:border-primary-500',
      success:
        'border border-success-100 focus:ring-0 focus:ring-offset-0 checked:bg-none checked:bg-success-25 checked:after:content-[" "] checked:after:bg-success-600 checked:border checked:border-success-500 checked:hover:bg-transparent checked:hover:border checked:hover:border-success-500 checked:focus:bg-transparent checked:focus:border checked:focus:border-success-500',
      warning:
        'border border-warning-100 focus:ring-0 focus:ring-offset-0 checked:bg-none checked:bg-warning-25 checked:after:content-[" "] checked:after:bg-warning-600 checked:border checked:border-warning-500 checked:hover:bg-transparent checked:hover:border checked:hover:border-warning-500 checked:focus:bg-transparent checked:focus:border checked:focus:border-warning-500',
    },
  },
  labelColor: {
    gray: "text-slate-500 font-medium",
    error: "text-error-800 font-medium",
    info: "text-slate-800 font-medium",
    success: "text-success-800 font-medium",
    warning: "text-warning-800 font-medium",
  },
  size: {
    xs: "w-4 h-4 checked:after:w-2 checked:after:h-2",
    sm: "w-5 h-5 checked:after:w-2.5 checked:after:h-2.5",
    md: "w-6 h-6 checked:after:w-3 checked:after:h-3",
  },
  label: {
    xs: "text-sm select-none",
    sm: "text-base select-none",
    md: "text-lg select-none",
  },
};
