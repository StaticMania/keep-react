import { FC, ReactNode } from 'react'
import { cn } from '~/src/helpers/cn'

interface CardAvatarProps {
  className?: string
  children?: ReactNode
}

export const AvatarComponent: FC<CardAvatarProps> = ({ className, children }) => {
  return <div className={cn('flex items-center gap-3', className)}>{children}</div>
}

const AvatarTitle: FC<CardAvatarProps> = ({ children, className }) => {
  return <h2 className={cn('text-body-4 font-semibold !text-metal-600', className)}>{children}</h2>
}
const AvatarDetails: FC<CardAvatarProps> = ({ children, className }) => {
  return <p className={cn('text-body-6 font-medium !text-metal-400', className)}>{children}</p>
}

AvatarTitle.displayName = 'Avatar.Title'
AvatarDetails.displayName = 'Avatar.Details'

export const Avatar = Object.assign(AvatarComponent, {
  Title: AvatarTitle,
  Details: AvatarDetails,
})
