"use client";
import { Spinner } from "@/src/components";

const DefaultSpinner = () => {
  return <Spinner color="info" size="lg" />;
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
