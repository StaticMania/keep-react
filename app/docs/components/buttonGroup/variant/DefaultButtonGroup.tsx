"use client";
import { Button } from "~/src";

const DefaultButtonGroup = () => {
  return (
    <div className="h-20 p-4">
      <Button.Group>
        <Button color="info" positionInGroup="start">
          Profile
        </Button>
        <Button color="info" positionInGroup="middle">
          Settings
        </Button>
        <Button color="info" positionInGroup="end">
          Messages
        </Button>
      </Button.Group>
    </div>
  );
};

const DefaultButtonGroupCode = `
"use client";
import { Button } from "keep-react";

const DefaultButtonGroup = () => {
  return (
    <Button.Group>
      <Button color="info">Profile</Button>
      <Button color="info">Settings</Button>
      <Button color="info">Messages</Button>
    </Button.Group>
  );
};
export default DefaultButtonGroup;
`;

export { DefaultButtonGroup, DefaultButtonGroupCode };
