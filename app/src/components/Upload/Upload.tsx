'use client'
import { HTMLAttributes, ReactNode, forwardRef, useMemo } from 'react'
import { DropzoneOptions } from 'react-dropzone'
import { cn } from '../../helpers/cn'
import { UploadBody } from './Body'
import { UploadFooter } from './Footer'
import { UploadIcon } from './Icon'
import { UploadText } from './Text'
import { UploadContext } from './UploadContext'

export interface UploadProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  className?: string
  options?: DropzoneOptions
  horizontal?: boolean
}

const UploadComponent = forwardRef<HTMLDivElement, UploadProps>(
  ({ children, className, options, horizontal, ...props }, ref) => {
    const ContextValue = useMemo(() => ({ options, horizontal }), [options, horizontal])
    return (
      <div
        ref={ref}
        {...props}
        className={cn('max-w-md rounded-xl border border-dashed border-metal-100 bg-white p-6 ', className)}>
        <UploadContext.Provider value={ContextValue}>{children}</UploadContext.Provider>
      </div>
    )
  },
)

UploadComponent.displayName = 'Upload'

const Upload = Object.assign(UploadComponent, {
  Body: UploadBody,
  Icon: UploadIcon,
  Text: UploadText,
  Footer: UploadFooter,
})

export { Upload }
