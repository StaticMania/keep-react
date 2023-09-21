import { FC } from "react";
import { Button } from "../Button/Button";
import { twMerge } from "tailwind-merge";
import { FileArrowUp } from "phosphor-react";
import { UploadFailed } from "./UploadFailed";
import { UploadPending } from "./UploadPending";
import { UploadSuccess } from "./UploadSuccess";
import { useUploadContext } from "./UploadContext";
import { useTheme } from "../../Keep/ThemeContex";

export interface keepInputFieldTheme {
  base: string;
  disabled: string;
  label: {
    base: string;
    root: string;
    icon: string;
    dragDrop: string;
    fileType: string;

    upload: {
      base: string;
      input: string;
      fileName: string;
    };
  };
}

export const InputField: FC = () => {
  const {
    disabled,
    onFileChange,
    file,
    showProgressBar,
    progressType,
    fileType,
    title,
    icon,
    id,
  } = useUploadContext();

  const theme = useTheme().theme.upload.input;
  const extension = file?.split(".").pop();
  return (
    <div className={twMerge(theme.base)}>
      <label
        htmlFor={id}
        className={twMerge(theme.label.base, disabled && theme.disabled)}
      >
        <div className={twMerge(theme.label.root)}>
          <div className={twMerge(theme.label.icon)}>
            <FileArrowUp size={40} color="#5E718D" weight="thin" />
            {typeof icon !== undefined ? (
              icon
            ) : (
              <FileArrowUp size={40} color="#5E718D" weight="thin" />
            )}
          </div>
          <p className={twMerge(theme.label.dragDrop)}>
            {title ? title : "Drag and Drop files here"}
          </p>
          <p className={twMerge(theme.label.fileType)}>
            {fileType ? fileType : "Files: JPEG, PNG, GIF"}
          </p>
          <div className={twMerge(theme.label.upload.base)}>
            <Button type="primary" disabled={disabled}>
              Choose File
            </Button>
            <input
              id={id}
              type="file"
              className={twMerge(theme.label.upload.input)}
              onChange={onFileChange}
              disabled={disabled}
            />
            {file && (
              <p className={twMerge(theme.label.upload.fileName)}>
                FileName : {file ? file.slice(0, 6) + "..." + extension : null}
              </p>
            )}
            {!file && (
              <p className={twMerge(theme.label.upload.fileName)}>
                Maximum: 5MB
              </p>
            )}
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
