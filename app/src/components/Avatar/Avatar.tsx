'use client'
import { FC, HTMLAttributes, Ref, forwardRef } from 'react'
import { cn } from '../../helpers/cn'
import { AvatarCounter } from './Counter'
import { AvatarGroup } from './Group'
import { Verify } from './Verify'
import { avatarTheme } from './theme'

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  img?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  shape?: 'circle' | 'rounded'
  verified?: boolean
  active?: boolean
}

const AvatarComponent: FC<AvatarProps> = forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      img,
      alt = 'avatar',
      size = 'xl',
      shape = 'circle',
      color = 'secondary',
      active = false,
      verified = false,
      className,
      ...props
    }: AvatarProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    if (!img) {
      return (
        <div
          {...props}
          ref={ref}
          className={cn(
            'relative flex items-center justify-center',
            avatarTheme.base,
            avatarTheme.shape[shape],
            avatarTheme.size[size],
            avatarTheme.color[color],
            active && avatarTheme.activeIcon.base,
            active && avatarTheme.activeIcon.size[shape][size],
            active && avatarTheme.activeIcon.color[color],
            className,
          )}>
          <svg xmlns="http://www.w3.org/2000/svg" className={cn(avatarTheme.svgIcon[size])} viewBox="0 0 256 256">
            <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
          </svg>

          {verified && (
            <div className={cn(avatarTheme.verifyIcon.base, avatarTheme.verifyIcon.position[shape][size])}>
              <svg
                className={cn(avatarTheme.verifyIcon.size[size], avatarTheme.verifyIcon.color[color])}
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12.3217 4.70656L13.303 5.2946L12.3217 4.70656C11.9707 5.2923 11.2777 5.57934 10.6153 5.41335L10.2297 5.31672C7.26206 4.57303 4.57303 7.26206 5.31672 10.2297L5.41335 10.6153C5.57934 11.2777 5.2923 11.9707 4.70656 12.3217L5.2946 13.303L4.70656 12.3217L4.36558 12.526C1.74125 14.0986 1.74125 17.9014 4.36558 19.474L4.70656 19.6783C5.2923 20.0293 5.57934 20.7223 5.41335 21.3847L5.31672 21.7703C4.57303 24.7379 7.26205 27.427 10.2297 26.6833L10.6153 26.5867C11.2777 26.4207 11.9707 26.7077 12.3217 27.2934L12.526 27.6344C14.0986 30.2587 17.9014 30.2587 19.474 27.6344L19.6783 27.2934C20.0293 26.7077 20.7223 26.4207 21.3847 26.5867L21.7703 26.6833C24.7379 27.427 27.427 24.7379 26.6833 21.7703L26.5867 21.3847C26.4207 20.7223 26.7077 20.0293 27.2934 19.6783L27.6344 19.474C30.2587 17.9014 30.2587 14.0986 27.6344 12.526L27.2934 12.3217C26.7077 11.9707 26.4207 11.2777 26.5867 10.6153L26.6833 10.2297C27.427 7.26205 24.7379 4.57303 21.7703 5.31672L21.3847 5.41335C20.7223 5.57934 20.0293 5.2923 19.6783 4.70656L19.474 4.36558C17.9014 1.74125 14.0986 1.74125 12.526 4.36558L12.3217 4.70656Z"
                  stroke="white"
                  strokeWidth="2.5"
                />
                <path
                  d="M13.5982 5.0081C14.6854 3.19375 17.3146 3.19375 18.4018 5.0081L18.6061 5.34908C19.2402 6.40719 20.492 6.92571 21.6885 6.62586L22.0741 6.52923C24.1258 6.01507 25.9849 7.87415 25.4708 9.92587L25.3741 10.3115C25.0743 11.508 25.5928 12.7598 26.6509 13.3939L26.9919 13.5982C28.8063 14.6854 28.8063 17.3146 26.9919 18.4018L26.6509 18.6061C25.5928 19.2402 25.0743 20.492 25.3741 21.6885L25.4708 22.0741C25.9849 24.1258 24.1258 25.9849 22.0741 25.4708L21.6885 25.3741C20.492 25.0743 19.2402 25.5928 18.6061 26.6509L18.4018 26.9919C17.3146 28.8063 14.6854 28.8063 13.5982 26.9919L13.3939 26.6509C12.7598 25.5928 11.508 25.0743 10.3115 25.3741L9.92587 25.4708C7.87415 25.9849 6.01507 24.1258 6.52923 22.0741L6.62586 21.6885C6.92571 20.492 6.40719 19.2402 5.34908 18.6061L5.0081 18.4018C3.19375 17.3146 3.19375 14.6854 5.0081 13.5982L5.34908 13.3939C6.40719 12.7598 6.92571 11.508 6.62586 10.3115L6.52923 9.92587C6.01507 7.87415 7.87415 6.01507 9.92587 6.52923L10.3115 6.62586C11.508 6.92571 12.7598 6.40719 13.3939 5.34908L13.5982 5.0081Z"
                  fill="currentColor"
                />
                <path
                  d="M14.5011 21.0769L14.4406 20.9722C13.5163 19.3729 11.0602 15.979 11.0354 15.9449L11 15.896L11.8368 15.0562L14.4855 16.9346C16.1532 14.7367 17.7091 13.2271 18.724 12.3456C19.8342 11.3813 20.5569 10.9373 20.5642 10.9331L20.5806 10.9231H22L21.8644 11.0457C18.3774 14.2 14.5979 20.9041 14.5603 20.9714L14.5011 21.0769Z"
                  fill="white"
                />
              </svg>
            </div>
          )}
        </div>
      )
    }

    return (
      <div
        {...props}
        ref={ref}
        className={cn(
          'relative border border-white bg-white',
          shape === 'circle' && 'p-0.5',
          avatarTheme.shape[shape],
          avatarTheme.size[size],
          active && avatarTheme.activeIcon.base,
          active && avatarTheme.activeIcon.size[shape][size],
          active && avatarTheme.activeIcon.color[color],
          className,
        )}>
        <img src={img} alt={alt} className={cn('object-cover', avatarTheme.shape[shape])} />
        {verified && (
          <Verify color={avatarTheme.verifyIcon.color[color]} position={avatarTheme.verifyIcon.position[shape][size]} />
        )}
      </div>
    )
  },
)

AvatarComponent.displayName = 'Avatar'

const Avatar = Object.assign(AvatarComponent, {
  Group: AvatarGroup,
  Counter: AvatarCounter,
})

export { Avatar }
