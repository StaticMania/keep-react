'use client'
import Image from 'next/image'
import { Info } from 'phosphor-react'
import { useCallback, useState } from 'react'
import { Typography, Upload } from '../../../../src'

export interface UploadedFile {
  path?: string
  name?: string
  lastModified?: number
  lastModifiedDate?: string
  type?: string
  size?: number
}

const DefaultUpload = () => {
  const [files, setFiles] = useState<UploadedFile[]>([])
  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles(acceptedFiles)
  }, [])
  return (
    <Upload options={{ onDrop }}>
      <Upload.Body>
        <Upload.Icon>
          <Image src="/images/icon/folder.svg" alt="folder" height={28} width={28} />
        </Upload.Icon>
        <Upload.Text>
          <Typography variant="p" className="text-body-4 font-medium text-metal-600">
            Drag & Drop or Choose File to Upload
          </Typography>
          <Typography variant="p" className="text-body-6 font-normal text-metal-400">
            DOCX, XLSX, PPTX, PDF, and JPG formats, up to 50 MB.
          </Typography>
        </Upload.Text>
      </Upload.Body>
      <Upload.Footer isFileExists={files.length > 0}>
        <Typography variant="p" className="my-2 flex items-center gap-1 text-body-5 font-normal text-metal-600">
          <Info size={16} />
          Uploaded Files
        </Typography>
        <Typography variant="ul" className="space-y-1">
          {files?.map((file) => <Upload.File key={file?.name}>{file?.name}</Upload.File>)}
        </Typography>
      </Upload.Footer>
    </Upload>
  )
}

const DefaultUploadCode = `
'use client'
import Image from 'next/image'
import { Info } from 'phosphor-react'
import { useCallback, useState } from 'react'
import { Typography, Upload } from 'keep-react'

export const UploadComponent = () => {
  const [files, setFiles] = useState([])
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles)
  }, [])
  return (
    <Upload options={{ onDrop }}>
      <Upload.Body>
        <Upload.Icon>
          <Image src="/images/icon/folder.svg" alt="folder" height={28} width={28} />
        </Upload.Icon>
        <Upload.Text>
          <Typography variant="p" className="text-body-4 font-medium text-metal-600">
            Drag & Drop or Choose File to Upload
          </Typography>
          <Typography variant="p" className="text-body-6 font-normal text-metal-400">
            DOCX, XLSX, PPTX, PDF, and JPG formats, up to 50 MB.
          </Typography>
        </Upload.Text>
      </Upload.Body>
      <Upload.Footer isFileExists={files.length > 0}>
        <Typography variant="p" className="my-2 flex items-center gap-1 text-body-5 font-normal text-metal-600">
          <Info size={16} />
          Uploaded Files
        </Typography>
        <Typography variant="ul" className="space-y-1">
          {files?.map((file) => <Upload.File key={file?.name}>{file?.name}</Upload.File>)}
        </Typography>
      </Upload.Footer>
    </Upload>
  )
}
`

export { DefaultUpload, DefaultUploadCode }
