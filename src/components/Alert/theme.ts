import type { keepAlertTheme } from '.'

/**
 * Theme object for the Alert component.
 */
export const alertTheme: keepAlertTheme = {
  /**
   * Base styles for the Alert component.
   */
  base: 'py-[18px] px-6 max-w-lg',
  /**
   * Styles for the dismiss button when it's hidden.
   */
  dismiss: 'hidden',
  /**
   * Border styles for the Alert component.
   */
  border: {
    /**
     * Styles for the border when it's off.
     */
    off: 'border-0',
    /**
     * Styles for the border when it's on.
     */
    on: {
      /**
       * Styles for the border when it's an error.
       */
      error: 'border border-error-100',
      /**
       * Styles for the border when it's gray.
       */
      gray: 'border border-slate-200',
      /**
       * Styles for the border when it's an info.
       */
      info: 'border border-primary-100',
      /**
       * Styles for the border when it's a success.
       */
      success: 'border border-success-200',
      /**
       * Styles for the border when it's a warning.
       */
      warning: 'border border-warning-100',
    },
    /**
     * Styles for the border accent.
     */
    borderAccent: {
      /**
       * Styles for the top border accent.
       */
      top: 'border-t-[6px]',
      /**
       * Styles for the bottom border accent.
       */
      bottom: 'border-b-[6px]',
      /**
       * Styles for the left border accent.
       */
      left: 'border-l-[6px]',
      /**
       * Styles for the right border accent.
       */
      right: 'border-r-[6px]',
    },
  },
  /**
   * Wrapper styles for the Alert component.
   */
  wrapper: 'flex',
  /**
   * Styles for the info button.
   */
  infoButton: {
    /**
     * Base styles for the info button.
     */
    base: 'pr-3.5',
  },
  /**
   * Styles for the close button.
   */
  closeButton: {
    /**
     * Base styles for the close button.
     */
    base: '-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2',
    /**
     * Styles for the close button icon.
     */
    icon: 'w-5 h-5',
    /**
     * Styles for the close button color.
     */
    color: {
      /**
       * Styles for the close button color when it's an info.
       */
      info: 'bg-primary-25 text-blue-500 hover:bg-blue-100 focus:ring-blue-400',
      /**
       * Styles for the close button color when it's gray.
       */
      gray: 'bg-slate-50 text-slate-600 hover:bg-slate-200 focus:ring-slate-200',
      /**
       * Styles for the close button color when it's an error.
       */
      error: 'bg-error-25 !text-error-500 hover:bg-error-50 hover:text-white focus:ring-red-400',
      /**
       * Styles for the close button color when it's a success.
       */
      success: 'bg-success-50 text-green-500 hover:bg-green-100 focus:ring-green-400',
      /**
       * Styles for the close button color when it's a warning.
       */
      warning: 'bg-warning-25 text-yellow-500 hover:bg-yellow-100 focus:ring-yellow-400',
    },
  },
  /**
   * Color styles for the Alert component.
   */
  color: {
    /**
     * Color styles for the Alert component when it's an info.
     */
    info: 'bg-primary-25 border-primary-100',
    /**
     * Color styles for the Alert component when it's gray.
     */
    gray: 'bg-slate-50 border-slate-200',
    /**
     * Color styles for the Alert component when it's an error.
     */
    error: 'bg-error-25 border-error-100',
    /**
     * Color styles for the Alert component when it's a success.
     */
    success: 'bg-success-50 border-success-200',
    /**
     * Color styles for the Alert component when it's a warning.
     */
    warning: 'bg-warning-25 border-warning-200',
  },
  /**
   * Icon styles for the Alert component.
   */
  icon: 'mr-3 inline h-5 w-5 flex-shrink-0',
  /**
   * Rounded styles for the Alert component.
   */
  rounded: 'rounded-md',
  /**
   * Title styles for the Alert component.
   */
  title: {
    /**
     * Base styles for the title of the Alert component.
     */
    base: 'md:text-lg text-base font-semibold',
    /**
     * Color styles for the title of the Alert component.
     */
    color: {
      /**
       * Color styles for the title of the Alert component when it's an info.
       */
      info: 'text-blue-600',
      /**
       * Color styles for the title of the Alert component when it's gray.
       */
      gray: 'text-slate-900',
      /**
       * Color styles for the title of the Alert component when it's an error.
       */
      error: 'text-error-600',
      /**
       * Color styles for the title of the Alert component when it's a success.
       */
      success: 'text-success-600',
      /**
       * Color styles for the title of the Alert component when it's a warning.
       */
      warning: 'text-warning-600',
    },
  },
}
