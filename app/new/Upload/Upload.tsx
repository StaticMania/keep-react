'use client'
import { FC, ReactNode } from 'react'
import { DropzoneOptions } from 'react-dropzone'
import { cn } from '~/app/src/helpers/cn'
import { Body } from './Body'
import { File } from './File'
import { Footer } from './Footer'
import { Icon } from './Icon'
import { Text } from './Text'
import { UploadContext } from './UploadContext'

export interface UploadProps {
  children?: ReactNode
  className?: string
  options?: DropzoneOptions | undefined
  horizontal?: boolean
}

const UploadComponent: FC<UploadProps> = ({ children, className, options, horizontal }) => {
  return (
    <div className={cn('max-w-md rounded-xl border border-dashed border-metal-100 bg-white p-6 ', className)}>
      <UploadContext.Provider value={{ options, horizontal }}>{children}</UploadContext.Provider>
    </div>
  )
}

Body.displayName = 'Upload.Body'
Icon.displayName = 'Upload.Icon'
Text.displayName = 'Upload.Text'
Footer.displayName = 'Upload.Footer'
File.displayName = 'Upload.File'

export const Upload = Object.assign(UploadComponent, {
  Body,
  Icon,
  Text,
  Footer,
  File,
})
