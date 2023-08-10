import type { keepAccordionTheme } from "./Accordion";
export const accordionTheme: keepAccordionTheme = {
  root: {
    base: "bg-slate-25",
    flush: {
      off: "border-b-2 border-b-slate-200",
      on: "border-b",
    },
  },
  content: {
    base: "py-5 px-5 text-slate-500 font-normal",
  },
  title: {
    disabled: "cursor-not-allowed opacity-50",
    arrow: {
      base: "h-6 w-6 shrink-0",
      open: {
        off: "",
        on: "rotate-180",
      },
    },
    base: "flex w-full items-center  py-5 px-5 text-left font-medium text-xl text-slate-800 bg-slate-50 hover:bg-slate-100",
    iconPosition: {
      left: "gap-5",
      right: "justify-between",
    },
    flush: {
      off: "hover:bg-slate-50",
      on: "!bg-transparent",
    },
    heading: "",
    open: {
      off: "",
      on: "text-slate-800 bg-slate-25",
    },
  },
};
