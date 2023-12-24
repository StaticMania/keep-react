import { FC, ReactNode } from 'react'
import { List, X } from 'phosphor-react'
import { useNavigationContext } from './NavigationContext'
import { cn } from '../../helpers/cn'

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
  closeIcon = <X size={20} color="#444" />,
  openIcon = <List size={20} color="#444" />,
  className,
}) => {
  const { isOpen, setIsOpen } = useNavigationContext()
  return (
    <button className={cn('block lg:hidden', className)} onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? closeIcon : openIcon}
    </button>
  )
}
