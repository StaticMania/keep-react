"use client";
import { useState } from "react";
import { Upload } from "~/src";

const DefaultUpload = () => {
  const [fileName, setFileName] = useState("");
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <Upload
      id="default_upload"
      onFileChange={handleFileChange}
      file={fileName}
    />
  );
};

const DefaultUploadCode = `
"use client";
import { Upload } from "keep-react";
import { useState } from "react";

const DefaultUpload = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return <Upload id="default_upload" onFileChange={handleFileChange} file={fileName} />;
};

export default DefaultUpload;
`;

export { DefaultUpload, DefaultUploadCode };
