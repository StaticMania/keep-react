'use client'
import { cloneElement, forwardRef, ImgHTMLAttributes, isValidElement } from 'react'
import { cn } from '../../helpers/cn'

export interface AvatarImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  asChild?: boolean
}

const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, children, asChild, src, alt, ...props }, ref) => {
    if (asChild && isValidElement(children)) {
      return cloneElement(children, {
        itemRef: ref,
        ...props,
      })
    }

    if (!src) {
      return (
        <span className="text-metal-700 dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-7" fill="currentColor" viewBox="0 0 256 256">
            <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
          </svg>
        </span>
      )
    }

    return (
      <img
        ref={ref}
        {...props}
        src={src}
        alt={alt}
        className={cn('aspect-square size-12 rounded-full object-cover', className)}
      />
    )
  },
)

AvatarImage.displayName = 'AvatarImage'

export { AvatarImage }
