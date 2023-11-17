import { FC } from 'react'
import { List, X } from 'phosphor-react'
import { useNavigationContext } from './NavigationContext'
import { cn } from '../../helpers/cn'

export interface NavigationToggleProps {
  openIcon?: React.ReactNode
  closeIcon?: React.ReactNode
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
