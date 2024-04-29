'use client'
import Image from 'next/image'
import { Info, Trash } from 'phosphor-react'
import { useCallback, useState } from 'react'
import { Upload, UploadBody, UploadFooter, UploadIcon, UploadText } from '../../../../src'
import { UploadedFile } from './DefaultUpload'

const DisabledUpload = () => {
  const [files, setFiles] = useState<UploadedFile[]>([])
  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles(acceptedFiles)
  }, [])
  return (
    <Upload options={{ onDrop, disabled: true }}>
      <UploadBody>
        <UploadIcon>
          <Image src="/images/icon/folder.svg" alt="folder" height={28} width={28} />
        </UploadIcon>
        <UploadText>
          <p className="text-body-3 font-medium text-metal-600">Drag & Drop or Choose File to Upload</p>
          <p className="text-body-4 font-normal text-metal-400">DOCX, XLSX, PPTX, PDF, and JPG formats, up to 50 MB.</p>
        </UploadText>
      </UploadBody>
      <UploadFooter isFileExists={files.length > 0}>
        <p className="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-600">
          <Info size={16} />
          Uploaded Files
        </p>
        <ul className="space-y-1">
          {files?.map((file) => (
            <li
              key={file?.name}
              className="flex items-center justify-between border-l-4 border-l-metal-100 bg-metal-25 px-4 py-2.5 text-left text-body-4 font-normal capitalize text-metal-600">
              {file?.name}
              <Trash size={16} color="red" />
            </li>
          ))}
        </ul>
      </UploadFooter>
    </Upload>
  )
}

const DisabledUploadCode = `
'use client'
import { Info,Trash } from 'phosphor-react'
import { useCallback, useState } from 'react'
import { Upload, UploadBody, UploadFooter, UploadIcon, UploadText } from 'keep-react'

export const UploadComponent = () => {
  const [files, setFiles] = useState([])
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles)
  }, [])
  return (
    <Upload options={{ onDrop, disabled: true }}>
      <UploadBody>
        <UploadIcon>
          <img src="/images/icon/folder.svg" alt="folder" />
        </UploadIcon>
        <UploadText>
          <p className="text-body-3 font-medium text-metal-600">Drag & Drop or Choose File to Upload</p>
          <p className="text-body-4 font-normal text-metal-400">DOCX, XLSX, PPTX, PDF, and JPG formats, up to 50 MB.</p>
        </UploadText>
      </UploadBody>
      <UploadFooter isFileExists={files.length > 0}>
        <p className="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-600">
          <Info size={16} />
          Uploaded Files
        </p>
        <ul className="space-y-1">
          {files?.map((file) => (
            <li
              key={file?.name}
              className="flex items-center justify-between border-l-4 border-l-metal-100 bg-metal-25 px-4 py-2.5 text-left text-body-4 font-normal capitalize text-metal-600">
              {file?.name}
              <Trash size={16} color="red" />
            </li>
          ))}
        </ul>
      </UploadFooter>
    </Upload>
  )
}
`

export { DisabledUpload, DisabledUploadCode }
