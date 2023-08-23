import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import TagDocs from ".";

export const metadata: Metadata = {
  description:
    "The Color Tag Component in the Keep Design System allows you to visually represent and label items with different colors. With customizable options for the type, close button, color, and border, you can create color tags that align with your design and provide a clear visual distinction.",
  title: "Tag - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <TagDocs />
    </DocsContentLayout>
  );
};

export default page;
