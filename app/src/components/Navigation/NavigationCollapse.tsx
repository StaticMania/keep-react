import { FC, ReactNode } from 'react'
import { useNavigationContext } from './NavigationContext'
import { useTheme } from '../../Keep/ThemeContext'
import { CaretLeft } from 'phosphor-react'
import { cn } from '../../helpers/cn'

/**
 * Props for the Collapse component.
 * @interface CollapseProps
 */
export interface CollapseProps {
  /**
   * The content to be rendered inside the Collapse component.
   */
  children?: ReactNode

  /**
   * Additional class name for styling the Collapse component.
   */
  className?: string

  /**
   * The type of collapse, either 'sidebar' or 'fullWidth'.
   */
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
