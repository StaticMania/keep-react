import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "~/components/DocsContentLayout";
import TolltipDocs from ".";

export const metadata: Metadata = {
  description:
    "The Tooltips component in the Keep React allows you to provide additional information or context to users when they hover over or interact with specific elements. With customizable options for type, theme, and arrow placement, you can create versatile tooltips that fit your design needs.",
  title: "Tooltip - Keep React",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <TolltipDocs />
    </DocsContentLayout>
  );
};

export default page;
