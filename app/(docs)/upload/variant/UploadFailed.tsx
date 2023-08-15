"use client";
import { Upload } from "@/src/components/Upload";
import React, { useState } from "react";

const UploadFailed = () => {
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
      showProgressBar={true}
      progressType="error"
      progress={36}
      uploadTime="2 days left"
    />
  );
};

const UploadFailedCode = `
"use client";
import { Upload } from "keep-design";
import React, { useState } from "react";

const UploadFailed = () => {
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
      showProgressBar={true}
      progressType="error"
      progress={36}
      uploadTime="2 days left"
    />
  );
};

export default UploadFailed;
`;

export { UploadFailed, UploadFailedCode };
