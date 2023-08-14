import type { keepToastTheme } from '.';

export const toastTheme: keepToastTheme = {
  base: 'flex w-full max-w-[320px] items-start rounded-lg bg-white px-6 py-4 text-gray-500 shadow-md',
  closed: 'opacity-0 ease-out',
  removed: 'hidden',
  toggle: {
    base: 'ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-slate-700 focus:ring-2 focus:ring-gray-300',
  },
};
