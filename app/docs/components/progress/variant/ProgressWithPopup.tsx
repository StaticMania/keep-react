"use client";
import { Progress } from "~/src";

const ProgressWithPopup = () => {
  return (
    <div className="w-5/6 py-16">
      <Progress
        progress={75}
        color="info"
        rounded={true}
        showPopupLabelProgress={true}
      />
    </div>
  );
};

const ProgressWithPopupCode = `
"use client";
import { Progress } from "keep-react";

const ProgressWithPopup = () => {
  return (
    <div className="flex flex-col gap-20">
      <Progress
        progress={45}
        color="info"
        rounded={true}
        showPopupLabelProgress={true}
      />
      <Progress
        progress={75}
        color="info"
        rounded={true}
        showPopupLabelProgress={true}
      />
      <Progress
        progress={100}
        color="info"
        rounded={true}
        showPopupLabelProgress={true}
      />
    </div>
  );
};

export default ProgressWithPopup;

`;

export { ProgressWithPopup, ProgressWithPopupCode };
