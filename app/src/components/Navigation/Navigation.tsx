import { FC, ReactNode, useState } from 'react'
import { NavigationBrand } from './NavigationBrand'
import { NavigationContainer } from './NavigationContainer'
import { DividerTheme, NavigationDivider } from './NavigationDivider'
import { NavLinkTheme, NavigationLink } from './NavigationLink'
import { NavigationToggle } from './NavigationToggle'
import { NavigationContext } from './NavigationContext'
import { CollapseTheme, NavigationCollapse } from './NavigationCollapse'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

/**
 * Props for the Navigation component.
 * @interface NavigationProps
 */
export interface NavigationProps {
  /**
   * The children of the Navigation component.
   */
  children?: ReactNode
  /**
   * Determines if the Navigation component should have a fluid width.
   */
  fluid?: boolean
  /**
   * Determines if the Navigation component should have a bordered style.
   */
  bordered?: boolean
  /**
   * Determines if the Navigation component should have a rounded style.
   */
  rounded?: boolean
  /**
   * Additional CSS class name for the Navigation component.
   */
  className?: string
}

export interface KeepNavigationTheme {
  root: NavigationRoot
  collapse: CollapseTheme
  divider: DividerTheme
  navLink: NavLinkTheme
}

export interface NavigationRoot {
  base: string
  rounded: {
    on: string
    off: string
  }
  bordered: {
    on: string
    off: string
  }
  container: {
    on: string
    off: string
  }
}

const NavigationComponent: FC<NavigationProps> = ({ fluid, bordered, rounded, children, className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { root } = useTheme().theme.navigation

  isOpen &&
    window.addEventListener('scroll', () => {
      setIsOpen(false)
    })
  return (
    <NavigationContext.Provider value={{ isOpen, setIsOpen }}>
      <header
        className={cn(
          root.base,
          rounded ? root.rounded.on : root.rounded.off,
          bordered ? root.bordered.on : root.bordered.off,
          className,
        )}>
        <div className={fluid ? root.container.on : root.container.off}>{children}</div>
      </header>
    </NavigationContext.Provider>
  )
}

NavigationComponent.displayName = 'Navbar'
NavigationBrand.displayName = 'Navbar.Brand'
NavigationContainer.displayName = 'Navbar.Container'
NavigationDivider.displayName = 'Navbar.Divider'
NavigationLink.displayName = 'Navbar.Link'
NavigationToggle.displayName = 'Navbar.Toggle'
NavigationCollapse.displayName = 'Navbar.Collapse'

export const Navbar = Object.assign(NavigationComponent, {
  Brand: NavigationBrand,
  Container: NavigationContainer,
  Divider: NavigationDivider,
  Link: NavigationLink,
  Toggle: NavigationToggle,
  Collapse: NavigationCollapse,
})
