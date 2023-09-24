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

const DefaultSpinner = () => {
  return <Spinner color="info" size="lg" />;
};

export default DefaultSpinner;
`;

export { DefaultSpinner, DefaultSpinnerCode };
