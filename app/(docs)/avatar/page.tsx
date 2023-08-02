import type { Metadata, NextPage } from "next";
import { DocsContentLayout } from "@/components/DocsContentLayout";
import AvatarDocs from ".";

export const metadata: Metadata = {
  description:
    "The Avatar component in the Keep Design System allows you to display user avatars or profile images in a consistent and visually appealing manner. With customizable options for placeholders, shapes, status icons, and sizes, you can create versatile avatars to suit your design needs.",
  title: "Avatar - Keep Design System",
};

const page: NextPage = () => {
  return (
    <DocsContentLayout
      description={`${metadata.description}`}
      title={`${metadata.title}`}
    >
      <AvatarDocs />
    </DocsContentLayout>
  );
};

export default page;
