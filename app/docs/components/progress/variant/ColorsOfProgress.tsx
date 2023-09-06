"use client";
import { Progress } from "@/src/components";

const ColorsOfProgress = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-base font-medium text-primary-500">Blue</div>
      <Progress progress={45} color="info" rounded={false} />
      <Progress progress={45} color="info" rounded={true} />
      <Progress progress={45} color="info" bordered={true} />
      <div className="text-base font-medium text-error-500">Red</div>
      <Progress progress={45} color="error" rounded={false} />
      <Progress progress={45} color="error" rounded={true} />
      <Progress progress={45} color="error" bordered={true} />
      <div className="text-base font-medium text-success-500">Green</div>
      <Progress progress={45} color="success" rounded={false} />
      <Progress progress={45} color="success" rounded={true} />
      <Progress progress={45} color="success" bordered={true} />
      <div className="text-base font-medium text-warning-500">Yellow</div>
      <Progress progress={45} color="warning" rounded={false} />
      <Progress progress={45} color="warning" rounded={true} />
      <Progress progress={45} color="warning" bordered={true} />
      <div className="text-base font-medium text-indigo-500">Indigo</div>
      <Progress progress={45} color="indigo" rounded={false} />
      <Progress progress={45} color="indigo" rounded={true} />
      <Progress progress={45} color="indigo" bordered={true} />
      <div className="text-base font-medium text-purple-500">Purple</div>
      <Progress progress={45} color="purple" rounded={false} />
      <Progress progress={45} color="purple" rounded={true} />
      <Progress progress={45} color="purple" bordered={true} />
    </div>
  );
};

const ColorsOfProgressCode = `
"use client";
import { Progress } from "keep-react";

const ColorsOfProgress = () => {
  return (
   <div className="flex flex-col gap-2">
      <div className="text-base font-medium text-primary-500">Blue</div>
      <Progress progress={45} color="info" rounded={false} />
      <Progress progress={45} color="info" rounded={true} />
      <Progress progress={45} color="info" bordered={true} />
      <div className="text-base font-medium text-error-500">Red</div>
      <Progress progress={45} color="error" rounded={false} />
      <Progress progress={45} color="error" rounded={true} />
      <Progress progress={45} color="error" bordered={true} />
      <div className="text-base font-medium text-success-500">Green</div>
      <Progress progress={45} color="success" rounded={false} />
      <Progress progress={45} color="success" rounded={true} />
      <Progress progress={45} color="success" bordered={true} />
      <div className="text-base font-medium text-warning-500">Yellow</div>
      <Progress progress={45} color="warning" rounded={false} />
      <Progress progress={45} color="warning" rounded={true} />
      <Progress progress={45} color="warning" bordered={true} />
      <div className="text-base font-medium text-indigo-500">Indigo</div>
      <Progress progress={45} color="indigo" rounded={false} />
      <Progress progress={45} color="indigo" rounded={true} />
      <Progress progress={45} color="indigo" bordered={true} />
      <div className="text-base font-medium text-purple-500">Purple</div>
      <Progress progress={45} color="purple" rounded={false} />
      <Progress progress={45} color="purple" rounded={true} />
      <Progress progress={45} color="purple" bordered={true} />
    </div>
  );
};

export default ColorsOfProgress;

`;

export { ColorsOfProgress, ColorsOfProgressCode };
