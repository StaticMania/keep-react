'use client'
import Image from 'next/image'
import { Info } from 'phosphor-react'
import { useCallback, useState } from 'react'
import { Typography } from '../src'
import { Upload } from './Upload'

interface UploadFile {
  path: string
  lastModified: number
  lastModifiedDate: string
  name: string
  size: number
  type: string
  [key: string]: any
}

export default function MyDropzone() {
  const [files, setFiles] = useState<UploadFile[]>([])
  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles(acceptedFiles)
  }, [])

  return (
    <section>
      <div className="container space-y-5 py-20">
        <Upload options={{ onDrop, maxFiles: 4 }}>
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
        <Upload horizontal options={{ onDrop, maxFiles: 4 }}>
          <Upload.Body>
            <Upload.Icon>
              <Image src="/images/icon/folder.svg" alt="folder" height={28} width={28} />
            </Upload.Icon>
            <Upload.Text>
              <Typography variant="p" className="text-body-4 font-medium text-metal-600">
                Choose File to Upload
              </Typography>
              <Typography variant="p" className="text-body-6 font-normal text-metal-400">
                PDF and JPG formats
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
      </div>
    </section>
  )
}
