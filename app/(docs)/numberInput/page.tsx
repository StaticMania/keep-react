import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import NumberInputDocs from ".";

export const metadata: Metadata = {
  description:
    "Number Input Component is a user interface element designed for collecting numeric input from users. It provides a field where users can enter numerical values, such as integers or decimals, using keyboard input or arrow buttons.",
  title: "Number Input - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <NumberInputDocs />
    </DocsContentLayout>
  );
};

export default page;
