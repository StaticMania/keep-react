import { X } from 'phosphor-react'
import type { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react'
import { excludeClassName } from '../../helpers/exclude'
import { useModalContext } from './ModalContext'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

/**
 * Props for the ModalHeader component.
 *
 * @param {React.ComponentProps<'div'>} - Props for the div element.
 * @param {string} [className] - Optional class name for the component.
 */

export type ModalHeaderProps = PropsWithChildren<ComponentProps<'div'> & { className?: string }>

export const ModalHeader: FC<ModalHeaderProps> = ({ children, className, ...props }): ReactElement => {
  const { icon, onClose } = useModalContext()
  const theme = useTheme().theme.modal.header
  const theirProps = excludeClassName(props)

  return (
    <div className={cn(theme.base, className)} {...theirProps}>
      <div className={cn(theme.iconSection)}>
        <div className={cn(theme.headerIcon.base)}>{icon}</div>
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
