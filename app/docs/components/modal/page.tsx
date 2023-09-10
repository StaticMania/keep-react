import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "~/components/DocsContentLayout";
import ModalDocs from ".";

export const metadata: Metadata = {
  description:
    "A modal component is a user interface element commonly used in web and mobile applications to display focused content or interactions that temporarily overlay the main screen. Modal components typically appear as a small window or dialog box that appears on top of the existing content, effectively blocking interaction with the underlying interface until the modal is dismissed.",
  title: "Modal - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <ModalDocs />
    </DocsContentLayout>
  );
};

export default page;
