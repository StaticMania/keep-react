import { Children, cloneElement, useMemo, useState } from 'react'
import type { ComponentProps, FC, PropsWithChildren, ReactElement, ReactNode } from 'react'
import { DeepPartial } from '../../helpers/deep-partial'
import { mergeDeep } from '../../helpers/mergeDeep'
import { KeepBoolean } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContext'
import type { keepAccordionComponentTheme } from './AccordionContent'
import { AccordionContent } from './AccordionContent'
import type { AccordionPanelProps } from './AccordionPanel'
import { AccordionPanel } from './AccordionPanel'
import type { keepAccordionTitleTheme } from './AccordionTitle'
import { AccordionTitle } from './AccordionTitle'
import { cn } from '../../helpers/cn'

export interface keepAccordionTheme {
  root: keepAccordionRootTheme
  content: keepAccordionComponentTheme
  title: keepAccordionTitleTheme
}

export interface keepAccordionRootTheme {
  base: string
  flush: KeepBoolean
}

/**
 * Props for the Accordion component.
 *
 * @interface AccordionProps
 * @extends {PropsWithChildren<ComponentProps<'div'>>}
 */
export interface AccordionProps extends PropsWithChildren<ComponentProps<'div'>> {
  /**
   * Determines whether the accordion should always be open.
   *
   * @type {boolean}
   */
  alwaysOpen?: boolean

  /**
   * Determines whether to show the open/close icon for each accordion panel.
   *
   * @type {boolean}
   */
  showIcon?: boolean

  /**
   * The icon to display when the accordion panel is open.
   *
   * @type {ReactNode}
   */
  openIcon?: ReactNode

  /**
   * The icon to display when the accordion panel is closed.
   *
   * @type {ReactNode}
   */
  closeIcon?: ReactNode

  /**
   * The accordion panels to display.
   *
   * @type {(ReactElement<AccordionPanelProps> | ReactElement<AccordionPanelProps>[])}
   */
  children: ReactElement<AccordionPanelProps> | ReactElement<AccordionPanelProps>[]
  /**
   * Determines whether the accordion should be flush.
   *
   * @type {boolean}
   */
  flush?: boolean
  /**
   * Determines whether the accordion should be collapsed by default.
   *
   * @type {boolean}
   */
  collapseAll?: boolean
  /**
   * Additional CSS class name(s) to apply.
   *
   * @type {string}
   */

  theme?: DeepPartial<keepAccordionTheme>
  /**
   * The position of the icon relative to the panel title.
   *
   * @type {string}
   */

  iconPosition?: string
  /**
   * Determines whether the accordion is disabled.
   *
   * @type {boolean}
   */
  disabled?: boolean
}

const AccordionComponent: FC<AccordionProps> = ({
  alwaysOpen = false,
  showIcon = true,
  openIcon,
  closeIcon,
  children,
  flush = false,
  collapseAll = false,
  className,
  iconPosition = 'right',
  disabled = false,
  theme: customTheme = {},
  ...props
}) => {
  const [isOpen, setOpen] = useState(collapseAll ? -1 : 0)

  const panels = useMemo(
    () =>
      Children.map(children, (child, i) =>
        cloneElement(child, {
          alwaysOpen,
          showIcon,
          flush,
          closeIcon,
          openIcon,
          disabled,
          iconPosition,
          isOpen: isOpen === i,
          setOpen: () => setOpen(isOpen === i ? -1 : i),
        }),
      ),
    [alwaysOpen, showIcon, children, flush, isOpen, iconPosition, disabled, closeIcon, openIcon],
  )
  const oldTheme = useTheme().theme.accordion.root
  const theme = mergeDeep(oldTheme, customTheme)

  return (
    <div
      className={cn(!flush && theme.base, !flush && theme.flush.off, flush && theme.flush.on, className)}
      data-testid="keep-accordion"
      {...props}>
      {panels}
    </div>
  )
}

AccordionComponent.displayName = 'Accordion'
AccordionPanel.displayName = 'Accordion.Panel'
AccordionTitle.displayName = 'Accordion.Title'
AccordionContent.displayName = 'Accordion.Content'

export const Accordion = Object.assign(AccordionComponent, {
  Panel: AccordionPanel,
  Title: AccordionTitle,
  Content: AccordionContent,
})
