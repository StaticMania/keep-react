import { keepFormControlTheme } from "./formControls";

export const formControlsTheme: keepFormControlTheme = {
  helperText: {
    base: "mt-2 text-sm",
    disabled: "cursor-not-allowed opacity-50",
    colors: {
      default: "text-slate-500",
      gray: "text-slate-500",
      info: "text-blue-700",
      success: "text-green-600",
      error: "text-red-600",
      warning: "text-yellow-500",
    },
  },
  label: {
    base: "text-sm font-medium",
    colors: {
      default: "text-slate-700",
      gray: "text-slate-700",
      info: "text-blue-500",
      error: "text-red-600",
      warning: "text-yellow-500",
      success: "text-green-700",
    },
    disabled: "opacity-50",
  },
  radio: {
    base: "bg-slate-25 border border-slate-300",
    radioType: {
      square: "rounded",
      circle: "rounded-full",
    },
    withSquare: "relative peer-checked:radio-square-item",
    radioInput: "hidden peer",
    sizes: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
    withCheckIcon: {
      on: {
        base: "relative peer-checked:radio-checked-item",
        sizes: {
          sm: "peer-checked:before:w-1 peer-checked:before:h-2  peer-checked:before:border-r-2 peer-checked:before:border-b-2 peer-checked:before:border-l-0 peer-checked:before:border-t-0",
          md: "peer-checked:before:w-1 peer-checked:before:h-2  peer-checked:before:border-r-2 peer-checked:before:border-b-2 peer-checked:before:border-l-0 peer-checked:before:border-t-0",
          lg: "peer-checked:before:w-1.5 peer-checked:before:h-2.5  peer-checked:before:border-r-2 peer-checked:before:border-b-2 peer-checked:before:border-l-0 peer-checked:before:border-t-0",
        },
      },
      off: {
        base: "relative peer-checked:radio-ringed-item",
        sizes: {
          sm: "peer-checked:before:h-2 peer-checked:before:w-2",
          md: "peer-checked:before:h-2.5 peer-checked:before:w-2.5",
          lg: "peer-checked:before:h-3 peer-checked:before:w-3",
        },
      },
    },
  },
  checkbox: {
    base: "bg-slate-25 border border-slate-300 rounded",
    radioInput: "hidden peer",
    sizes: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
    withCheckIcon: {
      on: {
        base: "relative peer-checked:checkbox-checked-item",
        sizes: {
          sm: "peer-checked:before:w-1 peer-checked:before:h-2  peer-checked:before:border-r-2 peer-checked:before:border-b-2 peer-checked:before:border-l-0 peer-checked:before:border-t-0",
          md: "peer-checked:before:w-1 peer-checked:before:h-2  peer-checked:before:border-r-2 peer-checked:before:border-b-2 peer-checked:before:border-l-0 peer-checked:before:border-t-0",
          lg: "peer-checked:before:w-1.5 peer-checked:before:h-2.5  peer-checked:before:border-r-2 peer-checked:before:border-b-2 peer-checked:before:border-l-0 peer-checked:before:border-t-0",
        },
      },
      off: {
        base: "relative peer-checked:checkbox-ringed-item",
        sizes: {
          sm: "peer-checked:before:h-2 peer-checked:before:w-2 peer-checked:before:rounded-sm",
          md: "peer-checked:before:h-2.5 peer-checked:before:w-2.5 peer-checked:before:rounded-sm",
          lg: "peer-checked:before:h-3 peer-checked:before:w-3 peer-checked:before:rounded-sm",
        },
      },
    },
  },
  numberInput: {
    base: "flex",
    field: {
      base: "relative",
      icon: {
        base: "absolute bg-slate-25 cursor-pointer border border-slate-200 rounded top-2/4 -translate-y-2/4",
        incrementIcon: "h-full flex items-center justify-center",
        decrementIcon: "h-full flex items-center justify-center",
        disabled: "!cursor-not-allowed opacity-50",
        sizes: {
          sm: "w-5 h-5",
          md: "w-6 h-6",
          lg: "w-7 h-7",
        },
        position: {
          right: "",
          incrementIcon: "left-2",
          decrementIcon: "right-2 ",
        },
      },
      input: {
        base: "block text-center border border-slate-300 rounded-md text-slate-600 focus:outline-none focus:ring-0 focus:border-slate-500",
        disabled: "cursor-not-allowed opacity-50",
        sizes: {
          sm: "max-w-[110px] py-2 px-8 sm:text-xs",
          md: "max-w-[114px] py-2.5 px-10 text-sm",
          lg: "max-w-[140px] py-3 px-12 sm:text-md",
        },
        withIcon: {
          on: {
            left: "",
            right: "",
          },
          off: "",
        },
      },
    },
  },
  textInput: {
    base: "flex",
    addon: {
      base: 'relative inline-flex items-center px-3 text-sm after:content[""] after:absolute after:h-2/4 after:w-px after:top-2/4 after:-translate-y-2/4',
      separator: {
        colors: {
          default: "text-slate-800 border-slate-300 after:bg-slate-200",
          gray: "text-slate-800 border-slate-300 after:bg-slate-200",
          info: "text-primary-500 border-primary-300 after:bg-primary-200",
          error: "text-error-600 border-error-200 after:bg-error-200",
          warning: "text-warning-500 border-warning-200 after:bg-warning-200",
          success: "text-success-500 border-success-200 after:bg-success-200",
        },
      },
      position: {
        left: "border-r-0 after:right-0",
        right: "border-l-0 after:left-0",
      },

      addonBorder: {
        on: "border-l border-t border-b rounded-l",
        off: "border-b",
      },
    },
    field: {
      base: "relative w-full",
      icon: {
        base: "pointer-events-none absolute inset-y-0 flex items-center",
        position: {
          left: "left-0 pl-3",
          right: "right-0 pr-3",
        },
      },
      input: {
        base: "block w-full focus:outline-none focus:ring-0",
        disabled: "cursor-not-allowed opacity-50",
        sizes: {
          sm: "p-2 sm:text-xs",
          md: "p-2.5 text-sm",
          lg: "sm:text-md p-4",
        },
        colors: {
          default: "text-slate-800 border-slate-300 caret-slate-800",
          gray: "text-slate-800 border-slate-300 caret-slate-800",
          info: "text-primary-500 border-primary-300 caret-primary-600",
          error: "text-error-600 border-error-200 caret-error-500",
          warning: "text-warning-500 border-warning-200 caret-warning-500",
          success: "text-success-500 border-success-200 caret-success-600",
        },
        withBg: {
          on: {
            colors: {
              default:
                "bg-white placeholder:text-slate-400 focus:placeholder:text-slate-300",
              gray: "bg-slate-25 placeholder:text-slate-400 focus:placeholder:text-slate-300",
              info: "bg-blue-25 placeholder:text-primary-400 focus:placeholder:text-primary-300",
              error:
                "bg-error-25 placeholder:text-error-400 focus:placeholder:text-error-300",
              warning:
                "bg-warning-25 placeholder:text-warning-400 focus:placeholder:text-warning-300",
              success:
                "bg-success-25 placeholder:text-success-400 focus:placeholder:text-success-300",
            },
          },
          off: "bg-white placeholder:text-slate-400 focus:placeholder:text-slate-300",
        },
        withBorder: {
          on: "border",
          off: "border-b !rounded-r-0",
        },

        withIcon: {
          on: {
            left: "pl-10",
            right: "pr-10",
          },
          off: "",
        },
        withAddon: {
          on: {
            left: "border-l-0 rounded-r-md",
            right: "border-r-0 rounded-l-md",
          },
          off: "rounded-md",
        },
        withShadow: {
          on: "shadow-sm",
          off: "",
        },
      },
    },
  },
  fileInput: {
    base: "flex",
    field: {
      base: "relative w-full",
      input: {
        base: "rounded-lg block w-full border disabled:cursor-not-allowed disabled:opacity-50",
        sizes: {
          sm: "sm:text-xs",
          md: "text-sm",
          lg: "sm:text-md",
        },
        colors: {
          gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500",
          info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500",
          error:
            "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500",
          warning:
            "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500",
          success:
            "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500",
        },
      },
    },
  },
  textarea: {
    base: "appearance-none form-textarea block w-full border-0 focus:outline-none focus:ring-0 p-3",
    disabled: "disabled:cursor-not-allowed disabled:opacity-50",
    colors: {
      default:
        "text-slate-800 border-slate-300 focus:border-slate-500 caret-slate-800",
      gray: "text-slate-800 border-slate-300 focus:border-slate-500 caret-slate-800",
      info: "text-primary-500 border-primary-300 focus:border-info-300 caret-primary-600",
      error:
        "text-error-600 border-error-200 focus:border-error-300 caret-error-500",
      warning:
        "text-warning-500 border-warning-200 focus:border-warning-300 caret-warning-500",
      success:
        "text-success-500 border-success-200 focus:border-success-300 caret-success-600",
    },
    withBg: {
      on: {
        colors: {
          default:
            "bg-white placeholder:text-slate-400 focus:placeholder:text-slate-300",
          gray: "bg-slate-25 placeholder:text-slate-400 focus:placeholder:text-slate-300",
          info: "bg-blue-25 placeholder:text-primary-400 focus:placeholder:text-primary-300",
          error:
            "bg-error-25 placeholder:text-error-400 focus:placeholder:text-error-300",
          warning:
            "bg-warning-25 placeholder:text-warning-400 focus:placeholder:text-warning-300",
          success:
            "bg-success-25 placeholder:text-success-400 focus:placeholder:text-success-300",
        },
      },
      off: "bg-white placeholder:text-slate-400 focus:placeholder:text-slate-300",
    },
    withBorder: {
      on: "!border rounded-md",
      off: "!border-b rounded-none",
    },
    withShadow: {
      on: "shadow-sm",
      off: "",
    },
  },
  select: {
    base: "flex",
    addon:
      "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900",
    field: {
      base: "relative w-full",
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        svg: "h-5 w-5 text-gray-500",
      },
      select: {
        base: "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
        withIcon: {
          on: "pl-10",
          off: "",
        },
        withAddon: {
          on: "rounded-r-lg",
          off: "rounded-lg",
        },
        withShadow: {
          on: "shadow-md",
          off: "",
        },
        sizes: {
          sm: "p-2 sm:text-xs",
          md: "p-2.5 text-sm",
          lg: "sm:text-md p-4",
        },
        colors: {
          gray: "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500",
          info: "border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 focus:border-blue-500 focus:ring-blue-500",
          error:
            "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500",
          warning:
            "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500",
          success:
            "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500",
        },
      },
    },
  },
};
