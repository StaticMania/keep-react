import { FC } from 'react'
import { cn } from '~/app/src/helpers/cn'

interface AvatarProps {
  imgUrl?: string
  alt?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  shape?: 'circle' | 'rounded'
  verified?: boolean
}

const avatarTheme = {
  size: {
    xs: 'h-6 w-6',
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-14 w-14',
  },
  shape: {
    circle: 'rounded-full',
    rounded: 'rounded-md',
  },
}

export const Avatar: FC<AvatarProps> = ({ imgUrl, alt, size = 'md' }) => {
  console.log(size)
  return <img src={imgUrl} alt={alt} className={cn(avatarTheme.size[size])} />
}
