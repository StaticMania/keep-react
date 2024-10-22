export interface NotificationTheme {
  base: string
  position: {
    'bottom-right': string
    'top-left': string
    'top-right': string
    'bottom-left': string
    center: string
  }
}

export const notificationTheme: NotificationTheme = {
  base: 'z-50 w-full max-w-[24rem] rounded-xl bg-white p-5 shadow-xLarge fixed dark:bg-metal-900 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95',
  position: {
    'bottom-right':
      'bottom-5 right-5 data-[state=closed]:slide-out-to-right-1/2 data-[state=open]:slide-in-from-bottom',
    'top-left': 'top-5 left-5 data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-top',
    'top-right': 'top-5 right-5 data-[state=closed]:slide-out-to-right-1/2 data-[state=open]:slide-in-from-top',
    'bottom-left': 'bottom-5 left-5 data-[state=closed]:slide-out-to-left-1/2 data-[state=open]:slide-in-from-bottom',
    center: 'inset-x-5 top-5 mx-auto data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top',
  },
}
