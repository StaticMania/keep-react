import type { ComponentProps, FC, PropsWithChildren, ReactElement } from 'react'
import { cn } from '../../helpers/cn'
import { useModalContext } from './ModalContext'
import { modalTheme } from './theme'

/**
 * Props for the ModalHeader component.
 *
 * @param {React.ComponentProps<'div'>} - Props for the div element.
 * @param {string} [className] - Optional class name for the component.
 */

export type ModalHeaderProps = PropsWithChildren<ComponentProps<'div'> & { className?: string }>

export const ModalHeader: FC<ModalHeaderProps> = ({ children, className }): ReactElement => {
  const { icon, onClose } = useModalContext()
  const theme = modalTheme.header

  return (
    <div className={cn(theme.base, className)}>
      <div className={cn(theme.iconSection)}>
        <div className={cn(theme.headerIcon.base)}>{icon}</div>
        {onClose && (
          <button aria-label="Close" className={theme.close.base} type="button" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={theme.close.icon}
              width="20"
              height="20"
              fill="#5e718d"
              viewBox="0 0 256 256">
              <path d="M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"></path>
            </svg>
          </button>
        )}
      </div>
      <h3 className={theme.title}>{children}</h3>
    </div>
  )
}
