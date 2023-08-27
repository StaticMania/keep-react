import { keepTreeTheme } from ".";

export const treeTheme: keepTreeTheme = {
  base: "list-none space-y-2  text-xs md:text-base font-medium text-slate-700",
  list: {
    base: "text-xs md:text-base font-medium text-slate-700 select-none",
    hasChild: {
      on: "relative space-y-2",
      off: {
        hasIcon: {
          on: "ml-6",
          off: "ml-6 list-disc",
        },
      },
    },
  },
  caretIcon: {
    base: "flex cursor-pointer items-center gap-2",
    icon: "flex items-center gap-2",
  },

  showChildren: {
    base: "text-xs md:text-base font-medium text-slate-400 select-none",
    on: "",
    off: "hidden",
  },

  nestedOrderList: {
    on: {
      base: "ml-2.5 block space-y-2 px-10 py-4",
      border: {
        on: "border-l border-l-slate-200",
        off: "border-none",
      },
    },
    off: "hidden",
  },
};
