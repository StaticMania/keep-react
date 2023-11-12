import { twMerge } from 'tailwind-merge'
import { X } from 'phosphor-react'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { useModalContext } from './ModalContext'
import { useTheme } from '../../Keep/ThemeContext'

export type ModalHeaderProps = PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>>

export const ModalHeader: FC<ModalHeaderProps> = ({ children, ...props }): JSX.Element => {
  const { icon, onClose } = useModalContext()
  const theme = useTheme().theme.modal.header
  const theirProps = excludeClassName(props)

  return (
    <div className={twMerge(theme.base)} {...theirProps}>
      <div className={twMerge(theme.iconSection)}>
        <div className={twMerge(theme.headerIcon.base)}>{icon}</div>
        {onClose && (
          <button aria-label="Close" className={theme.close.base} type="button" onClick={onClose}>
            <X weight="light" className={theme.close.icon} />
          </button>
        )}
      </div>
      <h3 className={theme.title}>{children}</h3>
    </div>
  )
}
