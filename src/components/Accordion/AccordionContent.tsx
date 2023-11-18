import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { useAccordionContext } from './AccordionPanelContext'
import { useTheme } from '../../Keep/ThemeContext'
import { DeepPartial } from '../../helpers/deep-partial'
import { mergeDeep } from '../../helpers/mergeDeep'
import { Collapse } from 'react-collapse'
import { cn } from '../../helpers/cn'

/**
 * Interface representing the theme object for the KeepAccordion component.
 * @interface
 * @property {string} base - The base color of the component.
 */
export interface keepAccordionComponentTheme {
  base: string
}

/**
 * Props for the AccordionContent component.
 * 
 * @interface AccordionContentProps
 * @extends {PropsWithChildren<ComponentProps<'div'>>}
 */

export interface AccordionContentProps extends PropsWithChildren<ComponentProps<'div'>> {
  /**
   * The theme for the AccordionContent component.
   * 
   * @type {DeepPartial<keepAccordionComponentTheme>}
   */
  theme?: DeepPartial<keepAccordionComponentTheme>
}

/**
 * The AccordionContent component.
 * 
 * @param {AccordionContentProps} props - The props for the component.
 * @returns {ReactElement}
 */
export const AccordionContent: FC<AccordionContentProps> = ({
  children,
  className,
  theme: customTheme = {},
  ...props
}) => {
  const { isOpen = false } = useAccordionContext()

  const oldTheme = useTheme().theme.accordion.content
  const theme = mergeDeep(oldTheme, customTheme)
  return (
    <Collapse isOpened={isOpen}>
      <div className={cn(theme.base, className)} data-testid="keep-accordion-content" hidden={!isOpen} {...props}>
        {children}
      </div>
    </Collapse>
  )
}
