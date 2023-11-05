import { keepTimelineTheme } from ".";

export const timelineTheme: keepTimelineTheme = {
  root: {
    horizontal: {
      on: "items-start border-t border-slate-200 sm:flex",
      off: "relative border-l border-slate-200",
    },
    barType: {
      solid: "border-solid",
      dashed: "border-dashed",
    },
  },
  body: {
    base: "!mb-4 text-xs md:text-lg font-normal text-slate-500",
  },
  content: {
    horizontal: {
      on: "mt-6 -ms-2 sm:pr-8",
      off: "",
    },
  },
  item: {
    horizontal: {
      on: "relative mb-6 sm:mb-0",
      off: "mb-10 ml-6",
    },
  },

  point: {
    root: {
      horizontal: {
        on: "flex items-center",
        off: "",
      },
      icon: {
        on: {
          base: "absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 ring-4 ring-slate-100",
          inner: "text-slate-900 flex items-center justify-center",
        },
        off: {
          base: "absolute -left-2 h-4 w-4 rounded-full border border-white",
        },
      },
    },
  },
  time: {
    base: "block mb-2 text-sm font-normal leading-none text-slate-500",
    horizontal: {
      on: "mt-6",
      off: "",
    },
  },
  title: {
    base: "mb-6 text-sm md:text-3xl font-semibold text-slate-700",
  },
};
