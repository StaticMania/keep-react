import { FC, useRef } from 'react'
import { Button } from '../Button/Button'
import { twMerge } from 'tailwind-merge'
import { FileArrowUp } from 'phosphor-react'
import { UploadFailed } from './UploadFailed'
import { UploadPending } from './UploadPending'
import { UploadSuccess } from './UploadSuccess'
import { useUploadContext } from './UploadContext'
import { useTheme } from '../../Keep/ThemeContext'

/**
 * Interface representing the theme for the keepInputField component.
 */
export interface keepInputFieldTheme {
  base: string // The base color for the input field
  disabled: string // The color for the disabled state of the input field
  label: {
    base: string // The base color for the label
    root: string // The color for the root element of the label
    icon: string // The color for the icon in the label
    dragDrop: string // The color for the drag and drop area in the label
    fileType: string // The color for the file type in the label

    upload: {
      base: string // The base color for the upload section
      input: string // The color for the input element in the upload section
      fileName: string // The color for the file name in the upload section
    }
  }
}

export const InputField: FC = () => {
  /**
   * Represents an input field component used for file uploads.
   *
   * @remarks
   * This component is used to handle file uploads and provides various properties and methods for customization.
   *
   * @example
   * ```tsx
   * const { disabled, onFileChange, file, showProgressBar, progressType, fileType, title, icon, id, uploadBtnType } =
   *   useUploadContext()
   * ```
   *
   * @beta
   */
  const { disabled, onFileChange, file, showProgressBar, progressType, fileType, title, icon, id, uploadBtnType } =
    useUploadContext()

  const theme = useTheme().theme.upload.input
  const extension = file?.split('.').pop()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    inputRef.current?.click()
  }
  return (
    <div className={twMerge(theme.base)}>
      <label htmlFor={id} className={twMerge(theme.label.base, disabled && theme.disabled)}>
        <div className={twMerge(theme.label.root)}>
          <div className={twMerge(theme.label.icon)}>
            <FileArrowUp size={40} color="#5E718D" weight="thin" />
            {typeof icon !== undefined ? icon : <FileArrowUp size={40} color="#5E718D" weight="thin" />}
          </div>
          <p className={twMerge(theme.label.dragDrop)}>{title ? title : 'Drag and Drop files here'}</p>
          <p className={twMerge(theme.label.fileType)}>{fileType ? fileType : 'Files: JPEG, PNG, GIF'}</p>
          <div className={twMerge(theme.label.upload.base)}>
            <Button
              type={uploadBtnType}
              disabled={disabled}
              customClass="!relative !cursor-pointer !z-40"
              onClick={handleClick}>
              Choose File
            </Button>
            <input
              id={id}
              type="file"
              ref={inputRef}
              className={twMerge(theme.label.upload.input)}
              onChange={onFileChange}
              disabled={disabled}
            />

            {file && (
              <p className={twMerge(theme.label.upload.fileName)}>
                FileName : {file ? file.slice(0, 6) + '...' + extension : null}
              </p>
            )}
            {!file && <p className={twMerge(theme.label.upload.fileName)}>Maximum: 5MB</p>}
          </div>
        </div>
      </label>

      {showProgressBar &&
        !disabled &&
        (progressType === 'success' ? (
          <UploadSuccess />
        ) : progressType === 'error' ? (
          <UploadFailed />
        ) : progressType === 'pending' ? (
          <UploadPending />
        ) : null)}
    </div>
  )
}
