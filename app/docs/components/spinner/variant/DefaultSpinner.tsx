"use client";
import { Spinner } from "@/src/components/Spinner";

const DefaultSpinner = () => {
  return <Spinner color="info" size="lg" />;
};

const DefaultSpinnerCode = `
"use client";
import { Spinner } from "keep-design";

const DefaultSpinner = () => {
  return <Spinner color="info" size="lg" />;
};

export default DefaultSpinner;
`;

export { DefaultSpinner, DefaultSpinnerCode };
