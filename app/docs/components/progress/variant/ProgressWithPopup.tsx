'use client'
import { Progress } from '../../../../src'

const ProgressWithPopup = () => {
  return (
    <div className="w-5/6 py-16">
      <Progress progress={75} color="info" rounded={true} showPopupLabelProgress={true} />
    </div>
  )
}

const ProgressWithPopupCode = `
"use client";
import { Progress } from "keep-react";

export const ProgressComponent = () => {
  return (
    <Progress
      progress={75}
      color="info"
      rounded={true}
      showPopupLabelProgress={true}
    />
  );
};
`

export { ProgressWithPopup, ProgressWithPopupCode }
