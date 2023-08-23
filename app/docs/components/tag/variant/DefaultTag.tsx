"use client";
import { Tag } from "@/src/components/Tag";

const DefaultTag = () => {
  return (
    <div className="inline-block">
      <Tag color="gray">Default Tag</Tag>
    </div>
  );
};

const DefaultTagCode = `
"use client";
import { Tag } from "keep-design";
const DefaultTag = () => {
  return <Tag color="gray">Default Tag</Tag>;
};

export default DefaultTag;

`;

export { DefaultTag, DefaultTagCode };
