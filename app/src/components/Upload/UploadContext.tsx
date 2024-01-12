import { ChangeEvent, ReactNode, createContext, useContext } from 'react'

/**
 * Represents the context for file upload.
 * @interface UploadContext
 */
export type UploadPropsContext = {
  /**
   * The unique identifier for the upload.
   * @type {string}
   * @default ''
   */
  id?: string

  /**
   * The progress of the upload, represented as a number between 0 and 100.
   * @type {number}
   * @default 0
   */
  progress: number

  /**
   * The time when the upload was initiated.
   * @type {string}
   * @default ''
   */
  uploadTime?: string

  /**
   * The file being uploaded.
   * @type {string}
   * @default ''
   */
  file?: string

  /**
   * Indicates whether the upload is disabled.
   * @type {boolean}
   * @default false
   */
  disabled?: boolean

  /**
   * Indicates whether to show the progress bar.
   * @type {boolean}
   * @default false
   */
  showProgressBar?: boolean

  /**
   * The type of progress, can be 'success', 'error', or 'pending'.
   * @type {'success' | 'error' | 'pending'}
   * @default 'success'
   */
  progressType?: 'success' | 'error' | 'pending'

  /**
   * The title of the upload.
   * @type {string}
   * @default ''
   */
  title?: string

  /**
   * The type of file being uploaded.
   * @type {string}
   * @default ''
   */
  fileType?: string

  /**
   * The icon to display for the upload.
   * @type {ReactNode}
   * @default ''
   */
  icon?: ReactNode

  /**
   * The callback function to handle file change event.
   * @type {React.ChangeEvent<HTMLInputElement>}
   * @default () => {}
   */
  // eslint-disable-next-line no-unused-vars
  onFileChange?: (e: ChangeEvent<HTMLInputElement>) => void

  /**
   * The type of upload button.
   * @type {keyof ButtonTypes}
   * @default 'primary'
   */
  uploadBtnColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'error'

  /**
   * The additional class name for the upload.
   * @type {string}
   * @default ''
   */
  className?: string

  /**
   * The label style for the upload.
   * @type {string}
   * @default ''
   */
  labelStyle?: string
}

export const UploadContext = createContext<UploadPropsContext | undefined>(undefined)

export function useUploadContext(): UploadPropsContext {
  const context = useContext(UploadContext)

  if (!context) {
    throw new Error('useUploadContext should be used within the UploadContext provider!')
  }

  return context
}
