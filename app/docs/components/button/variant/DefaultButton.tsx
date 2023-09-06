"use client";
import { Button } from "@/src/components";

const DefaultButton = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Button size="md">Default</Button>
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
      <Button size="md" type="text">
        Text Button
      </Button>
      <Button size="md" type="linkPrimary">
        Link Primary
      </Button>
      <Button size="md" type="linkGray">
        Link Gray
      </Button>
    </div>
  );
};

const DefaultButtonCode = `
"use client";
import { Button } from "keep-react";

const DefaultButton = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Button size="md">Default</Button>
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
      <Button size="md" type="text">
        Text Button
      </Button>
      <Button size="md" type="linkPrimary">
        Link Primary
      </Button>
      <Button size="md" type="linkGray">
        Link Gray
      </Button>
    </div>
  );
};

export default DefaultButton;
`;

export { DefaultButtonCode, DefaultButton };
