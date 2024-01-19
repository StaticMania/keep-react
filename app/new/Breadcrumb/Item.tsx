import { FC, ReactNode } from 'react'
import { cn } from '~/app/src/helpers/cn'
import { breadcrumbTheme } from './Breadcrumb'

export interface ItemsProps {
  className?: string
  children?: ReactNode
  activeType?: 'base' | 'border'
  href?: string
  [keyof: string]: any
}
export const Item: FC<ItemsProps> = ({ className, children, activeType, href = '#', ...props }) => {
  const { dividerIconStyle, dividerIcon } = props
  const { base, icon, text } = breadcrumbTheme.item
  return (
    <div className={base}>
      {dividerIcon && dividerIcon}

      {!dividerIcon && dividerIconStyle === 'slash' ? (
        <div className={icon.slash}>/</div>
      ) : (
        <div className={icon.caret}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#455468" viewBox="0 0 256 256">
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>
        </div>
      )}
      <a href={href} className={cn(text.base, activeType && text.activeType[activeType], className)}>
        {children}
      </a>
    </div>
  )
}
