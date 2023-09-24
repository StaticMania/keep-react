"use client";
import { Spinner } from "~/src";

const SpinnerSizes = () => {
  return (
    <div className="flex my-3 items-end gap-3">
      <Spinner color="info" size="xs" />
      <Spinner color="info" size="sm" />
      <Spinner color="info" size="md" />
      <Spinner color="info" size="lg" />
      <Spinner color="info" size="xl" />
    </div>
  );
};

const SpinnerSizesCode = `
"use client";
import { Spinner } from "keep-react";

const SpinnerSizes = () => {
  return (
    <div className="flex items-end gap-3">
      <Spinner color="info" size="xs" />
      <Spinner color="info" size="sm" />
      <Spinner color="info" size="md" />
      <Spinner color="info" size="lg" />
      <Spinner color="info" size="xl" />
    </div>
  );
};

export default SpinnerSizes;
`;

export { SpinnerSizes, SpinnerSizesCode };
