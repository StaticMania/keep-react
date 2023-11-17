import { ReactNode, createContext, useContext } from 'react'
import { ButtonTypes } from '../Button/Button'

/**
 * Represents the context for file upload.
 */
export type UploadContext = {
  /**
   * The unique identifier for the upload.
   */
  id?: string
  /**
   * The progress of the upload, represented as a number between 0 and 100.
   */
  progress: number
  /**
   * The time when the upload was initiated.
   */
  uploadTime?: string
  /**
   * The file being uploaded.
   */
  file?: string
  /**
   * Indicates whether the upload is disabled.
   */
  disabled?: boolean
  /**
   * Indicates whether to show the progress bar.
   */
  showProgressBar?: boolean
  /**
   * The type of progress, can be 'success', 'error', or 'pending'.
   */
  progressType?: 'success' | 'error' | 'pending'
  /**
   * The title of the upload.
   */
  title?: string
  /**
   * The type of file being uploaded.
   */
  fileType?: string
  /**
   * The icon to display for the upload.
   */
  icon?: ReactNode
  /**
   * The callback function to handle file change event.
   */
  onFileChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * The type of upload button.
   */
  uploadBtnType?: keyof ButtonTypes
}

export const UploadContext = createContext<UploadContext | undefined>(undefined)

export function useUploadContext(): UploadContext {
  const context = useContext(UploadContext)

  if (!context) {
    throw new Error('useUploadContext should be used within the UploadContext provider!')
  }

  return context
}
