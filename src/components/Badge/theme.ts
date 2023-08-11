import { keepBadgeTheme } from '.';

export const badgeTheme: keepBadgeTheme = {
  base: 'flex h-fit items-center justify-center gap-1 font-medium rounded-md',
  badgeType: {
    default: {
      colorType: {
        light: {
          color: {
            info: 'bg-primary-25 text-primary-400 group-hover:bg-primary-50',
            gray: 'bg-slate-50 text-slate-500 group-hover:bg-slate-100',
            error: 'bg-error-25 text-error-500 group-hover:bg-error-50 ',
            success: 'bg-success-50 text-success-500 group-hover:bg-success-100',
            warning: 'bg-warning-100 text-warning-700 group-hover:bg-warning-200',
          },
        },
        strong: {
          color: {
            info: 'bg-primary-500 text-white group-hover:bg-primary-400',
            gray: 'bg-slate-500 text-white group-hover:bg-slate-400',
            error: 'bg-error-500 text-white group-hover:bg-error-400 ',
            success: 'bg-success-500 text-white group-hover:bg-success-400',
            warning: 'bg-warning-600 text-white group-hover:bg-warning-400',
          },
        },
      },
    },
    outline: {
      colorType: {
        light: {
          color: {
            info: 'bg-white border border-primary-100 text-primary-400 group-hover:bg-primary-100',
            gray: 'bg-white border border-slate-200 text-slate-500 group-hover:bg-slate-100',
            error: 'bg-white border border-error-100 text-error-500 group-hover:bg-error-100',
            success: 'bg-white border border-success-100 text-success-500 group-hover:bg-success-100',
            warning: 'bg-white border border-warning-200 text-warning-700 group-hover:bg-warning-100',
          },
        },
        strong: {
          color: {
            info: 'bg-primary-25 border border-primary-100 text-primary-400 group-hover:bg-primary-100',
            gray: 'bg-slate-25 border border-slate-200 text-slate-500 group-hover:bg-slate-100',
            error: 'bg-error-25 border border-error-100 text-error-500 group-hover:bg-error-100',
            success: 'bg-success-25 border border-success-100 text-success-500 group-hover:bg-success-100',
            warning: 'bg-warning-25 border border-warning-200 text-warning-700 group-hover:bg-warning-100',
          },
        },
      },
    },
    text: {
      colorType: {
        light: {
          color: {
            info: 'bg-white text-primary-400 group-hover:bg-primary-100',
            gray: 'bg-white text-slate-500 group-hover:bg-slate-100',
            error: 'bg-white text-error-500 group-hover:bg-error-100 ',
            success: 'bg-white text-success-500 group-hover:bg-success-100',
            warning: 'bg-white text-warning-700 group-hover:bg-warning-100',
          },
        },
        strong: {
          color: {
            info: 'bg-white text-primary-400 group-hover:bg-primary-100',
            gray: 'bg-white text-slate-500 group-hover:bg-slate-100',
            error: 'bg-white text-error-500 group-hover:bg-error-100 ',
            success: 'bg-white text-success-500 group-hover:bg-success-100',
            warning: 'bg-white text-warning-700 group-hover:bg-warning-100',
          },
        },
      },
    },
  },
  href: 'group',
  icon: {
    off: '',
    on: '',
    size: {
      xs: 'w-3 h-3 text-xs',
      sm: 'w-3.5 h-3.5 text-sm',
    },
  },
  dot: 'h-2 w-2 rounded-full bg-current',
  dotPosition: { left: 'pr-2', right: 'pl-2' },
  size: {
    xs: 'py-[3px] px-2 text-xs',
    sm: 'py-[5px] px-2 text-sm',
  },
};
