import type { ComponentProps, FC, PropsWithChildren, ReactElement, ReactNode } from 'react'
import { Children, cloneElement, useMemo, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { DeepPartial } from '../../helpers/deep-partial'
import { mergeDeep } from '../../helpers/mergeDeep'
import { KeepBoolean } from '../../Keep/KeepTheme'
import { useTheme } from '../../Keep/ThemeContex'
import type { keepAccordionComponentTheme } from './AccordionContent'
import { AccordionContent } from './AccordionContent'
import type { AccordionPanelProps } from './AccordionPanel'
import { AccordionPanel } from './AccordionPanel'
import type { keepAccordionTitleTheme } from './AccordionTitle'
import { AccordionTitle } from './AccordionTitle'

export interface keepAccordionTheme {
  root: keepAccordionRootTheme
  content: keepAccordionComponentTheme
  title: keepAccordionTitleTheme
}

export interface keepAccordionRootTheme {
  base: string
  flush: KeepBoolean
}

export interface AccordionProps extends PropsWithChildren<ComponentProps<'div'>> {
  alwaysOpen?: boolean
  showIcon?: boolean
  openIcon?: ReactNode
  closeIcon?: ReactNode
  children: ReactElement<AccordionPanelProps> | ReactElement<AccordionPanelProps>[]
  flush?: boolean
  collapseAll?: boolean
  theme?: DeepPartial<keepAccordionTheme>
  iconPosition?: string
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
      className={twMerge(!flush && theme.base, className, !flush && theme.flush.off, flush && theme.flush.on)}
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
