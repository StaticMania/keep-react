"use client";
import { Upload } from "@/src/components/Upload";
import React, { useState } from "react";

const UploadPending = () => {
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
      showProgressBar
      progressType="pending"
      progress={39}
      uploadTime="1 minutes left"
    />
  );
};

const UploadPendingCode = `
"use client";
import { Upload } from "keep-design";
import React, { useState } from "react";

const UploadPending = () => {
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
      showProgressBar
      progressType="pending"
      progress={39}
      uploadTime="1 minutes left"
    />
  );
};

export default UploadPending;
`;

export { UploadPending, UploadPendingCode };
