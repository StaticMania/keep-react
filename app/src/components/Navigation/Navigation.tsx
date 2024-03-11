'use client'
import { FC, ReactNode, useState } from 'react'
import { cn } from '../../helpers/cn'
import { NavigationBrand } from './NavigationBrand'
import { NavigationCollapse } from './NavigationCollapse'
import { NavigationContainer } from './NavigationContainer'
import { NavigationContext } from './NavigationContext'
import { NavigationDivider } from './NavigationDivider'
import { NavigationLink } from './NavigationLink'
import { NavigationToggle } from './NavigationToggle'
import { navigationTheme } from './theme'

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

const NavigationComponent: FC<NavigationProps> = ({ fluid, bordered, rounded, children, className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { root } = navigationTheme

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
