"use client";
import { Button } from "~/src";

const KeepButtonColor = () => {
  return (
    <div className="flex flex-wrap items-center gap-2 h-20 p-4">
      <Button size="md" color="error">
        Error Button
      </Button>
      <Button size="md" color="success">
        Success Button
      </Button>
      <Button size="md" color="info">
        Info Button
      </Button>
      <Button size="md" color="warning">
        warning Button
      </Button>
    </div>
  );
};

const KeepButtonColorCode = `
 <Button size="md" color="error">
        Error Button
      </Button>
      <Button size="md" color="success">
        Success Button
      </Button>
  <Button size="md" color="info">
        Info Button
 </Button>
 <Button size="md" color="warning">
        warning Button
 </Button>
`;

export { KeepButtonColor, KeepButtonColorCode };
