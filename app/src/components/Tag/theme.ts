import { KeepBoolean, KeepColors } from '../../Keep/KeepTheme'

export interface keepTagTheme {
  base: string
  dismiss: string
  disabled: KeepBoolean
  icon: {
    left: string
    right: string
  }
  borderType: {
    solid: string
    dashed: string
  }
  color: TagColors
  bar: {
    base: string
    color: TagColors
  }
  children: {
    colors: TagColors
  }
}

export interface TagColors
  extends Pick<KeepColors, 'error' | 'gray' | 'info' | 'success' | 'warning' | 'teal' | 'purple'> {
  [key: string]: string
}

export const tagTheme: keepTagTheme = {
  base: 'flex items-center px-2 py-1 rounded',
  dismiss: 'hidden',
  disabled: {
    on: 'opacity-50 cursor-not-allowed text-body-5 font-medium text-metal-500',
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
    gray: 'bg-metal-25 border-metal-200',
    info: 'bg-primary-25 border-primary-200',
    success: 'bg-success-25 border-success-200',
    warning: 'bg-warning-25 border-warning-200',
    teal: 'bg-teal-25 border-teal-200',
    purple: 'bg-purple-25 border-purple-100',
  },
  children: {
    colors: {
      error: 'text-body-5 font-medium text-error-500',
      gray: 'text-body-5 font-medium text-metal-500',
      info: 'text-body-5 font-medium text-primary-500',
      success: 'text-body-5 font-medium text-success-500',
      warning: 'text-body-5 font-medium text-warning-500',
      teal: 'text-body-5 font-medium text-teal-500',
      purple: 'text-body-5 font-medium text-purple-500',
    },
  },
  bar: {
    base: 'px-1.5 border w-3 h-0 rotate-90',
    color: {
      error: 'border-error-100',
      gray: 'border-metal-200',
      info: 'border-primary-200',
      success: 'border-success-200',
      warning: 'border-warning-200',
      teal: 'border-teal-200',
      purple: 'border-purple-100',
    },
  },
}
