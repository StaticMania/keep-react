import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

/**
 * Props for the ModalBody component.
 * @typedef ModalBodyProps
 * @property {React.ComponentProps<'div'>} - Props for the div element.
 * @property {string} [className] - Optional class name for the component.
 */
export type ModalBodyProps = PropsWithChildren<ComponentProps<'div'> & { className?: string }>

export const ModalBody: FC<ModalBodyProps> = ({ children, className, ...props }) => {
  const theme = useTheme().theme.modal.body
  const theirProps = excludeClassName(props)

  return (
    <div className={cn(theme.base, className)} {...theirProps}>
      {children}
    </div>
  )
}
