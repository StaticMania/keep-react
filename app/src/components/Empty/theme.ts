export interface keepEmptyTheme {
  root: RootTheme
  title: keepTitleTheme
  description: keepDescriptionTheme
}

export interface keepDescriptionTheme {
  base: string
}

export interface keepTitleTheme {
  base: string
}

interface RootTheme {
  base: string
}

export const emptyTheme: keepEmptyTheme = {
  root: {
    base: 'flex max-w-xl mx-auto flex-col items-center justify-center p-6',
  },
  title: {
    base: 'mb-[14px] mt-5 text-heading-5 font-medium text-metal-700 dark:text-white',
  },
  description: {
    base: 'mb-8 text-center text-body-3 font-normal text-metal-400 dark:text-metal-300',
  },
}
