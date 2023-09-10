"use client";
import { Button } from "~/src";
import { Gear, SquaresFour } from "phosphor-react";

const ButtonWithIcon = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Button type="primary" size="md">
        <span className="pr-2">
          <Gear size={24} />
        </span>
        Settings
      </Button>
      <Button type="primary" size="md">
        Dashboard
        <span className="pl-2">
          <SquaresFour size={24} />
        </span>
      </Button>
    </div>
  );
};

const ButtonWithIconCode = `
"use client";
import { Button } from "keep-react";
import { Gear, SquaresFour, Cube } from "phosphor-react";

const ButtonWithIcon = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Button type="outlineGray" size="sm">
        <span className="pr-2">
          <Gear size={24} />
        </span>
        Settings
      </Button>
      <Button type="outlineGray" size="md">
        Dashboard
        <span className="pl-2">
          <SquaresFour size={24} />
        </span>
      </Button>
    </div>
  );
};

export default OfButton;

`;

export { ButtonWithIcon, ButtonWithIconCode };
