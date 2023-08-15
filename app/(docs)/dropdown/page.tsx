import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import DropdownDocs from ".";

export const metadata: Metadata = {
  description:
    "The Dropdown Component in the Keep Design System allows users to select options from a dropdown menu. With customizable options for the type, supporting text, arrow icon, and search box, you can create dropdowns that align with your design and provide an intuitive user experience.",
  title: "Dropdown - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <DropdownDocs />
    </DocsContentLayout>
  );
};

export default page;
