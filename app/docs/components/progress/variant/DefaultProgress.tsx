'use client'
import { Progress } from '~/src'

const DefaultProgress = () => {
  return (
    <div className="w-5/6 p-4">
      <Progress progress={45} color="info" rounded={false} />
    </div>
  )
}

const DefaultProgressCode = `
"use client";
import { Progress } from "keep-react";

export const ProgressComponent = () => {
    return <Progress progress={45} color="info" rounded={false} />;
}
`

export { DefaultProgress, DefaultProgressCode }
