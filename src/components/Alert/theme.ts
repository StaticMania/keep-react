import { keepAlertTheme } from './Alert'

export const alertTheme: keepAlertTheme = {
  base: 'relative max-w-lg py-[18px] pl-5 pr-6',
  dismiss: 'hidden',
  container: 'flex gap-[14px]',
  color: {
    primary: 'bg-primary-50',
    success: 'bg-success-50',
    warning: 'bg-warning-50',
    error: 'bg-error-50',
    metal: 'bg-metal-50',
  },
  rounded: 'rounded-md',
  border: 'border',
  borderColor: {
    primary: 'border-primary-100',
    success: 'border-success-100',
    warning: 'border-warning-100',
    error: 'border-error-100',
    metal: 'border-metal-200',
  },
  icon: {
    primary: 'text-primary-600',
    success: 'text-success-600',
    warning: 'text-warning-600',
    error: 'text-error-600',
    metal: 'text-metal-500',
  },
  disMissButton: {
    base: 'absolute right-4 top-4 p-1 rounded-lg',
    color: {
      primary: 'text-primary-600 hover:bg-primary-200 focus:ring-2 focus:ring-primary-300',
      success: 'text-success-600 hover:bg-success-200 focus:ring-2 focus:ring-success-300',
      warning: 'text-warning-600 hover:bg-warning-200 focus:ring-2 focus:ring-warning-300',
      error: 'text-error-600 hover:bg-error-200 focus:ring-2 focus:ring-error-300',
      metal: 'text-metal-600 hover:bg-metal-200 focus:ring-2 focus:ring-metal-300',
    },
  },
  borderAccent: {
    left: 'border-l-[6px]',
    right: 'border-r-[6px]',
    top: 'border-t-[6px]',
    bottom: 'border-b-[6px]',
  },
  title: {
    base: 'mb-3 text-body-3 font-semibold',
    color: {
      primary: 'text-primary-600',
      success: 'text-success-600',
      warning: 'text-warning-600',
      error: 'text-error-600',
      metal: 'text-metal-600',
    },
  },
  description: 'text-body-4 font-normal text-metal-500',
}
