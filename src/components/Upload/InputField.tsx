import { FC, useRef } from 'react'
import { Button } from '../Button/Button'
import { FileArrowUp } from 'phosphor-react'
import { UploadFailed } from './UploadFailed'
import { UploadPending } from './UploadPending'
import { UploadSuccess } from './UploadSuccess'
import { useUploadContext } from './UploadContext'
import { useTheme } from '../../Keep/ThemeContext'
import { cn } from '../../helpers/cn'

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
  const {
    disabled,
    onFileChange,
    file,
    showProgressBar,
    progressType,
    fileType,
    title,
    icon,
    id,
    uploadBtnType,
    className,
    labelStyle,
  } = useUploadContext()

  const theme = useTheme().theme.upload.input
  const extension = file?.split('.').pop()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    inputRef.current?.click()
  }
  return (
    <div className={cn(theme.base, className)}>
      <label htmlFor={id} className={cn(theme.label.base, disabled && theme.disabled, labelStyle)}>
        <div className={cn(theme.label.root)}>
          <div className={cn(theme.label.icon)}>
            <FileArrowUp size={40} color="#5E718D" weight="thin" />
            {typeof icon !== undefined ? icon : <FileArrowUp size={40} color="#5E718D" weight="thin" />}
          </div>
          <p className={cn(theme.label.dragDrop)}>{title ? title : 'Drag and Drop files here'}</p>
          <p className={cn(theme.label.fileType)}>{fileType ? fileType : 'Files: JPEG, PNG, GIF'}</p>
          <div className={cn(theme.label.upload.base)}>
            <Button
              type={uploadBtnType}
              disabled={disabled}
              className="!relative !z-40 !cursor-pointer"
              onClick={handleClick}>
              Choose File
            </Button>
            <input
              id={id}
              type="file"
              ref={inputRef}
              className={cn(theme.label.upload.input)}
              onChange={onFileChange}
              disabled={disabled}
            />

            {file && (
              <p className={cn(theme.label.upload.fileName)}>
                FileName : {file ? file.slice(0, 6) + '...' + extension : null}
              </p>
            )}
            {!file && <p className={cn(theme.label.upload.fileName)}>Maximum: 5MB</p>}
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
