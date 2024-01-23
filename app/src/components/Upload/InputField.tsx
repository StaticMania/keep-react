'use client'
import { FC, useRef } from 'react'
import { cn } from '../../helpers/cn'
import { Button } from '../Button/Button'
import { useUploadContext } from './UploadContext'
import { UploadFailed } from './UploadFailed'
import { UploadPending } from './UploadPending'
import { UploadSuccess } from './UploadSuccess'
import { uploadTheme } from './theme'

export const InputField: FC = () => {
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
    uploadBtnColor = 'primary',
    className,
    labelStyle,
  } = useUploadContext()

  const theme = uploadTheme.input
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
            {typeof icon !== 'undefined' ? (
              icon
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#5E718D" viewBox="0 0 256 256">
                <path d="M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM200,220H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216A4,4,0,0,1,200,220Zm-45.17-78.83a4,4,0,0,1-5.66,5.66L132,129.66V184a4,4,0,0,1-8,0V129.66l-17.17,17.17a4,4,0,0,1-5.66-5.66l24-24a4,4,0,0,1,5.66,0Z"></path>
              </svg>
            )}
          </div>
          <p className={cn(theme.label.dragDrop)}>{title ? title : 'Drag and Drop files here'}</p>
          <p className={cn(theme.label.fileType)}>{fileType ? fileType : 'Files: JPEG, PNG, GIF'}</p>
          <div className={cn(theme.label.upload.base)}>
            <Button
              color={uploadBtnColor}
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
