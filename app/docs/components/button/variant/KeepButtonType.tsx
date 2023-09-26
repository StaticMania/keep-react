"use client";
import { Button } from "~/src";

const KeepButtonType = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 h-32 p-4">
      <Button size="md" type="default">
        Default
      </Button>
      <Button size="md" type="primary">
        Primary
      </Button>
      <Button size="md" type="outlinePrimary">
        Outline Primary
      </Button>
      <Button size="md" type="outlineGray">
        Outline Gray
      </Button>
      <Button size="md" type="dashed">
        Dashed Button
      </Button>
      <Button size="md" type="linkPrimary">
        Link Primary
      </Button>
      <Button size="md" type="linkGray">
        Link Gray
      </Button>
      <Button size="md" type="text">
        Text Button
      </Button>
    </div>
  );
};

const KeepButtonTypeCode = `
"use client";
import { Button } from "keep-react";

const KeepButtonType = () => {
  return (
     <Button size="md" type="default">
        Default
      </Button>
  );
};

export default KeepButtonType;
`;

export { KeepButtonTypeCode, KeepButtonType };
