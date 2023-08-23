import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import UploadDocs from ".";

export const metadata: Metadata = {
  description:
    "Upload Component is a user interface element that enables users to upload files or media from their local device to a web application or platform. It provides a means to select files, preview them if applicable, and initiate the upload process. The component is essential for allowing users to share content, images, documents, and other files with the application or website.",
  title: "Upload - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <UploadDocs />
    </DocsContentLayout>
  );
};

export default page;
