import { KeepNavbarTheme } from ".";

export const navbarTheme: KeepNavbarTheme = {
  root: {
    base: "border-slate-200 bg-white px-2 py-3.5 sm:px-4 relative",
    rounded: {
      on: "rounded",
      off: "",
    },
    bordered: {
      on: "border border-slate-200",
      off: "",
    },
    inner: {
      base: "mx-auto flex items-center justify-between",
      fluid: {
        on: "",
        off: "container",
      },
    },
  },
  brand: {
    base: "flex items-center",
  },
  collapse: {
    base: "bg-white  lg:block lg:w-auto w-full lg:relative absolute container left-0 right-0 top-full lg:top-0",
    list: "my-3.5 flex flex-col lg:my-0 lg:flex-row lg:space-x-8 lg:text-base lg:font-medium [&>*:last-child]:border-b-0",
    hidden: {
      on: "hidden",
      off: "",
    },
  },
  link: {
    base: "block py-2.5 pr-4 pl-3 lg:p-0 text-base flex items-center lg:gap-1 justify-between gap-0",
    active: {
      on: "bg-blue-700 text-white lg:bg-transparent lg:text-blue-700",
      off: "border-b border-slate-100 text-slate-700 hover:bg-slate-50 lg:border-0 lg:hover:bg-transparent lg:hover:text-blue-700",
    },
    disabled: {
      on: "text-slate-400 hover:cursor-not-allowed",
      off: "",
    },
  },
  toggle: {
    base: "inline-flex items-center rounded-lg p-2 text-sm text-slate-500 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200 lg:hidden",
    icon: "h-6 w-6 shrink-0",
  },
  mobileMenu: {
    base: "fixed top-full right-0 h-full w-full bg-slate-50 py-10 lg:w-1/2 lg:hidden transition-all duration-300",
    open: {
      on: "translate-x-0",
      off: "translate-x-full",
    },
    close: "relative top-0 left-8",
  },
};
