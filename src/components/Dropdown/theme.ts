import { keepDropdownTheme } from "./Dropdown";

export const dropdownTheme: keepDropdownTheme = {
  arrowIcon: "ml-2 h-4 w-4",
  content: "py-1",
  floating: {
    animation: "transition-opacity",
    arrow: {
      base: "absolute z-10 h-2 w-2 rotate-45",
      style: {
        dark: "bg-slate-900 ",
        light: "bg-white",
        auto: "bg-white ",
      },
      placement: "-4px",
    },
    base: "z-10 w-fit rounded-md divide-y divide-gray-100 border border-slate-200 shadow-lg",
    content: "py-1 text-sm text-slate-700",
    divider: "my-1 h-px bg-slate-100",
    header: "block py-2 px-4 text-sm text-slate-700",
    hidden: "invisible opacity-0",
    item: {
      base: "flex items-center justify-start py-2 px-4 text-sm text-slate-700 cursor-pointer hover:bg-slate-25 border-b border-b-slate-50 last:border-none",
      icon: "pr-2",
    },
    style: {
      dark: "bg-slate-900 text-white ",
      light: "bg-white text-slate-900",
      auto: "bg-white text-slate-900",
    },
    target: "w-fit",
    title: "",
  },
  inlineWrapper: "flex items-center relative",
};
