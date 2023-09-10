"use client";
import { Button } from "~/src";

const ColorsOfButton = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
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

const ColorsOfButtonCode = `
"use client";
import { Button } from "keep-design;

const ColorsOfButton = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
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

export default ColorsOfButton;

`;

export { ColorsOfButton, ColorsOfButtonCode };
