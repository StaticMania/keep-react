interface DropdownInterface {
  root: string
  item: string
}

export const dropdownTheme: DropdownInterface = {
  root: 'w-[16rem] rounded-xl border border-metal-100 dark:border-metal-800 bg-white dark:bg-metal-900 p-5 z-50 outline-none top-16',
  item: 'flex cursor-pointer items-center gap-2 rounded-lg p-2.5 text-body-4 font-medium text-metal-600 hover:bg-metal-50 bg-transparent mb-1 dark:text-white dark:hover:bg-metal-800 transition-all duration-200',
}
