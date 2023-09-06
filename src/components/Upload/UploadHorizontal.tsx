import classNames from "classnames";
import { FileArrowUp } from "phosphor-react";
import { FC } from "react";
import { Button } from "../Button";
import { useUploadContext } from "./UploadContext";
import { UploadFailed } from "./UploadFailed";
import { UploadPending } from "./UploadPending";
import { UploadSuccess } from "./UploadSuccess";
import { useTheme } from "@/src/Keep/ThemeContex";

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
      };
    };
  };
}

export const UploadHorizontal: FC = () => {
  const { disabled, showProgressBar, progressType, file, onFileChange } =
    useUploadContext();

  const theme = useTheme().theme.upload.uploadHorizontal;

  return (
    <div className={classNames(theme.base)}>
      <label
        htmlFor="horizontal_upload"
        className={classNames(theme.label.base, disabled && theme.disabled)}
      >
        <div className={classNames(theme.label.root.base)}>
          <div className={classNames(theme.label.root.iconBox.base)}>
            <div className={classNames(theme.label.root.iconBox.icon)}>
              <FileArrowUp size={40} color="#5E718D" weight="thin" />
            </div>
            <div>
              <p className={classNames(theme.label.root.iconBox.dragDrop)}>
                Drag and Drop files here
              </p>
              {file ? (
                <p className={classNames(theme.label.root.upload.fileName)}>
                  FileName : {file}
                </p>
              ) : (
                <p className={classNames(theme.label.root.iconBox.fileType)}>
                  Files supported: PDF, XSLS, JPEG, PNG, Scanner
                </p>
              )}
            </div>
          </div>

          <div className={classNames(theme.label.root.upload.base)}>
            {file && (
              <p className={classNames(theme.label.root.upload.fileName)}>
                FileName : {file}
              </p>
            )}
            {!file && (
              <p className={classNames(theme.label.root.upload.fileName)}>
                Maximum size: 5MB
              </p>
            )}

            <Button type="primary" disabled={disabled}>
              Choose File
            </Button>

            <input
              id="horizontal_upload"
              type="file"
              className={classNames(theme.label.root.upload.input)}
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
