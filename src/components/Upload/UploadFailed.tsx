import { twMerge } from "tailwind-merge";
import { ArrowClockwise, X } from "phosphor-react";
import { FC } from "react";
import { Progress } from "../Progress";
import { useUploadContext } from "./UploadContext";
import { useTheme } from "../../Keep/ThemeContex";

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
    <div className={twMerge(theme.base)}>
      <div
        className={twMerge(theme.bgColor)}
        style={{ width: `${progress}%` }}
      ></div>
      <div className={twMerge(theme.root.base)}>
        <div>
          <p className={twMerge(theme.root.status)}>Something error</p>
          <div className={twMerge(theme.root.statusBox.base)}>
            <p className={twMerge(theme.root.statusBox.count)}>{progress}%</p>
            <div className={twMerge(theme.root.statusBox.dot)}></div>
            <p className={twMerge(theme.root.statusBox.time)}>
              {uploadTime ? uploadTime : "10 Second Left"}
            </p>
          </div>
        </div>
        <div className={twMerge(theme.root.confirmBox.base)}>
          <button className={twMerge(theme.root.confirmBox.restart)}>
            <ArrowClockwise size={14} color="#FF3838" />
          </button>
          <button className={twMerge(theme.root.confirmBox.dismiss)}>
            <X size={14} color="#FF3838" />
          </button>
        </div>
      </div>
      <Progress color="error" progress={progress} rounded={false} />
    </div>
  );
};
