'use client'
import { AnchorHTMLAttributes, Ref, cloneElement, forwardRef, isValidElement } from 'react'
import { cn } from '../../helpers/cn'
import { useAlertContext } from './AlertContext'
import { alertTheme } from './theme'

export interface AlertLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean
}

const AlertLink = forwardRef<HTMLAnchorElement, AlertLinkProps>(
  ({ children, className, href = '#', asChild, ...props }, ref: Ref<HTMLAnchorElement>) => {
    const { color = 'secondary' } = useAlertContext()

    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }

    return (
      <a {...props} href={href} className={cn(alertTheme.link.base, alertTheme.link.color[color], className)} ref={ref}>
        {children}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
          <path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
        </svg>
      </a>
    )
  },
)

AlertLink.displayName = 'AlertLink'

export { AlertLink }
