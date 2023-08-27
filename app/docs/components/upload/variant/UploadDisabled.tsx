"use client";
import { Upload } from "@/src/components/Upload";
import React, { useState } from "react";

const UploadDisabled = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
    <Upload onFileChange={handleFileChange} file={fileName} disabled={true} />
  );
};

const UploadDisabledCode = `
"use client";
import { Upload } from "keep-desing";
import React, { useState } from "react";

const UploadDisabled = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return <Upload onFileChange={handleFileChange} file={fileName} disabled={true} />;
};

export default UploadDisabled;
`;

export { UploadDisabled, UploadDisabledCode };
