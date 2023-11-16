import { keepBadgeTheme } from '.'

export const badgeTheme: keepBadgeTheme = {
  /**
   * @description Badge base class
   * @type {string}
   */
  base: 'flex h-fit items-center justify-center gap-1 font-medium rounded-md cursor-pointer',
  /**
   * Badge Type
   * @type {object}
   * @property {object} default - Badge default type
   * @property {object} outline - Badge outline type
   * @property {object} text - Badge text type
   */
  badgeType: {
    default: {
      colorType: {
        light: {
          color: {
            info: 'bg-primary-25 text-primary-400 hover:bg-primary-50',
            gray: 'bg-metal-50 text-metal-500 hover:bg-metal-100',
            error: 'bg-error-25 text-error-500 hover:bg-error-50 ',
            success: 'bg-success-50 text-success-500 hover:bg-success-100',
            warning: 'bg-warning-100 text-warning-700 hover:bg-warning-200',
          },
        },
        strong: {
          color: {
            info: 'bg-primary-500 text-white hover:bg-primary-400',
            gray: 'bg-metal-500 text-white hover:bg-metal-400',
            error: 'bg-error-500 text-white hover:bg-error-400 ',
            success: 'bg-success-500 text-white hover:bg-success-400',
            warning: 'bg-warning-600 text-white hover:bg-warning-400',
          },
        },
      },
    },
    outline: {
      colorType: {
        light: {
          color: {
            info: 'bg-white border border-primary-100 text-primary-400 hover:bg-primary-100',
            gray: 'bg-white border border-metal-200 text-metal-500 hover:bg-metal-100',
            error: 'bg-white border border-error-100 text-error-500 hover:bg-error-100',
            success: 'bg-white border border-success-100 text-success-500 hover:bg-success-100',
            warning: 'bg-white border border-warning-200 text-warning-700 hover:bg-warning-100',
          },
        },
        strong: {
          color: {
            info: 'bg-primary-25 border border-primary-100 text-primary-400 hover:bg-primary-100',
            gray: 'bg-metal-25 border border-metal-200 text-metal-500 hover:bg-metal-100',
            error: 'bg-error-25 border border-error-100 text-error-500 hover:bg-error-100',
            success: 'bg-success-25 border border-success-100 text-success-500 hover:bg-success-100',
            warning: 'bg-warning-25 border border-warning-200 text-warning-700 hover:bg-warning-100',
          },
        },
      },
    },
    text: {
      colorType: {
        light: {
          color: {
            info: 'bg-transparent text-primary-400 hover:bg-primary-100',
            gray: 'bg-transparent text-metal-500 hover:bg-metal-100',
            error: 'bg-transparent text-error-500 hover:bg-error-100 ',
            success: 'bg-transparent text-success-500 hover:bg-success-100',
            warning: 'bg-transparent text-warning-700 hover:bg-warning-100',
          },
        },
        strong: {
          color: {
            info: 'bg-transparent text-primary-400 hover:bg-primary-100',
            gray: 'bg-transparent text-metal-500 hover:bg-metal-100',
            error: 'bg-transparent text-error-500 hover:bg-error-100 ',
            success: 'bg-transparent text-success-500 hover:bg-success-100',
            warning: 'bg-transparent text-warning-700 hover:bg-warning-100',
          },
        },
      },
    },
  },
  /**
   * @description Badge href class
   * @type {string}
   * @default group
   */
  href: 'group',
  /**
   * @description Badge Icon class
   * @type {object}
   * @property {string} off - Badge Icon off class
   * @property {string} on - Badge Icon on class
   * @property {object} size - Badge Icon size class
   * @property {string} size.xs - Badge Icon size xs
   * @property {string} size.sm - Badge Icon size sm
   */
  icon: {
    off: '',
    on: '',
    size: {
      xs: 'w-3 h-3 text-body-6',
      sm: 'w-3.5 h-3.5 text-body-5',
    },
  },
  /**
   * @description Badge dot class
   * @type {string}
   * @default h-2 w-2 rounded-full bg-current
   */
  dot: 'h-2 w-2 rounded-full bg-current',
  /**
   * @description Badge dot position class
   * @type {object}
   * @property {string} left - Badge dot position left
   * @property {string} right - Badge dot position right
   * @default left
   */
  dotPosition: { left: 'pr-2', right: 'pl-2' },
  /**
   * @description Badge size class
   * @type {object}
   * @property {string} xs - Badge size xs
   * @property {string} sm - Badge size sm
   * @default xs
   */
  size: {
    xs: 'py-[3px] px-2 text-body-6',
    sm: 'py-[5px] px-2 text-body-5',
  },
}
