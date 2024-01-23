'use client'
import { FC, useRef } from 'react'
import { cn } from '../../helpers/cn'
import { Button } from '../Button/Button'
import { useUploadContext } from './UploadContext'
import { UploadFailed } from './UploadFailed'
import { UploadPending } from './UploadPending'
import { UploadSuccess } from './UploadSuccess'
import { uploadTheme } from './theme'

export const UploadHorizontal: FC = () => {
  const { disabled, showProgressBar, progressType, file, onFileChange, title, fileType, id, uploadBtnColor } =
    useUploadContext()

  const theme = uploadTheme.uploadHorizontal
  const extension = file?.split('.').pop()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    inputRef.current?.click()
  }
  return (
    <div className={cn(theme.base)}>
      <label htmlFor={id} className={cn(theme.label.base, disabled && theme.disabled)}>
        <div className={cn(theme.label.root.base)}>
          <div className={cn(theme.label.root.iconBox.base)}>
            <div className={cn(theme.label.root.iconBox.icon)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#5E718D" viewBox="0 0 256 256">
                <path d="M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM200,220H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216A4,4,0,0,1,200,220Zm-45.17-78.83a4,4,0,0,1-5.66,5.66L132,129.66V184a4,4,0,0,1-8,0V129.66l-17.17,17.17a4,4,0,0,1-5.66-5.66l24-24a4,4,0,0,1,5.66,0Z"></path>
              </svg>
            </div>
            <div>
              <p className={cn(theme.label.root.iconBox.dragDrop)}>{title ? title : 'Drag and Drop files here'}</p>

              {file ? (
                <p className={cn(theme.label.root.upload.fileName)}>
                  FileName :{file ? file.split('.')[0].slice(0, 5) + '.' + extension : null}
                </p>
              ) : (
                <p className={cn(theme.label.root.iconBox.fileType)}>
                  {fileType ? fileType : 'Files : JPEG, PNG, GIF'}
                </p>
              )}
            </div>
          </div>

          <div className={cn(theme.label.root.upload.base)}>
            <p className={cn(theme.label.root.upload.fileSize)}>Maximum: 5MB</p>

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
              className={cn(theme.label.root.upload.input)}
              onChange={onFileChange}
              disabled={disabled}
            />
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
