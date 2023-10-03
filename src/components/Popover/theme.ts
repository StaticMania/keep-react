import type { keepPopoverTheme } from ".";

export const popoverTheme: keepPopoverTheme = {
  base: "bg-white p-6 max-w-sm rounded shadow-sm z-50 absolute mt-3",
  header: {
    base: "flex items-center justify-between mb-[14px]",
    title:
      "text-lg leading-[27px] tracking-[-0.3px] font-medium text-slate-700",
  },
  body: {
    base: "text-sm font-normal leading-5 tracking-[-0.3px] text-slate-500",
  },
  footer: {
    base: "flex items-center gap-3 mt-3",
    skip: "text-sm font-medium text-primary-400 underline",
  },
};
