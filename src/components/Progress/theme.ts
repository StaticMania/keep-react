import type { keepProgressTheme } from '.';
export const progressTheme: keepProgressTheme = {
  base: 'flex items-center',
  label: 'mb-1 flex justify-between text-slate-500 font-medium',
  progressBar: {
    base: 'w-full',
    bar: 'relative flex items-center justify-center text-center font-medium leading-none text-blue-100',
    rounded: {
      on: 'rounded-full',
      off: 'rounded-none',
    },
    bordered: {
      on: {
        base: 'ring-offset-2 ring-2',
        color: {
          info: 'ring-primary-100',
          error: 'ring-error-100',
          success: 'ring-success-100',
          warning: 'ring-warning-100',
          indigo: 'ring-indigo-100',
          purple: 'ring-purple-100',
        },
      },
      off: 'ring-0',
    },
    progressPercentage: {
      base: 'pl-5 font-medium',
      color: {
        info: 'text-primary-500',
        error: 'text-error-500',
        success: 'text-success-500',
        warning: 'text-warning-500',
        indigo: 'text-indigo-500',
        purple: 'text-purple-500',
      },
    },
    popupLabelProgress:
      'absolute px-3 py-3 -top-14 -right-5 rounded-md before:content[""] before:absolute before:w-4 before:h-4 before:-bottom-1 before:left-2/4 before:bg-inherit before:-translate-x-2/4 before:rotate-45 before:rounded-sm',
    progressBaseColor: {
      info: 'bg-primary-50',
      error: 'bg-error-50',
      success: 'bg-success-50',
      warning: 'bg-warning-50',
      indigo: 'bg-indigo-50',
      purple: 'bg-purple-50',
    },
    progressPercentageColor: {
      info: 'bg-primary-500',
      error: 'bg-error-500',
      success: 'bg-success-500',
      warning: 'bg-warning-500',
      indigo: 'bg-indigo-500',
      purple: 'bg-purple-500',
    },
  },
  size: {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
    xl: 'h-6',
  },
};
