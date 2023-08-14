"use client";
import { Spinner } from "@/src/components/Spinner";
const SpinnerSizes = () => {
  return (
    <div className="flex w-full items-end gap-3">
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
import { Spinner } from "keep-design";
const SpinnerSizes = () => {
  return (
    <div className="flex w-full items-end gap-3">
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
