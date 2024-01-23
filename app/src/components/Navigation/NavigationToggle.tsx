import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useNavigationContext } from './NavigationContext'

/**
 * Props for the NavigationToggle component.
 * @interface NavigationToggleProps
 */
export interface NavigationToggleProps {
  /**
   * The icon to display when the navigation is open.
   */
  openIcon?: ReactNode

  /**
   * The icon to display when the navigation is closed.
   */
  closeIcon?: ReactNode

  /**
   * Additional class name for the component.
   */
  className?: string
}

export const NavigationToggle: FC<NavigationToggleProps> = ({
  closeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#444" viewBox="0 0 256 256">
      <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
    </svg>
  ),
  openIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#444" viewBox="0 0 256 256">
      <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
    </svg>
  ),
  className,
}) => {
  const { isOpen, setIsOpen } = useNavigationContext()
  return (
    <button className={cn('block lg:hidden', className)} onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? closeIcon : openIcon}
    </button>
  )
}
