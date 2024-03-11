import { FC, ReactNode } from 'react'
import { cn } from '../../helpers/cn'
import { useNavigationContext } from './NavigationContext'
import { navigationTheme } from './theme'

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

export const NavigationCollapse: FC<CollapseProps> = ({ children, className, collapseType = 'fullWidth' }) => {
  const { isOpen, setIsOpen } = useNavigationContext()
  const { collapse } = navigationTheme
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            className="text-metal-400"
            viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
          </svg>
          Go Back
        </button>
      </div>
      {children}
    </div>
  )
}
