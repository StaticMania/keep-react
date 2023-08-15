"use client";
import { Upload } from "@/src/components/Upload";
import React, { useState } from "react";

const DefaultUpload = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return <Upload onFileChange={handleFileChange} file="" />;
};

const DefaultUploadCode = `
"use client";
import { Upload } from "keep-design";
import React, { useState } from "react";

const DefaultUpload = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return <Upload onFileChange={handleFileChange} file="" />;
};

export default DefaultUpload;
`;

export { DefaultUpload, DefaultUploadCode };
