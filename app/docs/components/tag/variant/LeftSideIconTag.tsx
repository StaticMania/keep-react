"use client";
import { Tag } from "~/src";
import { CrownSimple } from "phosphor-react";

const LeftSideIconTag = () => {
  return (
    <div className="flex w-full flex-row flex-wrap gap-2">
      <Tag leftIcon={<CrownSimple size={20} />} color="gray">
        Tag
      </Tag>
      <Tag leftIcon={<CrownSimple size={20} />} color="error">
        Tag
      </Tag>
      <Tag leftIcon={<CrownSimple size={20} />} color="info">
        Tag
      </Tag>
      <Tag leftIcon={<CrownSimple size={20} />} color="success">
        Tag
      </Tag>
      <Tag leftIcon={<CrownSimple size={20} />} color="warning">
        Tag
      </Tag>
      <Tag leftIcon={<CrownSimple size={20} />} color="teal">
        Tag
      </Tag>
      <Tag leftIcon={<CrownSimple size={20} />} color="purple">
        Tag
      </Tag>
      <Tag leftIcon={<CrownSimple size={20} />} disabled={true}>
        Tag
      </Tag>
    </div>
  );
};

const LeftSideIconTagCode = `
"use client";
import { Tag } from "keep-react";
import { CrownSimple } from "phosphor-react";

const TagComponent = () => {
  return (
    <div className="flex w-full flex-row flex-wrap gap-2">
      <Tag leftIcon={<CrownSimple size={20} />} color="gray">
        Tag
      </Tag>
      <Tag leftIcon={<CrownSimple size={20} />} color="error">
        Tag
      </Tag>
      <Tag leftIcon={<CrownSimple size={20} />} color="info">
        Tag
      </Tag>
      <Tag leftIcon={<CrownSimple size={20} />} color="success">
        Tag
      </Tag>
      <Tag leftIcon={<CrownSimple size={20} />} color="warning">
        Tag
      </Tag>
      <Tag leftIcon={<CrownSimple size={20} />} color="teal">
        Tag
      </Tag>
      <Tag leftIcon={<CrownSimple size={20} />} color="purple">
        Tag
      </Tag>
      <Tag leftIcon={<CrownSimple size={20} />} disabled={true}>
        Tag
      </Tag>
    </div>
  );
};

export default TagComponent;
`;

export { LeftSideIconTag, LeftSideIconTagCode };
