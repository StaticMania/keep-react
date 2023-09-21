"use client";
import { useState } from "react";
import { Upload } from "~/src";

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
      id="horizontal_disabled_upload"
    />
  );
};

const HorizontalDisabledUploadCode = `
"use client";
import { Upload } from "keep-react";
import React, { useState } from "react";

const HorizontalDisabledUpload = () => {
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
      disabled={true}
      id="horizontal_disabled_upload"
    />
  );
};

export default HorizontalDisabledUpload;
`;

export { HorizontalDisabledUpload, HorizontalDisabledUploadCode };
