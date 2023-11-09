import type { keepAccordionTheme } from './Accordion'
/**
 * Theme object for the Accordion component.
 */
export const accordionTheme: keepAccordionTheme = {
  /**
   * Styles for the root element of the Accordion component.
   */
  root: {
    /**
     * Base styles for the root element.
     */
    base: 'bg-slate-50',
    /**
     * Styles for the border of the root element when flush is off or on.
     */
    flush: {
      off: 'border-b-2 border-b-slate-200',
      on: 'border-b',
    },
  },
  /**
   * Styles for the content element of the Accordion component.
   */
  content: {
    /**
     * Base styles for the content element.
     */
    base: 'pb-5 px-5 md:text-base text-sm text-slate-500 font-normal transition-all duration-300',
  },
  /**
   * Styles for the title element of the Accordion component.
   */
  title: {
    /**
     * Styles for the title element when it is disabled.
     */
    disabled: 'cursor-not-allowed opacity-50',
    /**
     * Styles for the arrow icon of the title element.
     */
    arrow: {
      /**
       * Base styles for the arrow icon.
       */
      base: 'h-6 w-6 shrink-0',
      /**
       * Styles for the arrow icon when the Accordion is open or closed.
       */
      open: {
        off: '',
        on: 'rotate-180',
      },
    },
    /**
     * Base styles for the title element.
     */
    base: 'flex w-full items-center py-5 px-5 text-left font-medium md:text-xl text-md text-slate-800 hover:bg-slate-100',
    /**
     * Styles for the icon position of the title element.
     */
    iconPosition: {
      left: 'gap-5',
      right: 'justify-between',
    },
    /**
     * Styles for the title element when flush is off or on.
     */
    flush: {
      off: 'hover:bg-slate-50',
      on: '!bg-transparent',
    },
    /**
     * Styles for the heading of the title element.
     */
    heading: '',
    /**
     * Styles for the title element when the Accordion is open or closed.
     */
    open: {
      off: 'bg-slate-25',
      on: 'bg-slate-50',
    },
  },
}
