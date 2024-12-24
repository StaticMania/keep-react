'use client'
import { HTMLAttributes, Ref, forwardRef } from 'react'
import { useDropzone } from 'react-dropzone'
import { cn } from '../../utils/cn'
import { useUploadContext } from './UploadContext'

const UploadBody = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref: Ref<HTMLDivElement>) => {
    const { options, horizontal } = useUploadContext()
    const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone(options)
    return (
      <div
        {...props}
        ref={ref}
        {...getRootProps()}
        className={cn(
          'flex cursor-pointer items-center rounded-xl border border-dashed bg-white transition-all duration-300 hover:bg-metal-25 dark:border-metal-800 dark:bg-metal-900 dark:hover:bg-metal-900',
          horizontal ? 'gap-4 px-3' : 'flex-col border-metal-50 p-3 text-center',
          isDragActive && 'border-primary-500 dark:border-primary-400',
          isDragReject && 'border-error-500 dark:border-error-500',
          className,
        )}>
        <input {...getInputProps()} />
        {children}
      </div>
    )
  },
)

UploadBody.displayName = 'UploadBody'

export { UploadBody }
