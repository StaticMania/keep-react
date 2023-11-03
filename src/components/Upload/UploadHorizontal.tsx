import { twMerge } from "tailwind-merge";
import { FileArrowUp } from "phosphor-react";
import { FC, useRef } from "react";
import { Button } from "../Button/Button";
import { useUploadContext } from "./UploadContext";
import { UploadFailed } from "./UploadFailed";
import { UploadPending } from "./UploadPending";
import { UploadSuccess } from "./UploadSuccess";
import { useTheme } from "../../Keep/ThemeContex";

export interface UploadHorizontalTheme {
  base: string;
  disabled: string;
  label: {
    base: string;
    root: {
      base: string;
      iconBox: {
        base: string;
        icon: string;
        dragDrop: string;
        fileType: string;
      };
      upload: {
        base: string;
        input: string;
        fileName: string;
        fileSize: string;
      };
    };
  };
}

export const UploadHorizontal: FC = () => {
  const {
    disabled,
    showProgressBar,
    progressType,
    file,
    onFileChange,
    title,
    fileType,
    id,
    uploadBtnType,
  } = useUploadContext();

  const theme = useTheme().theme.upload.uploadHorizontal;
  const extension = file?.split(".").pop();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };
  return (
    <div className={twMerge(theme.base)}>
      <label
        htmlFor={id}
        className={twMerge(theme.label.base, disabled && theme.disabled)}
      >
        <div className={twMerge(theme.label.root.base)}>
          <div className={twMerge(theme.label.root.iconBox.base)}>
            <div className={twMerge(theme.label.root.iconBox.icon)}>
              <FileArrowUp size={40} color="#5E718D" weight="thin" />
            </div>
            <div>
              <p className={twMerge(theme.label.root.iconBox.dragDrop)}>
                {title ? title : "Drag and Drop files here"}
              </p>

              {file ? (
                <p className={twMerge(theme.label.root.upload.fileName)}>
                  FileName :
                  {file
                    ? file.split(".")[0].slice(0, 5) + "." + extension
                    : null}
                </p>
              ) : (
                <p className={twMerge(theme.label.root.iconBox.fileType)}>
                  {fileType ? fileType : "Files : JPEG, PNG, GIF"}
                </p>
              )}
            </div>
          </div>

          <div className={twMerge(theme.label.root.upload.base)}>
            <p className={twMerge(theme.label.root.upload.fileSize)}>
              Maximum: 5MB
            </p>

            <Button
              type={uploadBtnType}
              disabled={disabled}
              customClass="!relative !cursor-pointer !z-40"
              onClick={handleClick}
            >
              Choose File
            </Button>
            <input
              id={id}
              type="file"
              ref={inputRef}
              className={twMerge(theme.label.root.upload.input)}
              onChange={onFileChange}
              disabled={disabled}
            />
          </div>
        </div>
      </label>
      {showProgressBar &&
        !disabled &&
        (progressType === "success" ? (
          <UploadSuccess />
        ) : progressType === "error" ? (
          <UploadFailed />
        ) : progressType === "pending" ? (
          <UploadPending />
        ) : null)}
    </div>
  );
};
