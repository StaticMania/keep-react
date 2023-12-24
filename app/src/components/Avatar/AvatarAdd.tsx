import type { FC, PropsWithChildren } from 'react'
import type { AvatarSizes } from './Avatar'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

/**
 * Props for the AvatarAdd component.
 * @type {AvatarAddProps}
 */
export type AvatarAddProps = PropsWithChildren<{
  /**
   * The icon to be displayed in the AvatarAdd component.
   * @type {string}
   */
  icon?: string

  /**
   * The size of the AvatarAdd component.
   * @type {keyof AvatarSizes}
   * @default 'md'
   */
  size?: keyof AvatarSizes

  /**
   * The background color of the AvatarAdd component.
   * @type {string}
   * @default '#F0F3F7'
   */
  bg?: string

  /**
   * The color of the icon in the AvatarAdd component.
   * @type {string}
   * @default '#5E718D'
   */
  iconColor?: string

  /**
   * The color of the ring around the AvatarAdd component.
   * @type {string}
   * @default 'ring-white'
   */
  ringColor?: string

  /**
   * Additional CSS classes for the AvatarAdd component.
   * @type {string}
   * @default ''
   */
  className?: string
}>

export const AvatarAdd: FC<AvatarAddProps> = ({
  icon,
  size = 'md',
  bg = '#F0F3F7',
  iconColor = '#5E718D',
  ringColor = 'ring-white',
  className,
}) => {
  const theme = useTheme().theme.avatar

  return (
    <div className={cn(theme.add.base, theme.add.iconSize['xl'], ringColor, className)} style={{ backgroundColor: bg }}>
      {icon ? (
        <img src={icon} alt="add_icon" className={cn(theme.add.iconSize[size])} />
      ) : (
        <svg
          className={cn(theme.add.iconSize[size])}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28">
          <path
            d="M4.375 14h19.25M14 4.375v19.25"
            stroke={iconColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  )
}

AvatarAdd.displayName = 'Avatar.Add'
