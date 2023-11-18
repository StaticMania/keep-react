/**
 * @packageDocumentation
 * @module Avatar
 * 
 * @remarks
 * The `AvatarAdd` component is used to display an avatar with an icon that indicates that the user can add another user to the group.
 * 
 * @see https://react.keepdesign.io/docs/components/avatargroup#avatar-group-with-add-icon 
 */

/* eslint-disable @next/next/no-img-element */
import type { PropsWithChildren } from 'react'
import type { AvatarSizes } from './Avatar'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

export type AvatarAddProps = PropsWithChildren<{
  /**
   * The icon to display in the avatar.
   */
  icon?: string
  /**
   * The size of the avatar.
   */
  size?: keyof AvatarSizes
  /**
   * The background color of the avatar.
   */
  bg?: string
  /**
   * The color of the icon in the avatar.
   */
  iconColor?: string
  /**
   * The color of the ring around the avatar.
   */
  ringColor?: string
  className?: string
}>

export const AvatarAdd: React.FC<AvatarAddProps> = ({
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
