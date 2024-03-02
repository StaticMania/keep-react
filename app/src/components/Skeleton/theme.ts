interface keepSkeletonTheme {
  base: string
  animation: string
  line: string
}

export const skeletonTheme: keepSkeletonTheme = {
  base: 'w-full cursor-wait',
  animation: 'animate-pulse',
  line: 'w-full bg-metal-100 rounded-xl',
}
