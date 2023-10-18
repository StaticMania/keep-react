"use client";
import { Button } from "~/src";
import { ChatCircleDots, Cube, Gear } from "phosphor-react";

const ButtonGroupWithIcon = () => {
  return (
    <div className="h-20 p-4">
      <Button.Group>
        <Button color="info" positionInGroup="start">
          <span className="pr-2">
            <Cube size={24} />
          </span>
          Profile
        </Button>
        <Button color="info" positionInGroup="middle">
          <span className="pr-2">
            <Gear size={24} />
          </span>
          Settings
        </Button>
        <Button color="info" positionInGroup="end">
          <span className="pr-2">
            <ChatCircleDots size={24} />
          </span>
          Messages
        </Button>
      </Button.Group>
    </div>
  );
};

const ButtonGroupWithIconCode = `
"use client";
import { Button } from "keep-react";
import { ChatCircleDots, Cube, Gear } from "phosphor-react";

export const ButtonGroupComponent = () => {
  return (
    <Button.Group>
      <Button color="info" positionInGroup="start">
        <span className="pr-2">
          <Cube size={24} />
        </span>
        Profile
      </Button>
      <Button color="info" positionInGroup="middle">
        <span className="pr-2">
          <Gear size={24} />
        </span>
        Settings
      </Button>
      <Button color="info" positionInGroup="end">
        <span className="pr-2">
          <ChatCircleDots size={24} />
        </span>
        Messages
      </Button>
    </Button.Group>
  );
};
`;

export { ButtonGroupWithIcon, ButtonGroupWithIconCode };
