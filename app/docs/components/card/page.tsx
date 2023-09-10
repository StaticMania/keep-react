import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "~/components/DocsContentLayout";
import CardDocs from ".";

export const metadata: Metadata = {
  description:
    "The card component in the Keep Design System offers a variety of button types, sizes, and states to meet your design needs. With options for icons and destructiveness, you can create visually appealing and functional buttons for your product.",
  title: "Card - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <CardDocs />
    </DocsContentLayout>
  );
};

export default page;
