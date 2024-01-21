import { KeepSizes, KeepBoolean, KeepPositions } from '../../Keep/KeepTheme'

export interface keepModalTheme {
  base: string
  show: KeepBoolean
  content: {
    base: string
    inner: string
  }
  body: {
    base: string
  }
  header: {
    base: string
    title: string
    iconSection: string
    headerIcon: {
      base: string
      icon: string
    }
    close: {
      base: string
      icon: string
    }
  }
  footer: {
    base: string
  }
  sizes: ModalSizes
  positions: ModalPositions
}

export interface ModalPositions extends KeepPositions {
  [key: string]: string
}

export interface ModalSizes extends Omit<KeepSizes, 'xs'> {
  [key: string]: string
}

export const modalTheme: keepModalTheme = {
  base: 'fixed z-[90] inset-0 flex items-center justify-center top-0',
  show: {
    on: 'flex bg-metal-900 bg-opacity-50',
    off: 'hidden',
  },
  content: {
    base: 'relative h-full w-full p-4 h-auto animate-keep-bounce',
    inner: 'relative rounded-lg bg-white shadow p-6',
  },
  body: {
    base: 'pb-5',
  },
  header: {
    base: 'rounded-t pb-2',
    iconSection: 'flex items-start  justify-between',
    title: 'pt-2 text-body-3 md:text-description-4 font-semibold text-metal-800',
    headerIcon: {
      base: 'w-10 h-10 flex items-center justify-center rounded-md bg-primary-25',
      icon: '',
    },
    close: {
      base: 'ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-body-5 text-metal-500',
      icon: 'h-6 w-6',
    },
  },
  footer: {
    base: 'flex items-center space-x-2',
  },
  sizes: {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
    '5xl': 'max-w-5xl',
    '6xl': 'max-w-6xl',
    '7xl': 'max-w-7xl',
  },
  positions: {
    'top-left': 'items-start justify-start',
    'top-center': 'items-start justify-center',
    'top-right': 'items-start justify-end',
    'center-left': 'items-center justify-start',
    center: 'items-center justify-center',
    'center-right': 'items-center justify-end',
    'bottom-right': 'items-end justify-end',
    'bottom-center': 'items-end justify-center',
    'bottom-left': 'items-end justify-start',
  },
}
