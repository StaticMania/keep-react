import type { KeepCardTheme } from '.';

export const cardTheme: KeepCardTheme = {
  base: 'flex rounded-md bg-white ',
  children: 'flex h-full flex-col justify-center gap-4',
  shadow: {
    on: 'drop-shadow-xl',
    off: 'drop-shadow-none',
  },
  border: {
    on: 'border border-slate-50',
    off: 'border-none',
  },
  horizontal: {
    off: 'flex-col',
    on: 'flex-col md:max-w-xl md:flex-row',
  },
  href: 'hover:bg-slate-200',
  img: {
    base: 'relative',
    horizontal: {
      off: {
        base: 'rounded-t-md object-cover',
        size: {
          sm: 'h-28 min-w-[300px] ',
          md: 'h-48 min-w-[320px] ',
          lg: 'h-52 min-w-[350px] ',
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
};
