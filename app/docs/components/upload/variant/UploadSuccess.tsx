"use client";
import { Upload } from "@/src/components/Upload";
import { useState } from "react";

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
      file=""
      showProgressBar={true}
      progressType="success"
    />
  );
};

const UploadSuccessCode = `
"use client";
import { Upload } from "keep-design";
import { useState } from "react";

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
      file=""
      showProgressBar={true}
      progressType="success"
    />
  );
};

export default UploadSuccess;
`;

export { UploadSuccess, UploadSuccessCode };
