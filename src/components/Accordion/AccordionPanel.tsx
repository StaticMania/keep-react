import type { FC, PropsWithChildren } from 'react'
import { useState } from 'react'
import type { AccordionProps } from './Accordion'
import { AccordionPanelContext } from './AccordionPanelContext'

/**
 * Props for the AccordionPanel component.
 * @interface AccordionPanelProps
 * @extends {PropsWithChildren<AccordionProps>}
 */
export interface AccordionPanelProps extends PropsWithChildren<AccordionProps> {
  /**
   * isOpen - Whether the AccordionPanel is currently open.
   */
  isOpen?: boolean
  /**
   * setOpen - A function to set the open state of the AccordionPanel.
   */
  setOpen?: () => void
}

export const AccordionPanel: FC<AccordionPanelProps> = ({ children, ...props }) => {
  const { alwaysOpen } = props
  const [isOpen, setOpen] = useState(props.isOpen)

  const provider = alwaysOpen
    ? {
        ...props,
        isOpen,
        setOpen: () => setOpen(!isOpen),
      }
    : props

  return <AccordionPanelContext.Provider value={provider}>{children}</AccordionPanelContext.Provider>
}
