"use client";
import { Button } from "~/src";

const ButtonGroupWithColor = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button.Group>
        <Button color="error">Error</Button>
        <Button color="info">Info</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
      </Button.Group>
    </div>
  );
};

const ButtonGroupWithColorCode = `
"use client";
import { Button } from "keep-react";

const ButtonGroupWithColor = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button.Group>
        <Button color="error">Error</Button>
        <Button color="info">Info</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
      </Button.Group>
    </div>
  );
};
export default ButtonGroupWithColor;

`;

export { ButtonGroupWithColor, ButtonGroupWithColorCode };
