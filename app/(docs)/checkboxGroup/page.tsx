import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import CheckboxGroupDocs from ".";

export const metadata: Metadata = {
  description:
    "Checkbox Group component enables users to select multiple options from a predefined list using checkboxes. It streamlines the process of selecting multiple items by presenting them together and allowing users to make their choices simultaneously. The Checkbox Group component offers various options for customization, including layout, styling, and handling user interactions.",
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
