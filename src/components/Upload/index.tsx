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
interface UploadComponentProps {
  file?: string
  horizontal?: boolean
  disabled?: boolean
  showProgressBar?: boolean
  progressType?: 'success' | 'error' | 'pending'
  progress?: number
  uploadTime?: string
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  title?: string
  fileType?: string
  id?: string
  uploadBtnType?: keyof ButtonTypes
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
