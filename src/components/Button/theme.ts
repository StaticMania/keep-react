import { keepButtonTheme } from './Button'
import { keepButtonGroupTheme } from './ButtonGroup'

/**
 * This module exports the theme object for the Button component.
 */
export const buttonTheme: keepButtonTheme = {
  base: 'group rounded-md flex h-min w-fit items-center justify-center text-center font-medium',
  disabled: 'cursor-not-allowed opacity-50',
  width: {
    half: '!w-1/2',
    full: '!w-full',
  },
  inner: {
    base: 'flex items-center',
    position: {
      none: '',
      start: 'rounded-r-none',
      middle: '!rounded-none',
      end: 'rounded-l-none',
    },
  },
  notificationLabel:
    'ml-2 inline-flex px-2.5 py-0.5 items-center justify-center rounded-full bg-primary-400 text-body-6 font-medium text-white',
  default: {
    color: {
      error:
        'text-error-500 bg-error-25 border border-transparent hover:bg-error-50 active:bg-error-50 focus:ring-4 focus:ring-error-50  disabled:bg-error-50 disabled:hover:bg-error-50',
      info: 'text-primary-500 bg-primary-25 border border-transparent hover:bg-primary-50 active:bg-primary-50 disabled:bg-primary-50 disabled:hover:bg-primary-50 focus:ring-4 focus:ring-primary-50',
      success:
        'text-success-500 bg-success-25 border border-transparent hover:bg-success-50 active:bg-success-50 focus:ring-4 focus:ring-success-50  disabled:bg-success-50 disabled:hover:bg-success-50',
      warning:
        'text-warning-500 bg-warning-25 border border-transparent hover:bg-warning-50 active:bg-warning-50 focus:ring-4 focus:ring-warning-50  disabled:bg-warning-50 disabled:hover:bg-warning-50',
    },
    transition: {
      off: '',
      on: 'transition-all duration-75 ease-in',
    },
  },
  primary: {
    color: {
      error:
        'text-white bg-error-500 border border-transparent hover:bg-error-600 active:bg-error-600 focus:ring-4 focus:ring-error-50 disabled:bg-error-100 disabled:hover:bg-error-100',
      info: 'text-white bg-primary-500 border border-transparent hover:bg-primary-600 active:bg-primary-600 focus:ring-4 focus:ring-primary-50  disabled:bg-primary-100 disabled:hover:bg-primary-100',
      success:
        'text-white bg-success-500 border border-transparent hover:bg-success-600 active:bg-success-600 focus:ring-4 focus:ring-success-50  disabled:bg-success-100 disabled:hover:bg-success-100',
      warning:
        'text-white bg-warning-500 border border-transparent hover:bg-warning-600 active:bg-warning-600 focus:ring-4 focus:ring-warning-50  disabled:bg-warning-100 disabled:hover:bg-warning-100',
    },
    transition: {
      off: '',
      on: 'transition-all duration-75 ease-in',
    },
  },
  outlineGray: {
    color: {
      error:
        'text-error-600 bg-white border border-error-200 hover:bg-error-25 active:bg-error-25 focus:ring-4 focus:ring-error-50  disabled:text-error-200 disabled:bg-white disabled:hover:bg-white disabled:opacity-100',
      info: 'text-metal-600 bg-white border border-metal-200 hover:bg-metal-200/90 active:bg-metal-25 focus:ring-4 focus:ring-metal-50  disabled:text-metal-200 disabled:bg-white disabled:hover:bg-white disabled:opacity-100',
      success:
        'text-success-600 bg-white border border-success-200 hover:bg-success-25 active:bg-success-25 focus:ring-4 focus:ring-success-50  disabled:text-success-200 disabled:bg-white disabled:hover:bg-white disabled:opacity-100',
      warning:
        'text-warning-600 bg-white border border-warning-200 hover:bg-warning-25 active:bg-warning-25 focus:ring-4 focus:ring-warning-50  disabled:text-warning-200 disabled:bg-white disabled:hover:bg-white disabled:opacity-100',
    },
    transition: {
      off: '',
      on: 'transition-all duration-75 ease-in',
    },
  },
  outlinePrimary: {
    color: {
      error:
        'text-error-500 bg-white border border-error-400 hover:bg-error-25 active:bg-error-25 focus:ring-4 focus:ring-error-50  disabled:text-error-100 disabled:bg-white disabled:hover:bg-white disabled:opacity-100 disabled:border-error-100',
      info: 'text-primary-500 bg-white border border-primary-400 hover:bg-primary-25 active:bg-primary-25 focus:ring-4 focus:ring-primary-50  disabled:text-primary-100 disabled:bg-white disabled:hover:bg-white disabled:opacity-100 disabled:border-primary-100',
      success:
        'text-success-500 bg-white border border-success-400 hover:bg-success-25 active:bg-success-25 focus:ring-4 focus:ring-success-50  disabled:text-success-100 disabled:bg-white disabled:hover:bg-white disabled:opacity-100 disabled:border-success-100',
      warning:
        'text-warning-500 bg-white border border-warning-400 hover:bg-warning-25 active:bg-warning-25 focus:ring-4 focus:ring-warning-50  disabled:text-warning-100 disabled:bg-white disabled:hover:bg-white disabled:opacity-100 disabled:border-warning-100',
    },
    transition: {
      off: '',
      on: 'transition-all duration-75 ease-in',
    },
  },
  dashed: {
    color: {
      error:
        'text-error-600 bg-white border border-dashed border-error-300 hover:bg-error-25 active:bg-error-25 focus:ring-4 focus:ring-error-50  disabled:text-error-200 disabled:bg-white disabled:hover:bg-white disabled:opacity-100 disabled:border-error-100',
      info: 'text-metal-600 bg-white border border-dashed border-metal-300 hover:bg-metal-25 active:bg-metal-25 focus:ring-4 focus:ring-metal-50 disabled:text-metal-200 disabled:bg-white disabled:hover:bg-white disabled:opacity-100 disabled:border-metal-100',
      success:
        'text-success-600 bg-white border border-dashed border-success-300 hover:bg-success-25 active:bg-success-25 focus:ring-4 focus:ring-success-50 disabled:text-success-200 disabled:bg-white disabled:hover:bg-white disabled:opacity-100 disabled:border-success-100',
      warning:
        'text-warning-600 bg-white border border-dashed border-warning-300 hover:bg-warning-25 active:bg-warning-25 focus:ring-4 focus:ring-warning-50 disabled:text-warning-200 disabled:bg-white disabled:hover:bg-white disabled:opacity-100 disabled:border-warning-100',
    },
    transition: {
      off: '',
      on: 'transition-all duration-75 ease-in',
    },
  },
  text: {
    color: {
      error:
        'text-error-600 bg-white border-0 hover:bg-error-25 hover:text-error-500 active:bg-error-25 active:text-error-500 focus:!ring-0 focus:!ring-offset-0 focus:text-error-500 disabled:text-error-200 disabled:bg-white disabled:hover:bg-white disabled:opacity-100',
      info: 'text-metal-600 bg-transparent border-0 hover:bg-primary-25 hover:text-primary-500 active:bg-primary-25 active:text-primary-500 focus:!ring-0 focus:!ring-offset-0 focus:text-primary-500 disabled:text-metal-200 disabled:bg-white disabled:hover:bg-white disabled:opacity-100',
      success:
        'text-success-600 bg-white border-0 hover:bg-success-25 hover:text-success-500 active:bg-success-25 active:text-success-500 focus:!ring-0 focus:!ring-offset-0 focus:text-success-500 disabled:text-success-200 disabled:bg-white disabled:hover:bg-white disabled:opacity-100',
      warning:
        'text-warning-600 bg-white border-0 hover:bg-warning-25 hover:text-warning-500 active:bg-warning-25 active:text-warning-500 focus:!ring-0 focus:!ring-offset-0 focus:text-warning-500 disabled:text-warning-200 disabled:bg-white disabled:hover:bg-white disabled:opacity-100',
    },
    transition: {
      off: '',
      on: 'transition-all duration-75 ease-in',
    },
  },
  linkPrimary: {
    color: {
      error:
        'text-error-600 bg-white border-0 hover:bg-white hover:text-error-400 active:bg-white active:text-error-400 focus:!ring-0 focus:!ring-offset-0 focus:text-error-500 disabled:text-error-600 disabled:bg-white disabled:hover:bg-white',
      info: 'text-primary-600 bg-white border-0 hover:bg-white hover:text-primary-400 active:bg-white active:text-primary-400 focus:!ring-0 focus:!ring-offset-0 focus:text-primary-500 disabled:text-primary-600 disabled:bg-white disabled:hover:bg-white',
      success:
        'text-success-600 bg-white border-0 hover:bg-white hover:text-success-400 active:bg-white active:text-success-400 focus:!ring-0 focus:!ring-offset-0 focus:text-success-500 disabled:text-success-600 disabled:bg-white disabled:hover:bg-white',
      warning:
        'text-warning-600 bg-white border-0 hover:bg-white hover:text-warning-400 active:bg-white active:text-warning-400 focus:!ring-0 focus:!ring-offset-0 focus:text-warning-500 disabled:text-warning-600 disabled:bg-white disabled:hover:bg-white',
    },
    transition: {
      off: '',
      on: 'transition-all duration-75 ease-in',
    },
  },
  linkGray: {
    color: {
      error:
        'text-error-600 bg-white border-0 hover:bg-white hover:text-error-700 active:bg-white active:text-error-700 focus:!ring-0 focus:!ring-offset-0 focus:text-error-900 disabled:text-error-200 disabled:bg-white disabled:hover:bg-white disabled:opacity-100',
      info: 'text-metal-600 bg-white border-0 hover:bg-white hover:text-metal-700 active:bg-white active:text-metal-700 focus:!ring-0 focus:!ring-offset-0 focus:text-metal-900 disabled:text-metal-200 disabled:bg-white disabled:hover:bg-white disabled:opacity-100',
      success:
        'text-success-600 bg-white border-0 hover:bg-white hover:text-success-700 active:bg-white active:text-success-700 focus:!ring-0 focus:!ring-offset-0 focus:text-success-900 disabled:text-success-200 disabled:bg-white disabled:hover:bg-white disabled:opacity-100',
      warning:
        'text-warning-600 bg-white border-0 hover:bg-white hover:text-warning-700 active:bg-white active:text-warning-700 focus:!ring-0 focus:!ring-offset-0 focus:text-warning-900 disabled:text-warning-200 disabled:bg-white disabled:hover:bg-white disabled:opacity-100',
    },
    transition: {
      off: '',
      on: 'transition-all duration-75 ease-in',
    },
  },
  pill: {
    off: '',
    on: 'rounded-full',
  },
  circle: {
    off: 'p-0',
    size: {
      xs: 'text-body-5 p-2 rounded-full',
      sm: 'text-body-5 p-2.5 rounded-full',
      md: 'text-body-4 p-3 rounded-full',
      lg: 'text-body-3 p-3.5 rounded-full',
      xl: 'text-body-3 p-4 rounded-full',
      '2xl': 'text-body-2 p-5 rounded-full',
    },
  },
  size: {
    xs: 'text-body-5 px-3 py-2',
    sm: 'text-body-5 px-4 py-2.5',
    md: 'text-body-4 px-5 py-3 flex items-center justify-center cursor-pointer',
    lg: 'text-body-3 px-5 py-[14px]',
    xl: 'text-body-3 px-[22px] py-4',
    '2xl': 'text-body-2 px-6 py-[18px]',
  },
}

export const buttonGroupTheme: keepButtonGroupTheme = {
  base: 'flex gap-0',
  position: {
    none: '',
    start: 'rounded-r-none',
    middle: 'rounded-none !border-l-0 !border-r-0 pl-0 z-10',
    end: '!rounded-l-none pl-0',
  },
}
