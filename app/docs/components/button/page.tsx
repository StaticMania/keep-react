import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import ButtonDocs from ".";

export const metadata: Metadata = {
  description:
    "The Buttons component in the Keep Design System offers a variety of button types, sizes, and states to meet your design needs. With options for icons and destructiveness, you can create visually appealing and functional buttons for your product.",
  title: "Button - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <ButtonDocs />
    </DocsContentLayout>
  );
};

export default page;
