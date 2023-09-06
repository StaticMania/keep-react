import { useTheme } from "@/src/Keep/ThemeContex";
import classNames from "classnames";
import { Check, FilePdf, Trash } from "phosphor-react";
import { FC } from "react";
export interface UploadSuccessTheme {
  base: string;
  bgColor: string;
  root: {
    base: string;
    left: {
      base: string;
      fileName: string;
      fileSize: string;
    };
    confirmBox: {
      base: string;
      checked: string;
      divider: string;
      trash: string;
    };
  };
}

export const UploadSuccess: FC = () => {
  const theme = useTheme().theme.upload.uploadSuccess;
  return (
    <div className={classNames(theme.base)}>
      <div className={classNames(theme.bgColor)}></div>
      <div className={classNames(theme.root.base)}>
        <div>
          <div className={classNames(theme.root.left.base)}>
            <span>
              <FilePdf size={24} color="#0A9952" />
            </span>
            <p className={classNames(theme.root.left.fileName)}>
              File Name.pdf
            </p>
          </div>
          <p className={classNames(theme.root.left.fileSize)}>Size: 515 Kb</p>
        </div>
        <div className={classNames(theme.root.confirmBox.base)}>
          <button className={classNames(theme.root.confirmBox.checked)}>
            <Check size={20} color="#0A9952" />
          </button>
          <div className={classNames(theme.root.confirmBox.divider)}></div>
          <button className={classNames(theme.root.confirmBox.trash)}>
            <Trash size={20} color="#FF3838" />
          </button>
        </div>
      </div>
    </div>
  );
};
