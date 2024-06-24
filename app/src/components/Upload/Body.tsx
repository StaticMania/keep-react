'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { useDropzone } from 'react-dropzone'
import { cn } from '../../helpers/cn'
import { useUploadContext } from './UploadContext'

const UploadBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    const { options, horizontal } = useUploadContext()
    const { getRootProps, getInputProps } = useDropzone(options)
    return (
      <div
        {...props}
        ref={ref}
        {...getRootProps()}
        className={cn(
          horizontal
            ? 'flex cursor-pointer items-center gap-4 rounded-xl border border-dashed bg-white px-3 transition-all duration-300 hover:bg-metal-25 dark:border-metal-800 dark:bg-metal-900'
            : 'flex cursor-pointer flex-col items-center rounded-xl border border-dashed border-metal-50 bg-white p-3 text-center transition-all duration-300 hover:bg-metal-25 dark:border-metal-800 dark:bg-metal-900',
          className,
        )}>
        <input {...getInputProps()} />
        {children}
      </div>
    )
  },
)

UploadBody.displayName = 'Upload.Body'

export { UploadBody }
