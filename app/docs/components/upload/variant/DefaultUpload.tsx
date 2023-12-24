'use client'
import { ChangeEvent, useState } from 'react'
import { Upload } from '../../../../src'

const DefaultUpload = () => {
  const [fileName, setFileName] = useState('')
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    if (file) {
      setFileName(file.name)
    }
  }

  return <Upload id="default_upload" onFileChange={handleFileChange} file={fileName} />
}

const DefaultUploadCode = `
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
  return <Upload id="upload" onFileChange={handleFileChange} file={fileName} />;
}
`

export { DefaultUpload, DefaultUploadCode }
