import { MinusCircle, PlusCircle } from 'phosphor-react'
import type { ComponentProps, FC } from 'react'
import { twMerge } from 'tailwind-merge'
import { DeepPartial } from '../../helpers/deep-partial'
import { mergeDeep } from '../../helpers/mergeDeep'
import { KeepBoolean, KeepHeadingLevel } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import { useAccordionContext } from './AccordionPanelContext'

/**
 * Interface representing the theme object for the KeepAccordionTitle component.
 */

export interface keepAccordionTitleTheme {
  /**
   * The theme object for the arrow icon.
   */
  arrow: {
    /**
     * The base color of the arrow icon.
     */
    base: string
    /**
     * The color of the arrow icon when the Accordion is open.
     */
    open: KeepBoolean
  }
  /**
   * The base color of the component.
   */
  base: string
  /**
   * The theme object for the flush state of the component.
   */
  flush: KeepBoolean
  /**
   * The theme object for the heading.
   */
  heading: string
  /**
   * The color of the component when the Accordion is open.
   */
  open: KeepBoolean
  /**
   * The color of the component when the Accordion is disabled.
   */
  disabled: string
  /**
   * The theme object for the icon position.
   * @property {string} left - The icon position is on the left.
   * @property {string} right - The icon position is on the right.
   */
  iconPosition: {
    left: string
    right: string
  }
}

/**
 * Props for the AccordionTitle component.
 * 
 * @interface AccordionTitleProps
 * @extends {ComponentProps<'button'>}
 */

export interface AccordionTitleProps extends ComponentProps<'button'> {
  /**
   *  The icon to display when the accordion panel is closed.
   */
  arrowIcon?: FC<ComponentProps<'svg'>>
  /**
   * The heading level to use for the AccordionTitle.
   * @type {KeepHeadingLevel}
   * @default 'h1'
   */
  as?: KeepHeadingLevel
  /**
   * The theme for the AccordionTitle component.
   */
  theme?: DeepPartial<keepAccordionTitleTheme>
}

export const AccordionTitle: FC<AccordionTitleProps> = ({
  as: Heading = 'h1',
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const {
    showIcon,
    flush,
    isOpen,
    setOpen,
    iconPosition,
    disabled,
    closeIcon: CloseIcon,
    openIcon: OpenIcon,
  } = useAccordionContext()
  /**
   * Handles the click event for the AccordionTitle.
   * If the Accordion is not disabled, it toggles the open/closed state of the Accordion item.
   */
  const onClick = () => typeof setOpen !== 'undefined' && setOpen()

  const oldTheme = useTheme().theme.accordion.title
  const theme = mergeDeep(oldTheme, customTheme)

  return (
    <button
      className={twMerge(
        theme.base,
        theme.flush[flush ? 'on' : 'off'],
        theme.open[isOpen ? 'on' : 'off'],
        className,
        disabled && theme.disabled,
        iconPosition === 'right' && theme.iconPosition.right,
        iconPosition === 'left' && theme.iconPosition.left,
      )}
      onClick={onClick}
      type="button"
      disabled={disabled}
      {...props}>
      {iconPosition === 'left' && !isOpen && CloseIcon && CloseIcon}
      {iconPosition === 'left' && isOpen && OpenIcon && OpenIcon}
      {(iconPosition === 'left' || !iconPosition) && !isOpen && !CloseIcon && !OpenIcon && showIcon && <PlusCircle />}
      {(iconPosition === 'left' || !iconPosition) && isOpen && !CloseIcon && !OpenIcon && showIcon && <MinusCircle />}
      <Heading className={theme.heading} data-testid="keep-accordion-heading">
        {children}
      </Heading>
      {iconPosition === 'right' && !isOpen && CloseIcon && CloseIcon}
      {iconPosition === 'right' && isOpen && OpenIcon && OpenIcon}
      {(iconPosition === 'right' || !iconPosition) && !isOpen && !CloseIcon && !OpenIcon && showIcon && <PlusCircle />}
      {(iconPosition === 'right' || !iconPosition) && isOpen && !CloseIcon && !OpenIcon && showIcon && <MinusCircle />}
    </button>
  )
}
