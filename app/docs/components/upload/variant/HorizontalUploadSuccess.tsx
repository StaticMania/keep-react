"use client";
import { useState } from "react";
import { Upload } from "~/src";

const HorizontalUploadSuccess = () => {
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
      progressType="success"
    />
  );
};

const HorizontalUploadSuccessCode = `
"use client";
import { useState } from "react";
import { Upload } from "keep-react";

const HorizontalUploadSuccess = () => {
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
      progressType="success"
    />
  );
};

export default HorizontalUploadSuccess;
`;

export { HorizontalUploadSuccess, HorizontalUploadSuccessCode };
