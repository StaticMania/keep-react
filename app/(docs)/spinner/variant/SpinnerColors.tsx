"use client";
import { Spinner } from "@/src/components/Spinner";
const SpinnerColors = () => {
  return (
    <div className="my-5 ml-5 flex w-full items-end gap-3">
      <Spinner color="failure" size="lg" />
      <Spinner color="gray" size="lg" />
      <Spinner color="info" size="lg" />
      <Spinner color="pink" size="lg" />
      <Spinner color="purple" size="lg" />
      <Spinner color="success" size="lg" />
      <Spinner color="warning" size="lg" />
    </div>
  );
};

const SpinnerColorsCode = `
"use client";
import { Spinner } from "keep-design";
const SpinnerColors = () => {
  return (
    <div className="my-5 ml-5 flex w-full items-end gap-3">
      <Spinner color="failure" size="lg" />
      <Spinner color="gray" size="lg" />
      <Spinner color="info" size="lg" />
      <Spinner color="pink" size="lg" />
      <Spinner color="purple" size="lg" />
      <Spinner color="success" size="lg" />
      <Spinner color="warning" size="lg" />
    </div>
  );
};

export default SpinnerColors;
`;

export { SpinnerColors, SpinnerColorsCode };
