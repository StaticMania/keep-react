"use client";
import { Upload } from "@/src/components/Upload";
import React, { useState } from "react";

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
      file=""
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
import { Upload } from "keep-design";
import React, { useState } from "react";

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
        file=""
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
