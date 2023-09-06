"use client";
import { Button } from "@/src/components";
import { ShoppingCart, Spinner } from "phosphor-react";

const ShapeOfButton = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Button notificationLabel="100" type="primary" size="md">
        Messages
      </Button>
      <Button size="md" type="primary">
        Default
      </Button>
      <Button size="md" type="primary" pill={true}>
        Default
      </Button>
      <Button type="default" size="md">
        <span className="mr-3">
          <Spinner size="24" className="animate-spin" weight="light" />
        </span>
        Loading ...
      </Button>
      <Button size="md" type="primary" circle={true}>
        <span>
          <ShoppingCart size={24} />
        </span>
      </Button>
    </div>
  );
};

const ShapeOfButtonCode = `
"use client";
import { Button } from "keep-react";
import { ShoppingCart } from "phosphor-react";

const ShapeOfButton = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
      <Button notificationLabel="100" type="primary" size="md">
        Messages
      </Button>
      <Button size="md" type="primary">
        Default
      </Button>
      <Button size="md" type="primary" pill={true}>
        Default
      </Button>
      <Button size="md" type="primary" circle={true}>
        <span>
          <ShoppingCart size={24} />
        </span>
      </Button>
    </div>
  );
};

export default ShapeOfButton;

`;

export { ShapeOfButton, ShapeOfButtonCode };
