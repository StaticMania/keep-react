import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'
import { modalTheme } from './theme'

/**
 * Props for the ModalFooter component.
 *
 * @param {React.ComponentProps<'div'>} - Props for the div element.
 * @param {string} [className] - Optional class name for the component.
 */

export type ModalFooterProps = PropsWithChildren<ComponentProps<'div'> & { className?: string }>

export const ModalFooter: FC<ModalFooterProps> = ({ children, className }) => {
  const theme = modalTheme.footer

  return <div className={cn(theme.base, className)}>{children}</div>
}
