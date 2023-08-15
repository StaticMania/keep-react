import { keepStepperTheme } from '.';

export const stepTheme: keepStepperTheme = {
  horizontal: {
    base: 'flex justify-between mt-auto mb-5',
    item: {
      base: 'relative flex flex-col items-center flex-1 before:content-[""] before:absolute before:border-b-2 before:w-full before:-left-2/4 before:z-[2] after:content-[""] after:absolute after:border-b-2 after:w-full after:left-2/4 after:z-[2] before:first:content-none after:last:content-none',
      completed: {
        base: 'after:absolute after:content[""] after:border-b-2 after:w-full after:left-2/4 after:z-[3]',
        on: {
          gray: 'after:border-slate-600',
          info: 'after:border-primary-500',
          error: 'after:border-error-600',
          success: 'after:border-success-600',
          warning: 'after:border-warning-500',
        },
        off: {
          gray: 'before:border-slate-50',
          info: 'before:border-primary-100',
          error: 'before:border-error-50',
          success: 'before:border-success-50',
          warning: 'before:border-warning-50',
        },
      },
      size: {
        sm: 'before:top-2 after:top-2',
        md: 'before:top-3 after:top-3',
        lg: 'before:top-3.5 after:top-3.5',
        xl: 'before:top-5 after:top-5',
      },
      borderType: {
        solid: 'before:border-solid after:border-solid',
        dashed: 'before:border-dashed after:border-dashed',
      },
    },
    point: {
      base: 'relative z-[5] flex justify-center items-center rounded-full mb-1.5',
      withBg: {
        on: 'text-white',
        off: {
          gray: 'bg-white text-slate-600',
          info: 'bg-white text-primary-500',
          error: 'bg-white text-error-600',
          success: 'bg-white text-success-600',
          warning: 'bg-white text-warning-500',
        },
      },
      size: {
        sm: 'w-[18px] h-[18px] text-[12px]',
        md: 'w-6 h-6 text-sm',
        lg: 'w-7 h-7 text-base',
        xl: 'w-9 h-9 text-base',
      },
      completed: {
        on: {
          gray: 'bg-slate-600',
          info: 'bg-primary-500',
          error: 'bg-error-600',
          success: 'bg-success-600',
          warning: 'bg-warning-500',
        },
        off: {
          gray: 'bg-slate-50',
          info: 'bg-primary-100',
          error: 'bg-error-50',
          success: 'bg-success-50',
          warning: 'bg-warning-100',
        },
      },
      withRing: {
        color: {
          light: {
            gray: 'ring-gray-50 ring-offset-0',
            info: 'ring-primary-100 ring-offset-0',
            error: 'ring-error-50 ring-offset-0',
            success: 'ring-success-50 ring-offset-0',
            warning: 'ring-warning-100 ring-offset-0',
          },
          deep: {
            gray: 'ring-gray-600 ring-offset-0',
            info: 'ring-primary-500 ring-offset-0',
            error: 'ring-error-600 ring-offset-0',
            success: 'ring-success-600 ring-offset-0',
            warning: 'ring-warning-500 ring-offset-0',
          },
        },
      },
      withBorder: {
        on: {
          gray: 'border-2 border-slate-600',
          info: 'border-2 border-primary-500',
          error: 'border-2 border-error-600',
          success: 'border-2 border-success-600',
          warning: 'border-2 border-warning-500',
        },
        off: 'border-0',
      },
    },
    title: 'text-lg text-slate-700 font-semibold pt-7',
    content: 'text-slate-500 text-center px-4 pt-3 pb-5',
    active: {
      on: 'text-base font-bold',
      off: 'text-base font-normal',
    },
  },
  vertical: {
    base: 'flex justify-between mt-auto mb-5',
  },
};
