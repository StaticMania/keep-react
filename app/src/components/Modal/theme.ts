interface KeepModalTheme {
  modal: string
  icon: string
  footer: string
  body: string
}

export const modalTheme: KeepModalTheme = {
  modal: 'keep-modal fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50',
  icon: 'flex h-12 w-12 items-center justify-center rounded-full bg-metal-50',
  footer: 'flex items-center gap-3',
  body: 'modal-content w-[22rem] animate-keep-bounce rounded-xl bg-white p-5 shadow-xLarge',
}
