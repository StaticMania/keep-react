import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import CheckboxDocs from ".";

export const metadata: Metadata = {
  description:
    "The Checkbox component in the Keep Design System allows users to make selections from a set of options or toggle a single option on or off. With customizable options for labels, sizes, types, statuses, and states, you can create versatile checkboxes that fit your design needs.",
  title: "Checkbox - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <CheckboxDocs />
    </DocsContentLayout>
  );
};

export default page;
