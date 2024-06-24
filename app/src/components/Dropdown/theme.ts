interface DropdownInterface {
  root: string
  item: string
}

export const dropdownTheme: DropdownInterface = {
  root: 'w-[16rem] rounded-xl border border-metal-100 dark:border-metal-800 bg-white dark:bg-metal-900 p-5 z-50 outline-none',
  item: 'flex cursor-pointer items-center gap-2 rounded p-2 text-body-4 font-medium text-metal-600 hover:bg-metal-25 dark:text-white dark:hover:bg-metal-800 transition-all duration-200',
}
