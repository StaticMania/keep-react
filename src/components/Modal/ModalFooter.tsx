import { twMerge } from 'tailwind-merge'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { useTheme } from '../../Keep/ThemeContext'

export type ModalFooterProps = PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>>

export const ModalFooter: FC<ModalFooterProps> = ({ children, ...props }) => {
  const theme = useTheme().theme.modal.footer
  const theirProps = excludeClassName(props)

  return (
    <div className={twMerge(theme.base)} {...theirProps}>
      {children}
    </div>
  )
}
