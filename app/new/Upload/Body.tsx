'use client'
import { FC, ReactNode } from 'react'
import { useDropzone } from 'react-dropzone'
import { cn } from '~/app/src/helpers/cn'
import { useUploadContext } from './UploadContext'

export interface BodyProps {
  children?: ReactNode
  className?: string
}

export const Body: FC<BodyProps> = ({ children, className }) => {
  const { options, horizontal } = useUploadContext()
  const { getRootProps, getInputProps } = useDropzone(options)
  return (
    <div
      {...getRootProps()}
      className={cn(
        className,
        horizontal
          ? 'flex cursor-pointer items-center gap-4 rounded-xl border border-dashed bg-white px-3 transition-all duration-300 hover:bg-metal-25'
          : 'flex cursor-pointer flex-col items-center rounded-xl border border-dashed border-metal-50 bg-white p-3 text-center transition-all duration-300 hover:bg-metal-25',
      )}>
      <input {...getInputProps()} />
      {children}
    </div>
  )
}
