"use client";
import { Button } from "@/src/components/Button";

const DefaultButtonGroup = () => {
  return (
    <Button.Group>
      <Button color="info">Profile</Button>
      <Button color="info">Settings</Button>
      <Button color="info">Messages</Button>
    </Button.Group>
  );
};

const DefaultButtonGroupCode = `
"use client";
import { Button } from "keep-design";

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
