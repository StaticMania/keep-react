"use client";
import { Empty } from "@/src/components";

const EmptyFolder = () => {
  return (
    <Empty
      title="This folder has gone missing"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
      redirectUrl="/"
      iconType="empty_data_2"
    />
  );
};

const EmptyFolderCode = `
"use client";
import { Empty } from "keep-react";

const EmptyFolder = () => {
  return (
    <Empty
      title="This folder has gone missing"
      content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."
      redirectUrl="/"
      iconType="empty_data_2"
    />
  );
};

export default EmptyFolder;
`;

export { EmptyFolder, EmptyFolderCode };
