'use client'
import Image from 'next/image'
import { Info } from 'phosphor-react'
import { useCallback, useState } from 'react'
import { Upload } from '../../../../src'
import { UploadedFile } from './DefaultUpload'

const SingleUpload = () => {
  const [files, setFiles] = useState<UploadedFile[]>([])
  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles(acceptedFiles)
  }, [])
  return (
    <Upload options={{ onDrop, multiple: false }}>
      <Upload.Body>
        <Upload.Icon>
          <Image src="/images/icon/folder.svg" alt="folder" height={28} width={28} />
        </Upload.Icon>
        <Upload.Text>
          <p className="text-body-3 font-medium text-metal-600">Drag & Drop or Choose File to Upload</p>
          <p className="text-body-4 font-normal text-metal-400">DOCX, XLSX, PPTX, PDF, and JPG formats, up to 50 MB.</p>
        </Upload.Text>
      </Upload.Body>
      <Upload.Footer isFileExists={files.length > 0}>
        <p className="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-600">
          <Info size={16} />
          Uploaded Files
        </p>
        <ul className="space-y-1">{files?.map((file) => <Upload.File key={file?.name}>{file?.name}</Upload.File>)}</ul>
      </Upload.Footer>
    </Upload>
  )
}

const SingleUploadCode = `
'use client'
import Image from 'next/image'
import { Info } from 'phosphor-react'
import { useCallback, useState } from 'react'
import { Upload } from 'keep-react'

export const UploadComponent = () => {
  const [files, setFiles] = useState([])
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles)
  }, [])
  return (
    <Upload options={{ onDrop, multiple: false }}>
      <Upload.Body>
        <Upload.Icon>
          <Image src="/images/icon/folder.svg" alt="folder" height={28} width={28} />
        </Upload.Icon>
        <Upload.Text>
          <p className="text-body-3 font-medium text-metal-600">
            Drag & Drop or Choose File to Upload
          </p>
          <p className="text-body-4 font-normal text-metal-400">
            DOCX, XLSX, PPTX, PDF, and JPG formats, up to 50 MB.
          </p>
        </Upload.Text>
      </Upload.Body>
      <Upload.Footer isFileExists={files.length > 0}>
        <p className="my-2 flex items-center gap-1 text-body-4 font-normal text-metal-600">
          <Info size={16} />
          Uploaded Files
        </p>
        <ul className="space-y-1">
          {files?.map((file) => <Upload.File key={file?.name}>{file?.name}</Upload.File>)}
        </ul>
      </Upload.Footer>
    </Upload>
  )
}
`

export { SingleUpload, SingleUploadCode }
