import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import PaginationDocs from ".";

export const metadata: Metadata = {
  description:
    "The Pagination component provides a user-friendly way to navigate through large sets of content by breaking it down into manageable pages. It enhances user experience by allowing easy access to various sections of data or results, such as articles, search results, or product listings, through page numbers or next/previous controls.",
  title: "Pagination - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <PaginationDocs />
    </DocsContentLayout>
  );
};

export default page;
