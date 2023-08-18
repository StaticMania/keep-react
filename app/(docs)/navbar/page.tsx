import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import NavbarDocs from ".";

export const metadata: Metadata = {
  description:
    "Navbar component in the Keep Design System allows you to display informative messages or alerts to users. With various styles and options for positioning, you can effectively communicate important updates or messages in a visually appealing manner.",
  title: "Navbar - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <NavbarDocs />
    </DocsContentLayout>
  );
};

export default page;
