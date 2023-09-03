import { keepModalTheme } from ".";

export const modalTheme: keepModalTheme = {
  base: "fixed z-[90] inset-0 flex items-center justify-center top-0",
  show: {
    on: "flex bg-gray-900 bg-opacity-50",
    off: "hidden",
  },
  content: {
    base: "relative h-full w-full p-4 h-auto",
    inner: "relative rounded-lg bg-white shadow p-6",
  },
  body: {
    base: "pb-5",
    popup: "pt-0",
  },
  header: {
    base: "rounded-t pb-2",
    popup: "!p-2 !border-b-0",
    iconSection: "flex items-start  justify-between",
    title: "pt-2 text-lg md:text-3xl font-semibold text-slate-800",
    headerIcon: {
      base: "w-10 h-10 flex items-center justify-center rounded-md",
      icon: "",
      color: {
        info: "bg-primary-25",
        error: "bg-error-25",
        warning: "bg-warning-25",
        success: "bg-success-25",
      },
    },
    close: {
      base: "ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-slate-500",
      icon: "h-6 w-6",
    },
  },
  footer: {
    base: "flex items-center space-x-2",
    popup: "",
  },
  sizes: {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    "4xl": "max-w-4xl",
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
  },
  positions: {
    "top-left": "items-start justify-start",
    "top-center": "items-start justify-center",
    "top-right": "items-start justify-end",
    "center-left": "items-center justify-start",
    center: "items-center justify-center",
    "center-right": "items-center justify-end",
    "bottom-right": "items-end justify-end",
    "bottom-center": "items-end justify-center",
    "bottom-left": "items-end justify-start",
  },
};
