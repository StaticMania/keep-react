interface keepSkeletonTheme {
  base: string
  animation: string
  line: string
}

export const skeletonTheme: keepSkeletonTheme = {
  base: 'w-full',
  animation: 'animate-pulse',
  line: 'w-full bg-metal-100 dark:bg-metal-800 rounded-xl',
}
