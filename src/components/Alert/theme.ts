import type { keepAlertTheme } from ".";

/**
 * Theme object for the Alert component.
 */
export const alertTheme: keepAlertTheme = {
  base: "py-[18px] px-6 max-w-lg",
  dismiss: "hidden",
  border: {
    off: "border-0",
    on: {
      error: "border border-error-100",
      gray: "border border-slate-200",
      info: "border border-primary-100",
      success: "border border-success-200",
      warning: "border border-warning-100",
    },
    borderAccent: {
      top: "border-t-[6px]",
      bottom: "border-b-[6px]",
      left: "border-l-[6px]",
      right: "border-r-[6px]",
    },
  },
  wrapper: "flex",
  infoButton: {
    base: "pr-3.5",
  },
  closeButton: {
    base: "-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2",
    icon: "w-5 h-5",
    color: {
      info: "bg-primary-25 text-blue-500 hover:bg-blue-100 focus:ring-blue-400",
      gray: "bg-slate-50 text-slate-600 hover:bg-slate-200 focus:ring-slate-200",
      error:
        "bg-error-25 !text-error-500 hover:bg-error-50 hover:text-white focus:ring-red-400",
      success:
        "bg-success-50 text-green-500 hover:bg-green-100 focus:ring-green-400",
      warning:
        "bg-warning-25 text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-400",
    },
  },
  color: {
    info: "bg-primary-25 border-primary-100",
    gray: "bg-slate-50 border-slate-200",
    error: "bg-error-25 border-error-100",
    success: "bg-success-50 border-success-200",
    warning: "bg-warning-25 border-warning-200",
  },
  icon: "mr-3 inline h-5 w-5 flex-shrink-0",
  rounded: "rounded-md",
  title: {
    base: "md:text-lg text-base font-semibold",
    color: {
      info: "text-blue-600",
      gray: "text-slate-900",
      error: "text-error-600",
      success: "text-success-600",
      warning: "text-warning-600",
    },
  },
};
