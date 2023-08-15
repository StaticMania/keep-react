"use client";
import { Tag } from "@/src/components/Tag";

const DefaultTag = () => {
  return (
    <div className="flex w-full flex-row gap-2">
      <Tag disabled={true}>
        <span className="text-sm font-medium text-slate-500">Disabled Tag</span>
      </Tag>
      <Tag color="error">
        <span className="text-sm font-medium text-error-500">Error Tag</span>
      </Tag>
      <Tag color="info">
        <span className="text-sm font-medium text-primary-500">Info Tag</span>
      </Tag>
      <Tag color="success">
        <span className="text-sm font-medium text-success-500">
          Success Tag
        </span>
      </Tag>
      <Tag color="warning">
        <span className="text-sm font-medium text-warning-500">
          Warning Tag
        </span>
      </Tag>
      <Tag color="teal">
        <span className="text-sm font-medium text-teal-500">Teal Tag</span>
      </Tag>
      <Tag color="purple">
        <span className="text-sm font-medium text-purple-500">Purple Tag</span>
      </Tag>
    </div>
  );
};

const DefaultTagCode = `
"use client";
import { Tag } from "keep-design";

const DefaultTag = () => {
  return (
    <div className="flex w-full flex-row gap-2">
      <Tag disabled={true}>
        <span className="text-sm font-medium text-slate-500">Tag</span>
      </Tag>
      <Tag color="error">
        <span className="text-sm font-medium text-error-500">Tag</span>
      </Tag>
      <Tag color="info">
        <span className="text-sm font-medium text-primary-500">Tag</span>
      </Tag>
      <Tag color="success">
        <span className="text-sm font-medium text-success-500">Tag</span>
      </Tag>
      <Tag color="warning">
        <span className="text-sm font-medium text-warning-500">Tag</span>
      </Tag>
      <Tag color="teal">
        <span className="text-sm font-medium text-teal-500">Tag</span>
      </Tag>
      <Tag color="purple">
        <span className="text-sm font-medium text-purple-500">Tag</span>
      </Tag>
    </div>
  );
};

export default DefaultTag;

`;

export { DefaultTag, DefaultTagCode };
