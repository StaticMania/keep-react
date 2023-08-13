"use client";
import { Progress } from "@/src/components/Progress";

const SizesOfProgress = () => {
  return (
    <div className="flex flex-col gap-5">
      <Progress progress={20} color="info" rounded={true} size="sm" />
      <Progress progress={40} color="info" bordered={true} size="md" />
      <Progress progress={60} color="info" bordered={true} size="lg" />
      <Progress progress={80} color="info" bordered={true} size="xl" />
    </div>
  );
};

const SizesOfProgressCode = `
"use client";
import { Progress } from "keep-design";

const SizesOfProgress = () => {
  return (
    <div className="flex flex-col gap-5">
      <Progress progress={20} color="info" rounded={true} size="sm" />
      <Progress progress={40} color="info" bordered={true} size="md" />
      <Progress progress={60} color="info" bordered={true} size="lg" />
      <Progress progress={80} color="info" bordered={true} size="xl" />
    </div>
  );
};

export default SizesOfProgress;

`;

export { SizesOfProgress, SizesOfProgressCode };
