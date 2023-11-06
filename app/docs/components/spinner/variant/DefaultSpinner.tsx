"use client";
import { Spinner } from "~/src";

const DefaultSpinner = () => {
  return (
    <div className="h-16 p-4">
      <Spinner color="info" size="lg" />
    </div>
  );
};

const DefaultSpinnerCode = `
"use client";
import { Spinner } from "keep-react";

export const SpinnerComponent = () => {
  return <Spinner color="info" size="lg" />;
}
`;

export { DefaultSpinner, DefaultSpinnerCode };
