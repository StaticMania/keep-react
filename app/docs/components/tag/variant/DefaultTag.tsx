"use client";
import { Tag } from "~/src";

const DefaultTag = () => {
  return (
    <div className="inline-block">
      <Tag color="gray">Default Tag</Tag>
    </div>
  );
};

const DefaultTagCode = `
"use client";
import { Tag } from "keep-react";
const DefaultTag = () => {
  return <Tag color="gray">Default Tag</Tag>;
};

export default DefaultTag;

`;

export { DefaultTag, DefaultTagCode };
