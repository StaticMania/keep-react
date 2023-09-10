import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "~/components/DocsContentLayout";
import CheckboxGroupDocs from ".";

export const metadata: Metadata = {
  description:
    "A Checkbox Group is a user interface element that allows users to select multiple options from a list by checking corresponding checkboxes. This component is often used when users need to choose from a set of related options, and they can select one or more options simultaneously.",
  title: "Checkbox Group - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <CheckboxGroupDocs />
    </DocsContentLayout>
  );
};

export default page;
