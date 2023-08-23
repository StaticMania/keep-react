import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import TabsDocs from ".";

export const metadata: Metadata = {
  description:
    "The Tab Group Component in the Keep Design System allows you to organize and display content in a tabbed interface. It provides a convenient way to switch between different sections or views within a single container. With customizable options for size, type, and status, you can create versatile and visually appealing tab groups that align with your design aesthetic.",
  title: "Tabs - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <TabsDocs />
    </DocsContentLayout>
  );
};

export default page;
