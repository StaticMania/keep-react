interface KeepStepPointTheme {
  default: string
  border: string
  icon: string
}
export const stepPointTheme: KeepStepPointTheme = {
  default:
    'flex h-10 max-w-max shrink-0 items-center gap-2 capitalize data-[completed=false]:text-metal-900/50 data-[completed=true]:text-primary-500 dark:data-[completed=false]:text-white/50 dark:data-[completed=true]:text-white',
  border:
    'flex h-10 max-w-max shrink-0 items-center gap-2 rounded-full border pl-2 pr-4 capitalize data-[completed=true]:bg-primary-500 data-[completed=false]:text-metal-900/50 data-[completed=true]:text-white dark:data-[completed=false]:border-metal-900 dark:data-[completed=true]:border-primary-500 dark:data-[completed=true]:bg-primary-500 dark:data-[completed=false]:text-white/50 dark:data-[completed=true]:text-white',

  icon: 'flex size-10 shrink-0 items-center justify-center rounded-full border text-metal-600 data-[completed=true]:bg-primary-500 data-[completed=false]:text-metal-900/50 data-[completed=true]:text-white dark:data-[completed=false]:border-metal-900 dark:data-[completed=true]:border-primary-500 dark:data-[completed=true]:bg-primary-500 dark:data-[completed=false]:text-white/50 dark:data-[completed=true]:text-white',
}
