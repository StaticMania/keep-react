'use client'
import { ChangeEvent, useState } from 'react'
import { Upload } from '../../../../src'

const HorizontalUploadFailed = () => {
  const [fileName, setFileName] = useState('')

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    if (file) {
      setFileName(file.name)
    }
  }
  return (
    <Upload
      onFileChange={handleFileChange}
      file={fileName}
      horizontal={true}
      showProgressBar={true}
      progressType="error"
      progress={45}
      uploadTime="21 minutes left"
      id="horizontal_upload_failed"
    />
  )
}

const HorizontalUploadFailedCode = `
"use client";
import { useState } from "react";
import { Upload } from "keep-react";

export const UploadComponent = () => {
  const [fileName, setFileName] = useState("");
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
    <Upload
        onFileChange={handleFileChange}
        id="upload"
        file={fileName}
        horizontal={true}
        showProgressBar={true}
        progressType="error"
        progress={45}
        uploadTime="21 minutes left"
    />
  );
}
`

export { HorizontalUploadFailed, HorizontalUploadFailedCode }
