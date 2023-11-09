import type { FC, PropsWithChildren } from 'react'
import { useState } from 'react'
import type { AccordionProps } from './Accordion'
import { AccordionPanelContext } from './AccordionPanelContext'

/**
 * Props for the AccordionPanel component.
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

/**
 * Renders a panel for an accordion component.
 * @param {AccordionPanelProps} props - The props for the AccordionPanel component.
 * @param {ReactNode} props.children - The content to be displayed inside the AccordionPanel.
 * @param {boolean} props.alwaysOpen - Whether the AccordionPanel should always be open.
 * @param {boolean} props.isOpen - Whether the AccordionPanel is currently open.
 * @returns {JSX.Element} - The AccordionPanel component.
 */
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
