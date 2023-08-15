import { keepTagTheme } from '.';

export const tagTheme: keepTagTheme = {
  base: 'flex items-center px-2 py-1 rounded',
  dismiss: 'hidden',
  disabled: {
    on: 'opacity-50 cursor-not-allowed',
    off: 'cursor-pointer',
  },
  icon: {
    left: 'pr-[6px]',
    right: '',
  },
  borderType: {
    solid: 'border border-solid',
    dashed: 'border border-dashed',
  },
  color: {
    error: 'bg-error-25 border-error-100',
    gray: 'bg-slate-25 border-slate-200',
    info: 'bg-primary-25 border-primary-200',
    success: 'bg-success-25 border-success-200',
    warning: 'bg-warning-25 border-warning-200',
    teal: 'bg-teal-25 border-teal-200',
    purple: 'bg-purple-25 border-purple-100',
  },
  bar: {
    base: 'px-1.5 border w-3 h-0 rotate-90',
    color: {
      error: 'border-error-100',
      gray: 'border-slate-200',
      info: 'border-primary-200',
      success: 'border-success-200',
      warning: 'border-warning-200',
      teal: 'border-teal-200',
      purple: 'border-purple-100',
    },
  },
};
