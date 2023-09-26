"use client";
import { Button } from "~/src";
import { ShoppingCart } from "phosphor-react";

const KeepButtonShape = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
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

const KeepButtonShapeCode = `
"use client";
import { Button } from "keep-react";
import { ShoppingCart } from "phosphor-react";

const KeepButtonShape = () => {
  return (
    <div className="flex flex-wrap items-end gap-2">
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

export default KeepButtonShape;

`;

export { KeepButtonShape, KeepButtonShapeCode };
