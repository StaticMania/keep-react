import { FC } from 'react'
import { useNavigationContext } from './NavigationContext'
import { useTheme } from '../../Keep/ThemeContext'
import { CaretLeft } from 'phosphor-react'
import { cn } from '../../helpers/cn'

export interface CollapseProps {
  children?: React.ReactNode
  className?: string
  collapseType?: 'sidebar' | 'fullWidth'
}

export interface CollapseTheme {
  base: string
  menu: {
    open: string
    close: string
    position: string
  }
  type: {
    sidebar: string
    fullWidth: string
  }
}

export const NavigationCollapse: FC<CollapseProps> = ({ children, className, collapseType = 'fullWidth' }) => {
  const { isOpen, setIsOpen } = useNavigationContext()
  const { collapse } = useTheme().theme.navigation
  return (
    <div
      className={cn(
        collapse.base,
        isOpen ? collapse.menu.open : collapse.menu.close,
        collapse.menu.position,
        collapseType === 'sidebar' ? collapse.type.sidebar : collapse.type.fullWidth,
        className,
      )}>
      <div className="mb-4">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-px text-body-5 text-metal-400">
          <CaretLeft size="16" />
          Go Back
        </button>
      </div>
      {children}
    </div>
  )
}
