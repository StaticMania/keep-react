'use client'
import { ChangeEvent, useState } from 'react'
import { Upload } from '../../../../src'

const UploadSuccess = () => {
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
      showProgressBar={true}
      progressType="success"
      id="upload_success"
    />
  )
}

const UploadSuccessCode = `
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
      file={fileName}
      showProgressBar={true}
      progressType="success"      
      id="upload"
    />
  );
}
`

export { UploadSuccess, UploadSuccessCode }
