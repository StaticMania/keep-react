import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "~/components/DocsContentLayout";
import Introduction from ".";

export const metadata: Metadata = {
  description:
    "On this page, you will discover straightforward instructions for integrating the keep-react package into your application. These steps will guide you through the process of installing and configuring your application to work seamlessly with keep-react, ensuring a hassle-free setup without errors.",
  title: "Introduction - Keep React",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <Introduction />
    </DocsContentLayout>
  );
};

export default page;
