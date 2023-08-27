"use client";
import { Upload } from "@/src/components/Upload";
import React, { useState } from "react";

const HorizontalDisabledUpload = () => {
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
      disabled={true}
    />
  );
};

const HorizontalDisabledUploadCode = `
"use client";
import { Upload } from "keep-design";
import React, { useState } from "react";

const HorizontalDisabledUpload = () => {
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
      disabled={true}
    />
  );
};

export default HorizontalDisabledUpload;
`;

export { HorizontalDisabledUpload, HorizontalDisabledUploadCode };
