interface DropdownInterface {
  action: string
  root: string
  item: string
}

export const dropdownTheme: DropdownInterface = {
  action:
    'inline-block cursor-pointer select-none rounded-lg border border-metal-200 bg-white p-2.5 text-body-5 font-normal text-white',
  root: 'w-[16rem] rounded-xl border border-metal-100 bg-white p-4 outline-none',
  item: 'flex cursor-pointer items-center gap-2 rounded p-2 text-body-3 font-medium text-metal-600 hover:bg-metal-25',
}
