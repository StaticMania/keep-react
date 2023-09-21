"use client";
import { useState } from "react";
import { Upload } from "~/src";

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
      id="upload_Pending"
    />
  );
};

const UploadPendingCode = `
"use client";
import { useState } from "react";
import { Upload } from "keep-react";

const UploadPending = () => {
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
      showProgressBar
      progressType="pending"
      progress={39}
      uploadTime="1 minutes left"
      id="upload_Pending"
    />
  );
};

export default UploadPending;
`;

export { UploadPending, UploadPendingCode };
