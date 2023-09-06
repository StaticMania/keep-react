import classNames from "classnames";
import { ArrowClockwise, X } from "phosphor-react";
import { FC } from "react";
import { Progress } from "../Progress";
import { useUploadContext } from "./UploadContext";
import { useTheme } from "@/src/Keep/ThemeContex";

export interface keepUploadFailedTheme {
  base: string;
  bgColor: string;
  root: {
    base: string;
    status: string;
    statusBox: {
      base: string;
      count: string;
      dot: string;
      time: string;
    };
    confirmBox: {
      base: string;
      restart: string;
      dismiss: string;
    };
  };
}

export const UploadFailed: FC = () => {
  const theme = useTheme().theme.upload.uploadFailed;
  const { progress, uploadTime } = useUploadContext();
  return (
    <div className={classNames(theme.base)}>
      <div
        className={classNames(theme.bgColor)}
        style={{ width: `${progress}%` }}
      ></div>
      <div className={classNames(theme.root.base)}>
        <div>
          <p className={classNames(theme.root.status)}>Something error</p>
          <div className={classNames(theme.root.statusBox.base)}>
            <p className={classNames(theme.root.statusBox.count)}>
              {progress}%
            </p>
            <div className={classNames(theme.root.statusBox.dot)}></div>
            <p className={classNames(theme.root.statusBox.time)}>
              {uploadTime ? uploadTime : "10 Second Left"}
            </p>
          </div>
        </div>
        <div className={classNames(theme.root.confirmBox.base)}>
          <button className={classNames(theme.root.confirmBox.restart)}>
            <ArrowClockwise size={14} color="#FF3838" />
          </button>
          <button className={classNames(theme.root.confirmBox.dismiss)}>
            <X size={14} color="#FF3838" />
          </button>
        </div>
      </div>
      <Progress color="error" progress={progress} rounded={false} />
    </div>
  );
};
