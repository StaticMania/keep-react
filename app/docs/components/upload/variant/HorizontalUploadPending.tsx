"use client";
import { useState } from "react";
import { Upload } from "~/src";

const HorizontalUploadPending = () => {
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
      progressType="pending"
      progress={39}
      uploadTime="1 minutes left"
    />
  );
};

const HorizontalUploadPendingCode = `
"use client";
import { useState } from "react";
import { Upload } from "keep-react";

const HorizontalUploadPending = () => {
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
      horizontal={true}
      showProgressBar={true}
      progressType="pending"
      progress={39}
      uploadTime="1 minutes left"
    />
  );
};

export default HorizontalUploadPending;
`;

export { HorizontalUploadPending, HorizontalUploadPendingCode };
