import type { keepToggleTheme } from ".";
export const switchTheme: keepToggleTheme = {
  base: "relative inline-flex items-center rounded-full",
  circleBase:
    "relative pointer-events-none inline-block transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out",
  enabledBg: {
    on: {
      primary: "bg-primary-500",
      slate: "bg-slate-800",
    },
    off: "bg-slate-200",
  },
  enabledCircle: {
    on: {
      sm: "h-4 w-4 translate-x-[18px]",
      md: "h-5 w-5 translate-x-[22px]",
      lg: "h-[22px] w-[22px] translate-x-[26px]",
    },
    off: {
      sm: "h-4 w-4 translate-x-[2px]",
      md: "h-5 w-5 translate-x-[2px]",
      lg: "h-[22px] w-[22px] translate-x-[2px]",
    },
  },
  disabled: "cursor-not-allowed opacity-50",
  size: {
    sm: "h-5 w-9",
    md: "h-6 w-11",
    lg: "h-7 w-[50px]",
  },
  label: {
    sm: "ml-2 text-sm text-slate-800 font-medium",
    md: "ml-2 text-base text-slate-800 font-medium",
    lg: "ml-2 text-lg text-slate-800 font-medium",
  },
  withIconBase:
    "after:content-[''] after:absolute after:-translate-x-2/4 after:top-2/4 after:left-2/4 after:-translate-y-2/4",
};
