import type { keepNotificationTheme } from ".";

export const notificationTheme: keepNotificationTheme = {
  base: "rounded-md shadow-lg  px-4 relative border border-slate-50",
  dismiss: "hidden",
  wrapper: "flex items-start gap-2",
  infoIcon: {
    base: "flex items-center justify-center rounded-full",
    on: "px-4",
    off: "pl-[30px] pr-4",
  },
  closeButton: {
    base: "absolute top-3 right-3 h-8 w-8 rounded-lg p-1.5 focus:ring-2",
    icon: "w-6 h-6",
  },
  headerBanner: {
    base: "relative overflow-hidden",
    img: "w-full rounded-t-md",
    on: "!px-0",
    off: "py-5",
    closeIcon:
      "absolute cursor-pointer flex items-center justify-center w-7 h-7 rounded-full bg-white top-3 right-3 opacity-90",
  },
  content: "p-6",
};
