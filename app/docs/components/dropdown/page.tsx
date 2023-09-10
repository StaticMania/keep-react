import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "~/components/DocsContentLayout";
import DropdownDocs from ".";

export const metadata: Metadata = {
  description:
    "The Dropdown Component is a versatile user interface element that provides users with a menu of selectable options. With a wide range of customization options, including labels, icons, search bars, checkboxes, and more, the Dropdown Component enhances user interaction by offering intuitive and flexible selection functionalities.",
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
