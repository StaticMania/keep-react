import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "~/components/DocsContentLayout";
import NotificationDocs from ".";

export const metadata: Metadata = {
  description:
    "Notification component in the Keep React allows you to display informative messages or alerts to users. With various styles and options for positioning, you can effectively communicate important updates or messages in a visually appealing manner.",
  title: "Notification - Keep React",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <NotificationDocs />
    </DocsContentLayout>
  );
};

export default page;
