"use client";
import { useState } from "react";
import { Upload } from "@/src/components";

const UploadSuccess = () => {
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
      showProgressBar={true}
      progressType="success"
    />
  );
};

const UploadSuccessCode = `
"use client";
import { useState } from "react";
import { Upload } from "keep-react";

const UploadSuccess = () => {
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
      showProgressBar={true}
      progressType="success"
    />
  );
};

export default UploadSuccess;
`;

export { UploadSuccess, UploadSuccessCode };
