"use client";
import { Progress } from "@/src/components/Progress";

const VariantOfProgress = () => {
  return (
    <div className="flex flex-col gap-5">
      <Progress progress={45} color="info" rounded={false} />
      <Progress progress={45} color="info" rounded={true} />
      <Progress progress={45} color="info" bordered={true} />
    </div>
  );
};

const VariantOfProgressCode = `
"use client";
import { Progress } from "keep-design";

const VariantOfProgress = () => {
  return (
    <div className="flex flex-col gap-5">
      <Progress progress={45} color="info" rounded={false} />
      <Progress progress={45} color="info" rounded={true} />
      <Progress progress={45} color="info" bordered={true} />
    </div>
  );
};

export default VariantOfProgress;

`;

export { VariantOfProgress, VariantOfProgressCode };
