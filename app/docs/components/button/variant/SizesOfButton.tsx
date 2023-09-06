"use client";
import { Button } from "@/src/components";

const SizesOfButton = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Button size="xs" type="primary">
        Extra Small
      </Button>
      <Button size="sm" type="primary">
        Small Button
      </Button>
      <Button size="md" type="primary">
        Medium Button
      </Button>
      <Button size="lg" type="primary">
        Large Button
      </Button>
      <Button size="xl" type="primary">
        Extra Large
      </Button>
      <Button size="2xl" type="primary">
        Button of 2xl
      </Button>
    </div>
  );
};

const SizesOfButtonCode = `
"use client";
import { Button } from "keep-design;

const SizesOfButton = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Button size="xs" type="primary">
        Extra Small
      </Button>
      <Button size="sm" type="primary">
        Small Button
      </Button>
      <Button size="md" type="primary">
        Medium Button
      </Button>
      <Button size="lg" type="primary">
        Large Button
      </Button>
      <Button size="xl" type="primary">
        Extra Large
      </Button>
      <Button size="2xl" type="primary">
        Button of 2xl
      </Button>
    </div>
  );
};

export default SizesOfButton;

`;

export { SizesOfButton, SizesOfButtonCode };
