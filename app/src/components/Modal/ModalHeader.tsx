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
              className={theme.close.icon}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="#5e718d"
              viewBox="0 0 256 256">
              <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
            </svg>
          </button>
        )}
      </div>
      <h3 className={theme.title}>{children}</h3>
    </div>
  )
}
