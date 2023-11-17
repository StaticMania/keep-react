import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export type ModalFooterProps = PropsWithChildren<ComponentProps<'div'> & { className?: string }>

export const ModalFooter: FC<ModalFooterProps> = ({ children, className, ...props }) => {
  const theme = useTheme().theme.modal.footer
  const theirProps = excludeClassName(props)

  return (
    <div className={cn(theme.base, className)} {...theirProps}>
      {children}
    </div>
  )
}
