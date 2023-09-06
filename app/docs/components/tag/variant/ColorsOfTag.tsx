"use client";
import { Tag } from "@/src/components";

const ColorsOfTag = () => {
  return (
    <div className="flex w-full flex-row flex-wrap gap-2">
      <Tag color="gray">Gray Tag</Tag>
      <Tag color="error">Error Tag</Tag>
      <Tag color="info">Info Tag</Tag>
      <Tag color="success">Success Tag</Tag>
      <Tag color="warning">Warning Tag</Tag>
      <Tag color="teal">Teal Tag</Tag>
      <Tag color="purple">Purple Tag</Tag>
      <Tag disabled={true}>Disabled Tag</Tag>
    </div>
  );
};

const ColorsOfTagCode = `
"use client";
import { Tag } from "keep-react";

const ColorsOfTag = () => {
  return (
    <>
      <Tag color="gray">Gray Tag</Tag>
      <Tag color="error">Error Tag</Tag>
      <Tag color="info">Info Tag</Tag>
      <Tag color="success">Success Tag</Tag>
      <Tag color="warning">Warning Tag</Tag>
      <Tag color="teal">Teal Tag</Tag>
      <Tag color="purple">Purple Tag</Tag>
      <Tag disabled={true}>Disabled Tag</Tag>
    </>
  );
};

export default ColorsOfTag;

`;

export { ColorsOfTag, ColorsOfTagCode };
