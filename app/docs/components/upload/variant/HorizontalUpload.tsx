"use client";
import { useState } from "react";
import { Upload } from "~/src";

const HorizontalUpload = () => {
  const [fileName, setFileName] = useState("");
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return (
    <Upload onFileChange={handleFileChange} file={fileName} horizontal={true} />
  );
};

const HorizontalUploadCode = `
"use client";
import { Upload } from "keep-react";
import { useState } from "react";

const HorizontalUpload = () => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };
  return <Upload onFileChange={handleFileChange} file={fileName} horizontal={true} />;
};

export default HorizontalUpload;
`;

export { HorizontalUpload, HorizontalUploadCode };
