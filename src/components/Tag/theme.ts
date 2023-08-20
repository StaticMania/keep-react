import { keepTagTheme } from ".";

export const tagTheme: keepTagTheme = {
  base: "flex items-center px-2 py-1 rounded",
  dismiss: "hidden",
  disabled: {
    on: "opacity-50 cursor-not-allowed text-sm font-medium text-slate-500",
    off: "cursor-pointer",
  },
  icon: {
    left: "pr-[6px]",
    right: "",
  },
  borderType: {
    solid: "border border-solid",
    dashed: "border border-dashed",
  },
  color: {
    error: "bg-error-25 border-error-100",
    gray: "bg-slate-25 border-slate-200",
    info: "bg-primary-25 border-primary-200",
    success: "bg-success-25 border-success-200",
    warning: "bg-warning-25 border-warning-200",
    teal: "bg-teal-25 border-teal-200",
    purple: "bg-purple-25 border-purple-100",
  },
  children: {
    colors: {
      error: "text-sm font-medium text-error-500",
      gray: "text-sm font-medium text-slate-500",
      info: "text-sm font-medium text-primary-500",
      success: "text-sm font-medium text-success-500",
      warning: "text-sm font-medium text-warning-500",
      teal: "text-sm font-medium text-teal-500",
      purple: "text-sm font-medium text-purple-500",
    },
  },
  bar: {
    base: "px-1.5 border w-3 h-0 rotate-90",
    color: {
      error: "border-error-100",
      gray: "border-slate-200",
      info: "border-primary-200",
      success: "border-success-200",
      warning: "border-warning-200",
      teal: "border-teal-200",
      purple: "border-purple-100",
    },
  },
};
