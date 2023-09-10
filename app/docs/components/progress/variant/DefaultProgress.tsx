"use client";
import { Progress } from "~/src";

const DefaultProgress = () => {
  return <Progress progress={45} color="info" rounded={false} />;
};

const DefaultProgressCode = `
"use client";
import { Progress } from "keep-react";

const DefaultProgress = () => {
    return <Progress progress={45} color="info" rounded={false} />;
};

export default DefaultProgress;
`;

export { DefaultProgress, DefaultProgressCode };
