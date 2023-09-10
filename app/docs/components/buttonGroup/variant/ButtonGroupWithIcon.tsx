"use client";
import { Button } from "~/src";
import { ChatCircleDots, Cube, Gear } from "phosphor-react";

const ButtonGroupWithIcon = () => {
  return (
    <div className="flex flex-col gap-5">
      <Button.Group>
        <Button color="info">
          <span className="pr-2">
            <Cube size={24} />
          </span>
          Profile
        </Button>
        <Button color="info">
          <span className="pr-2">
            <Gear size={24} />
          </span>
          Settings
        </Button>
        <Button color="info">
          <span className="pr-2">
            <ChatCircleDots size={24} />
          </span>
          Messages
        </Button>
      </Button.Group>
      <Button.Group>
        <Button color="info">
          Profile
          <span className="pl-2">
            <Cube size={24} />
          </span>
        </Button>
        <Button color="info">
          Settings
          <span className="pl-2">
            <Gear size={24} />
          </span>
        </Button>
        <Button color="info">
          Messages
          <span className="pl-2">
            <ChatCircleDots size={24} />
          </span>
        </Button>
      </Button.Group>
    </div>
  );
};

const ButtonGroupWithIconCode = `
"use client";
import { Button } from "keep-react";
import { ChatCircleDots, Cube, Gear } from "phosphor-react";

const ButtonGroupWithIcon = () => {
  return (
    <div className="flex flex-col gap-5">
      <Button.Group>
        <Button color="info">
          <span className="pr-2">
            <Cube size={24} />
          </span>
          Profile
        </Button>
        <Button color="info">
          <span className="pr-2">
            <Gear size={24} />
          </span>
          Settings
        </Button>
        <Button color="info">
          <span className="pr-2">
            <ChatCircleDots size={24} />
          </span>
          Messages
        </Button>
      </Button.Group>
      <Button.Group>
        <Button color="info">
          Profile
          <span className="pl-2">
            <Cube size={24} />
          </span>
        </Button>
        <Button color="info">
          Settings
          <span className="pl-2">
            <Gear size={24} />
          </span>
        </Button>
        <Button color="info">
          Messages
          <span className="pl-2">
            <ChatCircleDots size={24} />
          </span>
        </Button>
      </Button.Group>
    </div>
  );
};
export default ButtonGroupWithIcon;
`;

export { ButtonGroupWithIcon, ButtonGroupWithIconCode };
