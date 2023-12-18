import { keepNotificationTheme } from './Notification'

export const notificationTheme: keepNotificationTheme = {
  root: 'relative max-w-sm overflow-hidden rounded-xl bg-white pb-5 pl-[30px] pr-4 pt-5 shadow-large',
  position: {
    show: 'fixed z-50 animate-keep-bounce',
    hidden: 'hidden',
    'top-left': 'top-5 left-5',
    'top-right': 'top-5 right-5',
    'bottom-left': 'bottom-5 left-5',
    'bottom-right': 'bottom-5 right-5',
  },
  crossBtn: 'absolute right-5 top-[18px] flex h-8 w-8 items-center justify-center rounded-full bg-white/90',
  description: 'text-body-4 font-normal text-metal-500',
  media: '',
  icon: '-mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-metal-50',
  body: 'space-y-3',
  avatar: '-mt-1',
  title: 'w-[90%] text-body-2 font-medium text-metal-700',
}
