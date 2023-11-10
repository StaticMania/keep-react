import { twMerge } from 'tailwind-merge'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { useTheme } from '../../Keep/ThemeContex'

export type ModalBodyProps = PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>>

export const ModalBody: FC<ModalBodyProps> = ({ children, ...props }) => {
  const theme = useTheme().theme.modal.body
  const theirProps = excludeClassName(props)

  return (
    <div className={twMerge(theme.base)} {...theirProps}>
      {children}
    </div>
  )
}
