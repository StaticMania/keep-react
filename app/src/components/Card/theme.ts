import { KeepBoolean, KeepSizes } from '../../Keep/KeepTheme'

export interface KeepCardTheme {
  base: string
  children: string
  shadow: KeepBoolean
  border: KeepBoolean
  horizontal: {
    off: string
    on: string
  }
  href: string
  img: {
    base: string
    horizontal: {
      off: {
        base: string
        size: CardBgImageSizes
      }
      on: {
        base: string
        size: CardBgImageSizes
      }
    }
  }
  description: string
}

export interface CardBgImageSizes extends Pick<KeepSizes, 'sm' | 'md' | 'lg'> {
  [key: string]: string
}

export const cardTheme: KeepCardTheme = {
  base: 'flex rounded-md bg-white ',
  children: 'flex h-full flex-col justify-center gap-3',
  shadow: {
    on: 'drop-shadow-xLarge',
    off: 'drop-shadow-none',
  },
  border: {
    on: 'border border-metal-50',
    off: 'border-none',
  },
  horizontal: {
    off: 'flex-col',
    on: 'flex-col md:max-w-xl md:flex-row',
  },
  href: 'hover:bg-metal-200',
  img: {
    base: 'relative',
    horizontal: {
      off: {
        base: 'rounded-t-md object-cover',
        size: {
          sm: 'h-28 min-w-sm',
          md: 'h-48 min-w-md',
          lg: 'h-52 min-w-lg',
        },
      },
      on: {
        base: 'w-full rounded-t-md object-cover md:rounded-none md:rounded-l-lg',
        size: {
          sm: 'h-28 md:h-auto md:w-48',
          md: 'h-40 md:h-auto md:w-48',
          lg: 'h-72 md:h-auto md:w-48',
        },
      },
    },
  },
  description: 'text-metal-500 text-body-4 font-normal md:text-body-3',
}
