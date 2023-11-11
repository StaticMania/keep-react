'use client'
import { Progress } from '~/src'

const ProgressWithNumber = () => {
  return (
    <div className="flex w-5/6 flex-col gap-3 p-4">
      <Progress progress={45} color="info" rounded={true} labelProgress={true} />
      <Progress progress={75} color="info" rounded={true} labelProgress={true} />
      <Progress progress={100} color="info" rounded={true} labelProgress={true} />
    </div>
  )
}

const ProgressWithNumberCode = `
"use client";
import { Progress } from "keep-react";

export const ProgressComponent = () => {
  return (
    <div className="flex flex-col gap-3">
      <Progress
        progress={45}
        color="info"
        rounded={true}
        labelProgress={true}
      />
      <Progress
        progress={75}
        color="info"
        rounded={true}
        labelProgress={true}
      />
      <Progress
        progress={100}
        color="info"
        rounded={true}
        labelProgress={true}
      />
    </div>
  );
}`

export { ProgressWithNumber, ProgressWithNumberCode }
