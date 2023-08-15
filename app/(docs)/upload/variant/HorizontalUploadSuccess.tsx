"use client";
import { Upload } from "@/src/components/Upload";
import React, { useState } from "react";

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
      file=""
      horizontal={true}
      showProgressBar={true}
      progressType="success"
    />
  );
};

const HorizontalUploadSuccessCode = `
"use client";
import { Upload } from "keep-design";
import React, { useState } from "react";

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
      file=""
      horizontal={true}
      showProgressBar={true}
      progressType="success"
    />
  );
};

export default HorizontalUploadSuccess;
`;

export { HorizontalUploadSuccess, HorizontalUploadSuccessCode };
