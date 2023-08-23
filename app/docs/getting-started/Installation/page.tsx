import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import Installation from ".";

export const metadata: Metadata = {
  description:
    "The Installation page provides clear and concise instructions for setting up and integrating a software package, library, or application into your system. It guides users through the steps required to successfully install and configure the software, ensuring a smooth and error-free setup process.",
  title: "Installation - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <Installation />
    </DocsContentLayout>
  );
};

export default page;
