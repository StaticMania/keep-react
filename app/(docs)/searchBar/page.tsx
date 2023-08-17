import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import SearchBarDocs from ".";

export const metadata: Metadata = {
  description:
    "Search Bar Component is a user interface element commonly found in web and mobile applications. It provides a dedicated space at the side of the main content area to display navigation links, menu items, or other relevant information. The sidebar is often used to help users navigate between different sections of the application, access important features, or view contextual details.",
  title: "Search Bar  - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <SearchBarDocs />
    </DocsContentLayout>
  );
};

export default page;
