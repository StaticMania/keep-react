"use client";
import { useState } from "react";
import { Upload } from "~/src";

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
      file={fileName}
      showProgressBar={true}
      progressType="error"
      progress={36}
      uploadTime="2 days left"
      id="upload_failed"
    />
  );
};

const UploadFailedCode = `
"use client";
import { Upload } from "keep-react";
import { useState } from "react";

const UploadFailed = () => {
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
      progressType="error"
      progress={36}
      uploadTime="2 days left"
      id="upload_failed"
    />
  );
};

export default UploadFailed;
`;

export { UploadFailed, UploadFailedCode };
