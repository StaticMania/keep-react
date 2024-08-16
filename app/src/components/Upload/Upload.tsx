'use client'
import { HTMLAttributes, ReactNode, forwardRef, useMemo } from 'react'
import { DropzoneOptions } from 'react-dropzone'
import { cn } from '../../utils/cn'
import { UploadContext } from './UploadContext'

export interface UploadProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  className?: string
  options?: DropzoneOptions
  horizontal?: boolean
}

const Upload = forwardRef<HTMLDivElement, UploadProps>(
  ({ children, className, options, horizontal, ...props }, ref) => {
    const ContextValue = useMemo(() => ({ options, horizontal }), [options, horizontal])
    return (
      <div
        ref={ref}
        {...props}
        className={cn(
          'max-w-full rounded-xl border border-dashed border-metal-100 bg-white p-6 dark:border-metal-800 dark:bg-metal-900 ',
          className,
        )}>
        <UploadContext.Provider value={ContextValue}>{children}</UploadContext.Provider>
      </div>
    )
  },
)

Upload.displayName = 'Upload'

export { Upload }
