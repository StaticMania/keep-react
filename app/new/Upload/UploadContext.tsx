'use client'
import { createContext, useContext } from 'react'
import { DropzoneOptions } from 'react-dropzone'

export type UploadPropsContext = {
  options?: DropzoneOptions | undefined
  horizontal?: boolean
}

export const UploadContext = createContext<UploadPropsContext | undefined>(undefined)

export function useUploadContext(): UploadPropsContext {
  const context = useContext(UploadContext)

  if (!context) {
    throw new Error('useUploadContext should be used within the UploadContext provider!')
  }

  return context
}
