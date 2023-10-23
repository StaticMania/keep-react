import type { keepAvatarTheme } from "./Avatar";

export const avatarTheme: keepAvatarTheme = {
  base: "flex items-center space-x-4",
  bordered: "border border-slate-200",
  img: {
    off: "relative overflow-hidden bg-primary-25",
    on: "relative overflow-hidden",
  },
  shape: {
    square: "border-0",
    circle: "rounded-full",
    rounded: {
      xs: "rounded-lg",
      sm: "rounded-xl",
      md: "rounded-xl",
      lg: "rounded-2xl",
      xl: "rounded-2xl",
      "2xl": "rounded-3xl",
    },
  },
  size: {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
    xl: "w-16 h-16",
    "2xl": "w-24 h-24",
  },
  customStatusIcon: {
    xs: "absolute w-[12px] h-[12px]",
    sm: "absolute w-[14px] h-[14px]",
    md: "absolute w-[16px] h-[16px]",
    lg: "absolute w-[18px] h-[18px]",
    xl: "absolute w-[20px] h-[20px]",
    "2xl": "absolute w-[22px] h-[22px]",
  },
  stacked: "ring-2 ring-white",
  status: {
    busy: "bg-red-400",
    away: "bg-yellow-400",
    online: "bg-green-300",
    offline: "bg-dark-100",
  },
  statusType: {
    type: {
      dot: "absolute rounded-full border-[1.5px] border-white",
      notification:
        "absolute rounded-[20px] border-[1.5px] border-white flex items-center justify-center text-white",
    },
    fontSize: {
      notification: {
        xs: "text-[8px] leading-[9px]",
        sm: "text-xs",
        md: "text-xs",
        lg: "text-xs",
        xl: "text-sm",
        "2xl": "text-base",
      },
    },
    size: {
      dot: {
        xs: "w-1.5 h-1.5",
        sm: "w-1.5 h-1.5",
        md: "w-2 h-2",
        lg: "w-2.5 h-2.5",
        xl: "w-3 h-3",
        "2xl": "w-3.5 h-3.5",
      },
      notification: {
        xs: "w-[22px] h-[12px]",
        sm: "w-[30px] h-[15px]",
        md: "w-[30px] h-[15px]",
        lg: "w-[34px] h-[15px]",
        xl: "w-9 h-[18px]",
        "2xl": "w-11 h-[22px]",
      },
    },
  },
  statusPosition: {
    square: {
      dot: {
        xs: {
          "bottom-left": "-bottom-0.5 -left-0.5",
          "bottom-right": "-bottom-0.5 -right-0.5",
          "top-left": "-top-0.5 -left-0.5",
          "top-right": "-top-0.5 -right-0.5",
        },
        sm: {
          "bottom-left": "-bottom-0.5 -left-0.5",
          "bottom-right": "-bottom-0.5 -right-0.5",
          "top-left": "-top-0.5 -left-0.5",
          "top-right": "-top-0.5 -right-0.5",
        },
        md: {
          "bottom-left": "-bottom-0.5 -left-0.5",
          "bottom-right": "-bottom-0.5 -right-0.5",
          "top-left": "-top-0.5 -left-0.5",
          "top-right": "-top-0.5 -right-0.5",
        },
        lg: {
          "bottom-left": "-bottom-1 -left-1",
          "bottom-right": "-bottom-1 -right-1",
          "top-left": "-top-1 -left-1",
          "top-right": "-top-1 -right-1",
        },
        xl: {
          "bottom-left": "-bottom-1 -left-1",
          "bottom-right": "-bottom-1 -right-1",
          "top-left": "-top-1 -left-1",
          "top-right": "-top-1 -right-1",
        },
        "2xl": {
          "bottom-left": "-bottom-1 -left-1",
          "bottom-right": "-bottom-1 -right-1",
          "top-left": "-top-1 -left-1",
          "top-right": "-top-1 -right-1",
        },
      },
      notification: {
        xs: {
          "bottom-left": "-bottom-0.5 -left-3",
          "bottom-right": "-bottom-0.5 -right-3",
          "top-left": "-top-0.5 -left-3",
          "top-right": "-top-0.5 -right-3",
        },
        sm: {
          "bottom-left": "-bottom-0.5 -left-3",
          "bottom-right": "-bottom-0.5 -right-3",
          "top-left": "-top-0.5 -left-3",
          "top-right": "-top-0.5 -right-3",
        },
        md: {
          "bottom-left": "-bottom-0.5 -left-3",
          "bottom-right": "-bottom-0.5 -right-3",
          "top-left": "-top-0.5 -left-3",
          "top-right": "-top-0.5 -right-3",
        },
        lg: {
          "bottom-left": "-bottom-1 -left-3",
          "bottom-right": "-bottom-1 -right-3",
          "top-left": "-top-1 -left-3",
          "top-right": "-top-1 -right-3",
        },
        xl: {
          "bottom-left": "-bottom-1 -left-3",
          "bottom-right": "-bottom-1 -right-3",
          "top-left": "-top-1 -left-3",
          "top-right": "-top-1 -right-3",
        },
        "2xl": {
          "bottom-left": "-bottom-1 -left-3",
          "bottom-right": "-bottom-1 -right-3",
          "top-left": "-top-1 -left-3",
          "top-right": "-top-1 -right-3",
        },
      },
    },
    circle: {
      dot: {
        xs: {
          "bottom-left": "-bottom-0.5 left-1",
          "bottom-right": "-bottom-0.5 right-1",
          "top-left": "-top-0.5 left-1",
          "top-right": "top-0 -right-1.5",
        },
        sm: {
          "bottom-left": "-bottom-px left-1",
          "bottom-right": "-bottom-0.5 right-1",
          "top-left": "-top-px left-1",
          "top-right": "-top-px right-1",
        },
        md: {
          "bottom-left": "bottom-px left-0.5",
          "bottom-right": "bottom-px right-0.5",
          "top-left": "top-px left-0.5",
          "top-right": "top-px right-1",
        },
        lg: {
          "bottom-left": "bottom-0.5 left-1",
          "bottom-right": "bottom-0.5 right-1",
          "top-left": "top-0.5 left-1",
          "top-right": "top-0.5 right-1",
        },
        xl: {
          "bottom-left": "bottom-0.5 left-1",
          "bottom-right": "bottom-0.5 right-1",
          "top-left": "top-0.5 left-1",
          "top-right": "top-0.5 right-1",
        },
        "2xl": {
          "bottom-left": "bottom-2 left-1",
          "bottom-right": "bottom-2 right-1",
          "top-left": "top-2 left-1",
          "top-right": "top-1 right-1",
        },
      },
      notification: {
        xs: {
          "bottom-left": "-bottom-0.5 -left-3",
          "bottom-right": "-bottom-0.5 -right-3",
          "top-left": "-top-0.5 -left-3",
          "top-right": "-top-0.5 -right-3",
        },
        sm: {
          "bottom-left": "-bottom-px -left-3",
          "bottom-right": "-bottom-0.5 -right-3",
          "top-left": "-top-px -left-3",
          "top-right": "-top-px -right-3",
        },
        md: {
          "bottom-left": "bottom-px -left-3",
          "bottom-right": "bottom-px -right-3",
          "top-left": "top-px -left-3",
          "top-right": "top-px -right-3",
        },
        lg: {
          "bottom-left": "bottom-0.5 -left-3",
          "bottom-right": "bottom-0.5 -right-3",
          "top-left": "top-0.5 -left-3",
          "top-right": "top-0.5 -right-3",
        },
        xl: {
          "bottom-left": "bottom-0.5 -left-3",
          "bottom-right": "bottom-0.5 -right-3",
          "top-left": "top-0.5 -left-3",
          "top-right": "top-0.5 -right-3",
        },
        "2xl": {
          "bottom-left": "bottom-2 -left-3",
          "bottom-right": "bottom-2 -right-3",
          "top-left": "top-2 -left-3",
          "top-right": "top-2 -right-3",
        },
      },
    },
    rounded: {
      dot: {
        xs: {
          "bottom-left": "-bottom-px -left-0.5",
          "bottom-right": "-bottom-px -right-0.5",
          "top-left": "-top-px -left-0.5",
          "top-right": "-top-px -right-0.5",
        },
        sm: {
          "bottom-left": "-bottom-px left-px",
          "bottom-right": "-bottom-px right-px",
          "top-left": "-top-px left-px",
          "top-right": "-top-px right-px",
        },
        md: {
          "bottom-left": "-bottom-0.5 -left-0.5",
          "bottom-right": "-bottom-0.5 -right-0.5",
          "top-left": "-top-0.5 -left-0.5",
          "top-right": "-top-0.5 -right-0.5",
        },
        lg: {
          "bottom-left": "-bottom-0.5 -left-0.5",
          "bottom-right": "-bottom-0.5 -right-0.5",
          "top-left": "-top-0.5 -left-0.5",
          "top-right": "-top-0.5 -right-0.5",
        },
        xl: {
          "bottom-left": "-bottom-0.5 -left-0.5",
          "bottom-right": "-bottom-0.5 -right-0.5",
          "top-left": "-top-0.5 -left-0.5",
          "top-right": "-top-0.5 -right-0.5",
        },
        "2xl": {
          "bottom-left": "-bottom-0.5 -left-px",
          "bottom-right": "-bottom-0.5 -right-px",
          "top-left": "-top-0.5 -left-px",
          "top-right": "-top-0.5 -right-px",
        },
      },
      notification: {
        xs: {
          "bottom-left": "-bottom-px -left-3",
          "bottom-right": "-bottom-px -right-3",
          "top-left": "-top-px -left-3",
          "top-right": "-top-px -right-3",
        },
        sm: {
          "bottom-left": "-bottom-px -left-3",
          "bottom-right": "-bottom-px -right-3",
          "top-left": "-top-px -left-3",
          "top-right": "-top-px -right-3",
        },
        md: {
          "bottom-left": "-bottom-0.5 -left-3",
          "bottom-right": "-bottom-0.5 -right-3",
          "top-left": "-top-0.5 -left-3",
          "top-right": "-top-0.5 -right-3",
        },
        lg: {
          "bottom-left": "-bottom-0.5 -left-3",
          "bottom-right": "-bottom-0.5 -right-3",
          "top-left": "-top-0.5 -left-3",
          "top-right": "-top-0.5 -right-3",
        },
        xl: {
          "bottom-left": "-bottom-0.5 -left-3",
          "bottom-right": "-bottom-0.5 -right-3",
          "top-left": "-top-0.5 -left-3",
          "top-right": "-top-0.5 -right-3",
        },
        "2xl": {
          "bottom-left": "-bottom-0.5 -left-3",
          "bottom-right": "-bottom-0.5 -right-3",
          "top-left": "-top-0.5 -left-3",
          "top-right": "-top-0.5 -right-3",
        },
      },
    },
  },
  groupCounter: {
    base: "relative flex items-center justify-center rounded-full bg-gray-50 font-medium text-dark-400 ring-2 ring-white",
  },
  add: {
    base: "relative flex items-center justify-center rounded-full ring-2 !ml-3",
    iconSize: {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-7 h-7",
      xl: "w-9 h-9",
      "2xl": "w-11 h-11",
    },
  },
};
