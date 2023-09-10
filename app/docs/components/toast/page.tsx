import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "~/components/DocsContentLayout";
import ToastDocs from ".";

export const metadata: Metadata = {
  description:
    "Toast Component is a user interface element commonly used in web and mobile applications to display brief, non-intrusive notifications or messages to users. These notifications typically appear as small pop-up windows that temporarily overlay the screen, often in a corner or edge of the interface. Toasts are designed to provide important updates, alerts, or feedback without disrupting the user's workflow.",
  title: "Toast - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <ToastDocs />
    </DocsContentLayout>
  );
};

export default page;
