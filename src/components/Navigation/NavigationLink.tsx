import { FC } from 'react'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export interface NavLinkProps {
  className?: string
  icon?: React.ReactNode
  iconAnimation?: boolean
  linkName?: string
  href?: string
}

export interface NavLinkTheme {
  base: string
  icon: {
    on: string
    off: string
  }
  linkText: string
  iconAnimation: {
    on: string
    off: string
  }
}

export const NavigationLink: FC<NavLinkProps> = ({ icon, iconAnimation = true, linkName, href = '/', className }) => {
  const { navLink } = useTheme().theme.navigation
  return (
    <li>
      <a href={href} className={cn(navLink.base, icon ? navLink.icon.on : navLink.icon.off, className)}>
        <span className={cn(navLink.linkText)}>{linkName}</span>
        {icon ? (
          <span className={cn(iconAnimation ? navLink.iconAnimation.on : navLink.iconAnimation.off)}>{icon}</span>
        ) : null}
      </a>
    </li>
  )
}
