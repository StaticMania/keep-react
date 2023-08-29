import classNames from "classnames";
import { FileArrowUp } from "phosphor-react";
import { FC } from "react";
import { Button } from "../Button";
import { useUploadContext } from "./UploadContext";
import UploadFailed from "./UploadFailed";
import UploadPending from "./UploadPending";
import UploadSuccess from "./UploadSuccess";
import { useTheme } from "@/src/Keep/ThemeContex";

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

const InputField: FC = () => {
  const { disabled, onFileChange, file, showProgressBar, progressType } =
    useUploadContext();
  const theme = useTheme().theme.upload.input;

  return (
    <div className={classNames(theme.base)}>
      <label
        htmlFor="upload"
        className={classNames(theme.label.base, disabled && theme.disabled)}
      >
        <div className={classNames(theme.label.root)}>
          <div className={classNames(theme.label.icon)}>
            <FileArrowUp size={40} color="#5E718D" weight="thin" />
          </div>
          <p className={classNames(theme.label.dragDrop)}>
            Drag and Drop files here
          </p>
          <p className={classNames(theme.label.fileType)}>
            Files supported: PDF, XSLS, JPEG, PNG, Scanner
          </p>
          <div className={classNames(theme.label.upload.base)}>
            <Button type="primary" disabled={disabled}>
              Choose File
            </Button>
            <input
              id="upload"
              type="file"
              className={classNames(theme.label.upload.input)}
              onChange={onFileChange}
              disabled={disabled}
            />
            {file && (
              <p className={classNames(theme.label.upload.fileName)}>
                FileName : {file}
              </p>
            )}
            {!file && (
              <p className={classNames(theme.label.upload.fileName)}>
                Maximum size: 5MB
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

export default InputField;
