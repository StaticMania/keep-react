interface KeepSideBarTheme {
  root: string
  item: string
  header: string
  footer: string
  body: string
}

export const sidebarTheme: KeepSideBarTheme = {
  root: 'max-w-xs rounded-xl bg-white p-6 shadow',
  item: 'flex items-center gap-2 py-2.5 text-body-3 font-medium text-metal-600',
  header: 'mb-2',
  footer: '',
  body: 'text-body-3 font-medium text-metal-600',
}
