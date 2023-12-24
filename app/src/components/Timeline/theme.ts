import { keepTimelineTheme } from '.'

export const timelineTheme: keepTimelineTheme = {
  root: {
    horizontal: {
      on: 'items-start border-t border-metal-200 sm:flex',
      off: 'relative border-l border-metal-200',
    },
    barType: {
      solid: 'border-solid',
      dashed: 'border-dashed',
    },
  },
  body: {
    base: '!mb-4 text-body-6 md:text-body-3 font-normal text-metal-500',
  },
  content: {
    horizontal: {
      on: 'mt-6 -ms-2 sm:pr-8',
      off: '',
    },
  },
  item: {
    horizontal: {
      on: 'relative mb-6 sm:mb-0',
      off: 'mb-10 ml-6',
    },
  },

  point: {
    root: {
      horizontal: {
        on: 'flex items-center',
        off: '',
      },
      icon: {
        on: {
          base: 'absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-metal-100 ring-4 ring-metal-100',
          inner: 'text-metal-900 flex items-center justify-center',
        },
        off: {
          base: 'absolute -left-2 h-4 w-4 rounded-full border border-white',
        },
      },
    },
  },
  time: {
    base: 'block mb-2 text-body-5 font-normal leading-none text-metal-500',
    horizontal: {
      on: 'mt-6',
      off: '',
    },
  },
  title: {
    base: 'mb-6 text-body-5 md:text-description-4 font-semibold text-metal-700',
  },
}
