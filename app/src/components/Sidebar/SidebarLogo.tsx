import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { useId } from 'react'
import { cn } from '../../helpers/cn'
import { useSidebarContext } from './SidebarContext'
import { sidebarTheme } from './theme'

export interface SidebarLogoProps extends PropsWithChildren, ComponentProps<'a'> {
  href: string
  img: string
  imgAlt?: string
}

export const SidebarLogo: FC<SidebarLogoProps> = ({ children, className, href, img, imgAlt = '', ...props }) => {
  const id = useId()
  const { isCollapsed } = useSidebarContext()
  const theme = sidebarTheme.logo

  return (
    <a aria-labelledby={`keep-sidebar-logo-${id}`} href={href} className={cn(theme.base, className)} {...props}>
      <img alt={imgAlt} src={img} className={theme.img} />
      <span className={theme.collapsed[isCollapsed ? 'on' : 'off']} id={`keep-sidebar-logo-${id}`}>
        {children}
      </span>
    </a>
  )
}
SidebarLogo.displayName = 'Sidebar.Logo'
