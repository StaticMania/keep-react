import type { FC } from 'react'
import type { keepInputFieldTheme } from './InputField'
import type { keepUploadFailedTheme } from './UploadFailed'
import type { UploadHorizontalTheme } from './UploadHorizontal'
import type { UploadPendingTheme } from './UploadPending'
import type { UploadSuccessTheme } from './UploadSuccess'

import { InputField } from './InputField'
import { UploadFailed } from './UploadFailed'
import { UploadHorizontal } from './UploadHorizontal'
import { UploadPending } from './UploadPending'
import { UploadSuccess } from './UploadSuccess'
import { UploadContext } from './UploadContext'
import { ButtonTypes } from '../Button/Button'

export interface keepUploadTheme {
  input: keepInputFieldTheme
  uploadFailed: keepUploadFailedTheme
  uploadHorizontal: UploadHorizontalTheme
  uploadPending: UploadPendingTheme
  uploadSuccess: UploadSuccessTheme
}

/**
 * Props for the UploadComponent.
 * @interface UploadComponentProps
 */
interface UploadComponentProps {
  /**
   * The selected file.
   */
  file?: string

  /**
   * Determines if the component should be displayed horizontally.
   */
  horizontal?: boolean

  /**
   * Determines if the component is disabled.
   */
  disabled?: boolean

  /**
   * Determines if the progress bar should be shown.
   */
  showProgressBar?: boolean

  /**
   * The type of progress (success, error, pending).
   */
  progressType?: 'success' | 'error' | 'pending'

  /**
   * The progress value (0-100).
   */
  progress?: number

  /**
   * The time of upload.
   */
  uploadTime?: string

  /**
   * Event handler for file change.
   */
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void

  /**
   * The title of the component.
   */
  title?: string

  /**
   * The type of file.
   */
  fileType?: string

  /**
   * The ID of the component.
   */
  id?: string

  /**
   * The type of upload button.
   */
  uploadBtnType?: keyof ButtonTypes

  /**
   * Additional CSS class name for styling purposes.
   */
  className?: string

  /**
   * Additional CSS style for the label.
   */
  labelStyle?: string
}

const UploadComponent: FC<UploadComponentProps> = ({
  file,
  horizontal = false,
  disabled = false,
  showProgressBar = false,
  progress = 0,
  uploadTime = '',
  progressType,
  onFileChange,
  title,
  fileType,
  id,
  uploadBtnType = 'primary',
  className,
  labelStyle,
}) => {
  let content = null

  if (horizontal) {
    content = <UploadHorizontal />
  } else {
    content = <InputField />
  }

  return (
    <UploadContext.Provider
      value={{
        progress,
        uploadTime,
        disabled,
        onFileChange,
        file,
        showProgressBar,
        progressType,
        title,
        fileType,
        id,
        uploadBtnType,
        className,
        labelStyle,
      }}>
      {content}
    </UploadContext.Provider>
  )
}

UploadComponent.displayName = 'Upload'
UploadHorizontal.displayName = 'Upload.Horizontal'
UploadFailed.displayName = 'Upload.Failed'
UploadSuccess.displayName = 'Upload.Success'
UploadPending.displayName = 'Upload.Pending'

export const Upload = Object.assign(UploadComponent, {
  Horizontal: UploadHorizontal,
  Failed: UploadFailed,
  Success: UploadSuccess,
  Pending: UploadPending,
})
