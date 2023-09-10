"use client";
import { useState } from "react";
import { Upload } from "~/src";

const HorizontalUploadFailed = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
    <Upload
      onFileChange={handleFileChange}
      file={fileName}
      horizontal={true}
      showProgressBar={true}
      progressType="error"
      progress={45}
      uploadTime="21 minutes left"
    />
  );
};

const HorizontalUploadFailedCode = `
"use client";
import { Upload } from "keep-react";
import React, { useState } from "react";

const HorizontalUploadFailed = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
    <Upload
        onFileChange={handleFileChange}
        file={fileName}
        horizontal={true}
        showProgressBar={true}
        progressType="error"
        progress={45}
        uploadTime="21 minutes left"
    />
  );
};

export default HorizontalUploadFailed;
`;

export { HorizontalUploadFailed, HorizontalUploadFailedCode };
