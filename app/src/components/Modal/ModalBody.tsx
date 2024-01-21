import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { cn } from '../../helpers/cn'
import { modalTheme } from './theme'

/**
 * Props for the ModalBody component.
 * @typedef ModalBodyProps
 * @property {React.ComponentProps<'div'>} - Props for the div element.
 * @property {string} [className] - Optional class name for the component.
 */
export type ModalBodyProps = PropsWithChildren<ComponentProps<'div'> & { className?: string }>

export const ModalBody: FC<ModalBodyProps> = ({ children, className }) => {
  const theme = modalTheme.body

  return <div className={cn(theme.base, className)}>{children}</div>
}
