'use client'
import { FileArrowUp } from 'phosphor-react'
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
            {typeof icon !== 'undefined' ? icon : <FileArrowUp size={40} color="#5E718D" weight="thin" />}
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
