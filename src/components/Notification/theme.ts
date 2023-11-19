import type { keepNotificationTheme } from '.'

/**
 * Represents the theme configuration for the notification component.
 * @type {keepNotificationTheme}
 * - `base` {string} - The base class for the notification component.
 * - `dismiss` {string} - The dismiss class for the notification component.
 * - `wrapper` {string} - The wrapper class for the notification component.
 * - `infoIcon` {object} - The infoIcon configuration for the notification component.
 * - `closeButton` {object} - The closeButton configuration for the notification component.
 * - `headerBanner` {object} - The headerBanner configuration for the notification component.
 * - `content` {string} - The content class for the notification component.
 * - `position` {object} - The position configuration for the notification component.
 */
export const notificationTheme: keepNotificationTheme = {
  base: 'rounded-md shadow-large px-4 border border-metal-50 z-50 bg-white transition-all duration-300 fixed',
  dismiss: 'hidden',
  wrapper: 'flex items-start gap-2 relative',
  infoIcon: {
    base: 'flex items-center justify-center rounded-full',
    on: 'px-4',
    off: 'pl-[30px] pr-4',
  },
  closeButton: {
    base: 'absolute right-0 h-8 w-8 rounded-lg flex items-center justify-center focus:ring-2',
    icon: 'w-6 h-6',
  },
  headerBanner: {
    base: 'relative overflow-hidden',
    img: 'w-full rounded-t-md',
    on: '!px-0',
    off: 'py-5',
    closeIcon:
      'absolute cursor-pointer flex items-center justify-center w-7 h-7 rounded-full bg-white top-3 right-3 opacity-90',
  },
  content: 'p-6',
  position: {
    'top-left': 'top-3 left-3',
    'top-right': 'top-3 right-3',
    'bottom-left': 'bottom-3 left-3',
    'bottom-right': 'bottom-3 right-0',
  },
}
