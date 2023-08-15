import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import TableDocs from ".";

export const metadata: Metadata = {
  description:
    "A Table Component is a fundamental user interface element used to present data in a structured and organized format. Tables consist of rows and columns, with each row representing a data entry and each column representing a specific attribute or field. Tables are commonly used to display tabular data, such as lists, grids, or datasets, making information easier to comprehend and compare.",
  title: "Table - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <TableDocs />
    </DocsContentLayout>
  );
};

export default page;
