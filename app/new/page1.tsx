'use client'
import Image from 'next/image'
import { Button, Typography } from '../src'
import { Upload } from './Upload'

const Page = () => {
  return (
    <section className="bg-white py-20">
      <div className="container space-y-3">
        <Upload>
          <Upload.Body className="flex flex-col items-center space-y-5 text-center">
            <Upload.Icon className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
              <Image src="/images/icon/folder.svg" alt="folder" height={28} width={28} />
            </Upload.Icon>
            <Upload.Text className="space-y-1">
              <Typography variant="p" className="text-body-4 font-medium text-metal-600">
                Drag & Drop or Choose File to Upload
              </Typography>
              <Typography variant="p" className="text-body-6 font-normal text-metal-400">
                DOCX, XLSX, PPTX, PDF, and JPG formats, up to 50 MB.
              </Typography>
            </Upload.Text>
            <Button variant="outline" color="secondary" size="sm">
              Browse
            </Button>
          </Upload.Body>
        </Upload>
      </div>
    </section>
  )
}

export default Page
