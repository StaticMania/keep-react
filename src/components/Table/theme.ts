import { keepTableTheme } from "./Table";

export const tableTheme: keepTableTheme = {
  root: {
    base: "w-full text-left text-sm text-gray-500",
    shadow: "absolute bg-white w-full h-full top-0 left-0 -z-10",
    wrapper: "relative",
  },
  body: {
    base: "",
    cell: {
      base: "p-4",
    },
    showBorderPosition: {
      left: "border-l border-l-slate-100 first:border-none",
      right: "border-r border-r-slate-100 last:border-none",
    },
  },
  head: {
    base: "text-slate-400 bg-slate-25 text-sm overflow-x-auto",
    cell: {
      base: "py-5 pl-4 text-xs font-medium text-slate-400",
      icon: {
        base: "flex items-center",
        on: {
          left: "pr-2",
          right: "pl-2",
        },
        off: "",
      },
    },
  },
  row: {
    base: "group/row",
    hovered: "hover:bg-slate-25",
    striped: "odd:bg-white even:bg-slate-25 even:border even:border-slate-100",
  },
  caption: {
    base: "",
  },
};
